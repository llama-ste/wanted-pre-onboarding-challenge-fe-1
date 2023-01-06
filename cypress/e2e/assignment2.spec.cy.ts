describe("Assignment2 - Todo List", () => {
  const loginFn = () => {
    cy.intercept("POST", "/users/login").as("postLogin");
    cy.intercept("GET", "/todos").as("getTodos");

    cy.visit("/auth");

    cy.get("input[type=text]").type(Cypress.env("AUTH_EMAIL"));
    cy.get("input[type=password]").type(Cypress.env("AUTH_PASSWORD"));
    cy.get("button")
      .contains("로그인")
      .click()
      .then(() => cy.wait("@postLogin"))
      .then(() => cy.wait("@getTodos"));
  };

  beforeEach(() => loginFn());

  it("Todo list CRUD & 실시간 반영 확인", () => {
    const randomStr = Math.random().toString(36).substring(2);

    cy.intercept("POST", "/todos").as("postTodo");
    cy.intercept("GET", "/todos").as("getTodos");
    cy.intercept("GET", "/todos/*").as("getTodoById");
    cy.intercept("PUT", "/todos/*").as("putTodo");
    cy.intercept("DELETE", "/todos/*").as("deleteTodo");

    //1. create
    cy.get("button").contains("NEW").click();

    cy.get(".MuiFormControl-root")
      .contains("Title")
      .parent()
      .find("input")
      .type(`${randomStr} title`);

    cy.get(".MuiFormControl-root")
      .contains("Content")
      .parent()
      .find("textarea[aria-invalid=false]")
      .type(`${randomStr} content`);

    cy.get("button")
      .contains("추가")
      .click()
      .then(() => cy.wait("@postTodo"))
      .then(() => cy.wait("@getTodos"))
      .then(() => cy.wait("@getTodoById"))
      .then(() => {
        cy.get(".MuiList-root").contains(randomStr).should("exist");
      });

    // 2. update + 목록에 실시간 반영 확인
    cy.get("button").contains("수정").click();

    cy.get(".MuiFormControl-root")
      .contains("Title")
      .parent()
      .find("input")
      .type(" update");

    cy.get(".MuiFormControl-root")
      .contains("Content")
      .parent()
      .find("input")
      .type(" update");

    cy.get("button")
      .contains("완료")
      .click()
      .then(() => cy.wait("@putTodo"))
      .then(() => cy.wait("@getTodos"))
      .then(() => cy.wait("@getTodoById"))
      .then(() => {
        cy.get(".MuiList-root")
          .contains(`${randomStr} title update`)
          .should("exist");
      });

    // 3. delete
    cy.get("button")
      .contains("삭제")
      .click()
      .then(() => cy.wait("@deleteTodo"))
      .then(() => cy.wait("@getTodos"))
      .then(() => {
        cy.get(".MuiList-root")
          .contains(`${randomStr} title updata`)
          .should("not.exist");
      });
  });

  it("새로 고침시 현재 상태유지", () => {
    cy.intercept("GET", "/todos").as("getTodos");
    cy.intercept("GET", "/todos/*").as("getTodoById");

    const selectedItem = 1;
    let prevData: string;

    cy.get(".MuiList-root").children().eq(selectedItem).click();
    cy.get(".MuiPaper-root")
      .get("h6")
      .eq(1)
      .invoke("text")
      .then((text) => (prevData = text));

    cy.reload()
      .then(() => cy.wait("@getTodos"))
      .then(() => cy.wait("@getTodoById"))
      .then(() => {
        // 1. 새로고침시 해당 상세페이지 데이터 유지
        cy.get(".MuiPaper-root")
          .get("h6")
          .eq(1)
          .invoke("text")
          .then((text) => {
            expect(text).to.equal(prevData);
          });

        // 2. 목록에서 선택한 아이템 유지
        cy.get(".MuiList-root")
          .children()
          .eq(selectedItem)
          .invoke("attr", "class")
          .then((className) => {
            expect(className).to.contain("Mui-selected");
          });
      });
  });

  it("todo 조회순서에 따라 페이지 뒤로가기를 통하여 조회 가능", () => {
    cy.intercept("GET", "/todos/*").as("getTodoById");

    // 1. 홈페이지에서 모든 todo를 한번씩 클릭한다.
    // 0번째 요소는 리스트의 타이틀이다.
    cy.get(".MuiList-root")
      .children()
      .each((elem, idx) => {
        if (idx === 0) return;
        cy.wrap(elem).click();
      });

    // 2. todo의 수만큼 페이지를 되돌아가면 다시 홈페이지다. (순서유지)
    cy.get(".MuiList-root")
      .children()
      .its("length")
      .then((len) => {
        let i = len - 1;

        while (i > 0) {
          cy.go(-1);
          i--;
        }
      })
      .then(() => {
        cy.url().should("equal", `${Cypress.env("BASE_URL")}/todos`);
      });
  });
});

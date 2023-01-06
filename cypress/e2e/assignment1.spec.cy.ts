describe("Assignment 1 - Login / SignUp", () => {
  const loginFn = () => {
    cy.intercept("/auth").as("login");

    cy.visit("/auth");
    cy.get("input[type=text]").type(Cypress.env("AUTH_EMAIL"));
    cy.get("input[type=password]").type(Cypress.env("AUTH_PASSWORD"));
    cy.get("button")
      .contains("로그인")
      .click()
      .then(() => () => cy.wait("@login"));
  };

  it("로그인 페이지의 이메일,비밀번호 input과 로그인 button 확인", () => {
    cy.visit("/auth");
    cy.get(".MuiFormControl-root").contains("Email").should("exist");
    cy.get(".MuiFormControl-root").contains("Password").should("exist");
    cy.get(".MuiButtonBase-root").contains("로그인").should("exist");
  });

  it("이메일, 비밀번호 유효성 및 submit버튼 활성화 조건 확인", () => {
    cy.visit("/auth");

    cy.get("button").contains("로그인").should("be.disabled");

    cy.get(".MuiFormControl-root")
      .contains("Email")
      .parent()
      .find("input")
      .type("test");

    cy.get(".MuiFormControl-root")
      .contains("Password")
      .parent()
      .find("input")
      .type("1234");

    cy.get("button").contains("로그인").should("be.disabled");

    cy.get(".MuiFormControl-root")
      .contains("Email")
      .parent()
      .find("input")
      .type("@test.com");

    cy.get(".MuiFormControl-root")
      .contains("Password")
      .parent()
      .find("input")
      .type("5678");

    cy.get("button").contains("로그인").should("not.be.disabled");
  });

  it("로그인시 토큰은 로컬스토리지 저장 후 토큰이 존재한다면 루트 경로로 리다이렉트", () => {
    cy.intercept("/todos").as("getTodos");

    loginFn();

    cy.wait("@getTodos").then(() => {
      cy.getAllLocalStorage().then((res) => {
        const myLocal = res["http://localhost:3000"];
        expect(myLocal).to.have.any.keys("token");
      });
    });

    cy.visit("/auth").then(() => cy.wait(1000));
    cy.url().should("contain", "/todos");
  });

  it("토큰이 유효하지 않다면 로그인 페이지로 리다이렉트", () => {
    cy.intercept("/todos").as("addTodo");

    loginFn();
    cy.clearAllLocalStorage();

    cy.get("button").contains("NEW").click();
    cy.get(".MuiFormControl-root")
      .contains("Title")
      .parent()
      .find("input")
      .type("Test title");

    cy.get(".MuiFormControl-root")
      .contains("Content")
      .parent()
      .find("textarea[aria-invalid=false]")
      .type("Test content");

    cy.get("button").contains("추가").click();
    cy.wait("@addTodo").then(() => {
      cy.url().should("contain", "/auth");
    });
  });
});

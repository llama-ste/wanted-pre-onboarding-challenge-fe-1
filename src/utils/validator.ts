export const passwordValidator = (password: string) => {
  return !!password.match(/.{8,}/g);
};

export const emailValidator = (email: string) => {
  return !!email.match(/[^.][\w\-]+\@[\w\-]+\.\w{2,}/g);
};

export const signUp = (name, email, password, reason) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log({name, email, password, reason});
      resolve(name, email, password, reason);
    }, 500);
  });
};

import Parse from "parse";

// used in auth register component
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.username);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("User: ", user);
  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// used in auth login component
export const loginUser = (currUser) => {
  const user = new Parse.User();

  user.set("password", currUser.password);
  user.set("username", currUser.username);

  console.log("User: ", user);
  console.log();
  return user
    .logIn(user.username, user.password)
    .then((currUserSaved) => {
      return currUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

export const logoutUser = () => {
  return Parse.User
  .logOut()
  .then(() => {
    alert('Logged out successfully');
  })
  .catch((error) => {
    alert(`Error" ${error.message}`);
  });

}

export const checkUser = () => {
  return Parse.User.current()?.authenticated;
};
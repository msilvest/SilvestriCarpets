// This is where all the services specific to our auth component are defined.
// These functions help us to create, login, and logout users.

import Parse from "parse";

// used in auth register component
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.username);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  // console.log("User: ", user);
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

  // console.log("User: ", user);
  // console.log();
  return user
    .logIn(user.username, user.password)
    .then((currUserSaved) => {
      return currUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// used to logout user
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

// used to correctly rerender page when user logs out
export const handleLogout = () => {
    logoutUser();
    // timeout so the logout alert displays properly
    setTimeout(() => {
        window.location.reload();
      }, 500);
};

// check if user exists
export const checkUser = () => {
  return Parse.User.current()?.authenticated;
};
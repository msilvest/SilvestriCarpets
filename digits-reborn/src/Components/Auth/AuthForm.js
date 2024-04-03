// This is our Authentification form that is used for our login/register user functionalities.
// Depending on whether a user is trying to login or create an account, different text boxes
// will appear to the user so that we can efficiently reuse code.
import React from "react";

const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {

  return (
    <form onSubmit={onSubmit} autoComplete="off">
    {/* If a user is registering an account, show these additional fields. Otherwise,
    show nothing */}
    {!isLogin ? 
    <div>
        <div className="form-group">
          <label>First Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="first-name-input"
            value={user.firstName}
            onChange={onChange}
            name="firstName"
            placeholder="first name"
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="last-name-input"
            value={user.lastName}
            onChange={onChange}
            name="lastName"
            placeholder="last name"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>Email</label>
          <br />
          <input
            type="email"
            className="form-control"
            id="email-input"
            value={user.email}
            onChange={onChange}
            name="email"
            placeholder="email"
            required
          />
        </div>{" "}
        </div> : <></>}
        <div>
        <div className="form-group">
          <label>Username</label>
          <br />
          <input
            type="username"
            className="form-control"
            id="username-input"
            value={user.username}
            onChange={onChange}
            name="username"
            placeholder="username"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="password-input"
            value={user.password}
            onChange={onChange}
            name="password"
            placeholder="password"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
    </div>
  </form>
  );
};

export default AuthForm;
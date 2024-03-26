import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";

const ProtectedScores = ({ flag }) => {
  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!checkUser()) {
      alert("You must be logged in to view this page");
      navigate("/");
    }
  }, [navigate]);

  return (
        <div>
        {checkUser() ? (
            <div>
              <p>Welcome! You are authorized!</p>{" "}
              <button onClick={goHomeHandler}>Go Home</button>
            </div>
        ) : ( <></>
        )}
      </div>
  );
};

export default ProtectedScores;
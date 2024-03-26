import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ flag }) => {
  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!flag) {
      alert("You must be logged in to view this page");
      navigate("/");
    }
  }, [navigate]);

  return (
        <div>
        {flag ? (
            <div>
              <p>Welcome! You are authorized!</p>{" "}
              <button onClick={goHomeHandler}>Go Home</button>
            </div>
        ) : ( <></>
        )}
      </div>
  );
};

export default ProtectedRoute;
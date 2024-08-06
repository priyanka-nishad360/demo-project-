import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const PrivateRoutes = (props) => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { Components } = props;
  // useEffect(() => {
  //     if (!token) {
  //         navigate('/login')
  //     }

  // }, [])

  return (
    <div>
      <Components />
    </div>
  );
};

export default PrivateRoutes;

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EnhancedButton from "../shared/button";
import { Slide } from "@mui/material";

const HomeButtonHeader: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate("/app");
  };
  const isValidationRoute = location.pathname === "/";

  useEffect(() => {
    if (isValidationRoute) setAnimate(true);
  }, [isValidationRoute]);

  return (
    <>
      {isValidationRoute && (
        <Slide in={animate}>
          <div>
            <EnhancedButton onClick={handleClick} title="return home" />
          </div>
        </Slide>
      )}
    </>
  );
};

export default HomeButtonHeader;
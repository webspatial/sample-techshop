import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main: FC = () => {
    const navigate = useNavigate();
    const clickBtn = () => {
        console.log("click")
        navigate("/game")
    }
  return (
    <div className="main-page">
      <h1 className="main-title">
        Beats Saber
      </h1>
      <div className="start-btn enable-xr" onClick={clickBtn}>GO!</div>
    </div>
  );
};
export default Main;
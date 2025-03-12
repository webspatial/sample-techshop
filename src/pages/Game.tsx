import React, { FC, useEffect, useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Game : FC = () => {
  // 合并 position 状态管理
  const [boxes, setBoxes] = useState({
    left: [],
    right: []
  });

  const [position, setPosition] = useState({
    left: [],
    right: []
  });

  // 使用单个 ref 保存所有盒子状态
  const posRef = useRef(position);
  const navigate = useNavigate();
  const frame = useRef<number>(0);
  
  // 自动同步最新状态到 ref
  useEffect(() => {
    posRef.current = position;
    console.log(position)
  }, [position]);

  const clickBtn = () => {
      console.log("click")
      navigate("/")
  }

  const hitLeft = () => {
    handleHit('left');
  };
  const hitRight = () => {
    handleHit('right');
  }

  // 通用点击处理函数
  const handleHit = (side: 'left' | 'right') => {
    setBoxes(prev => ({
      ...prev,
      [side]: [...prev[side], { id: Date.now(), back:0} ],
    }));
    setPosition(prev => ({
      ...prev,
      [side]: [...prev[side], 0 ],
    }));
  };

  const updateBoxes = () => {
    let arrL = [...posRef.current.left]
    let arrR = [...posRef.current.right]
    for(var i = 0; i < arrL.length; i++){
      arrL[i]+=3
    }
    for(var i = 0; i < arrR.length; i++){
      arrR[i]+=3
    }
    if(arrR.length > 0 || arrL.length > 0){
      setPosition({
        left: arrL,
        right: arrR
      })
    }
    frame.current = requestAnimationFrame(updateBoxes);
  };

  useEffect(() => {

    frame.current = requestAnimationFrame(updateBoxes);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  return (
    <div className="game-page" enable-xr>
    <div className="back-btn spatial-btn" enable-xr onClick={clickBtn}>Back</div>
    <div className="leftBtn hitBtn" style={{left:(300) + "px"}} enable-xr onClick={hitLeft}></div>
    <div className="rightBtn hitBtn" style={{left:(1280 - 100 - 300) + "px"}} enable-xr onClick={hitRight}></div>
      {/* 按钮部分保持不变 */}
      {
        boxes.left.map((item, i) => (
          <div 
            key={item.id}
            className="box-container"
            style={{ 
              left: "300px",
              "--xr-back": position.left[i]
            }}
            enable-xr
          >
            {[...Array(6)].map((_, index) => (
              <div key={index} className={`box-plane plane-${['left','right','top','bottom','front','back'][index]}`} enable-xr/>
            ))}
          </div>
        ))
      }
      {
        boxes.right.map((item, i) => (
          <div 
            key={item.id}
            className="box-container"
            style={{ 
              left: (1280 - 100 - 300) + "px",
              "--xr-back": position.right[i]
            }}
            enable-xr
          >
            {[...Array(6)].map((_, index) => (
              <div key={index} className={`box-plane plane-${['left','right','top','bottom','front','back'][index]}`} enable-xr/>
            ))}
          </div>
        ))
    
      }
    </div>
  );
};

export default Game;
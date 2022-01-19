import React, { useState } from "react";
import classNames from "classnames";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import "./Breathing.css";
import Card from "../UI/Card";

function Breathing() {
  const [animation, setAnimation] = useState(false);
  const breatheClass = classNames("unanimated", { breathe: animation });

  const handlePlay = () => {
    if (animation === false) {
      setAnimation(true);
    } else {
      setAnimation(false);
    }
  };

  return (
  
        <Card>
          <div className="instructions">
            <span>Breathing Exercise </span>
            <p>Inhale slowly through the nose as the circle expands,</p>
            <p> and breathe out through the mouth as it contracts. </p>
            <p>Repeat as much as you need, to feel calm.</p>
          </div>
          <div className="breathe-container">
            <div className={breatheClass}></div>
          </div>

          <div className="button-container">
            {animation === true ? (
              <button className="button play" onClick={handlePlay}>
                <PauseIcon />
              </button>
            ) : (
              <button className="button pause" onClick={handlePlay}>
                <PlayArrowIcon />
              </button>
            )}
          </div>
          </ Card>
  

  );
}

export default Breathing;

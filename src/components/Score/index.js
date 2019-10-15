import React from "react";
import "./style.css";

export default function Score(props) {
    return <div className="score">High Score: {props.highScore} Score: {props.score}</div>
} 
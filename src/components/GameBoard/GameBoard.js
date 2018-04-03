import React from "react";
import GameButton from "../GameButton";

const GameBoard = (props) => (

<div id="game-grid" className="container justify-content-center">
    {props.bikes.map((bike) => (
        <GameButton key={bike.id} id={bike.id} clickbike={props.clickBike}></GameButton>
    ))}
</div>
);

export default GameBoard;

import React, { useState } from 'react';
import emptyDice from "../assets/images/dice-empty.png";
import Dice1 from "../assets/images/dice1.png";
import Dice2 from "../assets/images/dice2.png";
import Dice3 from "../assets/images/dice3.png";
import Dice4 from "../assets/images/dice4.png";
import Dice5 from "../assets/images/dice5.png";
import Dice6 from "../assets/images/dice6.png";

function Dice() {
    
    const [image, setImage] = useState(emptyDice);
    
    const Change = () => {
        
        let Dices = [emptyDice, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

       
        let random = Math.floor((Math.random() * 6)+1);
        
        setImage(Dices[random]);
    };

    return (
        <div className="Dice">
            
            <img src={image} alt="Dice" onClick={Change} />
        </div>
    );
}

export default Dice;

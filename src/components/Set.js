import {Card} from "./Card";
import { useState } from "react";
import './Set.css';

export function Set() {
    const cards = require('../data');
    const [step, setStep] = useState(1);

    const handlePrevClick = () => {
        if(step > 1) {
            setStep(step - 1);
        }
    };

    const handleNextClick = () => {
        if(step >= cards.length-1) {
          return
        }
        setStep(step + 1);
    };

    return (
        <div className="allCards">
            <div key={cards[step].id}>
                <h2>Название набора</h2>
                <Card front={cards[step].front} back={cards[step].back}/>  
                <div className="counter">
                    <button className="buttonSet" onClick={handlePrevClick}>назад</button>
                    <span>{step}/{cards.length}</span>
                    <button className="buttonSet" onClick={handleNextClick}>вперед</button>
                </div>
            </div>         
        </div>
    )
}

import { useState } from 'react';
import  cover  from '../assets/img/cover/cradles.jpg';
import { play, prev, stop, next, pause } from '../assets/img/buttons';

import ControlButton from './components/ControlButton';

const Controls = () => {
    const [isPaused, setPaused] = useState(false);

    const handlePlayer = () =>{
        setPaused(!isPaused)
    }

    return (
        <div className="control-container">
            <img src={cover} alt="Capa do Álbum" className="current" />

            <div className="buttons-containers">
                <ControlButton>
                    <img src={prev} alt="Voltar" className="button-icon" />
                </ControlButton>
                <ControlButton>
                    <img src={stop} alt="Parar" className="button-icon" />
                </ControlButton>
                <ControlButton>
                    <img src={isPaused ? pause : play } alt="Play/Pause" className="button-icon" 
                    onClick={() => handlePlayer()}  />
                </ControlButton>
                <ControlButton>
                    <img src={ next } alt="Avançar" className="button-icon"/>
                </ControlButton>
            </div>
        </div>
    );
};

export default Controls;
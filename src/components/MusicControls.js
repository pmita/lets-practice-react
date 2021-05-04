import React from 'react';
//Let's import everything fontawesome related
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faPlay, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const MusicControls = () => {
    return(
        <div className="music-controls">
            <div className="controls-info">
                <p>Start time</p>
                <input 
                    type="range" />
                <p>End time</p>
            </div>
            
            <div className="controls-buttons">
                <FontAwesomeIcon 
                    size='2x' 
                    icon={faAngleLeft}/>
                <FontAwesomeIcon 
                    size='2x' 
                    icon={faPlay}/>
                <FontAwesomeIcon 
                    size='2x' 
                    icon={faAngleRight}/>
            </div>
        </div>
    );
}

export default MusicControls;
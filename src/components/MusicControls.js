import React, {useState, useRef} from 'react';
//Let's import everything fontawesome related
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faPlay, faPause, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const MusicControls = ({currentlyPlayingSong, setCurrentlyPlayingSong, isCurrentlyPlayingSongPlaying, setIsCurrentlyPlayingSongPlaying}) => {
    /*-----------State-----------------------*/
    const [currentSongInfo, setCurrentSongInfo] = useState(
        {
            timeStamp: 0,
            duration: 0
        }
    );

    /*-----------HTML references-------------*/
    const audioSourceRef = useRef(null);

    /*-----------Event Handleres-------------*/
    const clickPlayHandler = () => {
        if(isCurrentlyPlayingSongPlaying){
            audioSourceRef.current.pause();
            setIsCurrentlyPlayingSongPlaying(false);
        } else{
            audioSourceRef.current.play();
            setIsCurrentlyPlayingSongPlaying(true);
        }
    }
    const updateTimestamptHandler = (e) => {
        console.log(e.currentTarget.currentTime);
        const newTimestamp = e.currentTarget.currentTime;
        const duration = e.currentTarget.duration;
        setCurrentSongInfo(
            {
                ...currentSongInfo,
                timeStamp: newTimestamp,
                duration: duration
            }
        );
    }

    /*--------Functions---------------*/
    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ':' + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }
    return(
        <div className="music-controls">
            <div className="controls-info">
                <p>{getTime(currentSongInfo.timeStamp)}</p>
                <input 
                    type="range" 
                    min={0}
                    max={currentSongInfo.duration}
                    value={currentSongInfo.timeStamp}/>
                <p>{getTime(currentSongInfo.duration)}</p>
            </div>

            <h1>{currentlyPlayingSong.name}hhhh</h1>
            
            <div className="controls-buttons">
                <FontAwesomeIcon //Skip to previous songs
                    size='2x' 
                    icon={faAngleLeft}/>
                <FontAwesomeIcon //Pause-Play song
                    onClick={clickPlayHandler}
                    size='2x' 
                    icon={isCurrentlyPlayingSongPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon //Skip to next song
                    size='2x' 
                    icon={faAngleRight}/>
            </div>

            <audio 
                onLoadedMetadata={updateTimestamptHandler} //Event once our audio has loaded for the firs ttime 
                onTimeUpdate={updateTimestamptHandler} //Event as time updates
                ref={audioSourceRef}
                src={currentlyPlayingSong.audio}>     
            </audio>
        </div>
    );
}

export default MusicControls;
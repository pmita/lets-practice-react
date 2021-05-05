import React, {useEffect} from 'react';
//Let's import everything fontawesome related
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faPlay, faPause, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import allSongs from '../songs_db';

const MusicControls = ({audioSourceRef, currentlyPlayingSong, currentSongInfo, setCurrentSongInfo, setCurrentlyPlayingSong, isCurrentlyPlayingSongPlaying, setIsCurrentlyPlayingSongPlaying, allSongs, setAllSongs}) => {
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

    const dragTimeHandler = (e) => {
        audioSourceRef.current.currentTime = e.currentTarget.value;
        setCurrentSongInfo(
            {
                ...currentSongInfo,
                timeStamp: e.currentTarget.value
            }
        );
    }

    const changeSongHandler = (skipDirection) => {
        //I need to find the index of the song first
        const currentSongIndex = allSongs.findIndex( item => {
            if( item.id === currentlyPlayingSong.id){
                return item;
            }
        })
        if(skipDirection === 'skipForward') {
            setCurrentlyPlayingSong(allSongs[(currentSongIndex + 1) % allSongs.length]);
        }
        if(skipDirection === 'skipBack'){
            if((currentSongIndex - 1) === -1){
                setCurrentlyPlayingSong(allSongs[allSongs.length - 1]);
                return;
            }
            setCurrentlyPlayingSong(allSongs[(currentSongIndex - 1) % allSongs.length]);
        }
    }

    /*-----------------UseEffect Section-------------*/
    useEffect( ()=> {
        const updatedAllSongs = allSongs.map( item => {
            if( item.id === currentlyPlayingSong.id){
                return {...item, active: true};
            } else {
                return {...item, active: false};
            }
        })
        if(isCurrentlyPlayingSongPlaying){
            audioSourceRef.current.play();
        }

        setAllSongs(updatedAllSongs);
    }, [currentlyPlayingSong]);

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
                    max={currentSongInfo.duration || 0}
                    value={currentSongInfo.timeStamp}
                    onChange={dragTimeHandler}/>
                <p>{getTime(currentSongInfo.duration)}</p>
            </div>

            <h1>{currentlyPlayingSong.name}hhhh</h1>
            
            <div className="controls-buttons">
                <FontAwesomeIcon //Skip to previous songs
                    onClick={() => changeSongHandler('skipBack')}
                    size='2x' 
                    icon={faAngleLeft}/>
                <FontAwesomeIcon //Pause-Play song
                    onClick={clickPlayHandler}
                    size='2x' 
                    icon={isCurrentlyPlayingSongPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon //Skip to next song
                    onClick={() => changeSongHandler('skipForward')}
                    size='2x' 
                    icon={faAngleRight}/>
            </div>
        </div>
    );
}

export default MusicControls;
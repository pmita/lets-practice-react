import React from 'react';

const MusicPlayer = ({currentlyPlayingSong}) => {
    return(
        <div className="music-player">
            <img src={currentlyPlayingSong.albumCover}/>
            <h3>currentlyPlayingSong.name</h3>
            <h4>currentlyPlayingSong.artist</h4>
        </div>
    );
}

export default MusicPlayer;
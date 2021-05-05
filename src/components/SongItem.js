import React from 'react';

const SongItem = ({audioSourceRef, song, setCurrentlyPlayingSong, isCurrentlyPlayingSongPlaying, allSongs, setAllSongs}) => {
    /*-------------Event Hndleres---------*/
    const changeSongHandler = async () => {
        await setCurrentlyPlayingSong(song);
        const updatedAllSongs = allSongs.map( item => {
            if( item.id === song.id){
                return {...item, active: true};
            } else {
                return {...item, active: false};
            }
        })
        if(isCurrentlyPlayingSongPlaying){
            audioSourceRef.current.play();
        }

        setAllSongs(updatedAllSongs);

    }
    return(
        <div onClick={changeSongHandler} className={`song-item ${song.active ? 'active' : ''}`}>
            <img src={song.albumCover} alt={song.artist}/>
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
        </div>
    );
}

export default SongItem;
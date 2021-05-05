import React from 'react';
//Let's import child component
import SongItem from './SongItem';

const SongsLibrary = ({toggleNav, audioSourceRef, allSongs, setAllSongs, setCurrentlyPlayingSong, isCurrentlyPlayingSongPlaying}) => {
    return(
        <div className={`songs-library ${toggleNav ? 'active' : ''}`}>
            <h1>This is a test</h1>
            {allSongs.map( song => {
                return(
                    <SongItem 
                        audioSourceRef={audioSourceRef}
                        song={song}
                        setCurrentlyPlayingSong={setCurrentlyPlayingSong}
                        isCurrentlyPlayingSongPlaying={isCurrentlyPlayingSongPlaying}
                        key={song.id}
                        allSongs={allSongs}
                        setAllSongs={setAllSongs}
                    />
                );
            })}
        </div>
    );
}

export default SongsLibrary;
import React, {useState, useRef} from 'react';
//Let's import our css
import './styles/app.scss';
//Let's import our components
import Nav from './components/Nav';
import MusicPlayer from './components/MusicPlayer';
import MusicControls from './components/MusicControls';
import SongsLibrary from './components/SongsLibrary';
//Let;s import our db of songs
import songsDB from './songs_db';

function App() {
  /*-----------HTML references-------------*/
  const audioSourceRef = useRef(null);

  /*----------Let's Set our State-----------*/
  const [allSongs, setAllSongs] = useState(songsDB());
  const [currentlyPlayingSong, setCurrentlyPlayingSong] = useState(allSongs[1]);
  const [currentSongInfo, setCurrentSongInfo] = useState(
    {
        timeStamp: 0,
        duration: 0
    }
  );
  const [isCurrentlyPlayingSongPlaying, setIsCurrentlyPlayingSongPlaying] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  /*----------Event Handleres-------------*/
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

  return (
    <div className="App">
      <Nav 
        toggleNav={toggleNav}
        setToggleNav={setToggleNav}
      />
      <MusicPlayer 
        currentlyPlayingSong={currentlyPlayingSong}
      />
      <MusicControls 
        audioSourceRef={audioSourceRef}
        currentlyPlayingSong={currentlyPlayingSong}
        setCurrentlyPlayingSong={setCurrentlyPlayingSong}
        currentSongInfo={currentSongInfo}
        setCurrentSongInfo={setCurrentSongInfo}
        isCurrentlyPlayingSongPlaying={isCurrentlyPlayingSongPlaying}
        setIsCurrentlyPlayingSongPlaying={setIsCurrentlyPlayingSongPlaying}
        allSongs={allSongs}
        setAllSongs={setAllSongs}
      />

      <SongsLibrary 
        toggleNav={toggleNav}
        audioSourceRef={audioSourceRef}
        allSongs={allSongs}
        setAllSongs={setAllSongs}
        setCurrentlyPlayingSong={setCurrentlyPlayingSong}
        isCurrentlyPlayingSongPlaying={isCurrentlyPlayingSongPlaying}
      />

      <audio 
          onLoadedMetadata={updateTimestamptHandler} //Event once our audio has loaded for the firs ttime 
          onTimeUpdate={updateTimestamptHandler} //Event as time updates
          ref={audioSourceRef}
          src={currentlyPlayingSong.audio}>     
      </audio>
    </div>
  );
}

export default App;

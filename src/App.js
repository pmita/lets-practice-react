import React, {useState} from 'react';
//Let's import our css
import './styles/app.scss';
//Let's import our components
import MusicPlayer from './components/MusicPlayer';
import MusicControls from './components/MusicControls';
//Let;s import our db of songs
import songsDB from './songs_db';

function App() {
  /*----------Let's Set our State-----------*/
  const [allSongs, setAllSongs] = useState(songsDB());
  const [currentlyPlayingSong, setCurrentlyPlayingSong] = useState(allSongs[1]);
  const [isCurrentlyPlayingSongPlaying, setIsCurrentlyPlayingSongPlaying] = useState(false);
  console.log(allSongs, currentlyPlayingSong);
  return (
    <div className="App">
      <MusicPlayer 
        currentlyPlayingSong={currentlyPlayingSong}
      />
      <MusicControls 
        currentlyPlayingSong={currentlyPlayingSong}
        setCurrentlyPlayingSong={setCurrentlyPlayingSong}
        isCurrentlyPlayingSongPlaying={isCurrentlyPlayingSongPlaying}
        setIsCurrentlyPlayingSongPlaying={setIsCurrentlyPlayingSongPlaying}
      />
    </div>
  );
}

export default App;

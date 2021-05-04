import React from 'react';
//Let's import our css
import './styles/app.scss';
//Let's import our components
import MusicPlayer from './components/MusicPlayer';
import MusicControls from './components/MusicControls';

function App() {
  return (
    <div className="App">
      <MusicPlayer />
      <MusicControls />
    </div>
  );
}

export default App;

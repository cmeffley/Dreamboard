import { useState, useEffect } from 'react';
import './App.css';
import { getAllDreams } from './data/Dreamdata';
import DreamboardView from './views/DreamboardView';

function App() {
  const [allDreams, setAllDreams] = useState([]);

  useEffect(() => {
    getAllDreams().then(setAllDreams);
  }, []);

  return (
    <div className="App">
      <DreamboardView 
        allDreams={allDreams}
      />
    </div>
  );
}

export default App;

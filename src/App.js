import './App.css';
import Navbar from './components/Navbar'
import { useState } from 'react';

function App() {
    const [opened, setOpened] = useState(false);

    const clickButton = () => {
        setOpened(!opened);
    }

  return (
    <div className="App">
        <Navbar />
        <button onClick={clickButton}>Clique me</button>

        { opened && <h2>Só apareço quando o opened for true</h2> }
        
    </div>
  );
}

export default App;

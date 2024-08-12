import './App.scss';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {

  const [open, setOpen] = useState(false)

  return (
    <div className='App'>
      <Navbar open={open} setOpen={setOpen}/>
      <Home/>
    </div>
  );
}

export default App;

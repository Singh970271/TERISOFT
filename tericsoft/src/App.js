
import './App.css';
import CardDemo from './components/Card';
import { Route,Routes } from 'react-router-dom';
import Movie from './components/Movie';
import { Card } from '@mui/material';
import Navbar from './components/Navbar';


function App() {

  return (

    <div className="App">

   <CardDemo/>

<Navbar/>
   <Routes>

        
        <Route path='/movie' element={<Movie/>}/> 
        
      </Routes>

    </div>

  );
}

export default App;

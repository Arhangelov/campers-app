import { Route, Routes } from 'react-router-dom';

//Styles
import './App.css';

//Components
import Home from './components/Home/Home';

function App() {
  return (
    <div className='app-container'>
        <Routes>
            <Route path='/' element={ <Home /> }/>
        </Routes>
    </div>
  );
}

export default App;

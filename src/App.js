import './App.css';
import sunPhoto from './sunny.png';
import moonPhoto from './crescent-moon.png';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='app'>
      <div className='container'>
      <img className='mainImage circle' src={ sunPhoto } alt="sun" width="200px" />
      </div>
      <div className='container'>
      <h1>To Do List</h1>
      </div>
      <ToDoList />
      <div className='container'>
      <img className='mainImage' src={ moonPhoto} alt="moon" width="200px" />
      </div>
    </div>
  );
}

export default App;

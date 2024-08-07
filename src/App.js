import React, { useState } from 'react';
import Input from './components/Input';
import './App.css';
import img from './assets/img.png';
import Button from './components/Button';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    console.log("first")
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  return (
    <div className='container'>
      <div className="card">
        <h3>
          Liste des Tâches ajoutées ({todos.length})
        </h3>
        <div className='tache'>
          <div className='row'>
            <div className='word'>
              <ol className='number-list'>
                {todos.map((todo, index) => (
                  <li key={index}>
                    {todo} <Button label="Supprimer" type="button" className="delet" onClick={() => deleteTodo(index)} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='gif'>
          <img src={img} className='image' alt='img' />
        </div>
        <div className='todos'>
          <Input 
            label="Ajouter une tâche" 
            type="text" 
            className="input-class" 
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)} 
            onAddTodo={addTodo} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;

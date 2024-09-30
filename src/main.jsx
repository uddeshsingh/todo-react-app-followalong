import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const taskList = [
  {id: '1',name: 'Eat', stat: false},
  {id: '2',name: 'Sleep',stat: true},
  {id: '3',name:'Study',stat: false},
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks = {taskList}/>
  </StrictMode>,
)

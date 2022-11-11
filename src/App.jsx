import Todo from './Todo';
import Modal from './Modal';
import Backdrop from './Backdrop';
  
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React Level 1'/>
      <Todo text='Learn React Level 2'/>
      <Todo text='Learn React Level 3'/>
      <Modal/>
      <Backdrop/>

    </div>
  );
}

export default App;

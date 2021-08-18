import './App.css';
import { useGlobalContext } from './context';
import Form from './Form';
import Items from './Items';
import Modal from './Modal';

function App() {
  const {modalContent} = useGlobalContext()

  return (
    <div className="App">

      <h1>TO DO APP</h1>
      
      <main>

        <Form/>

        <Items/>
      
      </main>

      {modalContent && <Modal/>}
    
    </div>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect } from "react"
import { connect, sendMessage } from './api';
import Header from './Header';

function App() {

  useEffect(() => { connect() }, [])

  const send = () => {
    console.log("hello")
    sendMessage("hello")
  }

  return (
    <div className="app">
      <Header />
      <button onClick={send}>Hit</button>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
function App() {

  const onDelete = (todo)=>{console.log("I am onDelete", todo);}

  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get the job done"
    },

    {
      sno: 2,
      title: "Go to the market",
      desc: "You need to go to the market to get the job done"
    },

    {
      sno: 3,
      title: "Go to the market",
      desc: "You need to go to the market to get the job done"
    },

    {
      sno: 4,
      title: "Go to the market",
      desc: "You need to go to the market to get the job done"
    }
  ]
  return (
    <>
    <Header title="My Todos List" searchBar={true}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;

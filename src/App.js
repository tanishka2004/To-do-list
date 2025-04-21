import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("I am ondelete of todo", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title, desc)
    let sno = todos[todos.length-1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title, 
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "you need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "you need to go to the market to get this job done2"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "you need to go to the market to get this job done3"
    },
  ]);
  return (
    <>
     <Header title="My Todo List" searchbar={false}/>
     <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
     <Footer/>
    </>
  );
}

export default App;

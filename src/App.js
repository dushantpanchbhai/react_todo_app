import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { Todos } from './components/Todos';
import AddTodo from './components/AddTodo';
import React, { useState, useEffect } from 'react';
import  Analytics from './components/Analytics'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  let initTodo;

  if (localStorage.getItem('todos') === null) {
    initTodo = [];
    console.log('init todo is empty',initTodo);
  }
  else {
    console.log('items are',localStorage.getItem('todos'));
    initTodo = JSON.parse(localStorage.getItem('todos'));
    console.log('we got init todos')
  }

  const onDelete = (todo) => {

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const addTodo = (title,desc,date,priority) => {
    var sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
     sno = todos[todos.length-1].sno + 1;
    }

    //formating of date in dd mm yyyy format
    var y = date.substr(0,4);
    var m = date.substr(5,2);
    var d =date.substr(8,2);
    var newdate = d+"-"+m+'-'+y;


    const myTodo = {
        sno: sno,
        task: title,
        desc: desc,
        date: newdate,
        priority: priority,
      }

    console.log('mytodo is : :::::',myTodo);
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  
  return (
    <Router>
    <>
      <Header></Header>
      <switch>

      <Route exact path="/">
      <>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}></Todos>
      </>
      </Route>
  
      <Route exact path = "/analytics">
        <Analytics todos={todos} onDelete={onDelete} ></Analytics>
      </Route>
      </switch>

      <Footer></Footer>
    </>
    </Router>
  );
}

export default App;

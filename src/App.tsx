import React from 'react';
import axios from "axios";


let colors: string[] =
    ['Orange', 'Red', 'Green', 'Yellow', 'Purple', 'Dark']
let applesCount: number[] = [1, 2, 3, 4, 5]
let results: boolean[] = [true, false, true, false, true, true, true]
class Car {}
let car: Car = new Car();

let point: {x: number; y: number} = {
    x: 10,
    y: 5
}

const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

const jsonPlaceHolder = 'http://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id: number
    title: string
    completed: boolean
}

const getJsonPlaceHolder = () => {
  axios.get(jsonPlaceHolder)
      .then(r => {
        const todo = r.data as Todo;
        const id = todo.id;
        const title = todo.title
        const completed = todo.completed
          logTodo(id, title, completed);
      })
}

const logTodo = (id : number, title : string, completed: boolean) => {
    console.log(
        `
                The Todo with ID ${id}
                Has a title of ${title}
                Is it Completed? ${completed}
            `
    )
}

getJsonPlaceHolder();

function App() {
  return (
    <div>TS-JSON-SANDBOX</div>
  );
}

export default App;

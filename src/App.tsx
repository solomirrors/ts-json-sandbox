import React from 'react';
import axios from "axios";

const jsonPlaceHolder = 'http://jsonplaceholder.typicode.com/todos/1'

const getJsonPlaceHolder = () => {
  axios.get(jsonPlaceHolder)
      .then(r => console.log(r.data))
}

getJsonPlaceHolder();

function App() {
  return (
    <div>TS-JSON-SANDBOX</div>
  );
}

export default App;

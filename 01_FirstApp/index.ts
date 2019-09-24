import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// Interfaces in typescript are used to define the structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  // Response.data has properties of :
  // id, title, completed
  const todo = response.data as Todo;

  const ID = todo.ID;
  const title = todo.Title;
  const finished = todo.finished;

  console.log(`
    The Todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished: ${finished}
  `);
});

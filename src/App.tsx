import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { get } from "aws-amplify/api";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data: { items: any }) => setTodos([...data.items]),
    });
    // client.mutations.addPost({
    //   title: "My Post",
    //   content: "My Content",
    //   author: "Richard",
    // });
  }, []);
  
  async function getItem() {
    try {

      // const { data: team } = await client.models.Portfolio.create({
      //   name: 'my First Portfolio',
      // });

      const { data: portfolios } = await client.models.Portfolio.list();
      console.log(portfolios);

      // const { data: stock } = await client.models.Stock.create({
      //   ticker: "MSFT",
      //   portfolioId: portfolios[0].id,
      //   averagePrice: 20,
      //   shares: 10,
      //   currency: "GBP"
      // });

      // console.log(stock);

      const { data: stocks } = await client.models.Stock.list({
        filter: {
          portfolioId: {
            eq: portfolios[0].id
          }
        }
      });
      console.log(stocks);

      const restOperation = get({
        apiName: "myHttpApi",
        path: "todos",
      });
      const response = await restOperation.response;
      console.log("GET call succeeded: ", response);
      
    } catch (error: any) {
      console.log("GET call failed: ", error);
    }
  }

  // function deleteTodo(id: string) {
  //   client.models.Todo.delete({ id })
  // }

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>{user?.signInDetails?.loginId}'s todos</h1>
          <button onClick={createTodo}>+ new</button>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} onClick={() => getItem()}>
                {todo.content}
              </li>
            ))}
          </ul>
          <div>
            🥳 App successfully hosted. Try creating a new todo.!
            <br />
            <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
              Review next step of this tutorial.
            </a>
          </div>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;

import useFetch from "./hooks/useFetch";

function App() {
  const [todos, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  // console.log("data", data);
  // console.log("loading", loading);
  // console.log("error", error);

  return (
    <>
      <h1>React Custom Hooks</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {todos.length > 0 && (
        <div>
          {todos.map((todo) => {
            return <div key={todo.id}>{todo.title}</div>;
          })}
        </div>
      )}
    </>
  );
}

export default App;

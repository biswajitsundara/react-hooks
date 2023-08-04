import useDataFetch from "./useDataFetch";

const Todo = () => {
  const { data, loading } = useDataFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <h1>Loading..</h1>;
  }

  return (
    <ul>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p></div>
      ))}
    </ul>
  );
};

export default Todo;

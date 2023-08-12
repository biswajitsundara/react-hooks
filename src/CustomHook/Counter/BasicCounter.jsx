import useCounter from './useCounter'

const BasicCounter = () => {
  const { count, increment, decrement } = useCounter(0);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment</button>
    </>
  );
};

export default BasicCounter;

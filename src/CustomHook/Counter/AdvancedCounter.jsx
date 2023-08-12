import useCounter from './useCounter'

const AdvancedCounter = () => {
    const { count, increment, decrement } = useCounter(10);
  
    return (
      <>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Increment</button>
      </>
    );
  };
  
  export default AdvancedCounter;
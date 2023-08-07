import React, { useState } from "react";


/**
 * Lets look into the problem statement
*  Here we have induced some delays to the isEven() function
*  We will observe when the first counter button is clicked, it displays the value, odd/even with a delay
*  That's expected because whenever the firstcounter state variable changes, react needs to evaluate if it's odd or even
*  However when we click on the second button secondcounter we will observe the same delay to display the value
*  That's not correct as secondcounter state variable is not checked for odd or even
*  The reason why it's happening is, whenever there's a state change it will re-render the component
*  And whenever the component is rendered, the isEven() function is evaluated.
 * 
 */
const BasicMemo = () => {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  function incrementByOne() {
    setFirstCounter(firstCounter + 1);
  }

  function incrementByTwo() {
    setSecondCounter(secondCounter + 2);
  }

  function isEven() {
    let i = 0;
    while (i < 2000000000) i++;
    return firstCounter % 2 == 0;
  }

  return (
    <div>
      <p>{isEven() ? "Even" : "Odd"}</p>
      <p>{firstCounter}</p>
      <button onClick={incrementByOne}>First Counter</button>
      <p>{secondCounter}</p>
      <button onClick={incrementByTwo}>Second Counter</button>
    </div>
  );
};

export default BasicMemo;
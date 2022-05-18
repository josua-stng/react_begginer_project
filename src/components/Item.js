import React, { useState } from 'react';

export default function Item() {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function maps() {
    const mapping = [1, 2, 3, 4, 5];
    return (
      <p>{mapping}</p> //initialized for output all arr
      // return mapping.map((item) => {
      //   return <p>{item}</p>; //initialized for mapping arr
    );
  }

  const [getNavbarValue, SetNavbarValue] = useState('');
  const changeNavbarValue = () => {
    SetNavbarValue('Josua');
  };
  const MyApp = () => {
    return <p>App Component</p>;
  };

  const [getValue, SetValue] = useState();
  const sumValue = () => {
    let num1 = 6;
    let num2 = 7;
    let result = num1 * num2;
    SetValue(result);
  };

  
  return (
    <div className="wrapper">
      <button onClick={decrementCount} className="btn">
        -
      </button>
      <span>{count}</span>
      <button onClick={incrementCount} className="btn">
        +
      </button>
      <p>{maps()}</p>
      <p>{MyApp()}</p>
      <p>{getNavbarValue}</p>
      <button onClick={() => changeNavbarValue()}>Click Me</button>
      <p>{getValue}</p>

      <button onClick={() => sumValue()}>Click For Sum</button>

    </div>
  );
}

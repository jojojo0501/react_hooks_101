import React, { useState } from 'react';


const App = () => {
  const [count,setCount] = useState(0);

    const increment = () => {
      setCount(count+1);
    }

    const decrement = () => {
      setCount(count-1);
    }

    const increment2 = () => setCount(previous => previous+1);

    const decrement2 = () => setCount(previous => previous-1);

    const reset = () => setCount(previous => 0);

    const x2 = () => setCount(count*2);

    const div3 = () => setCount(previous => 
      previous % 3 === 0 ? previous/3 : previous
    )

  return (
    <>
      <div>count:{count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
      </div>
      <div>
        <button onClick={x2}>x2</button>
      </div>
      <div>
        <button onClick={div3}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
}

export default App;

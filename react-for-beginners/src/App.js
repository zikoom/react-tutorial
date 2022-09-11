import { useState, useEffect } from "react"

function App() {
  const [showing, setShowing] = useState(false);
  const changeShowState = () => setShowing((cur) => !cur)
  const Hello = () => {
    useEffect(() => {
      console.log('im created');
      return () => console.log('im destroyed');
    }, []);
    return (
      <div><h1>Hello world!</h1></div>
    )
  }
  return (
    <div>
      <button onClick={changeShowState}> {showing ? 'hide' : 'show'}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;

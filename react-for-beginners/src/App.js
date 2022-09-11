import { useState, useEffect } from "react"

function App() {
  

  const [clicked, setClicked] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClick = () => {
    console.log('clicked');
    setClicked((cur) => cur + 1);
  }

  const onChangeKeyword = (e) => {setKeyword(e.target.value)}

  console.log('app lendered');
  const runOnce = () => {
    console.log('run once');
  }
  useEffect(runOnce, []);
  useEffect(() => {console.log('do search')}, [keyword]);
  return (
    <div>
      <h1>H!</h1>
      <input type="text" placeholder="Search" value={keyword} onChange={onChangeKeyword}/>
      <button onClick={onClick}> click me</button>
      <span>clicked: {clicked}</span>
    </div>
  );
}

export default App;

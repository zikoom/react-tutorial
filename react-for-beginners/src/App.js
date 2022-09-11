import { useEffect, useState } from "react";

function App() {
  useEffect(() => {console.log('first app lenderd')}, [])

  const [toDo, setToDo] = useState('');
  const [toDoList, setToDoList] = useState([]);

  function onChange(e){
    setToDo(e.target.value);
  }

  function onSubmit(e){
    console.log('onSubmit in');
    e.preventDefault();
    if(toDo === '') return;
    if(toDoList.findIndex((toDoRecorded) => toDoRecorded === toDo) !== -1) {setToDo(''); return};
    setToDoList((cur) => [...cur, toDo]);
    setToDo('');
  }

  function finishJob(idx){
    console.log('finishJob in');
    setToDoList((cur) => {cur.splice(idx, 1); return cur})
  }


  return (
    <div>
      <h1>My Todo List !! total: {toDoList.length}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="dododo" />
        <button>submit</button>
      </form>
      <hr />
      <div>
        {
          toDoList.map((todo, idx) => {
            return <div key={`todo-wrapper-${idx}`}>
              <span key={`todo-${idx}`}>{todo}</span>
              {/* <button key={`finish-btn-${idx}`} onClick={finishJob(idx)}>done!</button> */}
            </div>

          })
        }
      </div>
    </div>
  );
}

export default App;


import './App.css';
import { useState } from 'react';
import Card from './Card';

function App() {
  const [items, setItems] = useState([
    { title: "Column A", childs: ["A1", "A2", "A3"] },
    { title: "Column B", childs: ["B1", "B2", "B3"] },
    { title: "Column C", childs: ["C1", "C2", "C3"] },
  ])

  return (
    <div className="App">

      {items.map((item, i) => {
        return <Card item={item} index={i} items={items} setItems={setItems} key={item.title}/>
      })}
    </div>
  );
}

export default App;

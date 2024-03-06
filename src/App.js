import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";
import List from "../src/List";


function App() {
  const [currentItem,setCurrentItem] = useState(null);
  const [itemList, setItemList] = useState([]);

  const onChangeHandler = (e)=>
  {
    console.log("value is ",e.target.value);
    setCurrentItem(e.target.value);

  }

  const addItem = ()=>{
    setItemList([...itemList,{item : currentItem, key : Date.now()}]);
    console.log("list items", itemList);
    setCurrentItem("");
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-warapper">
            <input value={currentItem} onChange={onChangeHandler} />
            <button onClick={addItem}>+</button>
          </div>
          <List itemlist={itemList} setitemlist={setItemList} />
        </div>
      </header>
    </div>
  );
}

export default App;

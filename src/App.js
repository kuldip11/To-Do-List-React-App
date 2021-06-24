import './App.css';
import React,{useEffect, useState} from "react";
import ListItem from './components/ListItem.js'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faTrash);

function App() {
  localStorage.setItem('list',[]);
  let [items,SetItems] = useState([]);
  let [currentItem,setcurrentItem] = useState({text:"", key:""});
  // localStorage.setItem('list',JSON.stringify(items));

  function handleInput(e) {
    setcurrentItem(()=>({text: e.target.value, key: Date.now()}))
  }
  function addItem(e){
    e.preventDefault();
    const newItem=currentItem;
    if(newItem.text!==""){
      items=[...items, newItem];
      SetItems(()=>items);
      console.log(items);
      setcurrentItem(()=>({text:"", key:""}));
    }
  }
  function deleteItem(key){
    const filterItem = items.filter(item => item.key!==key);
    SetItems(()=>filterItem);

  }
  function setUpdate(value,key){
    items.map((item)=>{
      if(item.key===key){
        item.text=value;
      }
    });
    setcurrentItem(()=>({text:"", key:""}));
  }

   useEffect(()=>{
    //  console.log([...JSON.parse(localStorage.getItem('list')),...items]);
    SetItems([...(localStorage.getItem('list')),...items]);
    localStorage.setItem('list',(items));
    
   },[]);

  return (
    <div className="App">
      <header className="App-header" >
        <form id="todo-list" onSubmit={addItem} type="submit">

          <input type="text" placeholder="Enter Text"
            className="task"
            value={currentItem.text} onChange={handleInput}/>

          <button type="submit" className="btn">Add</button>

          </form>
          <ListItem items={items} deleteItem={deleteItem}
          setUpdate={setUpdate}/>
      </header>
    </div>
  );
}

export default App;

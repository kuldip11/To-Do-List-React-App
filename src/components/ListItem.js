import React from 'react';
import './ListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ListItem(props){
    const items=props.items;
    const listitems = items.map(item =>{
        return(
            <div className="list" key={item.key}>
                <p> <input value={item.text} type="text" 
                onChange ={(e)=>{props.setUpdate(e.target.value,item.key)}}/> 
                    <span>
                    <FontAwesomeIcon className="faicons" icon="trash"
                    onClick={()=> props.deleteItem(item.key)}/>
                    </span>
                </p>
                
            </div>
        )
    })
    return(
        <div>{listitems}</div>
    )
}
export default ListItem;
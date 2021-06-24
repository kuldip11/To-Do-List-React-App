import React,{useState} from 'react';
import './ListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

function ListItem({items, setUpdate, deleteItem}){
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [updatedValue, setupdatedValue] = useState("")
    const [key, setKey] = useState("")
    const showModal = (val) => {
        setKey(val)
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        if(updatedValue !== ""){
            items.map((ele)=> {if(ele.key===key){
                ele.text=updatedValue;
            }})
        }
        handleCancel()
      };
    
      const handleCancel = () => {
        setKey("")
        setupdatedValue("")
        setIsModalVisible(false);
      };
    
    return(
        <div>
            {items.map(item => (
                <div className="list" key={item.key}>
                    <p> <input value={item.text} type="text" 
                        onChange ={(e)=>{setUpdate(e.target.value,item.key)}}/> 
                        <span>
                            <button className="edit" onClick={() => {showModal(item.key)}}>Edit</button>
                            <button className="delete" icon="trash" 
                                onClick={()=> deleteItem(item.key)}>Delete</button>
                        </span>
                    </p>
                    <Modal title="Edit item" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <input type="text-box" value={updatedValue} onChange={(e) => setupdatedValue(e.target.value)}/>
                    </Modal>
                </div>
                )
            )}
        </div>
    )
    }
export default ListItem;
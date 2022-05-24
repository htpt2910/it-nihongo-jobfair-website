import { Button, Typography } from "antd";
import { useState } from "react";
import StaticList from "../../data/staticList";
import CustomButton from "../button/CustomButton";
import ToDoItems from "./ToDoItems";
import { PlusSquareOutlined } from '@ant-design/icons';
import ToDoListData from "../../data/ToDoList";
import { Link } from "react-router-dom";

const itemCanAdd = ToDoListData.filter(item => !StaticList.includes(item));
  
const YourList = ({hasList}) => {
    
    const [input, setInput] = useState("");
    const [item, setItem] = useState(StaticList);
    const [notInListItems, setNotInListItems] = useState(itemCanAdd);

    function handleDeleteYourList() {
        setItem([]);
        hasList = false;

    }
    function handleChange(event) {
        setInput(event.target.value);
        console.log("on change!");
      }
    
    function handleClick() {
        console.log("on click!");
        setItem((prevValue) => {
            return [...prevValue, input];
        });
        console.log("on click!");

        setInput("");
    }
      
    function deleteItem(id) {
        setItem((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }

    function handleCheckedOnNotInListItems(id) {
        setNotInListItems((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
        setItem((prevValue) => {
            return [...prevValue, notInListItems[id]];
        });
    }
    
    return (
        <>
            <Typography>ToDoist</Typography>
            <Link to="/todo" ><Button onClick={handleDeleteYourList}>Delete List</Button></Link>

            <ul>
                {item.map((todoItem, index) => (
                    <ToDoItems
                        key={index}
                        id={index}
                        text={todoItem}
                        onChecked={deleteItem}
                    />
                ))}
            </ul>

            <input type="text" onChange={handleChange} value={input}/>
            <button onClick={handleClick}>Add</button>
            <ul>
                {notInListItems.map((todoItem, index) => (
                    <ToDoItems
                        key={index}
                        id={index}
                        text={todoItem}
                        onChecked={handleCheckedOnNotInListItems}
                    />
                ))}
            </ul>
        </>
    );
}

export default YourList;
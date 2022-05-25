import React from "react";
import ToDoListData from "../data/ToDoList";
import CustomButton from "../components/button/CustomButton";
import { PlusSquareOutlined } from '@ant-design/icons';
import ToDoItems from "../components/todoList/ToDoItems";
import { Link } from "react-router-dom";

function ToDos ({hasList}) {
    return (
        <div>
            {ToDoListData.map((todo, index) => <ToDoItems text={todo} id={index}/> )}
            {!hasList?<Link to="/yourList" ><CustomButton onClick={()=> hasList=true} name={"Make your own list"} icon={<PlusSquareOutlined />} /></Link>
            :<Link to="/yourList" ><CustomButton onClick={()=> hasList=true} name={"Go to your list"} icon={<PlusSquareOutlined />} /></Link>}
        </div>
    )
}

export default ToDos;
import React from "react";
import ToDoListData from "../data/ToDoList";
import CheckedElement from "../components/todoList/CheckedElement";
import CustomButton from "../components/button/CustomButton";
import { PlusSquareOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";


function ToDos () {
    return (
        <div>
            {ToDoListData.map(todo => <CheckedElement value={todo} /> )}
            <CustomButton name={"Make your own list"} icon={<PlusSquareOutlined />} />
        </div>
    )
}

export default ToDos;
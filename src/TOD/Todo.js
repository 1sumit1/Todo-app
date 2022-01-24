import React, { useState,useEffect } from 'react'
import './Style.css';

const getLocalData = () =>{
    const lists=localStorage.getItem("myTodoList");
    if(lists){
        return JSON.parse(lists)
    }else{
        return [];
    }
}

export const Todo = () => {
    const[inputData,setInputData]=useState("");
    const[items,setIntems]=useState(getLocalData());
    const[isEditItem,setIsEditItem]=useState("");
    const[toggleButton,setToggleButton]=useState(false);

    const addItems= () => {
        if(!inputData){
            alert('please fill the data');
        }else if(inputData && toggleButton){
           setIntems(items.map((curEle) => {
               if(curEle.id===isEditItem){
                   return{...curEle,name: inputData};
               }
               return curEle;
           }))
        
           setInputData("");
           setIsEditItem(null);
           setToggleButton(false);
        }else{
            const myNewInputData={
                id:new Date().getTime().toString(),
                name:inputData,
            }
            setIntems([...items,myNewInputData])
            setInputData("");
        }
    }

    const deleteItem = (index) => {
           const updatedItems=items.filter((curEle) => {
               return curEle.id !== index;
           });
           setIntems(updatedItems);
    }

    const removeAll = ()=>{
        setIntems([]);
    }

    const editItem=(index) =>{
        const item_todo_edited=items.find((curEle) =>{
            return curEle.id ==index;
        })
           setInputData(item_todo_edited.name);
           setIsEditItem(index);
           setToggleButton(true);
    }

    useEffect(() => {
        localStorage.setItem("myTodoList",JSON.stringify(items));
    }, [items])
    return (
        <div>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todo logo" />
                        <figcaption>Add your List Here</figcaption>

                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="Add Items" className="form-control" value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
                        {
                            toggleButton ? ( <i className="fa fa-edit add-btn" onClick={addItems}></i>
                            ) : (<i className="fa fa-plus add-btn" onClick={addItems}></i>)  
                        }
                        
                    </div>
                    <div className="showItems">
                        {items.map((curEle) => {
                            return (
                                <div className="eachItem" key={curEle.id}>
                                <h3>{curEle.name}</h3>
                                <div className="todo-btn">
                                <i className="far fa-edit add-btn" onClick={()=> editItem(curEle.id)}></i>
                                <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curEle.id)}></i> 
                                </div>
                            </div>
                            )
                            
                        })}
                        
                        
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                            <span>Check List</span>
                            </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

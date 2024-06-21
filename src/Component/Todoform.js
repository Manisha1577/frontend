import React,{useState} from 'react'


const Todoform = () => {
    const [value,setValue]=useState("");
    const [todos,setTodos]=useState([]);
    const [editId,setEditId]=useState(0)
    

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(editId){
          const editTodo=todos.find((i)=>i.id===editId)
          const updatedTodos=todos.map((v)=>v.id===editTodo.id?(v={id:v.id,value}):{id:v.id,value:v.value});
          setTodos(updatedTodos)
          setEditId(0);
          setValue("")
          return;
        }

      
        if(value!==""){
          setTodos([{id:`${value}-${Date.now()}`,value},...todos])
          setValue("");
        }
       

      
    };

    const handleChange=(e)=>{
        setValue(e.target.value)
    }

    const handleDelete=(id)=>{
      const delevalues=todos.filter((to)=>to.id!==id)
      setTodos([...delevalues])
    }

    const handleEdit=(id)=>{
      const editValue=todos.find((i)=>i.id===id);
      setValue(editValue.value)
      setEditId(id)
    }

  
  return (
    <>
    <form  className="Todo form"  onSubmit={handleSubmit} style={{display:"flex",justifyContent:"center",gap:"30px"}}>
        <input type="text" className='todoinput' placeholder='enter task' onChange={handleChange} value={value} />
        <button type="submit" className='todobtn'>{editId?"Edit":"Add Task"}</button>
        

    </form>
    <ul style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"30px"}}>
      {
        todos.map((v)=>(
          <li style={{display:"flex",justifyContent:"center",alignItems:"flex-start",gap:"30px"}}>
          <span key={v.id}>{v.value}</span>
            <button onClick={()=>handleEdit(v.id)}>edit</button>
            <button onClick={()=>handleDelete(v.id)}>delete</button>
          </li>

        )

        )
      }
      
      
      
      

       
          

    </ul>
    </>
  )
}

export default Todoform
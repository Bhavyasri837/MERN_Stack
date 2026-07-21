import {useState,useEffect} from "react";
import axios from "axios";
function API()
{
    const API="https://jsonplaceholder.typicode.com/users"; 
    const [user,setUser]=useState([]);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    useEffect(()=>{getUsers()},[]);
    async function getUsers()
    {
        try{
            const response=await axios.get(API);
            setUser(response.data);
        }
        catch(error)
        {
            alert(error);
        }
    }
    async function adduser()
    {
        if(name===""||email==="")
            {
                alert("please fill all the fields");
                return;
            }
            try{
                const response=await axios.post(API,{
                    name:name,
                    email:email,
                });
                setUser([...user,response.data]);
                setName("");
                setEmail("");
                alert("user added sucessfully");
            }
            catch(error)
            {
                alert(error);
            }
    }
    async function updateuser(id)
    {
        try{
            const response=await axios.put(`${API}/${id}`,{
                name:name,
                email:email,
            });
            const updateduser=user.map((user)=>{
                if(user.id===id)
                {
                    return response.data;
                }
                return user;
            });
            setUser(updateduser);
            setName("");
            setEmail("");
            alert("user updated sucessfully");
        }
        catch(error)
        {
            alert(error);
        }
    }
    async function deleteuser(id)
    {
        try{
            await axios.delete(`${API}/${id}`);
            const updateduser=user.filter((user)=>user.id!==id);
            setUser(updateduser);
            alert("user deleted sucessfully");

        }
        catch(error)
        {
            alert(error);
        }
    }
    return (
  <>
    <div>
      <h1>React CRUD Operation Using API</h1>

      <label><b>Name:</b></label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <label><b>Email:</b></label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <button onClick={adduser}>Add User</button>

      <br />
      <br />

      {user.map((user) => (
        <div
          key={user.id}
          style={{
            margin: "20px",
            border: "2px solid black",
            padding: "10px",
          }}
        >
          <h2>{user.name}</h2>
          <h3>{user.email}</h3>

          <button
            onClick={() => {
              setName(user.name);
              setEmail(user.email);
            }}
          >
            Edit
          </button>

          <button onClick={() => updateuser(user.id)}>
            Update
          </button>

          <button onClick={() => deleteuser(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  </>
);
}
export default API;
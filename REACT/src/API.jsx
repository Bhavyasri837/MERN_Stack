import {useState,useEffect} from "react";
import axios from "axios";
function API()
{
    const API="https://jsonplaceholder.typicode.com/users"; 
    const [user,setUser]=useState([]);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");

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
    async function assuser()
    {
        if(name==""||mail=="")
            {
                alert("please fill all the fields");
            }
            try{
                const response=await axios.post(API,{
                    name:name,
                    email:email,
                });
                setUser([...user,response.data]);
                setName("");
                serEmail("");
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
    return(

    );
}
export default API;
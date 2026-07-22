import React,{useState} from 'react'

export default function DB_connect() {
    const [FormData,setFormData]=useState({
        name:'',
        email:'',
        message:''
    });
    const [status,setStatus]=useState({
        type:'',
        message:''
    });
    const [loading,setLoading]=useState(false);
    const handleInputData=(e)=>{
    const {name,value}=e.target
    setFormData((prev)=>({
        ...prev,
        [name]:value
    }));
};
const handleSubmit=async(e)=>{e.preventDefault();
    setLoading(true);
    setStatus({
        type:'',
        message:''
    });
    try{
        const response=await fetch(' ',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(FormData)
        }
        );
        const result=await response.json();
        if(response.ok)
        {
            setStatus({type:"success",message:"form submitted successfully."});
            setFormData({name:'',email:'',message:''});
        }
        else
        {
            setStatus({type:"failure",message:"failed to submit the form."});
        }
    }
    catch(error){
        setStatus({type:'error',message:"Could not connect to localhost"})
    }
    finally{
        setLoading(false)
    }
};
return (
    <div>
      <h1>send message</h1>
      <label><b>name:</b>
      </label>
            <input type="text" name="name" value={FormData.name}required/>
            <button type="submit">submit</button>
            <br></br>
            <label><b>email:</b>
      </label>
            <input type="text" name="email" value={FormData.email}required/>
            <button type="submit">submit</button>
            <br></br>
            <label><b>Message:</b>
      </label>
            <input type="text" name="message" value={FormData.message}required/>
            <button type="submit">submit</button>
    </div>
  );
};

import React,{useState} from "react";
function DB_connect()
{
    const [FormData,setFormData]=useState({
        name:'',
        email:'',
        message:''
    });
    const [status , setStatus]=useState(
        {
            type:'',
            mgs:''
        }
    );
    const[loading,setLoading]=useState(false);
    const handleInputData = (e)=>{
        const {name , value}=e.target;
        setFormData(
            prev=>({
                ...prev,
                [name]:value
            })
        );
    };
    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        setLoading(true);
        setStatus({
            type:'',
            mgs:''
        });
        try
        {
            const response= await fetch('http://localhost:5000/api/contacts',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringgify(FormData)
            });
            const result=await response.json();
            if(response.ok)
            {
                setStatus({type:"Success",mgs:"Form submitted Successfully."});
                setFormData({name:'',email:'',message:''});
            }
            else{
                setStatus({type:"failure",mgs:"Submision Failed."});
            }
        }
        catch(error)
        {
            setStatus({type:error,mgs:"Could not connect to Lohalhost"})
        }
        finally
        {
            setLoading(false);
        }
    }
     return (
            <>
                <div>
                    <h1>Send Message</h1>
                    <form onSubmit={handleSubmit} >
                        <label><b>Name:</b></label>
                        <input 
                        type="text"
                        name="name" 
                        value={FormData.name} 
                        onChange={handleInputData}
                        required
                         />
                         <label><b>Email:</b></label>
                        <input 
                        type="email"
                        name="email" 
                        value={FormData.email} 
                        onChange={handleInputData}
                        required
                         />
                         <label><b>Message:</b></label>
                        <input 
                        type="text"
                        name="message" 
                        value={FormData.message} 
                        onChange={handleInputData}
                        required
                         />
                         <button
                         type="submit"
                            disabled={loading}
                         >
                            Submit
                         </button>
                    </form>
                    {status.mgs && (
                        <div style={{ marginTop: '15px', color: status.type === 'Success' ? 'green' : 'red' }}>
                            {status.mgs}
                        </div>
                    )}
                </div>
            </>
        );
}
export default DB_connect;
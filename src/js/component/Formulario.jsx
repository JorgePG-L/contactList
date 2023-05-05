import React, {useEffect, useState} from "react";
import serviceFunction from "../service/service.jsx";
import { useParams} from "react-router-dom";
    
const Formulario = () =>{
    const params = useParams();

    const initialState = { 
    full_name:"",
    email:"",
    phone:"",
    address:"",
    agenda_slug:"Jorge_agenda",
    id:""}
    
    const [contact, setContact] = useState(initialState)
    
   

    const modifyContact = async () => {
      if(params.id) {
        const getid = await serviceFunction.getContactId(params.id)
        setContact(getid);
        console.log("entra")
      }
      else console.log("no entra")
    }
    
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact({...contact, [name]: value});
        console.log(name)
      };
      
      /*if (contact.id) {
        await serviceFunction.editContact(contact, params.id);
        console.log("el put es  ", contact);
      } else {
        await serviceFunction.postContact(contact);
      }
       }*/

      const handleSubmit =async (event) => {
       event.preventDefault();
     
       if (contact.id) {
        await serviceFunction.editContact(contact, params.id);
        setContact(initialState)
        console.log("el put es  ", contact);
      } else {
        await serviceFunction.postContact(contact);
        setContact(initialState)
      }
      }
       

     useEffect(() => {
        
            modifyContact();
            
            console.log("contacto",contact)
        
       
        
    }, []);
    
    return(
    <form onSubmit={handleSubmit}>
         <div className="mb-3">
            <label  className="form-label">Name</label>
            <input type="text" className="form-control"   name="full_name" value={contact.full_name} onChange={handleChange} aria-describedby="emailHelp" placeholder="Name"/>
            
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" value={contact.email} onChange={handleChange} id="Email" aria-describedby="emailHelp" placeholder="Email"/>
            
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Phone Number</label>
            <input type="text" className="form-control"  name="phone" value={contact.phone} onChange={handleChange} aria-describedby="emailHelp" placeholder="Phone Number"/>
            
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Address</label>
            <input type="text" className="form-control"  name="address" value={contact.address} onChange={handleChange} aria-describedby="emailHelp" placeholder="Address"/>
            
        </div>
       
        <button type="submit" className="btn btn-primary"  >Submit</button>
</form>
)
}

export default Formulario;
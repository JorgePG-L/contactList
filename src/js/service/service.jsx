

const URL = `https://assets.breatheco.de/apis/fake/contact/agenda/Jorge_agenda`;
const URL2 = `https://assets.breatheco.de/apis/fake/contact/`

const postContact = async (data) => {
    try {
      const res = await fetch(URL2, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
       
      });
      console.log("ha entrado el post", res)
      return await res.json();
    } catch (err) {
      console.log("error", err);
    }
  };
    //navigate ()

const getContact = async () => {
   
        try{
            const res = await fetch (URL, {method: "GET"});
            return await res.json();
            
        }catch (err){
            console.log("error", err);
        }
    
    
    
    }

    const getContactId = async (id) => {
   
      try{
          const res = await fetch (`${URL2}${id}`.trim(), {method: "GET"});
          
          return await res.json();
          
      }catch (err){
          console.log("error", err);
      }
  
  
  
  }
  const deleteContact = async (id) => {
   
    try{
        const res = await fetch (`${URL2}${id}`.trim(), {method: "DELETE"});
        
        return await res.json();
        
    }catch (err){
        console.log("error", err);
    }



}
    const editContact = async (data,id) => {
      try {
        const res = await fetch(`${URL2}${id}`.trim(), {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
         
        });
        console.log("contactoModificado")
        return await res.json();
      } catch (err) {
        console.log("error", err);
      }
    };

const serviceFunction = {getContact, postContact, editContact,getContactId, deleteContact}

export default serviceFunction ;
import React, {useState,useEffect} from "react";
import "../../styles/home.css";
import Card from "../component/Card.jsx";
import serviceFunction from "../service/service.jsx";



const Home = () => {
	const [contactList, setContactList] = useState([]);
	const getInfo = async () => {
		const data = await serviceFunction.getContact();
		setContactList(data)
		console.log("ha sido llamado")
		
	  }
useEffect(()=>{
	getInfo()
},[])

/*useEffect(()=>{
	getInfo()
},[contactList])
*/
  
console.log("print ", contactList.id == '3494')
  return (
	<div className="container col-3">
    
      
	  {contactList.map((todo,index) => <Card key={todo.id} id={todo.id} name={todo.full_name} email={todo.email} phone={todo.phone} address={todo.address} onDelete={() => getInfo} />)}
      
    
	</div>
  );
};

export default Home;


import React from "react";
import { Link } from "react-router-dom";
import serviceFunction from "../service/service.jsx";
import "../../styles/home.css";
const Card = (props) =>{

    
        const handleDelete = async () => {
          await serviceFunction.deleteContact(props.id);
           
           console.log("Entra el delete", props.id)
        };



    return(
        <div className="princi_card card mb-3">
            <img src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2021/02/bi-2238511.jpg?tf=3840x" className="card-img-left img-thumbnail rounded" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Nombre:{props.name}</h5>
                <p className="card-text">Email:{props.email} </p>
                <p className="card-text">Phone:{props.phone}</p>
                <p className="card-text">Address:{props.address}</p>
                <Link to={`/formulario/${props.id}`} className="card-text">EDIT</Link>
                <button onClick={handleDelete} className="card-text">
          Delete
                </button>
            </div>
        </div>
    )
};

export default Card;
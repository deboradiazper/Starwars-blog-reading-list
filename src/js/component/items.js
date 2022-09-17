import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import Details from "../views/details";

const Items = (props) => {

  const { store, actions } = useContext(Context);
  const [ click , setClick ] = useState(false);
  const handleClick = () => {actions.addFavorites(props.name)
  }
  return (
  
      <div className="card border-0">
        <img src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`} className="card-img-top rounded mx-auto d-block" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text"></p>
          <div className="card-body d-flex justify-content-between">
          <Link to={`details/${props.category}/${props.uid}`} className="btn btn-dark mt-2">Read more</Link>
           <div onClick={handleClick} className="d-flex align-items-center">
           {store.favorites.includes(props.name) ? <i className="fas fa-heart text-danger"></i> : <i className="far fa-heart text-danger"></i>}
          </div> 
          </div>
        </div>
      </div>
  
  );
};

Items.propTypes = {
 
  uid: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  category: PropTypes.string,

 
};

export default Items;
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const Detail = (props) => {
  
  return (
    <div className="card rounded m-4 border-0">
      <div className="row no-gutter">
        <div className="col-md-6">
          <img src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`}className="card-img" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h3 className="card-title pt-5 pb-3">{props.name}</h3>
            <ul>
              {
                Object.keys(props.properties).map((element, index) =>{
                  return <p key={index}>{element}: {props.properties[element]}</p>
                  
                })
              }
            </ul>
            <Link to={"/"}>
              <p className="back pt-4 text-center">back</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};



Detail.propTypes = {
  uid: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  properties: PropTypes.object,
  
};
export default Detail;

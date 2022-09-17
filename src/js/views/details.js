import React, { useEffect, useState } from "react";
import Detail from "../component/detail";
import { useParams } from "react-router-dom";


const Details = () => {
    const params = useParams()
    const [detail, setDetail] = useState()
    useEffect(()=>{
        fetch(`https://www.swapi.tech/api/${params.category}/${params.detailsid}`)
        .then(response=>response.json())
        .then(response=>setDetail(response.result))
    },[])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {
            detail ? 
            <Detail
            uid={detail.uid} name={detail.properties.name} description={detail.description} type={params.category == "people" ? "characters" : params.category} properties={detail.properties}
             /> : ""
          }
            
        </div>
      </div>
    </div>
  );
};
export default Details;

import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Items from "./items";

const LoadItems = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="row">
      <h2 className="text1 text-light py-4">Characters</h2>
      <div className="scroll-container d-flex">
        {store.characters.map((items, index) => {
          return (
            <div className="col-12 col-md-3 px-3 characters">
              <Items
                name={items.name}
                uid={items.uid}
                type={"characters"}
                category={"people"}
              />
            </div>
          );
        })}
      </div>
      <h2 className="text1 text-light py-4">Planets</h2>
      <div className="scroll-container d-flex">
        {store.planets.map((items, index) => {
          return (
            <div className="col-12 col-md-3 px-3 characters">
              <Items
                name={items.name}
                uid={items.uid}
                type={"planets"}
                category={"planets"}
              />
            </div>
          );
        })}
      </div>
      <h2 className="text1 text-light py-4">Vehicles</h2>
      <div className="scroll-container d-flex">
        {store.vehicles.map((items, index) => {
          return (
            <div className="col-12 col-md-3 px-3 mb-3">
              <Items
                name={items.name}
                uid={items.uid}
                type={"vehicles"}
                category={"vehicles"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoadItems;

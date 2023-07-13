import React from "react";
import { useGlobalcontext } from "./hooks/Context";
import Loading from "./Components/Loading";
import { Link } from "react-router-dom";
const MealList = () => {
  const { loading, foods } = useGlobalcontext();
  if (loading) {
    return <Loading />;
  }
  if (foods.length < 1) {
    return <h1>No Food Found</h1>;
  }
  return (
    <div className="container d-flex flex-wrap align-items-center justify-content-between">
      {foods.map((food) => {
        const { id, name, image, cat } = food;
        return (
          <Link
            to={`/meal/${id}`}
            className="text-decoration-none  my-3 mx-auto"
            key={id}
          >
            <div style={{ width: "300px" }} className="shadow-md card   rounded-2">
              <img src={image} alt={name} />
              <h4 className="text-primary fw-bold text-center mt-3">{name}</h4>
              <h5 className="text-secondary text-center fw-light">{cat}</h5>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MealList;

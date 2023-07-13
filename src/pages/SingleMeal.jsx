import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import ReactPlayer from "react-player/youtube";
const SingleMeal = () => {
  const { mealId } = useParams();
  const url = "http://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  const finalUrl = url + mealId;
  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState(null);
  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(finalUrl);
    const data = await res.json();
    if (data.meals) {
      const {
        strMeal: name,
        strCategory: cat,
        strArea: area,
        strInstructions: instructions,
        strYoutube: youtube,
        strMealThumb: image,
        strTags: tags,
      } = data.meals[0];

      const newMeal = {
        name,
        cat,
        area,
        instructions,
        youtube,
        image,
        tags,
      };
      setMeal(newMeal);
    } else {
      setMeal(null)
    }
    setLoading(false)
  };
  useEffect(() => {
    fetchData();
  }, [mealId]);
  if (loading) {
    return<Loading/>
  }
  if (!meal) {
    return <h2>No meal to Display</h2>
  }

  return (
    <div className="container mt-2">
      <div className="">
        <img className="w-100" style={{height:"400px", objectFit:"cover"} } src={meal.image} alt={meal.name}  />
        <div className="mt-2">
          <p>
            <span className="bg-primary text-white p-1 me-2"> Name:</span>
            {meal.name}
          </p>
        </div>
        <div className="mt-2">
          <p>
            <span className="bg-primary text-white p-1 me-2"> Category:</span>
            {meal.cat}
          </p>
        </div>
        <div className="mt-2">
          <p>
            <span className="bg-primary text-white p-1 me-2"> Tags:</span>
            {meal.tags}
          </p>
          <div className="mt-2">
            <p>
              <span className="bg-primary text-white p-1"> Area:</span>
              {meal.area}
            </p>
          </div>
          <div className="mt-2 lh-lg">
            <p>
              <span className="bg-primary text-white p-1 me-2">
                {" "}
                Instruction:
              </span>
              {meal.instructions}
            </p>
            <ReactPlayer url={meal.youtube} controls={true} playing={true} muted={false} width={"285px"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMeal;

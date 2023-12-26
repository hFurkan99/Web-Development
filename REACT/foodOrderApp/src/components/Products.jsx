import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

//her request sonunda güncellenip hook içerisindeki useeffectin sonsuz döngüye girmemesi için hafızada bir kerelik oluşturuldu.
const requestConfig = {};

function Products() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);
  console.log(loadedMeals);

  if (isLoading) {
    return <p className="error">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals!" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
export default Products;

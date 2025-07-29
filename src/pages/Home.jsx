import RecipeBox from "../components/RecipeBox";
import { useRecipe } from "../components/RecipeContext";

function Home() {
  const { recipes } = useRecipe();

  return (
    <div className="flex flex-wrap">
      {Array.isArray(recipes) && recipes.length > 0 ? (
        recipes.map((item, index) => <RecipeBox item={item} key={index} />)
      ) : (
        <h1>Nothing to show, please search </h1>
      )}
    </div>
  );
}

export default Home;

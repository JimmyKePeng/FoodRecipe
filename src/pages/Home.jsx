import RecipeBox from "../components/RecipeBox";
import { useRecipe } from "../components/RecipeContext";

function Home() {
  const { recipes } = useRecipe();

  return (
    <div className="flex flex-wrap">
      {Array.isArray(recipes) && recipes.length > 0 ? (
        recipes.map((item, index) => <RecipeBox item={item} key={index} />)
      ) : (
        <h1 className="ml-[40%] text-lg font-bold mt-8">
          Nothing to show, Please search{" "}
        </h1>
      )}
    </div>
  );
}

export default Home;

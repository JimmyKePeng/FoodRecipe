import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecipe } from "./RecipeContext";

export default function Narbar() {
  const [input, setInput] = useState("");
  const { recipes, setRecipes } = useRecipe();

  async function handleSubmit(e) {
    e.preventDefault();
    setRecipes(input);
    // setRecipes([
    //   {
    //     publisher: "All Recipes",
    //     image_url: "http://forkify-api.herokuapp.com/images/100111309d9.jpg",
    //     title: "Double Crust Stuffed Pizza",
    //     id: "664c8f193e7aa067e94e8297",
    //   },
    //   {
    //     publisher: "BBC Good Food",
    //     image_url:
    //       "http://forkify-api.herokuapp.com/images/2150654_MEDIUM6068.jpg",
    //     title: "Pizza bianco with artichoke hearts",
    //     id: "664c8f193e7aa067e94e897b",
    //   },
    //   {
    //     publisher: "Vintage Mixer",
    //     image_url:
    //       "http://forkify-api.herokuapp.com/images/CauliflowerPizzaCrustRecipe06fdc.jpg",
    //     title: "Cauliflower Pizza Crust Recipe",
    //     id: "664c8f193e7aa067e94e8906",
    //   },
    //   {
    //     publisher: "101 Cookbooks",
    //     image_url:
    //       "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
    //     title: "Best Pizza Dough Ever",
    //     id: "664c8f193e7aa067e94e8704",
    //   },
    //   {
    //     publisher: "All Recipes",
    //     image_url: "http://forkify-api.herokuapp.com/images/100111309d9.jpg",
    //     title: "Double Crust Stuffed Pizza",
    //     id: "664c8f193e7aa067e94e8297",
    //   },
    //   {
    //     publisher: "BBC Good Food",
    //     image_url:
    //       "http://forkify-api.herokuapp.com/images/2150654_MEDIUM6068.jpg",
    //     title: "Pizza bianco with artichoke hearts",
    //     id: "664c8f193e7aa067e94e897b",
    //   },
    //   {
    //     publisher: "Vintage Mixer",
    //     image_url:
    //       "http://forkify-api.herokuapp.com/images/CauliflowerPizzaCrustRecipe06fdc.jpg",
    //     title: "Cauliflower Pizza Crust Recipe",
    //     id: "664c8f193e7aa067e94e8906",
    //   },
    //   {
    //     publisher: "101 Cookbooks",
    //     image_url:
    //       "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
    //     title: "Best Pizza Dough Ever",
    //     id: "664c8f193e7aa067e94e8704",
    //   },
    // ]);

    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${input}`
      );
      const result = await response.json();
      if (result.results) {
        setRecipes(result.data.recipes);
        console.log(result.data.recipes);
      }
    } catch (err) {}
    setInput("");
  }
  return (
    <>
      <nav className="p-6 bg-green-600 grid  grid-cols-3 font-bold text-lg">
        <h1 className="">Food Recipe</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="bg-white rounded-3xl pl-4 w-[100%]"
            placeholder="Enter food here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
        <div className="flex justify-end">
          <Link className="mr-4" to="/">
            Home
          </Link>
          <Link className="mr-4" to="/favorites">
            Favorites
          </Link>
        </div>
      </nav>
    </>
  );
}

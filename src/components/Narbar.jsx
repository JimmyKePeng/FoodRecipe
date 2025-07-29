import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecipe } from "./RecipeContext";
import { useNavigate } from "react-router-dom";
export default function Narbar() {
  const [input, setInput] = useState("");
  const { recipes, setRecipes } = useRecipe();
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    setRecipes(input);

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
    navigate("/");
  }
  return (
    <>
      <nav className="p-6 bg-green-600 grid  grid-cols-3 font-bold text-lg">
        <h1 className="">Food Recipe</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="bg-white rounded-3xl pl-4 w-[100%] h-12"
            placeholder="Enter a food or ingredient here"
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

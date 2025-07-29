import { useEffect, useState } from "react";
import { useRecipe } from "./RecipeContext";
import InstructionBox from "./InstructionBox";
import { useLocation } from "react-router-dom";
export default function RecipeInstruction() {
  const location = useLocation();
  const { id } = location.state;
  const [instruction, setInstruction] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const result = await response.json();
      if (result.status === "success") {
        setInstruction(result.data.recipe);
        setLoading(false);
        // console.log(result.data.recipe);
      }
    } catch (err) {}
    // setInstruction({
    //   publisher: "101 Cookbooks",
    //   ingredients: [
    //     {
    //       quantity: 4.5,
    //       unit: "cups",
    //       description:
    //         "unbleached high-gluten bread or all-purpose flour chilled",
    //     },
    //     {
    //       quantity: 1.75,
    //       unit: "tsps",
    //       description: "salt",
    //     },
    //     {
    //       quantity: 1,
    //       unit: "tsp",
    //       description: "instant yeast",
    //     },
    //   ],
    //   source_url: "http://www.101cookbooks.com/archives/001199.html",
    //   image_url:
    //     "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
    //   title: "Best Pizza Dough Ever",
    //   servings: 4,
    //   cooking_time: 30,
    //   id: "664c8f193e7aa067e94e8704",
    // });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : instruction ? (
        <InstructionBox instruction={instruction} />
      ) : (
        <p>Sorry no Instruction provided</p>
      )}
    </div>
  );
}

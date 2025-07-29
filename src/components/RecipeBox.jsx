import { useNavigate } from "react-router-dom";
import RecipeInstruction from "./RecipeInstruction";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { useRecipe } from "./RecipeContext";

export default function RecipeBox({ item }) {
  const [like, setLike] = useState(false);
  const navigate = useNavigate();
  const { favorites, removeFromFavorite, addToFavorite } = useRecipe();

  function handleClick() {
    navigate("/detail", { state: { id: item.id } });
  }
  function handleLike() {
    if (like) removeFromFavorite(item.id);
    else addToFavorite(item.id);
    setLike((prev) => !prev);
  }
  return (
    <div className="p-3 rounded-[10px] m-4 shadow-2xl">
      <div className="rounded-[10px]  h-[350px] w-[250px] relative">
        <img className="h-[50%] w-[100%] " src={item.image_url} />
        <p className="text-xs text-blue-500 m-0.5">From: {item.publisher}</p>
        <p className="font-bold text-sm m-0.5">{item.title}</p>
        <button
          className="bg-green-600 text-white rounded-[5px] p-2 text-sm absolute bottom-2 cursor-pointer"
          onClick={handleClick}
        >
          INGREDIENT DETAILS
        </button>
        <div className="absolute bottom-4 right-2" onClick={handleLike}>
          {favorites.some((i) => i.id === item.id) ? (
            <FaHeart className="text-red-600 size-6" />
          ) : (
            <FaRegHeart className="text-red-600 size-6" />
          )}
        </div>
      </div>
    </div>
  );
}

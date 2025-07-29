import RecipeBox from "../components/RecipeBox";
function Favorites() {
  const storedFav = JSON.parse(localStorage.getItem("favorites")); // its a string. so dont forget to parse into an object.
  console.log(storedFav);
  return (
    <div className="flex flex-wrap">
      {storedFav && storedFav.length > 0 ? (
        storedFav.map((item, index) => <RecipeBox item={item} key={index} />)
      ) : (
        <h1>No Favorites yet</h1>
      )}
    </div>
  );
}

export default Favorites;

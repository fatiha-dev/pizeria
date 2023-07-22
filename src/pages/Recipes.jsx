import { Recipe } from "../context/Recipe"
import { recipes } from "../data"
export function Recipes() {
    return(
        <div className="Recipe-container">
            {recipes.map(
                item =>
                <Recipe  data={item}/>
            )}
        </div>
    )
}
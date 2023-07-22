import { useContext } from "react";
import "./recipe.css";
import {RecipesContext} from "./RecipesContext";
export function Recipe(props) {
    const {id, img, pizzaName, price, ingredients} = props.data;
    const {
        addOrder,
        orderItems
    } = useContext(RecipesContext);

    return(
        <>
        <div className="recipe-card flex">
            <img src={img} />
            <div className="pizza-info flex">
            <h2 className="recipe-name">{pizzaName}</h2>
            <h2 className="price"><span>{price}</span>$</h2>
            </div>
            <div className="ingredients">
                <h4>INGREDIENTS</h4>
                <p>
                    {ingredients}
                </p>
            </div>
            <button onClick={()=> addOrder(id)}
            className="add-btn">Order</button>
        </div>
        </>
            )
}
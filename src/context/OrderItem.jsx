import React , {useContext} from "react";
import { PlusCircle, MinusCircle} from "phosphor-react";
import { RecipesContext } from "./RecipesContext";
export function OrderItem(props) {
    const {id, img, pizzaName, price} = props.data
    const { addOrder,
            removeOrder,
            updateCounter,
            clearOrders,
            orderItems, } = useContext(RecipesContext);

    return(
        <div className="cart flex">
            <div className="pizza flex">
                <img src={img} className="pizza-img"/> 
                <h3 className="pizza-name--cart"><span>{pizzaName}</span></h3>     
            </div>
            <div className="pizza-details--cart">
                <div className="unit-price flex" >
                    <p>price</p>
                    <p>{price}$</p>
                </div>
                <div className="pizza-quantity--cart flex" >
                    <input className="quantity--cart" value={orderItems[id]} onChange={(e) => updateCounter(Number(e.target.value), id)} /> 
                    <span>
                        <PlusCircle size={32} color="red" className="plus" onClick={() => (addOrder(id))} />
                        <MinusCircle size={32} color="red" className="minus" onClick={() => (removeOrder(id))}/> 
                    </span>
                </div>
                <div>
                    <button className="btn--cart" onClick={() => clearOrders(id)} >clear</button>
                </div>
                
            </div>
        </div> 
    )
}
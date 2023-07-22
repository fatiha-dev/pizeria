import React, {useContext} from "react";
import { OrderItem} from "../context/OrderItem";
import { recipes } from "../data";
import { RecipesContext } from "../context/RecipesContext";
import { useNavigate } from "react-router-dom";
export function Order() {
    const {  orderItems, getTotalPrice} = useContext(RecipesContext);
    const total = getTotalPrice().toFixed(2);
    const navigate = useNavigate();
    return(
    
        <div className="carts-container grid">
            <div className="carts grid">
            {
                recipes.map((item) => {
                    if(orderItems[item.id] !== 0) {
                        return <OrderItem data={item} />
                    }
                })
            }
            </div>
            {total > 0 ? (
        <div className="total-price flex">
          <p> <span>Total</span>  {total}$ </p> 
          
        </div>

      ) : (
        <h1 className="empty-mssg"> Your Shopping Cart is Empty</h1>
      )}
        </div>
    
        
    )
}
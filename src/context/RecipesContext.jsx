import React, { createContext, useState} from 'react';
import { recipes } from '../data';


export const RecipesContext = createContext(null)

const getDefault = () => {
    let order = {};
    for(let i=1; i<recipes.length +1; i++)  {
        order[i] = 0;
    }
    return order;
}

export function RecipesContextProvider(props) {
    const [orderItems, setOrderItems] = useState(getDefault());

    const addOrder = (pizzaId) => {
        setOrderItems((prev) => (
            {
                ...prev,
                [pizzaId]: prev[pizzaId] + 1
            }
        ))
    }
    const removeOrder = (pizzaId) => {
            setOrderItems((prev) => (
                {
                    ...prev,
                    [pizzaId]: prev[pizzaId] + 1
                }
            ))
        }
    const updateCounter = (newAmount, pizzaId) => {
        setOrderItems(prev => ({
            ...prev,
            [pizzaId] : newAmount
        }))
    }
    const clearOrders = (pizzaId) => {
        setOrderItems((prev) => ({
            ...prev,
            [pizzaId]: 0
        }))
    }
    const getTotalPrice = () => {
        let total = 0;
        for(const item in orderItems){
            if(orderItems[item] > 0 ) {
                let itemInfo = recipes.find((recipe) => recipe.id === Number(item)) 
                total+= orderItems[item] * itemInfo.price;
            }
        }
        return total;
    }

    const contextValue = {
        addOrder,
        removeOrder,
        updateCounter,
        clearOrders,
        getTotalPrice,
        orderItems,
    }
  return (
    
      <RecipesContext.Provider value={contextValue}>
        {props.children}
      </RecipesContext.Provider>
    
  )
}


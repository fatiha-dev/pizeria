import pizza from "../assets/colorato.jpg"
import "./recipe.css"
export function Recipe() {
    return(
        <>
        <div className="recipe-card flex">
            <img src={pizza} />
            <div className="pizza-info flex">
            <h2 className="recipe-name">Margaritta</h2>
            <h2 className="price">12$</h2>
            </div>
            <div className="ingredients">
                <h4>INGREDIENTS</h4>
                <p>
                    Lorem ipsum dolor sit amet 
                    consectetur, adipisicing elit.
                    Quasi, velit, magnam nisi, 
                    debitis alias quae dicta 
                    suscipit quam harum neque 
                    vero maiores tempore quos 
                    nesciunt deserunt quisquam 
                    minus cupiditate at?
                </p>
            </div>
        </div>
        </>
            )
}
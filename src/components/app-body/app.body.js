import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import appBodyStyles from "./app-body.module.css";

const AppBody = props => {
    return (
        <div className={appBodyStyles.app_body}>
            <BurgerIngredients/>
            <div className={appBodyStyles.place}></div>
            <BurgerConstructor/>
        </div>
    );
}
export default AppBody;
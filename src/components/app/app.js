import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";


const App = props => {
    return (
        <>
        <AppHeader/>
        <BurgerIngredients/>
        <BurgerConstructor/>
        </>
    );
}
export default App;

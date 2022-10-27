import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import data from '../../utils/data';
import ProductList from "../product-list/product-list";


const BurgerIngredients = props => {
    const [current, setCurrent] = React.useState('bun')
    return (
        <div>
            <p className="text text_type_main-large">Соберите бургер</p>
            <div style={{display: 'flex'}}>
                <Tab value="bun" active={current==='bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current==='sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current==='main'} onClick={setCurrent}>
                    Начинка
                </Tab>
            </div>
            <ProductList data={data} type={current}/>
        </div>
    );
}

export default BurgerIngredients;
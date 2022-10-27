import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import data from '../../utils/data';
import ProductList from "../product-list/product-list";
import burgerIngredientsStyles from './burger-ingredients.module.css';


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
            <div className={burgerIngredientsStyles.ingredients}>
                <ProductList data={data} type={'bun'}/>
                <ProductList data={data} type={'sauce'}/>
                <ProductList data={data} type={'main'}/>
            </div>
        </div>
    );
}

export default BurgerIngredients;

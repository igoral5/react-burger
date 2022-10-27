import { Button, CurrencyIcon, ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import data from "../../utils/data";
import burgerConstructorStyle from './burger-constructor.module.css';

const BurgerConstructor = props => {
    const bunUp = data.find(val => val._id === '60666c42cc7b410027a1a9b1') 
    const bunDown = data.find(val => val._id === '60666c42cc7b410027a1a9b2')
    const sauce = data.find(val => val._id === '60666c42cc7b410027a1a9b8')
    const main = data.find(val => val._id === '60666c42cc7b410027a1a9b6')
    return (
        <div>
            <div className={burgerConstructorStyle.place}></div>
            <div className={burgerConstructorStyle.constructor}>
                <div className={burgerConstructorStyle.constructor_item_2}>
                <DragIcon type="primary"/>
                <ConstructorElement 
                    type={'top'} isLocked={true} handleClose={false} text={bunUp.name}  thumbnail={bunUp.image} price={bunUp.price} key={bunUp._id}/>
                </div>
                <div className={burgerConstructorStyle.constructor_item_2}>
                <DragIcon type="primary"/>
                <ConstructorElement 
                    isLocked={false} handleClose={true} text={sauce.name}  thumbnail={sauce.image} price={sauce.price} key={sauce._id}/>
                </div>
                <div className={burgerConstructorStyle.constructor_item_2}>
                <DragIcon type="primary"/>
                <ConstructorElement 
                    isLocked={true} handleClose={true} text={main.name}  thumbnail={main.image} price={main.price} key={main._id}/>
                </div>
                <div className={burgerConstructorStyle.constructor_item_2}>
                <DragIcon type="primary"/>
                <ConstructorElement 
                    type={'bottom'} isLocked={true} handleClose={false} text={bunDown.name} thumbnail={bunDown.image} price={bunDown.price} key={bunDown._id}/>
                </div>
            </div>
        <div className={burgerConstructorStyle.constructor_item_3}>
                <p className="text text_type_digits-medium p-2">610</p>
                <span className="p-2">
                    <CurrencyIcon type="primary"/>
                </span>
                <span className="p-2">
                    <Button type="primary" size="medium">Оформить заказ</Button>
                </span>
            </div>
        </div>
    );
}
export default BurgerConstructor;

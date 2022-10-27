import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import productStyle from './product.module.css';

const Product = ({name, image, price}) => {
    return (
        <div className={productStyle.product}>
            <img src={image} alt={name}/>
            <span className={productStyle.price}>
                <span className="text text_type_digits-default mr-2">{price}</span>
                <CurrencyIcon type="primary"/>
            </span>
            <span className="text text_type_main-default">{name}</span>
        </div>
    );
}
export default Product;
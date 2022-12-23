import React from "react";
import Product from "../product/product";
import productListStyles from './product-list.module.css';

const typeDefine = {
    bun: 'Булки',
    sauce: 'Соусы',
    main: 'Начинка'
}

const ProductList = ({data, type}) => {
    return (
        <div>
            <div className="text text_type_main-medium">{typeDefine[type]}</div>
            <div className={productListStyles.product_list}>
                {data.filter(it => it.type === type).map(val =>(
                    <Product name={val.name} image={val.image} price={val.price} key={val._id}/> 
                ))}
            </div>
        </div>
    );
}
export default ProductList;

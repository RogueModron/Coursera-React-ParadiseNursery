import './ProductList.css';
import { useDispatch, useSelector } from 'react-redux';
import { usePlantsList } from './../hooks/usePlantsList.js';
import { addItem, removeItem } from './../store/CartSlice';
import MainHeader from './MainHeader';
import ProductCard from './ProductCard';

function ProductList({ onProductsPageRequired, onCartPageRequired }) {
    const handleProductsClick = () => {
        onProductsPageRequired();
    };
    const handleCartClick = () => {
        onCartPageRequired();
    };

    const plants = usePlantsList();

    const cartItems = useSelector(state => state.cart.items);

    const isItemSelected = (item) => {
        const found = cartItems.find(itemInCart => itemInCart.id === item.id);
        return found ? true : false;
    };

    const dispatch = useDispatch();
    const handleToggleSelection = (item) => {
        if (isItemSelected(item)) {
            dispatch(removeItem(item));
        } else {
            dispatch(addItem(item));
        }
    };

    return (
        <>
            <MainHeader
                cartItems={cartItems}
                onProductsClick={handleProductsClick}
                onCartClick={handleCartClick}/>

            <div className='product-list-container'>
                { plants.map((group, groupIndex) => {
                    return (
                        <div className='product-list-category' key={groupIndex}>
                            <div className='product-list-category-title'>
                                {group.category}
                            </div>
                            <div className='product-list-category-products'>
                                { group.plants.map((product, productIndex) => {
                                    return (
                                        <ProductCard
                                            item={product}
                                            selected={isItemSelected(product)}
                                            onToggleSelection={handleToggleSelection}
                                            key={productIndex}/>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default ProductList;

/* Requirements:
- Six unique houseplants for sale, each displaying thumbnail, name, and price: 2 points
- Group the plants into at least three categories on the page: 1 point
- An Add to Cart button for each plant, each with the following behavior: 6 points
    - After selecting it, the shopping cart icon increases by one.
    - After selecting it, the button becomes disabled.
    - After selecting it, the appropriate plant gets added to the shopping cart.
*/

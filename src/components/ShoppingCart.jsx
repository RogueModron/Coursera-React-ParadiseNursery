import './ShoppingCart.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './../store/CartSlice';
import MainHeader from './MainHeader';
import ShoppingCard from './ShoppingCard';

function ShoppingCart({ onProductsPageRequired, onCartPageRequired }) {
    const handleProductsClick = () => {
        onProductsPageRequired();
    };
    const handleCartClick = () => {
        onCartPageRequired();
    };

    const cartItems = useSelector(state => state.cart.items);

    const calculateTotalCost = () => {
        return cartItems.reduce((total, item) => {
            const costString = item.cost.substring(1);
            const cost = Number.parseFloat(costString);
            return total += (cost * item.quantity);
        }, 0);
    };
    const calculateTotalQuantity = () => {
        return cartItems.reduce((total, item) => {
            return total += item.quantity;
        }, 0);
    };

    const dispatch = useDispatch();
    const handleUpdateQuantity = (item) => {
        if (item.quantity > 0) {
            dispatch(updateQuantity(item));
        } else {
            dispatch(removeItem(item));
        }
    };

    const [checkedout, setCheckedout] = useState(false);
    const handleCheckout = () => {
        setCheckedout(true);
    };

    return (
        <>
            <MainHeader
                cartItems={cartItems}
                onProductsClick={handleProductsClick}
                onCartClick={handleCartClick}/>

            <div className='shopping-cart-container'>
                <div className='shopping-cart-items'>
                    { cartItems.map((item, index) => {
                        return (
                            <ShoppingCard
                                item={item}
                                onUpdateQuantity={handleUpdateQuantity}
                                key={index}/>
                        );
                    })}
                </div>
                <div className='shopping-cart-checkout-container'>
                    <div className="shopping-cart-checkout-total">
                        <div>
                            Total: {calculateTotalCost()}
                        </div>
                        <div>
                            Quantity: {calculateTotalQuantity()}
                        </div>
                    </div>
                    { checkedout ? (
                        <div>
                            Coming NOT so soon ...
                        </div>
                    ) : (
                        <button className="shopping-cart-checkout-confirm"
                            onClick={handleCheckout}>
                            Checkout
                        </button>
                    )}
                    <button className="shopping-cart-checkout-continue"
                        onClick={handleProductsClick}>
                        Continue Shopping
                    </button>
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;

/* Requirements:
- The total number of plants in the cart: 2 points
- The total cost of all items in the cart: 2 points
- Each plant type in the cart displays a thumbnail, name, and unit price: 6 points
- Increase button for each plant type in the cart that increments the number of items in the cart by one each time it's clicked and updates all appropriate values: 4 points
- Decrease button for each plant type in the cart that decrements the number of items in the cart by one each time it's clicked and updates all appropriate values: 4 points
- A delete button: 2 points
- A checkout button (displays the message “Coming Soon” or similar): 1 point
- A continue shopping button that links to the product listing page: 2 points
*/

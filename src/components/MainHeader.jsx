import './MainHeader.css';
import Cart from './Cart';
import Logo from "./Logo";

function MainHeader({ cartItems, onProductsClick, onCartClick }) {
    /*
    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );
    */
   const totalItems = cartItems.length;

    return (
        <nav className="main-header-nav">

            <div className="main-header-brand">
                <div className="main-header-logo">
                    <Logo/>
                </div>
                <div className="main-header-title">
                    <a className="main-header-link" href="/">
                        Paradise Nursery
                    </a>
                </div>
            </div>

            <ul className="main-header-pages">
                <li className="main-header-link-container">
                    <a className="main-header-link" href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onProductsClick();
                        }}>
                        Products
                    </a>
                </li>
            </ul>

            <div className="main-header-cart">
                <a className="main-header-link" href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        onCartClick();
                    }}>
                    <Cart totalItems={totalItems}/>
                </a>
            </div>

        </nav>
    );
}

export default MainHeader;

/* Requirements:
- Displays on both the product listing page and shopping cart page 2 points
- A shopping cart icon with a value that displays the total number of items in the cart: 3 points
- Navigation to either of the other pages: 2 points
*/

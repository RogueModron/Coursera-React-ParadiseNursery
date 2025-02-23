import './ShoppingCard.css';

function ShoppingCard({ item, onUpdateQuantity }) {
    const calculateSubtotal = () => {
        const costString = item.cost.substring(1);
        const cost = Number.parseFloat(costString);
        return cost * item.quantity;
    };

    return (
        <div className="shopping-card-container">
            <div className="shopping-card-name">
                {item.name}
            </div>
            <div className="shopping-card-image">
                <img src={item.image} alt={item.name} decoding='async' loading='lazy'></img>
            </div>
            <div className="shopping-card-cost">
                {item.cost}
            </div>
            <div className="shopping-card-quantity-container">
                <button className="shopping-card-quantity-control"
                    onClick={() => {
                        if (item.quantity === 1) {
                            return;
                        }
                        onUpdateQuantity({
                            ...item,
                            quantity: item.quantity - 1
                        });
                    }}>
                    -
                </button>
                <div className="shopping-card-quantity">
                    {item.quantity}
                </div>
                <button className="shopping-card-quantity-control"
                    onClick={() => {
                        onUpdateQuantity({
                            ...item,
                            quantity: item.quantity + 1
                        });
                    }}>
                    +
                </button>
            </div>
            <div className="shopping-card-subtotal">
                Subtotal: {calculateSubtotal()}
            </div>
            <div>
                <button className="shopping-card-delete"
                    onClick={() => {
                        onUpdateQuantity({
                            ...item,
                            quantity: 0
                        });
                    }}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default ShoppingCard;

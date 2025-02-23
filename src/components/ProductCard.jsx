import './ProductCard.css';

function ProductCard({ item, selected, onToggleSelection }) {
    return (
        <div className="product-card-container">
            <div className="product-card-name">
                {item.name}
            </div>
            <div className="product-card-image">
                <img src={item.image} alt={item.name} decoding='async' loading='lazy'></img>
            </div>
            <div className="product-card-description">
                {item.description}
            </div>
            <div className="product-card-cost">
                {item.cost}
            </div>
            <div>
                <button className="product-card-toggler"
                    disabled={selected}
                    onClick={() => {
                        onToggleSelection(item);
                    }}>
                    { selected ? (
                        <>Added To Cart</>
                    ) : (
                        <>Add To Cart</>
                    )}
                </button>
            </div>
        </div>
    );
}

export default ProductCard;

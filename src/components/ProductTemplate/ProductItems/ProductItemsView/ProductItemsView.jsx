import React from 'react';

function ProductItemsView({ item, addToShoppingBag }) {
    return (
        <React.Fragment>
            <div className="product-item-tile">
                <div className="product-item-link-wrapper" >
                    <img src={item.image} alt="product" />
                    <button
                        id={item.id}
                        onClick={addToShoppingBag}
                        className={item.isAdded ? "regular-button added" : "regular-button"}>
                        {item.isAdded ? 'Remove from cart' : 'Add to cart'}
                    </button>
                </div>
                <div className="product-item-tile-description">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>{parseInt(item.price)}$</p>
                </div>
            </div>
        </React.Fragment>
    )
};

export default React.memo(ProductItemsView);
// export default ProductItemsView;

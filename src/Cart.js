import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
           products: [
            {
            price: 999,
            title: 'Phone',
            qty: 4,
            img: '',
            id: 1
            },
            {
            price: 99,
            title: 'Watch',
            qty: 10,
            img: '',
            id: 2
            },
            {
            price: 9999,
            title: 'Laptop',
            qty: 15,
            img: '',
            id: 3
            },
            {
            price: 599,
            title: 'Earphones',
            qty: 100,
            img: '',
            id: 4
            },
           ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    render() {
        const {products} = this.state;
        return (
            <div className="cart">
                {/* <CartItem qty={1} price={99} title={"Watch"}  />
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/> */}
                {products.map((product) => {
                    return ( 
                        <CartItem 
                            product = {product} 
                            key = {product.id} 
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;
// import CartItem from "./CartItem";
import React from "react"
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
        super();
        this.state = {
            products: [
            {
            price: 999,
            title: 'Phone',
            qty: 4,
            img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            id: 1
            },
            {
            price: 99,
            title: 'Watch',
            qty: 10,
            img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            id: 2
            },
            {
            price: 9999,
            title: 'Laptop',
            qty: 15,
            img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            id: 3
            },
            {
            price: 599,
            title: 'Earphones',
            qty: 100,
            img: 'https://plus.unsplash.com/premium_photo-1668418188837-d40b734ed6d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWFycGhvbmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            id: 4
            },
            ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    handleIncreaseQuantity = (product) => {
        console.log("Hey increase the qty of", product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products: products
        })
    }
    handleDecreaseQuantity = (product) => {
        console.log("hey decrease the qty of", product);
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 0) {
            return;
        }
        products[index].qty -= 1;
        this.setState({
            products: products
        });
    }
    handleDeleteProduct = (id) => {
        const {products} = this.state;
        const items = products.filter((item) => item.id !== id);
        this.setState({
            products: items
        })
  }
  getCartCount = () => {
    const {products} = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })
    return count; 
  }
  getCartTotal = () => {
    const {products} = this.state;
    let sum = 0;
    products.forEach((product) => {
      sum += product.qty*product.price;
    })
    return sum;
  }
  render() {
    const {products} = this.state;
    return (
      <div className="App">
         {/* <h1>Cart Sujit</h1>  */}
         <Navbar
          count = {this.getCartCount()} 
         />
         <Cart
           products = {products}
           onIncreaseQuantity = {this.handleIncreaseQuantity}
           onDecreaseQuantity = {this.handleDecreaseQuantity}
           onDeleteProduct = {this.handleDeleteProduct}
         />
         <div style={{padding: 10, fontSize: 20}}>TOTAL: {this.getCartTotal( )}</div>
      </div>
    );
  }
}

export default App;

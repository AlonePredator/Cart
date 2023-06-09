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
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Products from './components/Products.';
import data from './data.json'
import Filter from './components/filter'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    };
  };
  filterProducts = (event) => {
    //impolement
    console.log("filterProducts", event.target.value);
    if (event.target.value === "") {
      this.setState({
        size: event.target.value, productS: data.products
      })
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      })
    }
  }
  sortProducts = (event) => {
    console.log("sortProducts", event.target.value);
    //impolement
    const sort = event.target.value;
    this.setState({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : sort === "lowest"
              ? a.price > b.price
                ? 1
                : -1
              : a._id < b._id
                ? 1
                : -1
        ),
    });
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts} />
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">Cart Item</div>
          </div>
        </main>
        <footer>
          All rights are reserved
      </footer>

      </div>
    );
  }
}



export default App;

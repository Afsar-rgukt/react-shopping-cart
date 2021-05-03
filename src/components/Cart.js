import React, { Component } from 'react'
import formatCurrency from '../util';

export class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: "",
            showCheckout: false,
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems
        };
        this.props.createOrder(order)
    }
    render() {
        const { cartItems } = this.props
        return (
            <div>
                {cartItems.length === 0 ? (
                    <div className="cart cart-header">Cart is emplty</div>
                ) : (
                    <div className="cart cart-header">
                        You have {cartItems.length} in the cart{" "}</div>
                )}
                <div>
                    <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map((item) => (
                                <li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.title}></img>
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className="right">
                                            {formatCurrency(item.price)} x {item.count} {" "}
                                            <button className="button" onClick={() => this.props.removeFromCart(item)}>
                                                Rremove
                                        </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="cart">
                        <div className="total">
                            Total :{" "}
                            {formatCurrency(
                                cartItems.reduce((a, c) => a + c.price * c.count, 0)
                            )}
                        </div>
                        <button
                            onClick={() => {
                                this.setState({ showCheckout: true })
                            }}
                            className="button primary">
                            Proceed
                        </button>
                    </div>
                </div>
                { this.state.showCheckout && (
                    <div>
                        <form onSubmit={this.createOrder}>
                            <ul className="form-container">
                                <li>
                                    <lable>Email</lable>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        onChange={this.handleInput}>
                                    </input>

                                </li><li>
                                    <lable>Name</lable>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        onChange={this.handleInput}>
                                    </input>
                                </li><li>
                                    <lable>Address</lable>
                                    <input
                                        name="address"
                                        type="text"
                                        required
                                        onChange={this.handleInput}>
                                    </input>
                                </li>
                                <br />
                                <br />

                                <button className="button primary" type="submit">
                                    CheckOut
                                        </button>

                            </ul>
                        </form>
                    </div>
                )}
            </div>

        );
    }
}


export default Cart

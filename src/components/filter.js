import React, { Component } from 'react';
class filter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="filter">
                <div className="filter-results">{this.props.count} Products</div>
                <div className="filter-sort">   order{" "}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option vlaue="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>

                    </select>
                </div>
                <div className="filter-size">Filter{" "}
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="all">All </option>
                        <option value="XS">XS </option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>


            </div>
        )
    }
}
export default filter;
import React, { Component } from "react";
import "./BurgerBuilder.css";
import { connect } from "react-redux";
class BurgerBuilder extends Component {
  // render loai vong lap de thay doi giao dien inside burger
  renderInside = () => {
    let { burger } = this.props;
    return Object.entries(burger).map(([item, value], index) => {
      let breadMid = [];
      for (let i = 0; i < value; i++) {
        breadMid.push(<div key={i} className={item}></div>);
      }
      return breadMid;
    });
  };
  //binding lại menu
  renderMenu = () => {
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([menuItem, value], index) => {
      return (
        <tr key={index}>
          <td>{menuItem}</td>
          <td>
            <button
              onClick={() => this.props.addBreadMid(menuItem, 1)}
              className="btn btn-success"
            >
              +
            </button>
            <span> {burger[menuItem]} </span>
            <button
              className="btn btn-danger"
              onClick={() => this.props.addBreadMid(menuItem, -1)}
            >
              -
            </button>
          </td>
          <td>{value}</td>
          <td>{burger[menuItem] * value}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-success" style={{ marginLeft: "150px" }}>
          BurgerBuilder
        </h3>
        <div className="row">
          <div className="col-7 ">
            <div className="breadTop"></div>
            {this.renderInside()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <h3>Choose Food</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Food Order</th>
                  <th></th>
                  <th> Price </th>
                  <th>Total</th>
                </tr>
                {this.renderMenu()}
              </thead>
              <tfoot>
                <tr>
                  <td colSpan="2"></td>
                  <th>Total to pay</th>
                  <th>{this.props.total}</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBreadMid: (propsBurger, amount) => {
      const action = {
        type: "ADD_BREAD",
        propsBurger,
        amount,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);

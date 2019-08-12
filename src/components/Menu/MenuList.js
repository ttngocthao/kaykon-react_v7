import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { compose } from "redux";

import { getMenu } from "../../store/actions/menuAction";
import MenuDisplay from "./MenuDisplay";

class MenuList extends Component {
  componentDidMount() {
    this.props.getMenu();
  }
  render() {
    console.log("this.props from menu list", this.props);
    const { menuList, auth } = this.props;
    return (
      <div>
        <h2>This is menu list</h2>
        {auth.uid && (
          <p>
            <Link to="/add-menu">Add new menu</Link>
          </p>
        )}
        {menuList
          ? menuList.map(item => {
              return <MenuDisplay key={item.menuId} item={item} />;
            })
          : "<h3>Loading</h3>"}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("menu list", state);
  return { menuList: state.menu.menuList, auth: state.firebase.auth };
};
const mapDispatchToProps = dispatch => {
  return {
    getMenu: () => dispatch(getMenu())
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MenuList);

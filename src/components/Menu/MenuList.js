import React, { Component } from "react";

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
    const { menuList } = this.props;
    return (
      <div>
        <h2>This is menu list</h2>
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
  return { menuList: state.menu.menuList };
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

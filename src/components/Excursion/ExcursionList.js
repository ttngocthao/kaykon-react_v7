import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { compose } from "redux";

import { firebaseConnect } from "react-redux-firebase";

import { getExcurList, deleteExcur } from "../../store/actions/excursionAction";
import EachExcursion from "./EachExcursion";
import NotiTemp from "../Notification/NotiTemp";

class ExcursionList extends Component {
  state = {
    notifiMsg: null
  };
  componentDidMount() {
    this.props.getExcurList();
  }
  deleteHandle = item => {
    this.props.deleteExcur(item.id, item.imgName, this.props.firebase);
    this.setState({
      notifiMsg: "deleted successfully"
    });
    setTimeout(() => {
      this.setState({
        notifiMsg: null
      });
    }, 3000);
  };
  render() {
    const { auth, excursionList } = this.props;
    let excurListContent;
    if (excursionList) {
      if (excursionList.length === 0) {
        excurListContent = <p>No excursion availabe</p>;
      } else {
        excurListContent = excursionList.map((item, index) => {
          return (
            <EachExcursion
              key={index}
              excurId={item.id}
              index={index}
              name={item.name}
              date={item.date}
              text={item.text}
              imgUrl={item.imgUrl}
              auth={this.props.auth}
              openHandle={e => this.toggleArticle(e)}
              deleteExcur={() => this.deleteHandle(item)}
            />
          );
        });
      }
    }

    return (
      <section>
        <h1>This is ExcursionList</h1>
        {auth.uid && <Link to="/create-excursion">Add new excursion</Link>}
        {excursionList ? excurListContent : <p>Loading...</p>}
        {this.state.notifiMsg && <NotiTemp notifiMsg={this.state.notifiMsg} />}
      </section>
    );
  }
}
const mapStateToProps = state => {
  console.log("state from excur list", state);
  return {
    auth: state.firebase.auth,
    excursionList: state.excursion.excursionList,
    state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getExcurList: () => dispatch(getExcurList()),

    deleteExcur: (excurId, imageName, firebase) =>
      dispatch(deleteExcur(excurId, imageName, firebase))
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firebaseConnect()
)(ExcursionList);

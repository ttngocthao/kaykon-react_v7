import React, { Component } from "react";
import moment from "moment";
class EachExcursion extends Component {
  state = {
    isOpen: false
  };
  componentDidMount() {
    if (this.props.index === 0) {
      this.setState({
        isOpen: true
      });
    }
  }

  toggleView = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div className="excur__excur-wrap">
        <div className="excur__top-wrap">
          <ul className="excur__excur-time">
            <li className="excur__excur-month">
              {moment(this.props.date).format("MMM YY")}
            </li>
            <li className="excur__excur-date">
              {moment(this.props.date).format("DD")}
            </li>
          </ul>
          <h4 className="excur__excur-name">{this.props.name} </h4>
          <div>
            <i
              className={`fas fa-chevron-up show-article__btn ${this.state
                .isOpen && "expanded"}`}
              onClick={this.toggleView}
            />
            {this.props.auth.uid && (
              <i
                className="fas fa-times delete-article__btn"
                onClick={this.props.deleteExcur}
              />
            )}
          </div>
        </div>

        <div className={`excur__text-wrap ${this.state.isOpen && "expanded"}`}>
          <figure className="excur__img-wrap">
            <img
              className="excur__img"
              src={this.props.imgUrl}
              alt={this.props.imgName}
            />
          </figure>
          <div className="excur__text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}
export default EachExcursion;

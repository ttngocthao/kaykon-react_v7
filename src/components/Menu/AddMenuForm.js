import React, { Component } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddMenuForm extends Component {
  render() {
    return (
      <div>
        <h2>Add new menu for the week</h2>
        <form>
          <div className="input-field">
            <lablel htmlFor="dateFrom">From</lablel>
            <DatePicker />
          </div>
          <div className="input-field">
            <lablel htmlFor="dateTo">To</lablel>
            <DatePicker />
          </div>
          <div className="input-field">
            <h5>Monday</h5>
            <label>Dish's name</label>
            <input />
          </div>
        </form>
      </div>
    );
  }
}
export default AddMenuForm;

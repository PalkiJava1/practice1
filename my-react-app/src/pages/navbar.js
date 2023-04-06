import './style.css';
import React from "react";
import { connect } from "react-redux";
import { get } from "lodash";

const navbar = ({ isChecked }) => {
  console.log(isChecked);
  return (
    <div class="topnav">
      <a class="active" href="/">Home</a>
      <a href="/about">About</a>
      {isChecked ? <a href="/contact">Contact</a> : null}
    </div>
  )
};

const mapStateToProps = (state) => ({
  isChecked: get(state, "checkreducer.isChecked"),
});

export default connect(mapStateToProps, {})(navbar);

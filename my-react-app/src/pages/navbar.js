
import React from "react";
import { connect } from "react-redux";
import { get } from "lodash";

const navbar = ({ isChecked }) => {
  console.log(isChecked);
  return <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/about">About us <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/contact">contact <span class="sr-only">(current)</span></a>
        </li>


      </ul>

    </div>
  </nav></div>;
};

const mapStateToProps = (state) => ({
  isChecked: get(state, "checkreducer.isChecked"),
});

export default connect(mapStateToProps, {})(navbar);

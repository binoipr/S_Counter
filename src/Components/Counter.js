import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCount, decrementCount } from "../Actions/counterActions";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

class Counter extends Component {
  increment = () => {
    this.props.incrementCount();
  };
  decrement = () => {
    this.props.decrementCount();
  };
  render() {
    return (
      <div className="text-center">
        <h2 className="mt-5 mb-3">Counter</h2>
        <Button onClick={this.decrement} className="mr-3">
          -
        </Button>
        <span className="mr-3">{this.props.count}</span>
        <Button onClick={this.increment}>+</Button>
      </div>
    );
  }
}

Counter.propTypes = {
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
  count: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps, { incrementCount, decrementCount })(
  Counter
);

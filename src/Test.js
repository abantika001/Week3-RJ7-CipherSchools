import React from "react";
import Test from "./test";
import Proptypes from "prop-types";

const Test = () => {
  return (
    <div>
      <Test key={1} />
      <Test key={2} />
      <Test key={3} />
      <Test key={4} />
      <Test key={5} />
      <Test key={6} />
      <Test key={7} />
    </div>
  );
};

Test.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
}

export default Test;
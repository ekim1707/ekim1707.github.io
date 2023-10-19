import React from "react";
import "./styles.css";
import { Icon } from "semantic-ui-react";

const Nav = ({ selectedIndex, setSelectedIndex }) => {
  const buttonLabel = ["Take a ride to my block...", "Back to All Who Wander"];
  return (
    <div
      onClick={() => setSelectedIndex(selectedIndex === 0 ? 1 : 0)}
      className="navContainer hoverable"
      style={{ background: "white" }}
    >
      {/* <Icon name="car" size="large" /> */}
      {buttonLabel[selectedIndex]}
    </div>
  );
};

export default Nav;

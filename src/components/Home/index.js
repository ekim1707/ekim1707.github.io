import React from "react";
import "./styles.css";
import content from "./content";

const Home = () => {
  return (
    <div className="homeComponentContainer">
      <main>
        <br />
        <br />
        <br />
        <a href="mailto: ekim43@jh.edu">Contact</a>
        <br />
        <br />
        <a href="https://docs.google.com/document/d/1IHl9PxW29D2dVfXWqAFu3JytVS9TdNX7tXg7AcODVYI/edit?usp=sharing">
          Read directly from docs.google.com here instead of below (it has a
          chapter nav tool on the left side that makes things easier)
        </a>
        <br />
        <br />
        <br />
        <iframe
          width="816px"
          height="1056px"
          src="https://docs.google.com/document/d/e/2PACX-1vTQIheip2y6K5LIWaS7srMAPsO8tE-4uV2t5RGnzRZW57ncF9hmNj9oaoa5KC1UYlOzVA7T9tHA2Jm1/pub?embedded=true"
        ></iframe>
      </main>
    </div>
  );
};

export default Home;

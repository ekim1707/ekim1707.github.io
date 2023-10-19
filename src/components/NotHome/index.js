import React from "react";
import "./styles.css";
import { Button } from "semantic-ui-react";
import iframe from "./content";

const NotHome = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const buttonArrayFunction = () => {
    let buttonArray = [];
    for (let x = 1; x <= iframe.length; x++) {
      buttonArray.push(x);
    }
    return buttonArray;
  };
  const complicatedCrapDependenciesSuck = (e) => {
    // that was one stupid dependency issue that needed to be fixed... stupid in so many ways...
    e.target.innerHTML.length < 2
      ? setSelectedIndex(e.target.innerHTML - 1)
      : "";
  };
  return (
    <div
      className="notHomeContainer"
      style={{ width: "calc(100% - 500px)", height: "1056px" }}
    >
      Call this my 21st century Xanga page...
      <ul>
        Favorite books:
        <li>Catcher in the Rye - JD Salinger</li>
        <li>A River Runs Through It - Norman MacLean</li>
        <li>A Walk To Remember - Nicholas Sparks</li>
      </ul>
      <ul>
        Life probably should not be a quotation, but here are some of my
        favorite stuff i stole from other people:
        <li>
          "In the end, all things merge into one, and a river runs through
          it..."
        </li>
        <li>
          "Still, it is hard to know what gigantic portion of human life is
          spent in this same ratio of years underwater on legs to one premature,
          exhausted moment on wings"
        </li>
        <li>
          "And if you hold on tight to what you think is your thing, you may
          find you are missing all the rest.""
        </li>
        <li>
          So, so you think you can tell, heaven from hell, blue skies from pain
        </li>
      </ul>
      <ul>
        Favorite music:
        <li>This will be a long list</li>
      </ul>
      <ul>
        I've had much more failures than successes, but here are some videos of
        what i've accomplished in my free time, and some other random stuff:
        <br />
        <br />
        {iframe[selectedIndex]}
        <Button.Group
          onClick={(e) => complicatedCrapDependenciesSuck(e)}
          buttons={buttonArrayFunction()}
        />
      </ul>
      <ul>
        Famous people I think are cool:
        <li>Pat Tillman</li>
        <li>Joel Houston</li>
        <li>Dafran</li>
        <li>Bill Watterson</li>
      </ul>
      But please regard everything as YMMV, and pre-apologies for any TLDR
    </div>
  );
};

export default NotHome;

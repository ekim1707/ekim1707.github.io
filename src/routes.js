import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { resources } from "./environment/resources";
import HomeContainer from "./containers/HomeContainer";
import Nav from "./components/Nav";
import NotHomeContainer from "./containers/NotHomeContainer";

const ApplicationRouter = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const componentArray = [<HomeContainer />, <NotHomeContainer />];
  return (
    <Router>
      <Nav selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      <Routes>
        <Route
          path={resources.paths.basePath}
          element={componentArray[selectedIndex]}
        />
      </Routes>
    </Router>
  );
};

export default ApplicationRouter;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { resources } from "./environment/resources";
import HomeContainer from "./containers/HomeContainer";

const ApplicationRouter = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <Router>
      <Routes>
        <Route path={resources.paths.basePath} element={<HomeContainer />} />
      </Routes>
    </Router>
  );
};

export default ApplicationRouter;

import React from "react";
import { Switch } from "react-router-dom";
import Home from "components/layout/Home";
import About from "components/layout/About";
import PublicLayout from "components/layout/PublicLayout";

const Routes = props => {
  return (
    <Switch>
      <PublicLayout title="Characters Info" path="/" exact component={Home} />
      <PublicLayout title="About" path="/about/" component={About} />
    </Switch>
  );
};

export default Routes;

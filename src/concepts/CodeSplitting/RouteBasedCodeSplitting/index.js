import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ThrowError from "../../ErrorBoundary/ThrowError";
// import Home from "../../../pages/Home"
// import A11yExample from "../../A11y"
// import ContextExample from "../../Context"

/* 
React.lazy takes a function that must call a dynamic import(). 
This must return a Promise which resolves to a module with a default export containing a React component.
*/
const Home = lazy(() => import("../../../pages/Home"));
const A11yExample = lazy(() => import("../../A11y"));
const ContextExample = lazy(() => import("../../Context"));
// React.lazy currently only supports default exports.

const RouteBasedCodeSplitting = () => (
  <Router>
    {/*
    The lazy component should then be rendered inside a Suspense component,
     which allows us to show some fallback content (such as a loading indicator) 
     while we’re waiting for the lazy component to load. 
     */}
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/a11y" component={A11yExample} />
        <Route exact path="/context" component={ContextExample} />
        <Route exact path="/throw-error" component={ThrowError} />
      </Switch>
    </Suspense>
  </Router>
);

export default RouteBasedCodeSplitting;

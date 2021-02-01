import "./App.css";
import React from "react";
import NavBar from "./app/navBar";
import Footer from "./app/footer";

import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { MediaQueryProvider } from "react-media-query-hoc";

import Routes from "./routes";
import ErrorPage from "./pages/Error/errors";
import HomeContainer from "./pages/Home/container/homeContainer";

function App() {
  const Media = {
    mobile: "screen and  (max-width:766px)",
    tablet: "screen and (min-width:768px) and (max-width: 1100px)",
    desktop: "screen and (min-width:768px) and (max-width: 3000px)",
    cusHeight_600: "screen and (min-height: 600px) and (max-height: 699px)",
    cusHeight_700: "screen and (min-height: 700px) and (max-height: 760px)",
    cusHeight_800: "screen and (min-height: 761px) and (max-height: 850px)",
  };

  return (
    <MediaQueryProvider queries={Media}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        {Object.keys(Routes.routes).map((v, k) => (
          <Route
            key={k}
            path={`/${v}`}
            component={Routes.routes[v].component}
          />
        ))}
        {/* <Redirect to="/" /> */}

        <Route
          path="*"
          component={() => <ErrorPage ErrorInfo={"Page Not Found!"} />}
        />
      </Switch>
      
      <Footer/>
    </MediaQueryProvider>
  );
}

export default withRouter(App);

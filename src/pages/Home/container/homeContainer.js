import React from "react";
import { withMedia } from "react-media-query-hoc";
import Home from "../components/home";

const HomeContainer = ({ media, ...props }) => {
  return (
    <div className="container-0">
      <Home media={media} history={props.history} />
    </div>
  );
};

export default withMedia(HomeContainer);

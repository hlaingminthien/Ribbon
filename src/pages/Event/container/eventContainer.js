import React from "react";
import { Event } from "../components/event";
import { withMedia } from "react-media-query-hoc";

const EventContainer = ({ media, ...props }) => {
  return (
      <Event media={media}/>
  )}

  export default withMedia(EventContainer)
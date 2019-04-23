import React from "react";
import MediaQuery from "react-responsive";

const breakpoints = {
  laptop: "(min-width: 1024px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
  phone: "(max-width: 767px)"
};
// const { string, object } = React.propTypes;

export default function Breakpoint(props) {
  const breakpoint = breakpoints[props.name] || breakpoints.desktop;
  return (
    <MediaQuery {...props} query={breakpoint}>
      {props.children}
    </MediaQuery>
  );
}

// React.propTypes = {
//   name: string,
//   children: object
// };

import React from "react";

function Line(props) {
  return (
    <div style={parentFlexStyle}>
      <div style={quoteStyle}>{JSON.stringify(props.quote)}</div>
      <div style={movieStyle}>{JSON.stringify(props.movie)}</div>
    </div>
  );
}

const parentFlexStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "0.8%",
};

const quoteStyle = {
  color: "#66B2FF",
  fontSize: 19.7,
  fontWeight: "bolder",
  width: "71%",
  height: "fit-content",
};

const movieStyle = {
  color: "whitesmoke",
  fontSize: 16.1,
  fontWeight: "bolder",
  marginTop: "1%",
};

export default Line;

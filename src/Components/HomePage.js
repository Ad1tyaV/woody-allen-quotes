import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Line from "./Line";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { woodyAllenQuotes } from "../redux-setup/reducers/allLines";

function HomePage() {
  const allLines = useSelector(woodyAllenQuotes);
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * allLines.length)
  );
  const [line, setLine] = useState(allLines[randomIndex]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(line.quote);
      toast("Text copied to clipboard!");
    } catch (err) {
      toast("Failed to copy text: ", err);
    }
  };

  useEffect(() => {
    setLine(allLines[randomIndex]);
  }, [randomIndex, allLines]);

  return (
    <div
      className="testing"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <ToastContainer />
      <div style={iconContainerStyle}>
        <ShuffleIcon
          style={shuffleIconStyle}
          onClick={() => {
            setRandomIndex(Math.floor(Math.random() * allLines.length));
          }}
        />
        <AssignmentIcon style={shuffleIconStyle} onClick={copyToClipboard} />
      </div>
      <Line quote={line.quote} movie={line.movie} />
    </div>
  );
}

const shuffleIconStyle = {
  display: "flex",
  justifyContent: "center",
  width: "fit-content",
  color: "whitesmoke",
  marginRight: "20.6px",
};

const iconContainerStyle = {
  display: "flex",
  flexDirection: "row",
  marginTop: "6.2%",
};

export default HomePage;

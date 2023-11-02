import React, { useState } from "react";
import "./popup.css";
import { v4 as uid } from "uuid";

const CreateNotePopUp = ({ setIsOpen, onCreateNote }) => {
  const [color, setColor] = useState("");
  const [input, setInput] = useState("");
  const id = uid();
  const colors = [
    { bg: "#B38BFA" },
    { bg: "#FF79F2" },
    { bg: "#43E6FC" },
    { bg: "#F19576" },
    { bg: "#0047FF" },
    { bg: "#6691FF" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const pfpText1 = input.charAt(0);
    const pfpText2 = input.split(" ")[1]?.charAt(0) || input.charAt(1) || "   ";
    let pfpText = pfpText1 + pfpText2;

    onCreateNote(id, color, input, pfpText);
    setIsOpen(false);
  };
  return (
    <>
      <div className="popup" onClick={() => setIsOpen(false)} />
      <div className="popupmain">
        <div className="modal" onClick={() => setIsOpen(true)}>
          <h1 className="modalh">Create New Notes group</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="chooseDiv">
              <label className="modalgrp" htmlFor="name">
                Group Name
              </label>
              <input
                onChange={(e) => setInput(e.target.value)}
                className="input"
                type="text"
                placeholder="Enter your group name...."
                required
              />
            </div>
            <div className="chooseDiv">
              <label className="modalcolor" htmlFor="color">
                Choose colour
              </label>
              <div className="colorsDiv">
                {colors.map((colorr) => (
                  <p
                    key={colorr.bg}
                    style={{ backgroundColor: colorr.bg }}
                    onClick={() => {
                      setColor(colorr.bg);
                    }}
                    className={`chooseColor ${
                      colorr.bg === color ? "selected" : ""
                    }`}
                  ></p>
                ))}
              </div>
            </div>
            <button className="modalSub" type="submit">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNotePopUp;

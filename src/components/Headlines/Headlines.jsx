import React, { useEffect, useState } from "react";
import "./headlines.css";
import CreateNotePopUp from "../PopUp/CreateNotePopUp";

const Headlines = ({
  noteNames,
  setNoteNames,
  selectedHeadline,
  setSelectedHeadline,
  isPressed,
  setIsPressed,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedNoteNames = JSON.parse(localStorage.getItem("noteNames"));
    if (savedNoteNames) {
      setNoteNames(savedNoteNames);
    }
  }, [setNoteNames]);

  const addNote = (id, color, inputData, pfpText) => {
    const newNoteName = { id, color, inputData, pfpText };
    setNoteNames((prevNoteNames) => [newNoteName, ...prevNoteNames]);

    localStorage.setItem(
      "noteNames",
      JSON.stringify([...noteNames, newNoteName])
    );
  };

  return (
    <div className={`${!isPressed ? "hide" : "show"}  headlines`}>
      <nav>
        <h1 className="heading">Pocket Notes</h1>
      </nav>
      <main>
        <div className="btnDiv">
          <button onClick={() => setIsOpen(true)} className="createNoteBtn">
            + Create Notes group
          </button>
          {isOpen && (
            <CreateNotePopUp setIsOpen={setIsOpen} onCreateNote={addNote} />
          )}
        </div>
        <div className="createdNotes">
          {noteNames &&
            noteNames.map((note, index) => (
              <div
                onClick={() => {
                  setSelectedHeadline(index);
                  setIsPressed(false);
                }}
                key={index}
                className={`${
                  selectedHeadline === index ? "selectedGrp" : ""
                } indieNote`}
              >
                <p style={{ backgroundColor: note.color }} className="noteImg">
                  {note.pfpText}
                </p>
                <h2 className="noteHead">{note.inputData}</h2>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Headlines;

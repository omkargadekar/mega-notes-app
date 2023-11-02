import React, { useEffect, useState } from "react";
import "./hero.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const Notes = ({
  selectedNotes,
  noteNames,
  setSelectedNotes,
  selectedHeadline,
  isPressed,
  setIsPressed,
}) => {
  const [textarea, setTextArea] = useState("");
  const [heroNotes, setHeroNotes] = useState(() => {
    const savedNotes = localStorage.getItem("heroNotes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const color = noteNames[selectedHeadline]?.color;
  const pfpText = noteNames[selectedHeadline]?.pfpText;
  const inputData = noteNames[selectedHeadline]?.inputData;
  const noteId = noteNames[selectedHeadline]?.id;

  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();

  useEffect(() => {
    localStorage.setItem("heroNotes", JSON.stringify(heroNotes));
  }, [heroNotes]);

  useEffect(() => {
    setSelectedNotes(heroNotes.filter((item) => item.noteId === noteId));
  }, [heroNotes, noteId, setSelectedNotes]);

  const handleTextClick = () => {
    if (textarea.trim() !== "") {
      const note = { noteId, textarea, time, date };
      setHeroNotes((prevNotes) => [note, ...prevNotes]);
      setTextArea("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleTextClick();
    }
  };

  // useEffect(() => {
  //   localStorage.setItem("heroNotes", JSON.stringify(heroNotes));
  // }, [heroNotes]);

  // useEffect(() => {
  //   const storedNotes = JSON.parse(localStorage.getItem("heroNotes"));
  //   if (storedNotes) {
  //     setHeroNotes(storedNotes);
  //   }
  // }, []);

  return (
    <div className={`${isPressed ? "hide" : "show"} hero `}>
      <header className="header">
        <MdOutlineKeyboardBackspace
          className="backBtn"
          onClick={() => {
            setIsPressed(true);
          }}
        />
        <p style={{ backgroundColor: color }} className="noteImgg">
          {pfpText}
        </p>
        <h2 className="noteHeadd">{inputData}</h2>
      </header>
      <div className="heroNotes">
        <div className="heroNotesDiv">
          {selectedNotes &&
            selectedNotes?.map((note, index) => (
              <div key={index} className="heroindieDiv">
                <p className="heroTime">
                  {note?.time}
                  <br />
                  {note?.date}
                </p>
                <p className="heroNote">{note?.textarea}</p>
              </div>
            ))}
        </div>
        <div className="heroTextarea">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <textarea
              className="textarea"
              name=""
              id=""
              cols="107"
              rows="5"
              placeholder="Enter your text here..........."
              onChange={(e) => setTextArea(e.target.value)}
              value={textarea}
              onKeyPress={handleKeyPress}
            ></textarea>
            <img
              onClick={handleTextClick}
              src="./arrow.png"
              alt="submitArrow"
              className="arrow"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Notes;

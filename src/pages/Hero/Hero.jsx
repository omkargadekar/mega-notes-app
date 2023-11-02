import React, { useState } from "react";
import Headlines from "../../components/Headlines/Headlines";
import EmptyNote from "../../components/Empty/EmptyNote";
import Notes from "../../components/Notes/Notes";
import "./heroo.css";

const Hero = () => {
  const [noteNames, setNoteNames] = useState([]);
  const [selectedHeadline, setSelectedHeadline] = useState(0);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="main-main">
      <div className="up">
        <Headlines
          noteNames={noteNames}
          setNoteNames={setNoteNames}
          selectedHeadline={selectedHeadline}
          setSelectedHeadline={setSelectedHeadline}
          setIsPressed={setIsPressed}
          isPressed={isPressed}
        />
      </div>
      <div className="down">
        {noteNames.length === 0 ? (
          <EmptyNote />
        ) : (
          <Notes
            selectedNotes={selectedNotes}
            noteNames={noteNames}
            setSelectedNotes={setSelectedNotes}
            selectedHeadline={selectedHeadline}
            setSelectedHeadline={setSelectedHeadline}
            setIsPressed={setIsPressed}
            isPressed={isPressed}
          />
        )}
      </div>
    </div>
  );
};

export default Hero;

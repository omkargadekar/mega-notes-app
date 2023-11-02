import React from "react";
import "./empty.css";
import { BiSolidLock } from "react-icons/bi";

const EmptyNote = () => {
  return (
    <div className="empty">
      <div className="emptyMain">
        <img src="./empty.png" alt="" />
        <h1 className="emptyh">Pocket Notes</h1>
        <p className="emptyPara">
          Send and receive messages without keeping your phone online. <br />{" "}
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <p className="emptyLast">
        {" "}
        <BiSolidLock /> end-to-end encrypted
      </p>
    </div>
  );
};

export default EmptyNote;

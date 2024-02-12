import React from "react";
import { Link } from "react-router-dom";

const Notes = () => {
  return (
    <>
      <div className="bg-black">
        <Link
          to="/"
          className="back flex gap-1 fixed top-4 left-4 text-white cursor-pointer"
        >
          <img src="/back.png" alt="" width={20} />
          <p>Back</p>
        </Link>
        <h5>Notes</h5>
      </div>
    </>
  );
};

export default Notes;

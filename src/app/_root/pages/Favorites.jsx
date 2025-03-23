import React from "react";
import NotesSection from "../../../components/_root/notes/NotesSection";
import FavNotes from "../../../components/_root/notes/FavNotes";

const Favotires = () => {
  return (
    <div className="container mx-auto px-4">
      <div
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        id="el-v90szbkx"
      >
        <div id="el-2aywqo1i">
          <h1
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-2"
            id="el-e2u0sbeu"
          >
            Favorites
          </h1>
          <p className="text-gray-600" id="el-xizs0mqm">
            View and manage your favorite notes
          </p>
        </div>
      </div>
      <FavNotes />
    </div>
  );
};

export default Favotires;

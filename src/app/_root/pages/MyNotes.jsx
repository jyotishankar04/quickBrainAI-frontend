import React from "react";
import NotesSection from "../../../components/_root/notes/NotesSection";
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import NoteCategriesSection from "../../../components/_root/notes/NoteCategriesSection";

const MyNotes = () => {
  return (
    <div className="container mx-auto px-4" id="el-i2t3zxc6">
      {/* Notes Header */}
      <div
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        id="el-v90szbkx"
      >
        <div id="el-2aywqo1i">
          <h1
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-2"
            id="el-e2u0sbeu"
          >
            My Notes
          </h1>
          <p className="text-gray-600" id="el-xizs0mqm">
            Manage and organize all your notes in one place
          </p>
        </div>
        <div className="mt-4 md:mt-0" id="el-ywcwcdqm">
          <Link
            to="/app/notes/new"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm flex items-center transition duration-200 animate__animated animate__fadeIn animate__animated--visible"
            id="el-ej6a0zao"
          >
            <BiPlus className="mr-2 text-2xl" />
            New Note
          </Link>
        </div>
      </div>

      {/* Notes Section  */}
      <NotesSection />
      {/* Notes Categories/Tags */}
      <NoteCategriesSection />
    </div>
  );
};

export default MyNotes;

//notescard
// app constant

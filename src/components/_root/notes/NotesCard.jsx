import { BiEdit, BiShare, BiStar } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import { PiTagSimple } from "react-icons/pi";
import { TbTrash } from "react-icons/tb";

const NotesCard = ({
  title,
  updated,
  description,
  category,
  starred,
  tags,
}) => {
  return (
    <div className=" card" id="el-vscmwjky">
      <div className="flex  justify-between items-start mb-4" id="el-hvne05la">
        <div id="el-j3wzkfu7">
          <h3
            className="font-semibold text-lg text-gray-800 mb-1"
            id="el-8p7ddh29"
          >
            {title}
          </h3>
          <p className="text-gray-500 text-sm" id="el-yb7n0324">
            {updated}
          </p>
        </div>
        <div className="flex" id="el-4ux3vbfb">
          <button
            className="text-yellow-400 hover:text-yellow-500 mr-2"
            aria-label="Favorite"
            id="el-n72aq7w9"
          >
            {starred ? (
              <BsFillStarFill className="text-2xl" />
            ) : (
              <BiStar className="text-2xl" />
            )}
          </button>
          <div
            className={` badge-success text-white  badge text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center`}
            id="el-o5drto21"
          >
            {category}
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2" id="el-1vwt25y3">
        {description}
      </p>
      <div className="flex justify-between items-center" id="el-ixzb3gek">
        <div
          className="flex items-center text-sm text-gray-500"
          id="el-l9x0s9tt"
        >
          <PiTagSimple className="h-4 w-4 mr-1" />
          {tags.map((tag, index) => (
            <span key={index} className="mr-2 badge badge-xs badge-primary">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-2" id="el-dv7z0lh1">
          <button
            className="text-gray-400 hover:text-blue-600 transition"
            aria-label="Edit"
            id="el-no3gbdnl"
          >
            <BiEdit className="h-5 w-5" />
          </button>
          <button
            className="text-gray-400 hover:text-blue-600 transition"
            aria-label="Share"
            id="el-06n2alks"
          >
            <BiShare className="h-5 w-5" />
          </button>
          <button
            className="text-gray-400 hover:text-red-600 transition"
            aria-label="Delete"
            id="el-lftfnxca"
          >
            <TbTrash className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useNotesQuery } from "../../../lib/query/react-query";
import NotesCard from "./NotesCard";
import NoDataFound from "../../NoDataFound";

const NotesSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 6;
  const category = searchParams.get("category") || "all";
  const filterBy = searchParams.get("filterBy") || "all";
  const orderBy = searchParams.get("orderBy") || "newest";

  const [totalPages, setTotalPages] = useState(1);
  const [totalNotes, setTotalNotes] = useState(0);

  const {
    data: notes,
    isPending: isNotesLoading,
    isError,
    error,
    isSuccess,
    refetch,
  } = useNotesQuery(page, limit, category, filterBy, orderBy);

  useEffect(() => {
    refetch();
  }, [page, limit, category, filterBy, orderBy, refetch]);

  useEffect(() => {
    if (isSuccess && notes?.pagination) {
      setTotalPages(notes.pagination.totalPages);
      setTotalNotes(notes.pagination.totalNotes);

      // If the current page exceeds the total pages, reset to page 1
      if (page > notes.pagination.totalPages) {
        setSearchParams((prevParams) => {
          const newParams = new URLSearchParams(prevParams);
          newParams.set("page", "1");
          return newParams;
        });
      }
    }
  }, [isSuccess, notes, page, setSearchParams]);

  const handleFilterChange = (newFilter) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("filterBy", newFilter);
      return newParams;
    });
  };

  const handleOrderChange = (newOrder) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("orderBy", newOrder);
      return newParams;
    });
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-4 md:mb-0">
            <span className="text-gray-700 font-medium">Filter By:</span>
            {["all", "starred"].map((type) => (
              <button
                key={type}
                onClick={() => handleFilterChange(type)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                  filterBy === type
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {type === "all" ? "All Notes" : "Starred"}
              </button>
            ))}
          </div>

          {/* Order By Select */}
          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium w-34">Order By:</span>
            <select
              value={orderBy}
              onChange={(e) => handleOrderChange(e.target.value)}
              className="px-3 py-1 border select select-primary  rounded-md text-gray-700"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="modified">Last Modified</option>
              <option value="atoz">A to Z</option>
              <option value="ztoa">Z to A</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {isNotesLoading ? (
          <div className="col-span-3 flex justify-center flex-col gap-4 items-center">
            <span className="loading-spinner loading loading-xl"></span>
            <p className="text-gray-600 text-lg">Loading...</p>
          </div>
        ) : isSuccess && notes?.data?.length > 0 ? (
          notes.data.map((obj) => (
            <NotesCard
              key={obj.id}
              title={obj.noteTitle}
              category={obj.category}
              description={obj.noteDescription}
              updated={obj.updatedAt}
              created={obj.createdAt}
              starred={obj.isStared}
              id={obj.id}
              isPrivate={obj.isPrivate}
              tags={obj.tags}
            />
          ))
        ) : (
          <NoDataFound text="No notes found" />
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mb-8">
        <p className="text-sm text-gray-600">
          Showing{" "}
          <span className="font-medium">
            {Math.min(page * limit - limit + 1, totalNotes)} to{" "}
            {Math.min(page * limit, totalNotes)}
          </span>{" "}
          of <span className="font-medium">{totalNotes}</span> notes
        </p>
        <div className="flex space-x-2">
          <button
            className="px-3 py-1 bg-white text-gray-500 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            aria-label="Previous page"
            disabled={page <= 1}
            onClick={() =>
              setSearchParams((prevParams) => {
                const newParams = new URLSearchParams(prevParams);
                newParams.set("page", Math.max(page - 1, 1).toString());
                return newParams;
              })
            }
          >
            <FaAngleLeft className="w-4 h-4" />
          </button>
          {[...Array(totalPages)]
            .map((_, index) => index + 1)
            .filter(
              (num) =>
                num === 1 ||
                num === totalPages ||
                (num >= page - 1 && num <= page + 1)
            )
            .map((num, index, arr) => (
              <React.Fragment key={num}>
                {index > 0 && arr[index - 1] !== num - 1 && (
                  <span className="px-3 py-1">...</span>
                )}
                <button
                  className={`px-3 py-1 rounded-md font-medium transition ${
                    page === num
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() =>
                    setSearchParams((prevParams) => {
                      const newParams = new URLSearchParams(prevParams);
                      newParams.set("page", num.toString());
                      return newParams;
                    })
                  }
                >
                  {num}
                </button>
              </React.Fragment>
            ))}
          <button
            className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            aria-label="Next page"
            disabled={page >= totalPages}
            onClick={() =>
              setSearchParams({ page: Math.min(page + 1, totalPages) })
            }
          >
            <FaAngleRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default NotesSection;

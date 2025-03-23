import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useNotesQuery } from "../../../lib/query/react-query";
import NotesCard from "./NotesCard";

const FavNotes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get("page")) || 1;
  const initialLimit = parseInt(searchParams.get("limit")) || 6;
  const initialCategory = searchParams.get("category") || "all";
  const [orderBy, setOrderBy] = useState("createdAt");
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);
  const [category, setCategory] = useState(initialCategory);
  const [totalPages, setTotalPages] = useState(1);
  const [totalNotes, setTotalNotes] = useState(0);

  const {
    data: notes,
    isPending: isNotesLoading,
    isError,
    error,
    isSuccess,
    refetch,
  } = useNotesQuery(page, limit, category, "starred", orderBy);

  useEffect(() => {
    const params = { page, limit, category, orderBy };
    setSearchParams(params);
    refetch();
  }, [page, limit, category, setSearchParams, refetch, orderBy]);

  useEffect(() => {
    if (isSuccess) {
      setTotalPages(notes.pagination.totalPages);
      setTotalNotes(notes.pagination.totalNotes);
    }
  }, [isSuccess, notes, limit]);

  if (isError) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 animate__animated animate__fadeIn">
        <p className="text-red-500 font-semibold">{error.message}</p>
      </div>
    );
  }

  return (
    <>
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
              category={obj.category.name}
              description={obj.noteDescription}
              updated={obj.updatedAt}
              created={obj.createdAt}
              starred={obj.isStared}
              id={obj.id}
              tags={obj.tags}
            />
          ))
        ) : (
          <div className="col-span-3 flex justify-center items-center">
            <p className="text-gray-600 text-lg">No Starred Notes Found</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mb-8">
        <p className="text-sm text-gray-600">
          Showing{" "}
          <span className="font-medium">
            {page * limit - limit + 1} to {Math.min(page * limit, totalNotes)}
          </span>{" "}
          of <span className="font-medium">{totalNotes}</span> starred notes
        </p>
        <div className="flex space-x-2">
          <button
            className="px-3 py-1 bg-white text-gray-500 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            aria-label="Previous page"
            disabled={page <= 1}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            <FaAngleLeft className="w-4 h-4" />
          </button>
          {[...Array(totalPages)].length > 0 && (
            <div className="flex gap-2">
              <button
                className={`px-3 py-1 rounded-md font-medium transition ${
                  page === 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => setPage(1)}
              >
                1
              </button>

              {page > 3 && <span className="px-3 py-1">...</span>}
              {[...Array(totalPages)]
                .map((_, index) => index + 1)
                .filter((num) => {
                  if (totalPages <= 4) return true;
                  if (num === 1 || num === totalPages) return false;
                  return num >= page - 1 && num <= page + 1;
                })
                .map((num) => (
                  <button
                    key={num}
                    className={`px-3 py-1 rounded-md font-medium transition ${
                      page === num
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setPage(num)}
                  >
                    {num}
                  </button>
                ))}

              {page < totalPages - 2 && <span className="px-3 py-1">...</span>}
              <button
                className={`px-3 py-1 rounded-md font-medium transition ${
                  page === totalPages
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => setPage(totalPages)}
              >
                {totalPages}
              </button>
            </div>
          )}

          <button
            className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            aria-label="Next page"
            onClick={() => setPage((prev) => prev + 1)}
          >
            <FaAngleRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default FavNotes;

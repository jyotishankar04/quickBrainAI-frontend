import React, { useEffect, useState, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useSearchNotesQuery } from "../../../lib/query/react-query";
import { useForm, useWatch } from "react-hook-form";
import toast from "react-hot-toast";
import NotesCard from "../notes/NotesCard";

const SearchDialog = ({ children }) => {
  const modalRef = useRef(null);
  const inputRef = useRef(null);

  const {
    register,
    control,
    formState: { errors },
  } = useForm();
  const searchInput = useWatch({ control, name: "search", defaultValue: "" });

  const [debouncedQuery, setDebouncedQuery] = useState("");

  const {
    data: notes,
    isPending,
    isError,
    error,
  } = useSearchNotesQuery(debouncedQuery);

  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError, error]);

  // ✅ Debounce logic: Wait 300ms before updating the query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchInput.trim());
    }, 300);
    return () => clearTimeout(timer);
  }, [searchInput]);

  // ✅ Open & Focus input when modal opens
  const openModal = () => {
    modalRef.current?.showModal();
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  // ✅ Close modal
  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <div className="flex w-full items-start h-full">
      {/* ✅ Use onClick to open modal */}
      <span onClick={openModal} className="w-full mr-4">
        {children}
      </span>

      <dialog ref={modalRef} className="modal modal-middle  sm:modal-middle">
        <div className="modal-box flex flex-col gap-4 w-full">
          <div className="flex flex-row justify-between items-center">
            <h3 className="font-bold text-xl">Search Note</h3>
            <button className="btn btn-circle btn-ghost" onClick={closeModal}>
              <RxCross2 className="text-xl" />
            </button>
          </div>

          {/* ✅ Auto-search with debounced input */}
          <form className="flex flex-row gap-3">
            <input
              ref={inputRef}
              {...register("search", { required: true })}
              type="text"
              placeholder="Search Note"
              className="input input-bordered w-full"
            />
            <button type="button" className="btn btn-primary">
              <BiSearch className="text-lg" />
            </button>
          </form>

          {errors.search && (
            <p className="text-red-500">Enter something to search</p>
          )}

          {/* ✅ Display Search Results */}
          {isPending && <div className="skeleton h-32 w-full"></div>}

          {notes?.data?.length > 0 ? (
            <ul className="max-h-96 flex flex-col gap-2 overflow-y-auto">
              {notes.data.map((note) => (
                <NotesCard
                  key={note.id}
                  category={note.category}
                  title={note.noteTitle}
                  created={note.createdAt}
                  description={note.noteDescription}
                  id={note.id}
                  isPrivate={note.isPrivate}
                  starred={note.starred}
                  tags={note.tags}
                />
              ))}
            </ul>
          ) : (
            !isPending && (
              <p className="text-gray-500 py-10 text-center">No notes found</p>
            )
          )}
        </div>
      </dialog>
    </div>
  );
};

export default SearchDialog;

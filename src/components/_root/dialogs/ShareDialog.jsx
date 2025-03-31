import { useState } from "react";
import { BiX } from "react-icons/bi";
import ExportPDFButton from "../editor/PDFExportBtn";

const ShareDialog = ({ children, id }) => {
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState("");
  const [permission, setPermission] = useState("view"); // Default permission
  const [error, setError] = useState("");

  const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const handleAddEmail = (e) => {
    if (e.key === "Enter" && email.trim()) {
      e.preventDefault(); // Prevent form submission
      const trimmedEmail = email.trim().toLowerCase();

      if (!isValidEmail(trimmedEmail)) {
        setError("Invalid email address");
        return;
      }
      if (emails.some((entry) => entry.email === trimmedEmail)) {
        setError("This email is already added.");
        return;
      }
      if (emails.length >= 10) {
        setError("Maximum 10 people can be shared with.");
        return;
      }

      setError(""); // Clear error message
      setEmails([...emails, { email: trimmedEmail, permission }]);
      setEmail(""); // Clear input field
    }
  };

  const handleRemoveEmail = (emailToRemove) => {
    setEmails(emails.filter((entry) => entry.email !== emailToRemove));
  };

  return (
    <div className="flex justify-end items-center h-full">
      {children}
      <dialog
        id={"shareNoteModal" + id}
        className="modal modal-bottomsm:modal-middle"
      >
        <form method="dialog" className="modal-box">
          <div className="flex flex-row gap-3 w-full mb-5 justify-between">
            <h1 className="font-bold text-lg">Download as PDF</h1>
            <ExportPDFButton />
          </div>
          <div>
            <h3 className="font-bold text-lg">
              Share Note{" "}
              <span className="text-sm text-gray-500 badge badge-error">
                Available soon
              </span>
            </h3>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-semibold ">Email</label>
              <input
                type="email"
                placeholder="Enter email and press Enter"
                value={email}
                disabled={true}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleAddEmail}
                className="input input-bordered w-full"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-semibold">Permission</label>
              <select
                disabled
                value={permission}
                onChange={(e) => setPermission(e.target.value)}
                className="select select-bordered w-full"
              >
                <option value="view">View</option>
                <option value="edit">Edit</option>
              </select>
            </div>
            {emails.length > 0 && (
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">Shared With</label>
                <div className="max-h-40 overflow-y-auto border border-gray-300 rounded-lg p-2">
                  {emails.map((entry, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center px-3 py-2 bg-gray-200 rounded-lg mb-1"
                    >
                      <span>
                        {entry.email} -{" "}
                        <span className="font-bold">{entry.permission}</span>
                      </span>
                      <button onClick={() => handleRemoveEmail(entry.email)}>
                        <BiX className="text-red-500 text-lg" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="grid grid-cols-2 gap-3 w-full  mt-4">
              <button className="btn col-span-1">Cancel</button>
              <button
                className="btn btn-primary col-span-1"
                disabled={!emails.length}
              >
                Share
              </button>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ShareDialog;

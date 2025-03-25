// import { useState } from "react";
// import { BiX } from "react-icons/bi";

const ShareDialog = ({ children, id }) => {
  //   const [emails, setEmails] = useState([]);
  //   const [email, setEmail] = useState("");
  //   const [permission, setPermission] = useState("view"); // Default permission
  //   const [error, setError] = useState("");

  //   const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  //   const handleAddEmail = (e) => {
  //     if (e.key === "Enter" && email.trim()) {
  //       e.preventDefault(); // Prevent form submission
  //       const trimmedEmail = email.trim().toLowerCase();

  //       if (!isValidEmail(trimmedEmail)) {
  //         setError("Invalid email address");
  //         return;
  //       }
  //       if (emails.some((entry) => entry.email === trimmedEmail)) {
  //         setError("This email is already added.");
  //         return;
  //       }
  //       if (emails.length >= 10) {
  //         setError("Maximum 10 people can be shared with.");
  //         return;
  //       }

  //       setError(""); // Clear error message
  //       setEmails([...emails, { email: trimmedEmail, permission }]);
  //       setEmail(""); // Clear input field
  //     }
  //   };

  //   const handleRemoveEmail = (emailToRemove) => {
  //     setEmails(emails.filter((entry) => entry.email !== emailToRemove));
  //   };

  return (
    <div className="flex justify-end items-center h-full">
      {children}
      <dialog
        id={"shareNoteModal" + id}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box flex flex-col items-center gap-4 w-full">
          <h1 className="text-2xl font-bold">
            Share feature will be available soon
          </h1>
          <p className="py-2">
            You can share this note with your friends and family
          </p>
          <div className="modal-action">
            <button
              className="btn"
              onClick={() =>
                document.getElementById("shareNoteModal" + id).close()
              }
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ShareDialog;

// <h3 className="font-bold text-lg">Share Note</h3>;

// {
// }
// <div className="flex flex-col gap-3">
//   <label className="text-sm font-semibold">Email</label>
//   <input
//     type="email"
//     placeholder="Enter email and press Enter"
//     value={email}
//     onChange={(e) => setEmail(e.target.value)}
//     onKeyDown={handleAddEmail}
//     className="input input-bordered w-full"
//   />
//   {error && <p className="text-red-500 text-sm">{error}</p>}

//   <label className="text-sm font-semibold">Permission</label>
//   <select
//     value={permission}
//     onChange={(e) => setPermission(e.target.value)}
//     className="select select-bordered w-full"
//   >
//     <option value="view">View</option>
//     <option value="edit">Edit</option>
//     <option value="comment">Comment</option>
//   </select>
// </div>;

// {
// }
// {
//   emails.length > 0 && (
//     <div className="flex flex-col gap-2">
//       <label className="text-sm font-semibold">Shared With</label>
//       <div className="max-h-40 overflow-y-auto border border-gray-300 rounded-lg p-2">
//         {emails.map((entry, index) => (
//           <div
//             key={index}
//             className="flex justify-between items-center px-3 py-2 bg-gray-200 rounded-lg mb-1"
//           >
//             <span>
//               {entry.email} -{" "}
//               <span className="font-bold">{entry.permission}</span>
//             </span>
//             <button onClick={() => handleRemoveEmail(entry.email)}>
//               <BiX className="text-red-500 text-lg" />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// <div className="flex justify-end">
//   <button className="btn btn-primary" disabled={!emails.length}>
//     Share
//   </button>
// </div>;

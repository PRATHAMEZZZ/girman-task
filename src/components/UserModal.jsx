import React from "react";

const UserModal = ({ user, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"> {/* Updated width */}
        <button onClick={onClose} className="text-gray-500 float-right">
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Fetch Details</h2>
        <h3 className="mb-4 text-gray-700">Here are the details of following employees</h3>
        <div className="text-lg font-semibold">
          <p><span>First Name:</span> {user.first_name}</p>
          <p><span>Last Name:</span> {user.last_name}</p>
          <p><span>City:</span> {user.city}</p>
          <p><span>Contact Number:</span> {user.contact_number}</p>
          <div className="mt-4">
            <span>Profile Image:</span>
            <img
              src={"/profile-img.jpg"}
              alt="profile"
              className="h-[100px] w-[100px] rounded-full border mt-2"
            />
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition float-right"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserModal;

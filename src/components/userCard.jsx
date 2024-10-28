import React from "react";

const UserCard = ({ user, handleOpenModal }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 mt-4">
      <img
        src={"/profile-img.jpg"}
        alt="logo"
        className="h-[100px] w-[100px] rounded-full border"
      />

      <h2 className="text-2xl font-bold text-gray-800 mb-2">{`${user.first_name} ${user.last_name}`}</h2>
      <p className="text-gray-600 mb-1 font-semibold">{user.city}</p>
      <p className="text-gray-800 flex justify-between items-center">
        <span className="font-semibold">{user.contact_number}</span>{" "}
        <span>
          {" "}
          <button
            className="px-4 py-2 ml-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 transition duration-200"
            onClick={() => handleOpenModal(user)}
          >
            Fetch Details
          </button>
        </span>
      </p>
    </div>
  );
};

export default UserCard;

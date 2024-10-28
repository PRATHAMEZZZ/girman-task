import { useContext, useState } from "react";
import { DataContext } from "../components/DataContext";
import Header from "../components/Header";
import UserModal from "../components/UserModal";
import UserCard from "../components/UserCard";

const SearchResults = () => {
  const { data } = useContext(DataContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {data.length > 0 ? (
        <div className="bg-blue-50 flex-1"> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {data.map((item, index) => (
              <div key={index} className="flex justify-center"> 
                <UserCard user={item} handleOpenModal={handleOpenModal} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center bg-blue-50 h-full flex-col gap-10 flex-1"> 
          <img src="/no-results.png" alt="not-found" className="h-[130px]" />
          <p className="text-2xl font-semibold">No Results Found.</p>
        </div>
      )}
      <UserModal user={selectedUser} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default SearchResults;

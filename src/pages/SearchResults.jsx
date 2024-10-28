
import { useContext,useState } from "react";
import { DataContext } from "../components/DataContext";
import Header from "../components/Header";
import UserCard from "../components/userCard";
import UserModal from "../components/UserModal";

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
    <div className="min-h-screen ">
      <Header />
      {data.length > 0 ? (
        <div className="bg-blue-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-[200px] min-h-[calc(100vh-4rem)]">
            {data.map((item, index) => (
              <div key={index}>
                <UserCard user={item} handleOpenModal={handleOpenModal}/>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center bg-blue-50 h-[calc(100vh-4rem)] flex-col gap-10">
        <img src="/no-results.png" alt="not-found" className="h-[130px]" />
            <p className="text-2xl font-semibold">No Results Found.</p>
        </div>
      )}
       <UserModal user={selectedUser} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default SearchResults;

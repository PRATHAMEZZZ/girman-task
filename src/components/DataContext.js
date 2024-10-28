
import React, { createContext, useEffect, useState } from 'react';
import { usersList } from './userList';
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(usersList);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if(search==""){
        setData(usersList)
    }else{
        const filteredData = usersList.filter((user) => {
            const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
            return fullName.includes(search.toLowerCase());
        });
         setData(filteredData)
    }
  }, [search]);

  return (
    <DataContext.Provider value={{data , search, setSearch}}>
      {children}
    </DataContext.Provider>
  );
};



export { DataProvider };

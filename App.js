import React, { useState, useEffect } from 'react';
import CrearUsuario from './Components/CrearUsuario';
import ListarUsuarios from './Components/ListarUsuarios';
import { getUsers} from './Components/UserApi'; 

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleAddUser = async () => {
    try{
      const updatedUsers = await getUsers(currentPage);
      setUsers(updatedUsers.items);
    }
    catch(error){
      console.error(error);
    }
  };

  useEffect(() => {
    handleAddUser();
  }, [currentPage]);

    return (  
      <div>
        <center><h1>User Management</h1></center>
        <br/>
        <CrearUsuario onAddUser={handleAddUser} />
        <br/>
        <ListarUsuarios usuarios={users} />      
      </div>
    );
};

export default App;

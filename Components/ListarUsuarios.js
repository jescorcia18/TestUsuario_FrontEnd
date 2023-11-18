import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { getUsers } from './UserApi';

const ListarUsuarios = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(1);
    const [usuarios, setUsers] = useState([]);
  
    const fetchData = async (page) => {
      const result = await getUsers(page);
      setUsers(result.items);
      setTotalPages(result.totalPages);
      setPageSize(result.pageSize);
    };  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
     
    useEffect(() => {
      fetchData(currentPage);
    }, [usuarios]);

  return (
    <div>
    <table className='table'>
      <thead className='thead-dark'>
        <tr>
          <th scope='col'>
              Id
          </th>
          <th scope='col'>
              Nombre
          </th>
          <th scope='col'>
              Email
          </th>
          <th scope='col'>
              Edad
          </th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => (
          <tr key={usuario.idUsuario}>
              <td scope='row'>
                {usuario.idUsuario}
              </td>
              <td scope='row'>
                {usuario.name}
              </td>
              <td scope='row'>
                {usuario.email}
              </td>
              <td scope='row'>
                  {usuario.age}
              </td>
          </tr>        
        ))}
      </tbody>
    </table>
    <div>
        <span>Page: {currentPage} of {totalPages}</span>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <span
            key={page}
            style={{ cursor: 'pointer', marginLeft: '5px', fontWeight: currentPage === page ? 'bold' : 'normal' }}
            onClick={() => handlePageChange(page)}
          >
            [...{page}]
          </span>
        ))}
      </div>
    </div>
  );
};


export default ListarUsuarios;
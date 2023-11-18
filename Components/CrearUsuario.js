import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { createUser } from './UserApi';

const CrearUsuario = ({ onAddUser }) => {
  const [usuario, setUsuario] = useState({
    name: '',
    email: '',
    age: 0
  });

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    const newUser = await createUser(usuario);
    onAddUser(newUser);
    setUsuario({ name: '', email: '', age: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="col-md-8">    
        <label htmlFor="name" className="form-label" >Name:</label>
        <input type="text" name="name" value={usuario.name} onChange={handleChange} className="form-control" required />
      </div>
      <div className="col-md-8">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="Email" name="email" value={usuario.email} onChange={handleChange} className="form-control" required />
      </div>
      <div className="col-md-2">
        <label htmlFor="age" className="form-label">Edad:</label>
        <input type="number" name="age" value={usuario.age} onChange={handleChange} className="form-control" required />
      </div>
      <hr></hr>
      <button type="submit" className="btn btn-primary">Agregar Usuario</button>
    </form>
  );
};

export default CrearUsuario;
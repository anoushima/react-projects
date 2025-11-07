import React, { useState, useEffect } from 'react';

function User_list() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []); 

  return (
    <div className='container mt-4'>
      <div className='row'>
        {users.map((user) => (
          <div className='col-md-4 mb-3' key={user.id}>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>{user.name}</h5>
                <p>Email: {user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default User_list;

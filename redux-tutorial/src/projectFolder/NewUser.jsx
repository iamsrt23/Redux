import React from 'react';
import { useSelector } from 'react-redux';

const NewUser = () => {
  const newUsers = useSelector((state) => state.newSubscriber?.users || []);

  return (
    <div className='userSection'>
      <h3>Subscribers:</h3>
      {newUsers.length > 0 ? (
        <ul>
          {newUsers.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No subscribers yet.</p>
      )}
    </div>
  );
};

export default NewUser;
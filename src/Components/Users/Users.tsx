import React from 'react';
import UserItem from './UserItem';
import {User} from '../../types';
import './Users.css';

interface Props {
  userList: User[];
}

const Users: React.FC<Props> = ({userList}) => {
  return (
    <div className='user-list'>
      {userList.map((user) => (
        <UserItem key={user.id} user={user}/>
      ))}
    </div>
  );
};

export default Users;
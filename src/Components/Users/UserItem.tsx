import React from 'react';
import {User} from '../../types';

interface Props {
  user: User;
}

const listProfileImage = [
  'https://i1.sndcdn.com/artworks-GQyoC6yYzY0TOj73-85zTVw-t500x500.jpg',
  'https://media.istockphoto.com/id/1316947194/vector/messenger-profile-icon-on-white-isolated-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=1iQ926GXQTJkopoZAdYXgU17NCDJIRUzx6bhzgLm9ps=',
  'https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=',
];

const UserItem: React.FC<Props> = ({user}) => {
  const getActiveValue = () => (user.isActive) ? 'yes' : 'no';

  const getRandomProfileImage = () => {
    const randomIndex = Math.floor(Math.random() * listProfileImage.length);
    return listProfileImage[randomIndex];
  };

  return (
    <div className="card">
      <img src={getRandomProfileImage()} className="card-img-top" alt={user.name}/>
      <h5 className="card-title">{user.name}</h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">level:{user.userLevel}</li>
        <li className="list-group-item"> is active:{getActiveValue()}</li>
        <li className="list-group-item"><a href="#">{user.email}</a></li>
      </ul>
    </div>
  );
};

export default UserItem;
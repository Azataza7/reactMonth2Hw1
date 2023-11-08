import UserForm from './Components/UserForm/UserForm';
import Users from './Components/Users/Users';
import Navbar from './Components/NavBar/Navbar';
import {useState} from 'react';
import {User} from './types';

const App = () => {
  const [users, setUsers] = useState<User[]>([
    {id: 1, name: 'superboy1993', email: 'superBoy1993@Gmail.com', isActive: true, userLevel: 'user'},
    {id: 2, name: 'MClovin1986', email: 'MClovin@yahoo.com', isActive: false, userLevel: 'admin'},
    {id: 3, name: 'mrBeast', email: 'mrBooby2005@Gmail.com', isActive: true, userLevel: 'editor'},
  ]);

  const addUser = (user) => {
    setUsers((prevState) => [...prevState, user]);
  };

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <div className="row mt-3">
        <div className="col-6">
          <UserForm onSubmit={addUser}/>
        </div>
        <div className="col-6">
          <Users userList={users}/>
        </div>
      </div>
    </>
  );
};

export default App;

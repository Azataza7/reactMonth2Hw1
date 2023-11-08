import UserForm from './Components/UserForm/UserForm';
import Users from './Components/Users/Users';
import Navbar from './Components/NavBar/Navbar';

const App = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <div className='row mt-3'>
        <div className='col-6'>
          <UserForm/>
        </div>
        <div className='col-6'>
          <Users/>
        </div>
      </div>
    </>
  );
}

export default App;

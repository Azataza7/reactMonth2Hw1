import React, {useState} from 'react';
import './UserForm.css';
import {User, UserMutation} from '../../types';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    isActive: false,
    userLevel: '',
  });

  const changeUser = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      userLevel: e.target.value,
    }));
  };

  const changeCheckbox = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value === 'Yes' ? e.target.checked : !e.target.checked
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Date.now(),
      ...user,
    });
  };

  return (
    <form className="form-user" onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={user.name}
          onChange={changeUser}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={user.email}
          onChange={changeUser}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="isActive">Is Active</label>
        <fieldset>
          <div>
            <input
              type="checkbox"
              id="isActive"
              name="isActive"
              value="Yes"
              checked={user.isActive}
              onChange={changeCheckbox}
            />
            <label htmlFor="isActiveYes">Yes</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="isActive"
              name="isActive"
              value="No"
              checked={!user.isActive}
              onChange={changeCheckbox}
            />
            <label htmlFor="isActive">No</label>
          </div>
        </fieldset>
      </div>
      <div className="form-group">
        <label htmlFor="userLevel">user level</label>
        <select
          name="userLevel"
          id="userLevel"
          className="form-control"
          value={user.userLevel}
          onChange={changeUser}
          required
        >
          <option value="user">user</option>
          <option value="editor">editor</option>
          <option value="admin">admin</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary mt-2">Create</button>
    </form>
  );
};

export default UserForm;
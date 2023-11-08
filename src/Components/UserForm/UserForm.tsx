import React from 'react';
import './UserForm.css';

const UserForm = () => {

  return (
    <form className="form-user">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="isActive">Is Active</label>
        <fieldset>
          <div>
            <input type="checkbox" id="booleanAnswerYes" name="booleanAnswerYes"/>
            <label htmlFor="booleanAnswerYes">Yes</label>
          </div>
          <div>
            <input type="checkbox" id="booleanAnswerNo" name="booleanAnswerNo"/>
            <label htmlFor="booleanAnswerNo">No</label>
          </div>
        </fieldset>
      </div>
      <div className="form-group">
        <label htmlFor="userLevel">user level</label>
        <select name="userLevel" id="userLevel" className="form-control">
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
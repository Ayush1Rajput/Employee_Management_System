import React from "react";
import Header from "../other/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />

      <div>
        <form className="flex items-start justify-between">
          <div>
            <h3>Task Title</h3>
            <input type="text" placeholder="Make a UI" />
          </div>
          <div>
            <h3>Description</h3>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <h3>Date</h3>
            <input type="date" name="" id="" />
          </div>
          <div>
            <h3>Assign to </h3>
            <input type="text" placeholder="Employee Name" />
          </div>
          <div>
            <h3>Category</h3>
            <input type="text" />
          </div>
            <button>Create Task</button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;

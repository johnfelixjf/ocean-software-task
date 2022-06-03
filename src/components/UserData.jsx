import React from "react";
import classes from "./UserData.module.scss";
import Button from "@mui/material/Button";

const UserData = (props) => {
    const onDeleteHandler = (id) => {
        console.log(id)
        props.onDeleteUser(id);
    }
  return (
    <div className={classes.userdata}>
      <h1>User Datas</h1>
      <div className={classes.table_container}>
      <table className={classes.userdata_table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.datas?.map((data) => (
            <tr key={data.id}>
              <td>{data.userName}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
              <td>{data.country}</td>
              <td>{data.state}</td>
              <td>{data.city}</td>
              <td>
                <Button
                  onClick={() => onDeleteHandler(data.id)}
                  variant="outlined"
                  color="error"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default UserData;

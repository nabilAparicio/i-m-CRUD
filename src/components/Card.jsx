/* eslint-disable react/prop-types */
import React from "react";
import { GrEdit, GrTrash } from "react-icons/gr";
import axios from "axios";

const Card = ({ user, reloadCards, editUserfn }) => {
  const deleteUser = () => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${user.id}`)
      .then((res) => {
        console.log(res);
        reloadCards();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="m-4 flex justify-between overflow-hidden rounded-2xl bg-white p-4 shadow-lg">
        <div>
          <h1 className="text-2xl font-bold">
            {user.first_name} {user.last_name}
          </h1>
          <p>{user.email}</p>
          <p>{user.birthday}</p>
        </div>
        <div className="flex gap-8">
          <GrEdit
            onClick={() => editUserfn(user)}
            className=" ransition-all my-auto text-3xl duration-200 hover:scale-110 "
          />
          <GrTrash
            onClick={deleteUser}
            className=" my-auto text-3xl transition-all duration-200 hover:scale-110 "
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

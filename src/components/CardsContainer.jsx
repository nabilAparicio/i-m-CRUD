/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
const CardsContainer = ({ reload, reloadCards, editUserfn }) => {
  const [users, setUsers] = useState();
  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

  return (
    <div className=" p-10">
      {users?.map((user) => (
        <Card
          user={user}
          reloadCards={reloadCards}
          editUserfn={editUserfn}
          key={user.id}
        />
      ))}
    </div>
  );
};

export default CardsContainer;

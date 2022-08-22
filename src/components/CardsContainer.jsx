/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import CardLoader from "./CardLoader";
const CardsContainer = ({ reload, reloadCards, editUserfn }) => {
  const [users, setUsers] = useState();
  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

  return (
    <div className=" p-5 ">
      <h2 className=" mb-8 text-center text-2xl font-bold">I'M CRUD</h2>
      {users ? (
        users.map((user) => (
          <Card
            user={user}
            reloadCards={reloadCards}
            editUserfn={editUserfn}
            key={user.id}
          />
        ))
      ) : (
        <div className=" flex flex-col gap-8">
          <CardLoader />
          <CardLoader />
          <CardLoader />
        </div>
      )}
    </div>
  );
};

export default CardsContainer;

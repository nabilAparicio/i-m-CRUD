/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React from "react";
import { FaUserAlt, FaRegCalendarAlt } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";
const UsersForm = ({ reloadCards }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://users-crud1.herokuapp.com/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        reloadCards();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="mt-5 flex flex-col place-content-center gap-4">
      <h2 className="text-center text-2xl font-bold">Add New User</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 p-4"
      >
        <div className=" relative flex gap-2">
          <FaUserAlt className="my-auto text-3xl " />
          <input
            {...register("first_name", { required: true })}
            type="text"
            className="w-1/2 flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="First Name"
          />
          {errors.first_name && <span>This field is required</span>}
          <input
            {...register("last_name", { required: true })}
            type="text"
            className=" h-14 w-1/2 flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Last Name"
          />
          {errors.last_name && <span>This field is required</span>}
        </div>
        <div className=" relative flex gap-2  ">
          <MdEmail className="my-auto text-3xl" />
          <input
            {...register("email", { required: true })}
            type="email"
            className=" h-14 w-1/2 flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Email"
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className=" relative flex gap-2  ">
          <MdLock className="my-auto text-3xl" />
          <input
            {...register("password", { required: true })}
            type="password"
            className=" h-14 w-1/2 flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Password"
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <div className=" relative flex gap-2  ">
          <FaRegCalendarAlt className="my-auto text-3xl" />
          <input
            {...register("birthday", { required: true })}
            type="date"
            className=" h-14 w-1/2 flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Birthday"
          />
          {errors.birthday && <span>This field is required</span>}
        </div>
        <button
          type="submit"
          className=" ml-auto mr-2 mb-2 h-14 w-36 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800 "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UsersForm;

/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React from "react";
import { FaUserAlt, FaRegCalendarAlt } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";
const EditUsersForm = ({ reloadCards, dataCard, editUserfn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const editUserfetched = (data) => {
    fetch(`https://users-crud1.herokuapp.com/users/${dataCard.id}/`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        editUserfn();
        reloadCards();
      });
  };

  const onSubmit = (data) => {
    editUserfetched(data);
  };
  return (
    <div className="mt-5 flex flex-col place-content-center gap-4">
      <h2 className="text-center text-2xl font-bold">Edit User</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 p-4"
      >
        <div className=" relative flex gap-2">
          <FaUserAlt className="my-auto text-3xl " />
          <input
            {...register("first_name", { required: true })}
            name="first_name"
            type="text"
            className="w-1/2 flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            defaultValue={dataCard?.first_name}
          />
          {errors.first_name && <span>This field is required</span>}
          <input
            {...register("last_name", { required: true })}
            type="text"
            className=" h-14 w-1/2 flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            defaultValue={dataCard?.last_name}
          />
          {errors.last_name && <span>This field is required</span>}
        </div>
        <div className=" relative flex gap-2  ">
          <MdEmail className="my-auto text-3xl" />
          <input
            {...register("email", { required: true })}
            type="email"
            className=" h-14 w-1/2 flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            defaultValue={dataCard?.email}
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className=" relative flex gap-2  ">
          <MdLock className="my-auto text-3xl" />
          <input
            {...register("password", { required: true })}
            type="password"
            className=" h-14 w-1/2 flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            defaultValue={dataCard?.password}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <div className=" relative flex gap-2  ">
          <FaRegCalendarAlt className="my-auto text-3xl" />
          <input
            {...register("birthday", { required: true })}
            type="date"
            className=" h-14 w-1/2 flex-1 appearance-none rounded-lg border border-transparent border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            defaultValue={dataCard?.birthday}
          />
          {errors.birthday && <span>This field is required</span>}
        </div>
        <div className="flex justify-end gap-3 ">
          <button
            onClick={() => editUserfn()}
            type="button"
            className=" inline-block rounded-lg bg-red-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md shadow-red-500/50 transition duration-150 ease-in-out hover:bg-red-700  hover:shadow-lg hover:shadow-red-500/50 focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800 "
          >
            Edit user
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUsersForm;

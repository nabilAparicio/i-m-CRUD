/* eslint-disable react/prop-types */
import React from "react";
import EditUsersForm from "./EditUserForm";

const Modal = ({ editUserfn, dataCard, reloadCards }) => {
  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto ">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white p-3 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              {dataCard && (
                <EditUsersForm
                  reloadCards={reloadCards}
                  dataCard={dataCard}
                  editUserfn={editUserfn}
                />
              )}
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

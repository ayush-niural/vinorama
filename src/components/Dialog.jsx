import React, { useContext } from "react";
import { ModalContext } from "../contexts/modal.context";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Dialog({ children }) {
  const { isDialogOpen, handleCloseDialog } = useContext(ModalContext);
  return (
    <div>
      {isDialogOpen && (
        <dialog
          open
          className="fixed inset-0 flex items-center justify-center z-50 "
        >
          {/* Overlay with 70% dark opacity */}
          <div className="bg-white p-8 rounded shadow-md z-10 flex flex-col gap-6 min-w-[31.5rem]">
            <div className="flex justify-between">
              <h2 className="font-bold text-3xl">
                Login to | <span className="text-red-700">vinorama</span>
              </h2>
              <button onClick={handleCloseDialog}>
                <XMarkIcon className="w-6 h-6 text-gray-500 hover:text-gray-700" />
              </button>
            </div>
            {children}
          </div>

          <div className="fixed inset-0 bg-black opacity-70"></div>
        </dialog>
      )}
    </div>
  );
}

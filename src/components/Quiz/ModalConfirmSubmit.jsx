import clsx from "clsx";
import PropTypes from "prop-types";

function ModalConfirmSubmit({ stateOpen, onOk, onCancel, qDone, qTotal }) {
  if (!stateOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
      <div
        id="popup-modal"
        className={clsx(
          "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",
          {
            hidden: !stateOpen,
          }
        )}
      >
        <div className="p-4 w-full max-w-md max-h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-yellow-700 w-12 h-12 dark:text-yellow-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Only {qDone}/{qTotal} questions completed. Submit anyway?
              </h3>
              <button
                onClick={onOk}
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Yes, I'm sure
              </button>
              <button
                onClick={onCancel}
                data-modal-hide="popup-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ModalConfirmSubmit.propTypes = {
  stateOpen: PropTypes.bool.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  qDone: PropTypes.number.isRequired,
  qTotal: PropTypes.number.isRequired,
};

export default ModalConfirmSubmit;

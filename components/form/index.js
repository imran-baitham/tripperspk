import React from "react";

function From() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="mb-6 w-[50%]">
        <label
          for="large-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Large input
        </label>
        <input
          type="text"
          id="large-input"
          className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6 w-[50%]">
        <label
          for="large-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Large input
        </label>
        <input
          type="text"
          id="large-input"
          className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6 w-[50%]">
        <label
          for="large-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Large input
        </label>
        <input
          type="text"
          id="large-input"
          className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="mb-6 w-[50%]">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          for="file_input"
        >
          Upload file
        </label>
        <input
          className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          aria-describedby="file_input_help"
          id="file_input"
          type="file"
        />
        <p
          class="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="file_input_help"
        >
          SVG, PNG, JPG or GIF (MAX. 800x400px).
        </p>
      </div>
    </div>
  );
}

export default From;

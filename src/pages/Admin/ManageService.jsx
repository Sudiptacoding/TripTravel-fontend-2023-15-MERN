import React from "react";

export default function ManageService() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold text-red-600 drop-shadow-md">
          Unauthorized Access
        </h2>
        <p className="text-gray-700 mt-4 text-lg">
          You are not authorized to access this page.
        </p>
        <p className="text-gray-600 mt-2">
          Editing, deleting, or performing any actions is restricted.
        </p>
        <p className="text-gray-500 mt-4 italic">
          Thank you for visiting our site.
        </p>
      </div>
    </div>
  );
}

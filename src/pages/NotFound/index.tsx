import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/register/form"
        className="text-green-700 border border-green-700 px-4 py-2 rounded uppercase text-sm hover:bg-green-700 hover:text-white transition"
      >
        Go to Registration
      </Link>
    </div>
  );
};

export default NotFound;

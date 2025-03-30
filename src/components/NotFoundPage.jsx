import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center w-lg ">
        <img src="/404.svg" className="w-full m-auto" />
        <div>
          <Link
            to="/"
            className="bg-[#2563EB] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

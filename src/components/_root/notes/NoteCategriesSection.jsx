import { memo, useMemo } from "react";
import { useCategoriesQuery } from "../../../lib/query/react-query";
import { FaPlus } from "react-icons/fa6";
import CreateCategoryDialog from "../dialogs/CreateCategoryDIalog";

const NoteCategriesSection = () => {
  const {
    data: categories,
    isPending: isCategoryLoading,
    isSuccess: isCategorySuccess,
  } = useCategoriesQuery();

  // Memoize the processed categories data
  const categoryList = useMemo(() => {
    if (!isCategorySuccess || isCategoryLoading) return [];
    return categories.data.map((category, index) => {
      // vibrenet colors in tailwind
      const colors = [
        "bg-red-500",
        "bg-green-500",
        "bg-blue-500",
        "bg-yellow-500",
        "bg-pink-500",
        "bg-indigo-500",
        "bg-orange-500",
        "bg-teal-500",
      ];
      return {
        name: category.name,
        color: colors[index % colors.length],
        notesCount: category._count.Notes,
      };
    });
  }, [categories, isCategorySuccess, isCategoryLoading]);

  return (
    <div
      className="bg-white rounded-xl shadow-sm p-6 mb-8 animate__animated animate__fadeIn animate__animated--visible"
      style={{ animationDelay: "0.6s" }}
      id="el-degtertg"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-4" id="el-qfczjb89">
        Note Categories
      </h2>
      <div className="flex flex-row items-start" id="el-8s94g432">
        {isCategorySuccess && (
          <div className="flex flex-wrap gap-3 flex-1" id="el-8s94g432">
            {categoryList.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 badge badge-xl rounded-md text-sm font-medium flex items-center justify-between transition text-white ${category.color} hover:opacity-80 hover:scale-105`}
              >
                <span>{category.name}</span>
                <span className="text-xs ml-2 bg-white/20 px-2 py-1 rounded-full">
                  {category.notesCount}
                </span>
              </button>
            ))}
          </div>
        )}
        {isCategoryLoading && (
          <div className="flex flex-wrap gap-3" id="">
            <span className="loading loading-dots loading-md"></span>
          </div>
        )}
        <div className="bg-gray-100 hover:bg-gray-200  text-gray-700 px-3 py-1.5 rounded-lg text-md font-medium flex items-center transition">
          <CreateCategoryDialog>
            <div
              className="mx-2 tooltip flex flex-row items-center justify-center gap-2 py-3 cursor-pointer"
              data-tip="Create Category"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("createCategoryModal")?.showModal();
              }}
              aria-label="Create Category"
            >
              <FaPlus className="mr-2 text-2xl " />
              <span className="font-bold ">Create Category</span>
            </div>
          </CreateCategoryDialog>
        </div>
      </div>
    </div>
  );
};

export default memo(NoteCategriesSection);

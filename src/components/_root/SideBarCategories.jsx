import React, { memo, useState, useCallback, useMemo } from "react";
import useCollapseState from "../../context/CollapseStateContext.jsx";
import { randomLimitedColorGenerator } from "../../util/colorGenerators";
import { useCategoriesQuery } from "../../lib/query/react-query";

const SideBarCategories = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const { isCollapsed } = useCollapseState(); // Destructure only necessary value

  const {
    data: categories,
    isPending: isCategoryLoading,
    isSuccess: isCategorySuccess,
  } = useCategoriesQuery();

  // Memoize the processed categories data
  const categoryList = useMemo(() => {
    if (!isCategorySuccess || isCategoryLoading) return [];
    return categories.data.map((category) => ({
      name: category.name,
      color: randomLimitedColorGenerator(),
    }));
  }, [categories, isCategorySuccess, isCategoryLoading]);

  // Use useCallback to prevent unnecessary re-creations
  const toggleCategories = useCallback(() => {
    setIsCategoriesOpen((prev) => !prev);
  }, []);

  return (
    <>
      {!isCollapsed && (
        <div className="mt-6 px-3">
          <div className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600">
            <span>CATEGORIES</span>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={toggleCategories}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          {isCategoriesOpen && (
            <div className="mt-1 space-y-1">
              {!isCategoryLoading && isCategorySuccess ? (
                categoryList.map((category, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100"
                  >
                    <span
                      style={{ backgroundColor: category.color }}
                      className="w-2 h-2 rounded-full mr-3"
                    ></span>
                    {category.name}
                  </a>
                ))
              ) : (
                <div className="flex justify-center my-4">
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default memo(SideBarCategories);

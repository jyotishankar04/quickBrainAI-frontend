import { memo, useMemo } from "react";
import { useCategoriesQuery } from "../../../lib/query/react-query";
import CreateCategoryDialog from "../dialogs/CreateCategoryDialog";
import { useSearchParams } from "react-router-dom";
import { isMobile } from "react-device-detect";

const NoteCategoriesSection = () => {
  const {
    data: categories,
    isPending: isCategoryLoading,
    isSuccess: isCategorySuccess,
  } = useCategoriesQuery();
  const [params, setParams] = useSearchParams();

  // Get the selected category from URL
  const selectedCategory = params.get("category") || "all";

  // Memoize the processed categories data
  const categoryList = useMemo(() => {
    if (!isCategorySuccess || isCategoryLoading) return [];
    return categories.data.map((category, index) => {
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
      const btns = [
        "btn-primary",
        "btn-secondary",
        "btn-accent",
        "btn-info",
        "btn-success",
        "btn-warning",
        "btn-error",
      ];
      return {
        name: category.name,
        color: colors[index % colors.length],
        notesCount: category._count.Notes,
        btn: btns[index % btns.length],
      };
    });
  }, [categories, isCategorySuccess, isCategoryLoading]);

  if (isMobile) {
    return (
      <div
        className="bg-white rounded-xl shadow-sm p-6 mb-8 animate__animated animate__fadeIn"
        style={{ animationDelay: "0.6s" }}
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Note Categories
        </h2>
        <div className="flex flex-col-reverse  items-start gap-4">
          {isCategorySuccess && (
            <div className="flex filter  flex-wrap gap-3 flex-1">
              {/* "All" category button */}
              <input
                className="btn filter-reset"
                type="radio"
                name="category"
                aria-label="All"
                checked={selectedCategory === "all"}
                onChange={() =>
                  setParams((prev) => {
                    prev.delete("category");
                    return prev;
                  })
                }
              />
              {/* Category buttons */}
              {categoryList.map((category) => (
                <input
                  key={category.name}
                  type="radio"
                  name="category"
                  className={`btn ${category.btn}`}
                  aria-label={`${category.name} (${category.notesCount})`}
                  checked={selectedCategory === category.name}
                  onChange={() => {
                    setParams((prev) => {
                      prev.set("category", category.name);
                      return prev;
                    });
                  }}
                />
              ))}
            </div>
          )}
          {isCategoryLoading && (
            <div className="flex flex-wrap gap-3">
              <span className="loading loading-dots loading-md"></span>
            </div>
          )}
          <div className="flex  w-full">
            <CreateCategoryDialog>
              <div
                className="btn btn-primary w-full  items-center"
                data-tip="Create Category"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("createCategoryModal")?.showModal();
                }}
                aria-label="Create Category"
              >
                <span className="font-bold text-lg">Create Category</span>
              </div>
            </CreateCategoryDialog>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-xl shadow-sm p-6 mb-8 animate__animated animate__fadeIn"
      style={{ animationDelay: "0.6s" }}
    >
      <h2 className="text-xl font-bold text-gray-800 mb-4">Note Categories</h2>
      <div className="flex flex-row  items-start gap">
        {isCategorySuccess && (
          <div className="flex filter  flex-wrap gap-3 flex-1">
            {/* "All" category button */}
            <input
              className="btn filter-reset"
              type="radio"
              name="category"
              aria-label="All"
              checked={selectedCategory === "all"}
              onChange={() =>
                setParams((prev) => {
                  prev.delete("category");
                  return prev;
                })
              }
            />
            {/* Category buttons */}
            {categoryList.map((category) => (
              <input
                key={category.name}
                type="radio"
                name="category"
                className={`btn ${category.btn}`}
                aria-label={`${category.name} (${category.notesCount})`}
                checked={selectedCategory === category.name}
                onChange={() => {
                  setParams((prev) => {
                    prev.set("category", category.name);
                    return prev;
                  });
                }}
              />
            ))}
          </div>
        )}
        {isCategoryLoading && (
          <div className="flex flex-wrap gap-3">
            <span className="loading loading-dots loading-md"></span>
          </div>
        )}
        <div className="flex justify-end">
          <CreateCategoryDialog>
            <div
              className="btn btn-ghost  items-center"
              data-tip="Create Category"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("createCategoryModal")?.showModal();
              }}
              aria-label="Create Category"
            >
              <span className="font-bold text-lg">Create Category</span>
            </div>
          </CreateCategoryDialog>
        </div>
      </div>
    </div>
  );
};

export default memo(NoteCategoriesSection);

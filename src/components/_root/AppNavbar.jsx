import NavAvatar from "./NavAvatar";

const AppNavbar = () => {
  return (
    <div className="bg-gray-200 flex items-center justify-end">
      <div className="flex items-center pr-10">
        <NavAvatar />
      </div>
    </div>
  );
};

export default AppNavbar;

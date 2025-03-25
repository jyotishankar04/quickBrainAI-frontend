const NoDataFound = ({ text }) => {
  return (
    <div className="col-span-3 py-5 flex flex-col gap-2 justify-center items-center">
      <img
        src="../../public/No-data-pana.svg"
        className="w-60 m-auto"
        alt={text}
      />
      <p className="text-xl font-bold">{text}</p>
    </div>
  );
};

export default NoDataFound;

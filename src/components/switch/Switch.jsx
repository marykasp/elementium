const Switch = () => {
  return (
    <>
      <label
        htmlFor="check"
        className="bg-gray-200 w-20 h-10 rounded-full block relative cursor-pointer"
      >
        <input type="checkbox" id="check" className="sr-only peer" />
        <span className="w-2/5 h-4/5 bg-sky-300 absolute rounded-full left-1 top-1 transition-all duration-500 peer-checked:left-11 peer-checked:bg-sky-600"></span>
      </label>
    </>
  );
};

export default Switch;

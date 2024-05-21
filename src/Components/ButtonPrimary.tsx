const ButtonPrimary = ({ children, addClass }: any) => {
  return (
    <button
      className={
        "group flex justify-center items-center relative  cursor-pointer py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-primary hover:shadow-xl transition-all outline-none " +
        addClass
      }
    >
      {children}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-black opacity-40 group-hover:animate-shine" />
    </button>
  );
};

export default ButtonPrimary;

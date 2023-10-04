const Widget = ({ icon, title, subtitle }) => {
  return (
    <div className="flex shadow-md bg-clip-border bg-white !flex-row flex-grow items-center rounded-[20px]">
      <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-full bg-[#F4F7FE] p-3 dark:bg-navy-700">
          <span className="flex items-center text-brand-500 ">{icon}</span>
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="font-sans text-sm font-medium text-gray-400">{title}</p>
        <h4 className="font-mono text-xl font-bold text-[#1B254B] ">
          {subtitle}
        </h4>
      </div>
    </div>
  );
};

export default Widget;

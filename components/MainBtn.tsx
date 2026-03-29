const MainBtn = ({ children }: { children: React.ReactNode }) => (
  <button className="bg-bg-nav text-font-color font-bold w-full py-1 px-4 border border-border-color hover:border-hover-color  rounded-md cursor-none cursor-target">
    {children}
  </button>
);

export default MainBtn;

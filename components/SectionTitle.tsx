const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2
      className="mb-8 capitalize  text-3xl flex w-fit gap-2 items-center relative before:absolute before:-bottom-1 before:h-1 before:w-full
        before:bg-(--hover-color)"
    >
      {children}
    </h2>
  );
};

export default SectionTitle;

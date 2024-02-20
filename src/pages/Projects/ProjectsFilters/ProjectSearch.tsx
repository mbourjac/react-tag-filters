export const ProjectSearch = () => {
  return (
    <form>
      <input
        type="search"
        placeholder="Search"
        aria-label="Search project"
        className="search-input w-full rounded-full border border-body bg-off-white py-2 pl-12 pr-6 placeholder:text-body placeholder:opacity-50 md:w-2/3 lg:w-1/2"
      />
    </form>
  );
};

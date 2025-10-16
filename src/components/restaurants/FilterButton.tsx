interface FilterButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const FilterButton = ({
  children,
  active = false,
  onClick,
}: FilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border 
        ${
          active
            ? "bg-pink-700 text-white border-pink-800 shadow-md"
            : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
        }
      `}
    >
      {children}
    </button>
  );
};

export default FilterButton;

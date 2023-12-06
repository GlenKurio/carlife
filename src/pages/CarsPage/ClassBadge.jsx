function ClassBadge({ classen }) {
  const classVariants = {
    supercar: "bg-lime-400",
    luxury: "bg-amber-400 ",
    sport: "bg-purple-400",
    suv: "bg-gray-400",
  };

  return (
    <span
      className={`uppercase px-2 py-1 max-w-min text-[10px] rounded-full self-center font-semibold ${classVariants[classen]}`}
    >
      {classen}
    </span>
  );
}

export default ClassBadge;

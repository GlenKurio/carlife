function ClassBadge({ type }) {
  const typeVariants = {
    supercar: "bg-gradient-to-r from-lime-500 to-green-500",
    luxury: "bg-gradient-to-r from-amber-500 to-orange-500",
    sport: "bg-gradient-to-r from-violet-500 to-purple-500",
    suv: "bg-gradient-to-r from-emerald-500 to-teal-500",
  };

  return (
    <span
      className={`uppercase px-2 py-1 max-w-min text-[10px] rounded-full self-center font-semibold ${typeVariants[type]}`}
    >
      {type}
    </span>
  );
}

export default ClassBadge;

function Card({ className, children }) {
  return (
    <div
      className={`bg-zinc-500 rounded-xl h-full shadow-lg shadow-neutral-500/50 py-4 px-8 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;

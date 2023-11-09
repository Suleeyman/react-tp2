function Img({ type = "square", size = "md", src, alt, children }) {
  let classes = "";
  if (type === "rounded") {
    classes = "block rounded-full";
  } else {
    classes = "block";
  }

  return (
    <div
      className={`grid place-items-center overflow-hidden ${
        type === "rounded" ? "rounded-full" : ""
      } ${size === "md" ? "h-40 w-40" : "h-12 w-12"}`}
    >
      <img className="h-full w-full" src={`${src}`} alt={`${alt}`} />
      {children}
    </div>
  );
}

export default Img;

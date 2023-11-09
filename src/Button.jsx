function Button({ onClick, type = "rounded", children }) {
  let classes = "";
  if (type === "rounded") {
    classes = "bg-gray-200 rounded-lg text-gray-900 border py-1 px-8";
  } else {
    classes = "bg-transparent text-white";
  }
  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

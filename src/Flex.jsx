const alignAndJustify = {
  row: {
    center: "justify-items-center items-center",
    left: "justify-items-start items-center",
    right: "justify-items-end items-center",
  },
  col: {
    center: "flex-col justify-items-center items-center",
    left: "flex-col justify-items-center items-start",
    right: "flex-col justify-items-center items-end",
  },
};

const gapSize = {
  sm: "gap-0.5",
  md: "gap-2",
  lg: "gap-4",
};

function Flex({ dir = "row", align = "center", gap = "sm", children }) {
  return (
    <div className={`flex ${alignAndJustify[dir][align]} ${gapSize[gap]}`}>
      {children}
    </div>
  );
}

export default Flex;

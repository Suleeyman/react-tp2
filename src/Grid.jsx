function Grid({ row, col, children }) {
  const rowArr = row.split("-to-").map((s) => Number(s));
  const colArr = col.split("-to-").map((s) => Number(s));

  const rowStart = `row-start-${rowArr[0]}`;
  const rowEnd = `row-span-${rowArr[1]}`;

  const colStart = `col-start-${colArr[0]}`;
  const colEnd = `col-span-${colArr[1] + 1}`;

  return (
    <div className={`${rowStart} ${rowEnd} ${colStart} ${colEnd}`}>
      {children}
    </div>
  );
}

export default Grid;

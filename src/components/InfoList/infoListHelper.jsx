import Cell from "../Cell/Cell";

export function renderCells(item){
  return Object.entries(item)
    .filter(([key]) => key !== "Id")
    .map(([key, value]) => <Cell key={key} itemText={value} />);
}
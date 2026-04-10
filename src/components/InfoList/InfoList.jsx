import React, { Fragment } from "react";
import InfoListRaw from "./InfoListRaw";
import InfoListHeader from "./InfoListHeader";
import PaginationRaw from "../Pagination/PaginationRaw";

export default function InfoList({columns, data, onAction, createButtonText, changePageAction}) {
if (!data.Items) {
  return <div>Загрузка...</div>;
}
const visibleField = columns.filter(c => c.visible);
if (data.Items.length === 0) {
  return (
    <button onClick={() => onAction("create")} className="createButton">
      {createButtonText}
    </button>
  );
}
function calculateGridColumns(){
  return visibleField.map(() => "1fr").join(' ');
}
return (
  <div className="clientInfoList"
   style={{gridTemplateColumns: calculateGridColumns()}}
   >
    <InfoListHeader style={{ color: "#80c0ff" }} columns={visibleField} />
    {data.Items.map(item => (
      <InfoListRaw key={item.Id} item={item} columns={visibleField} onAction={onAction} />
    ))}
    <PaginationRaw totalSearchCount={data.TotalCount} changePageAction={changePageAction}/>
  </div>
);
}
import React, { Fragment } from "react";
import InfoListRaw from "./InfoListRaw";
import InfoListHeader from "./InfoListHeader";
import PaginationRaw from "../Pagination/PaginationRaw";

export default function InfoList({listHeaders, data, onAction, createButtonText, changePageAction}) {
 
if (!data.Items) {
  return <div>Загрузка...</div>;
}

if (data.Items.length === 0) {
  return (
    <button onClick={() => onAction("create")} className="createButton">
      {createButtonText}
    </button>
  );
}

return (
  <div className="clientInfoList">
    <InfoListHeader style={{ color: "#80c0ff" }} headers={listHeaders} />

    {data.Items.map(item => (
      <InfoListRaw key={item.Id} item={item} onAction={onAction} />
    ))}
    <PaginationRaw totalSearchCount={data.TotalCount} changePageAction={changePageAction}/>
  </div>
);
}
import React, { Fragment } from "react";
import InfoListRaw from "./InfoListRaw";
import InfoListHeader from "./InfoListHeader";

export default function InfoList({listHeaders, data, onAction, createButtonText}) {
 
  return (    
    <>
    {data.length === 0 && (
      <button onClick={() => onAction("create")} className="createButton">{createButtonText}</button>
    )}

<div className="clientInfoList">
  <InfoListHeader style={{color : "#80c0ff"}} headers={listHeaders} />
  {data.map(item => (
    <InfoListRaw key={item.Id} item={item} onAction={onAction}/>
  ))}
</div>
</>
  );
}
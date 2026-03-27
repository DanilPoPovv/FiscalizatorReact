import React, { Fragment } from "react";
import InfoListRaw from "./InfoListRaw";
import InfoListHeader from "./InfoListHeader";

export default function InfoList({listHeaders, data, onAction}) {
 
  return (
<div className="clientInfoList">
  <InfoListHeader style={{color : "#80c0ff"}} headers={listHeaders} />
  {data.map(item => (
    <InfoListRaw key={item.Id} item={item} onAction={onAction}/>
  ))}
</div>
  );
}
import React, { Fragment } from "react";
import InfoListRaw from "./InfoListRaw";
import InfoListHeader from "./InfoListHeader";

export default function InfoList({listHeaders, data, onAction}) {
  const clients = data;
 
  return (
<div className="clientInfoList">
  <InfoListHeader style={{color : "#80c0ff"}} headers={listHeaders} />
  {data.map(client => (
    <InfoListRaw key={item.id} client={client} />
  ))}
</div>
  );
}
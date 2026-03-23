import ClientInfoDivItem from "./CleintInfoDivItem";
export function ClientInfoDiv({ client, showButton = true }) {
  return (
    <div
      style={{
        border: "2px solid white",
        height: "40px",
        borderRadius: "4px",
        padding: "0px",
        display: "grid",
        gridTemplateColumns: "150px 200px 100px 100px",
        gap: "20px",
      }}
    >
      <ClientInfoDivItem itemText={client.name}/>
      <ClientInfoDivItem itemText={client.email} />
      <ClientInfoDivItem itemText={client.address} />
      <div className="rightBorderedInfoDiv" style={{ width: "100px", alignItems : "center",display: "flex"}}>
        {showButton && <button>Удалить</button>}
      </div>
    </div>
  );
}
import ClientInfoDivItem from "./CleintInfoDivItem";
export function ClientInfoDiv({ client, showButton = true }) {
  return (
    <div
      style={{
        border: "2px solid white",
        height: "40px",
        borderRadius: "4px",
        padding: "0px",
        display: "flex",
        gap: "20px",
      }}
    >
      <ClientInfoDivItem itemText={client.name} itemWidth={150}/>
      <ClientInfoDivItem itemText={client.email} itemWidth={200}/>
      <div className="rightBorderedInfoDiv" style={{ width: "100px", alignItems : "center",display: "flex"}}>
        {showButton && <button>Удалить</button>}
      </div>
    </div>
  );
}
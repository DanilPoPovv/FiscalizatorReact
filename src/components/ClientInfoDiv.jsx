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
      <div className="baseFlexDiv rightBorderedInfoDiv" style={{ width: "150px" }}>
        {client.name}
      </div>
      <div className="baseFlexDiv rightBorderedInfoDiv" style={{ width: "200px" }}>
        {client.email}
      </div>
      <div className="rightBorderedInfoDiv" style={{ width: "100px", alignItems : "center",display: "flex"}}>
        {showButton && <button>Удалить</button>}
      </div>
    </div>
  );
}
export function NavItem({ NavName, onClick}) {

  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        padding: "0px 10px",
        justifyContent: "center",
        borderRight: "3px solid green",
        textAlign: "center",
        flex: 1,
      }}
    >
      {NavName}
    </div>
  );
}
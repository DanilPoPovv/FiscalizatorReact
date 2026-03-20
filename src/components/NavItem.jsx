export function NavItem({ NavName }) {
  return (
    <div
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        padding: "0px 60px",
        justifyContent: "center",
        borderRight: "3px solid white",
        textAlign: "center",
        width: "60px",
      }}
    >
      {NavName}
    </div>
  );
}
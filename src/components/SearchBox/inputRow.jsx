export default function InputRow({ placeholder }) {
  return (
    <div style={{ flex: "1 1 45%", display: "flex", alignItems: "center", padding: "5px", minWidth : "45%"}}>
      <label style={{ marginRight: "10px", minWidth: "80px", textAlign : "right" }}>{placeholder}:</label>
      <input type="text" style={{ flex: 1, minWidth : "75px", maxWidth : "295px"}} />
    </div>
  );
}
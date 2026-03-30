export default function InputRow({ placeholder, onChange, value }) {
  return (
    <div className="inputRow">
      <label className="inputRowLabel">{placeholder}</label>
      <input onChange={onChange} className="inputRowInput" value={value} />
    </div>
  );
}
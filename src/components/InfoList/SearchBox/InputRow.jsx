export default function InputRow({ placeholder }) {
  return (
    <div className="inputRow">
      <label className="inputRowLabel">
        {placeholder}:
      </label>
      <input type="text" className="inputRowInput" />
    </div>
  );
}
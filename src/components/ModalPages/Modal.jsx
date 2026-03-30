import InputRow from "../InfoList/SearchBox/InputRow";
import "./Modal.css";
import { useState, useEffect} from "react";

export default function Modal({ onClose, onSubmit, onChange, fieldNames, item }) {
const [values, setValues] = useState(() => ({
  ...item
}));

const handleChange = (name, value) => {
  const newValues = {...values, [name]: value};
  setValues(newValues);
  onChange(newValues);
};
  const handleSubmit = () => {
    onSubmit(values); 
  };
  return (
    <div className="modalOverlay">
     <div className="modalContent">
        <div className="modalFooter">
            <button style={{width : "30px", height : "30px"}} className="modalButton" onClick={onClose}>X</button>
        </div>
  
  {fieldNames.map((field, index) => (
    <InputRow key={index} placeholder={field.label} onChange={(e) => handleChange(field.field, e.target.value)} value={values[field.field]}/>
  ))}
  <div className="modalFooter">
    <button style={{width : "85px", height : "30px"}} className="modalButton" onClick={handleSubmit}>Submit</button>
  </div>
</div>
    </div>
  );
}
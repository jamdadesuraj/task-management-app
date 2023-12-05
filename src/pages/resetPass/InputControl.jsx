import React from "react";
import "./inputcontrol.css";
const InputControl = (props) => {
  return (
    <>
      <div className="container">
        {props.lable && <lable>{props.lable}</lable>}
        <input type="text" {...props} />
      </div>
    </>
  );
};

export default InputControl;

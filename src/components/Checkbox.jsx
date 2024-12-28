import React from "react";

const Checkbox = ({ label }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer justify-start gap-2">
        <input type="checkbox" defaultChecked className="checkbox" />
        <span className="label-text">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;

import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.buildcontrols}>
      {controls.map((ctrls) => (
        <BuildControl key={ctrls.label} label={ctrls.label} />
      ))}
    </div>
  );
};

export default BuildControls;

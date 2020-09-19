import React from "react";
import classes from "./BuildControl.module.css";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";

const BuildControl = (props) => {
  return (
    <div className={classes.buildcontrol}>
      <button className={classes.less}>
        <IndeterminateCheckBoxIcon />
      </button>
      <div className={classes.label}>{props.label}</div>
      <button className={classes.more}>
        <AddBoxIcon />
      </button>
    </div>
  );
};

export default BuildControl;

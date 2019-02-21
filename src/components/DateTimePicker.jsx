import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  root: {
    width: "100%"
  },
  textField: {
    color: "white"
  },
  underline: {
    "&:before": {
      borderBottom: "1px solid white"
    },
    "&:hover:not(disabled):not(focused):not(errored):before": {
      borderColor: "white !important"
    },
    "&:after": {
      borderBottom: "2px solid white"
    }
  }
});

export function DateTimePicker(props) {
  const { classes, value } = props;

  const onDateTimeChange = event => {
    const { value } = event.currentTarget;
    props.onDateTimeChanged(value);
  };

  return (
    <form noValidate>
      <TextField
        label={props.label}
        classes={{ root: classes.root }}
        type="datetime-local"
        InputProps={{
          classes: {
            input: classes.textField,
            underline: classes.underline
          }
        }}
        value={value}
        onChange={onDateTimeChange}
      />
    </form>
  );
}

export default withStyles(styles)(DateTimePicker);

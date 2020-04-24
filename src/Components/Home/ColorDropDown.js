import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 120,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "red",
    border: "1px groove white",
    borderRadius: "5px",
    paddingBottom: "3px"
  },
  inputControl: {
    color: "white",
    textAlign: "right",
    marginLeft: "7px",
    paddingBottom: "3px"
    // paddingTop: "8px"
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();

  //   React.useEffect(() => {
  //     setLabelWidth(inputLabel.current.offsetWidth);
  //   }, []);

  const handleChange = event => {
    document.body.style.background = event.target.value;
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel
          className={classes.inputControl}
          //   id="demo-simple-select-label"
        >
          Change Color
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="colors"
          onChange={handleChange}
        >
          <MenuItem value="Blue">Blue</MenuItem>
          <MenuItem value="Red">Red</MenuItem>
          <MenuItem value="Green">Green</MenuItem>
          <MenuItem value="Orange">Orange</MenuItem>
          <MenuItem value="Yellow">Yellow</MenuItem>
          <MenuItem value="Pink">Pink</MenuItem>
          <MenuItem value="Orange">Orange</MenuItem>
          <MenuItem value="Purple">Purple</MenuItem>
          <MenuItem value="Brown">Brown</MenuItem>

          <MenuItem value="Black">Black</MenuItem>

          <MenuItem value="Gray">Gray</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

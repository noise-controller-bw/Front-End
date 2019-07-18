import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const ScoreForm = () => {
  const [date, setDate] = useState("");
  const [score, setScore] = useState("");

  const classes = useStyles();

  return (
    <>
      <form className={classes.container}>
        <TextField
          variant="outlined"
          margin="normal"
          className={classes.textField}
          id="date"
          label="Date"
          name="date"
          value={date}
          placeholder="mm/dd/yyyy"
          onChange={({ target }) => setDate(target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          className={classes.textField}
          id="score"
          label="Score"
          name="score"
          value={score}
          placeholder="score from 0 - 100"
          onChange={({ target }) => setScore(target.value)}
        />
        <Button type="submit" variant="contained" color="primary" size="medium">
          Submit Score
        </Button>
      </form>
    </>
  );
};

export default ScoreForm;
import {Button, Grid, TextField} from "@material-ui/core";
import {ChangeEvent, useState} from "react";
import * as Constants from '../../constants'

export const InputCity = (props: any) => {
  let [inputData, setInputData] = useState('');

  let onChangeHandler = (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let currentData = ev.currentTarget.value;
    setInputData(currentData);
  }

  let inputDataCheck = () => {
    if (!inputData.length) {
      alert(Constants.EMPTY_FIELD_MSG);
    } else {
      props.param(inputData);
    }
  }

  let onClickHandler = () => inputDataCheck();

  let onKeyPressHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === Constants.ENTER_KEY) {
      inputDataCheck();
    }
  }

  return (
    <Grid>
      <TextField
        label={Constants.EMPTY_FIELD_MSG}
        value={inputData}
        onChange={onChangeHandler}
        onKeyPress={onKeyPressHandler}
      />
      <Button onClick={onClickHandler}>🔍 Get Weather</Button>
    </Grid>
  )
}
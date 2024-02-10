import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './index.css'
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        name: state.name,
        age: state.age + 1,
      };

    case 'decrement':
      return {
        name: state.name,
        age: state.age - 1,
      };

    case 'change_name':
      return {
        name: action.nextName,
        age: state.age,
      };

    default:
      return state;
  }
}

const initialState = { name: '', age: 1 };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleClickIncrement() {

    dispatch({ type: 'increment' });
  }

  function handleClickDecrement() {
    if (state.age > 1) {
      dispatch({ type: 'decrement' });
    }
  }

  function handleInputChange(e) {
    dispatch({
      type: 'change_name',
      nextName: e.target.value,
    });
  }

  return (
    <div className="age">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '40ch'},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="name" label="Enter your name" variant="outlined" value={state.name} onChange={handleInputChange} />
      </Box>
      <br />
      <br />
      <Stack spacing={2} direction="column" alignItems="center">
           <Button className="age" variant="contained" onClick={handleClickIncrement}>
              Increment age
            </Button>
            <Button variant="outlined" onClick={handleClickDecrement}>
              Decrement age
             </Button>
                </Stack>

      <p>
        {state.name} your age is {state.age}.
      </p>
     
    </div>
  );
}

export default App;



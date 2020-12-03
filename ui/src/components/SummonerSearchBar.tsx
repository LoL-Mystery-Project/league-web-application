import React, { FC } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// interface SummonerSearchBarProps {}

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';



// export const SummonerSearchBar: FC<SummonerSearchBarProps> = ({}) => {
//   return (
//     <>
//       <button>hi</button>
//     </>
//   );
// };

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      
    },
  },
}));


export default function SummonerSearchBar() {
  const classes = useStyles();

  return (
    <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Search the Rift"/>
          </Grid>
        </Grid>
      </div>
  );
}
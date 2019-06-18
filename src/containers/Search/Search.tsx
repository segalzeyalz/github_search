import * as React from 'react';
import { SearchInterface } from '../../lib/entities';
import { withStyles, createStyles, WithStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import SearchButton from './../../components/SearchButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
const styles = (theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(2)
    },
    groupContainer: {
      display: 'flex',
      alignContent: 'stretch',
      marginBottom: theme.spacing(2)
    },
    userDescription: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: theme.spacing(1)
    },
    decriptior: {
      color: theme.palette.grey[400]
    },
    margin: {
      marginTop: theme.spacing(5)
    }
  });

type Props = WithStyles<typeof styles> & SearchInterface;
const Search = ({ classes, updateInput, updateUsers }: Props) => {
  const [input, setinput] = React.useState('');
  const setSearch = () => {
    updateInput(input);
    updateUsers(input);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setinput(event.target.value);
  return (
    <div className={classes.container}>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel>Search</InputLabel>
        <Input value={input} onChange={handleChange} />
      </FormControl>
      <SearchButton updateInput={setSearch} />
    </div>
  );
};

export default withStyles(styles)(Search);

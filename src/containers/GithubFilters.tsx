import * as React from 'react';
import './style.css';
import Search from './Search';
import { withStyles, createStyles, WithStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { fetchSearch } from './../lib/api';
const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.primary.main,
      width: '100%',
      height: '100%'
    }
  });
type Props = WithStyles<typeof styles>;

const GithubFilters = ({ classes }: Props) => {
  const [users, setUsers] = React.useState([]);
  const [input, setSearch] = React.useState('');

  const ayncGetUsers = async input => {
    const result = await fetchSearch(input);
    console.log(result.data);
    // @ts-ignore
    setUsers(result && result.results ? result.results : []);
  };
  React.useEffect(() => {
    ayncGetUsers(input);
  }, []);
  const updateUsers = input => () => ayncGetUsers(input);
  return (
    <div className={classes.root}>
      <Search updateUsers={updateUsers} updateInput={setSearch} />
    </div>
  );
};

export default withStyles(styles)(GithubFilters);

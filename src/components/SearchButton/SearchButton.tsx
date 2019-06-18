import * as React from 'react';
import { SearchInterface } from '../../lib/entities';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles, WithStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.text.primary,
      marginBottom: 20,
      width: 240,
      height: 50
    }
  });

type Props = WithStyles<typeof styles> & SearchInterface;

const SearchButton = ({ classes, updateInput }: Props) => {
  return (
    <Button
      variant="contained"
      size="large"
      className={classes.button}
      onClick={updateInput}
    >
      <Typography>Search</Typography>
    </Button>
  );
};

export default withStyles(styles)(SearchButton);

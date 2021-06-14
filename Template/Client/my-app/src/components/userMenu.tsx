import React, { useContext } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router';

import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
  }),
);

export default function UserMenu() {
    const history=useHistory()
    const usersState = useSelector((state:any) => state.user)
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickedMe=(e:any)=>{
      if(e.target.id==="logout")
      history.push("/logout")
      else if(e.target.id==="my-bookmarks"){
        history.push("/mybookmarks")
      }
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div style={{display:"inline-block"}}>
      <Button aria-describedby={id} onClick={handleClick}>
        <Avatar>{usersState.activeUser.user.userName.split('')[0].toUpperCase()}</Avatar>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography} id="my-bookmarks"onClick={(e:any)=>clickedMe(e)}>My Bookmarks</Typography>
        <Typography className={classes.typography} id="logout" onClick={(e:any)=>clickedMe(e)}>Logout</Typography>

      </Popover>
    </div>
  );
}
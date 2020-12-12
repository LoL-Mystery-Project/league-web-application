import React, {FC} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import styled from "styled-components";
import { mainColour, subColour } from "../styles/palette";
import { isPropertyAccessExpression } from 'typescript';
import PropTypes from 'prop-types';


const Wrapper = styled.div`
  .soulIconHover:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .toggleButtonStyles {
    color: ${mainColour.yellow};
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
    display: flex;
    align-items: center;
  }

  .check-rotate {
    transform: rotate(45deg);
  }

  .InfoDrawerStyle {
	max-width: 30rem;
	box-shadow: $shadow-8dp;
	border: 0;
	height: 100%;
}
`;

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawerStyle: {
    zIndex: 9999,
    color: mainColour.white,
  }
});

interface InfoDrawerProps {
  handleClose: Function;
  showInfoDrawer: boolean;
}
  

export const InfoDrawer: FC<InfoDrawerProps> = ({handleClose, showInfoDrawer}) => {
  const classes = useStyles();

  const handleCloseInfoDrawer = () => {
    console.log("inside infodrawer");
    handleClose();
  }

  return (
    <Drawer anchor="right" open={showInfoDrawer} onClose={() => handleClose(false)}>
      Hello
    </Drawer>
  );
}

import {
  Typography,
  Popover,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React, { FC } from "react";

interface InfoPopoverProps {
  open: boolean;
  anchorEl: Element | ((element: Element) => Element) | null | undefined;
  handlePopoverClose:
    | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
    | undefined;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popover: {
      pointerEvents: "none",
    },
    paper: {
      padding: theme.spacing(1),
    },
  })
);

export const InfoPopover: FC<InfoPopoverProps> = ({
  open,
  anchorEl,
  handlePopoverClose,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>I use Popover.</Typography>
      </Popover>
    </div>
  );
};

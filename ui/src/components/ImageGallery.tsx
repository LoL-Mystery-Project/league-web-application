import {
  createStyles,
  Dialog,
  Grid,
  GridListTileBar,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import React, { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/types";
import { mainColour } from "../styles/palette";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ImageAsset } from "./ImageAsset";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";

const Wrapper = styled.div`
  .containerStyles {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
  }

  .gridCell {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .gridCell:hover {
    cursor: pointer;
    filter: drop-shadow(3px 3px 3px grey);
  }
`;

interface ImageProps {
  imageKey: string;
  url: string;
}

interface ImageDialogProps {
  imageKey: string;
  url: string;
  isOpen: boolean;
  setOpen: Function;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      backgroundColor: mainColour.bgBlack,
      alignItems: "center",
      width: 600,
      height: 50,
    },
    input: {
      marginLeft: theme.spacing(1),
      color: "white",
      flex: 1,
    },
    iconButton: {
      color: "white",
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
      backgroundColor: mainColour.white,
    },
  })
);

export const ImageGallery: FC = ({}) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [searchState, setSearchState] = useState("");
  const [dialogProps, setDialogProps] = useState<ImageProps>({
    imageKey: "",
    url: "",
  });
  const { imageList } = useSelector((state: RootState) => state.images);
  const classes = useStyles();

  const handleClick = (imageKey: string, url: string) => {
    setDialogProps({ imageKey, url });
    setIsDialogOpen(true);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchState(event.target.value);
  };

  return (
    <Wrapper>
      <Grid container style={{ margin: 20 }} className="containerStyles">
        <Grid item xs={6}>
          <h1>Image Gallery (dev mode only)</h1>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ paddingTop: 15 }}>
            <Paper component="form" className={classes.root}>
              <div className={classes.iconButton} aria-label="menu">
                <SearchIcon />
              </div>
              <Divider className={classes.divider} orientation="vertical" />
              <InputBase
                className={classes.input}
                onChange={handleChange}
                placeholder="Search images"
                inputProps={{ "aria-label": "search images" }}
              />
            </Paper>
          </div>
        </Grid>
      </Grid>
      <div className="containerStyles">
        <GridList cellHeight={150} cols={8} style={{ width: "70%" }}>
          {imageList
            ?.filter((e) => e.key.includes(searchState))
            .map((image) => (
              <GridListTile key={image.key}>
                <div
                  className="gridCell"
                  onClick={() => handleClick(image.key, image.url)}
                >
                  <img src={image.url} alt={image.key} />
                </div>
                <GridListTileBar title={image.key} />
              </GridListTile>
            ))}
        </GridList>
      </div>
      <ImageDialog
        imageKey={dialogProps.imageKey}
        url={dialogProps.url}
        isOpen={isDialogOpen}
        setOpen={setIsDialogOpen}
      />
    </Wrapper>
  );
};

const ImageDialog: FC<ImageDialogProps> = ({
  imageKey,
  url,
  isOpen,
  setOpen,
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (url) {
      getMetaData(url);
    }
  }, [url]);

  const handleClose = () => {
    setOpen(false);
  };

  const getMetaData = (imageUrl: string) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setDimensions({ width: img.width, height: img.height });
  };

  return (
    <Dialog
      onClose={handleClose}
      open={isOpen}
      PaperProps={{
        style: {
          color: mainColour.white,
          backgroundColor: mainColour.black,
          textAlign: "center",
          minWidth: 725,
        },
      }}
    >
      <DialogContent>
        <Typography variant="h5" style={{ marginBottom: 20 }}>
          {imageKey}
        </Typography>
        <ImageAsset
          alt={imageKey}
          style={{
            minHeight: 120,
            maxHeight: 600,
            marginBottom: 20,
            maxWidth: "100%",
          }}
        />
        <Typography>
          <b>Source:</b> {url}
        </Typography>
        <Typography>
          <b>Original dimensions:</b>{" "}
          {`${dimensions.width} x ${dimensions.height}`}
        </Typography>
        <br />
        <Typography style={{ textAlign: "left" }}>The quickie:</Typography>
        <SyntaxHighlighter language="html" style={vscDarkPlus} wrapLongLines>
          {`<img src="${url}" alt="${imageKey}" />`}
        </SyntaxHighlighter>
        <br />
        <Typography style={{ textAlign: "left" }}>
          Or, if you have the ImageAsset component imported (preferred):
        </Typography>
        <SyntaxHighlighter language="typescript" style={vscDarkPlus}>
          {`// make sure you have imported the components/ImageAsset component! (eg)\nimport { ImageAsset } from '{relative_file_path}/ImageAsset';\n\n// include this line in the render method\n<ImageAsset alt='${imageKey}'/>`}
        </SyntaxHighlighter>
      </DialogContent>
    </Dialog>
  );
};

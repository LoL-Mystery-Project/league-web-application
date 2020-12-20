import { Dialog, GridListTileBar, Typography } from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/types";
import { mainColour } from "../styles/palette";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Wrapper = styled.div`
  .containerStyles {
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const ImageGallery: FC = ({}) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [dialogProps, setDialogProps] = useState<ImageProps>({
    imageKey: "",
    url: "",
  });
  const { imageList } = useSelector((state: RootState) => state.images);

  const handleClick = (imageKey: string, url: string) => {
    setDialogProps({ imageKey, url });
    setIsDialogOpen(true);
  };

  return (
    <Wrapper>
      <h1>Image Gallery (dev mode only)</h1>
      <div className="containerStyles">
        <GridList cellHeight={175} cols={7} style={{ width: "70%" }}>
          {imageList &&
            imageList.map((image) => (
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
  const longImages = ["line", "background", "blur", "riftmap", "fullmap"];

  const shouldNotResize = () => {
    const toCheck = imageKey.toLowerCase();
    return longImages.some((image) => toCheck.includes(image));
  };

  const handleClose = () => {
    setOpen(false);
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
        <img
          src={url}
          alt={imageKey}
          style={{
            height: shouldNotResize() ? undefined : 120,
            marginBottom: 20,
            maxWidth: '100%'
          }}
        />
        <Typography>{url}</Typography>
        <br />
        <Typography style={{ textAlign: "left" }}>The quickie:</Typography>
        <SyntaxHighlighter language="html" style={vscDarkPlus} wrapLongLines>
          {`<img src="${url}" alt="${imageKey}" />`}
        </SyntaxHighlighter>
        <br />
        <Typography style={{ textAlign: "left" }}>
          Or, if you're using the Redux store:
        </Typography>
        <SyntaxHighlighter language="typescript" style={vscDarkPlus}>
          {`// make sure this line is included at the top of your component! \nconst { imageMap } = useSelector((state: RootState) => state.images);\n\n// include this line in the render method\n<img src={imageMap['${imageKey}']} alt='${imageKey}'/>`}
        </SyntaxHighlighter>
      </DialogContent>
    </Dialog>
  );
};

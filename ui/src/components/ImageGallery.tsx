import { Dialog, GridListTileBar, Typography } from "@material-ui/core";
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

export const ImageGallery: FC = () => {
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
        <GridList cellHeight={150} cols={8} style={{ width: "70%" }}>
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
        <img
          src={url}
          alt={imageKey}
          style={{
            minWidth: 120,
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

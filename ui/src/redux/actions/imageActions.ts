import AWS from "aws-sdk";

export const FETCHING_IMAGES = "@@IMAGES_ACTION/FETCHING_IMAGES";
export const SET_IMAGES = "@@IMAGES_ACTION/SET_IMAGES";
export const SET_IMAGE_MAP = "@@IMAGES_ACTION/SET_IMAGE_MAP";
export const FETCHING_IMAGES_FAILED = "@@IMAGES_ACTION/FETCHING_IMAGES_FAILED";

export const fetchImageUrls = () => (dispatch: Function) => {
  dispatch({ type: FETCHING_IMAGES, payload: true });
  AWS.config.region = "us-west-2"; // Region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.REACT_APP_AWS_IDENTITY || "",
  });

  const bucket = new AWS.S3({ params: { Bucket: "league-icons" } });
  bucket.listObjects((err, data) => {
    if (err) {
      dispatch({ type: FETCHING_IMAGES_FAILED, payload: err });
      dispatch({ type: FETCHING_IMAGES, payload: false });
      console.error(err);
    } else {
      if (data.Contents) {
        const results = data.Contents.map((image) => ({
          key: image.Key,
          url: `https://league-icons.s3-us-west-2.amazonaws.com/${image.Key}`,
        }));
        const imageMap = results.reduce(
          (result, curr) => ({
            ...result,
            [curr.key!]: curr.url,
          }),
          {}
        );
        dispatch({ type: SET_IMAGES, payload: results });
        dispatch({ type: SET_IMAGE_MAP, payload: imageMap });
        dispatch({ type: FETCHING_IMAGES, payload: false });
      }
    }
  });
};

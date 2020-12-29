import React, { FC } from "react";
import styled from "styled-components";
import { TextColourizerTypes, TextColourizer } from "../utils/TextColourizer";

interface ColouredListProps extends React.ComponentProps<"div"> {
  listItems: Array<TextColourizerTypes>;
}

const ColouredListStyles = styled.div`
  li {
    margin-right: 160px;
  }

  ul {
    margin: 0;
    width: 100%;
  }

  .listStyles {
    margin-left: -20px;
  }

  p {
    line-height: 19px;
  }
`;

export const ColouredList: FC<ColouredListProps> = (props) => {
  const { listItems, ...divProps } = props;

  return (
    <ColouredListStyles>
      <div {...divProps}>
        <ul>
          {listItems?.map((listItem) => {
            return (
              <li className="listStyles">
                <TextColourizer colourMap={listItem.colourMap}>
                  {listItem.text}
                </TextColourizer>
              </li>
            );
          })}
        </ul>
      </div>
    </ColouredListStyles>
  );
};

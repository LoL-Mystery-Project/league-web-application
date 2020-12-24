import Typography, { TypographyProps } from "@material-ui/core/Typography";
import React, { FC, useEffect, useState } from "react";
import { findKey } from "lodash";

interface Position {
  start: number;
  end: number;
}
export interface ColourMap {
  [key: string]: Array<string>;
}

interface IndexMap {
  [key: string]: Array<Position>;
}

interface BaseProps extends TypographyProps {
  colourMap: ColourMap;
}

interface PropsWithChildren extends BaseProps {
  text?: never;
  children: React.ReactNode;
}

interface PropsWithText extends BaseProps {
  text: string;
  children?: never;
}

export type TextColourizerProps = PropsWithChildren | PropsWithText;

export const TextColourizer: FC<TextColourizerProps> = (props) => {
  const { text, colourMap, children, ...typographyProps } = props;
  const [rendered, setRendered] = useState<JSX.Element>();

  useEffect(() => {
    const originalText = text || children!.toString();
    const indexMap: IndexMap = {};
    let setOfStartingPositions: Set<number> = new Set();

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Finding_all_the_occurrences_of_an_element
    Object.keys(colourMap).forEach((colour) => {
      colourMap[colour].forEach((phrase) => {
        let indices = [];
        let idx = originalText.indexOf(phrase);
        while (idx !== -1) {
          setOfStartingPositions.add(idx);
          indices.push({
            start: idx,
            end: idx + phrase.length,
          });
          idx = originalText.indexOf(phrase, idx + 1);
        }
        indexMap[colour] = indexMap[colour]
          ? [...indexMap[colour], ...indices]
          : indices;
      });
    });

    const getFinalJSX = (): Array<JSX.Element> => {
      let result: Array<JSX.Element> = [];
      let key = 0;

      for (let i = 0; i <= originalText.length; ) {
        let curr = [];
        while (!setOfStartingPositions.has(i) && i !== originalText.length) {
          curr.push(originalText[i]);
          i++;
        }

        const normalPhrase = curr.join("");
        result.push(<span key={key++}>{normalPhrase}</span>);
        if (i === originalText.length) return result;

        const colour = findKey(indexMap, (e) => e.some((x) => x.start === i));
        const phrase = indexMap[colour!].find((e) => e.start === i);

        result.push(
          <span key={key++} style={{ color: colour! }}>
            {originalText.substring(phrase!.start, phrase!.end)}
          </span>
        );
        i = phrase!.end;
      }

      return result;
    };

    setRendered(<>{getFinalJSX().map((elem) => elem)}</>);
  }, [children, colourMap, text]);

  return (
    <Typography display="inline" {...typographyProps}>
      {rendered}
    </Typography>
  );
};

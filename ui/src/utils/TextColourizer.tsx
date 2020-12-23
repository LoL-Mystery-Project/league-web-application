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

export interface TextColourizerProps extends TypographyProps {
  text: string;
  colourMap: ColourMap;
}

export const TextColourizer: FC<TextColourizerProps> = (props) => {
  const { text, colourMap, ...typographyProps } = props;
  const [final, setFinal] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    const indexMap: IndexMap = {};
    let setOfStartingPositions = new Set();

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Finding_all_the_occurrences_of_an_element
    Object.keys(colourMap).forEach((colour) => {
      colourMap[colour].forEach((phrase) => {
        let indices = [];
        let idx = text.indexOf(phrase);
        while (idx !== -1) {
          setOfStartingPositions.add(idx);
          indices.push({
            start: idx,
            end: idx + phrase.length,
          });
          idx = text.indexOf(phrase, idx + 1);
        }
        indexMap[colour] = indexMap[colour]
          ? [...indexMap[colour], ...indices]
          : indices;
      });
    });

    const getFinalJSX = () => {
      let result: Array<JSX.Element> = [];
      let key = 0;

      for (let i = 0; i <= text.length; ) {
        let curr = [];
        while (!setOfStartingPositions.has(i) && i !== text.length) {
          curr.push(text[i]);
          i++;
        }

        const normalPhrase = curr.join("");
        result.push(<span key={key++}>{normalPhrase}</span>);
        if (i === text.length) return result;

        const colour = findKey(indexMap, (e) => e.some((x) => x.start === i));
        const phrase = indexMap[colour!].find((e) => e.start === i);

        result.push(
          <span key={key++} style={{ color: colour! }}>
            {text.substring(phrase!.start, phrase!.end)}
          </span>
        );
        i = phrase!.end;
      }

      return result;
    };

    setFinal(getFinalJSX());
  }, [colourMap, text]);

  return (
    <Typography {...typographyProps}>{final.map((elem) => elem)}</Typography>
  );
};

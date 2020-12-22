import Typography from "@material-ui/core/Typography";
import React, { FC, useEffect, useState } from "react";
import { findKey } from "lodash";

export interface ColouredWordSet {
  [key: string]: Array<string>;
}

export interface PositionType {
  start: number;
  end: number;
}

export interface IndexSetType {
  [key: string]: Array<PositionType>;
}

export interface PaletteType {
  [key: string]: string;
}

export interface TextColourizerProps {
  text: string;
  colouredWordMap: ColouredWordSet;
  paletteMap: PaletteType;
}

export const TextColourizer: FC<TextColourizerProps> = ({
  text,
  colouredWordMap,
  paletteMap,
}) => {
  const [final, setFinal] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    const indexSet: IndexSetType = {};
    let set = new Set();

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Finding_all_the_occurrences_of_an_element
    Object.keys(colouredWordMap).forEach((colour) => {
      colouredWordMap[colour].forEach((phrase) => {
        let indices = [];
        let idx = text.indexOf(phrase);
        while (idx !== -1) {
          set.add(idx);
          indices.push({
            start: idx,
            end: idx + phrase.length,
          });
          idx = text.indexOf(phrase, idx + 1);
        }
        if (indexSet[colour]) {
          indexSet[colour] = [...indexSet[colour], ...indices];
        } else {
          indexSet[colour] = indices;
        }
      });
    });

    let result: Array<JSX.Element> = [];

    for (let i = 0; i < text.length; ) {
      let curr = [];
      while (!set.has(i)) {
        curr.push(text[i]);
        i++;
        if (i >= text.length) {
          result.push(<span>{curr.join("")}</span>);
          return;
        }
      }

      result.push(<span>{curr.join("")}</span>);

      const colour = findKey(indexSet, (e) => e.some((x) => x.start === i));
      const phrase = indexSet[colour!].find((e) => e.start === i);

      result.push(
        <span style={{ color: paletteMap[colour!] }}>
          {text.substring(phrase!.start, phrase!.end)}
        </span>
      );
      i = phrase!.end;
      setFinal(result);
    }
  }, [colouredWordMap, paletteMap, text]);

  return <Typography>{final.map((elem) => elem)}</Typography>;
};

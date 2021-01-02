import Typography, { TypographyProps } from "@material-ui/core/Typography";
import React, { FC, useEffect, useState } from "react";
import { findKey, isEmpty } from "lodash";
import { InfoPopover } from "./InfoPopover";

interface Position {
  start: number;
  end: number;
}
export interface ColourMap {
  [key: string]: Array<string>;
}

/**
 * An object with the following key and value types:
 *
 * @example
 * Key: 'string to url-ify'
 * Value: Object {
 *   url: 'the URL to link to'
 *   hasTooltip: 'boolean check to determine whether or not to show a tooltip onHover'
 *   tooltipData: 'A generic object used to show data in the tooltip'
 * }
 */
export type LinkMap = {
  [key: string]:
    | {
        url: string;
        hasTooltip: true;
        tooltipData: LinkMapObject;
      }
    | {
        url: string;
        hasTooltip: false;
        tooltipData?: never;
      };
};

export interface LinkMapObject {
  image: string;
  icon: string;
  name: string;
  description: string;
}

interface IndexMap {
  [key: string]: Array<Position>;
}

/**
 * For use with API data
 * @param {string} text
 * @param {ColourMap} colourMap
 */
export interface TextColourizerTypes {
  text: string;
  colourMap: ColourMap | {};
  linkMap?: LinkMap;
}

interface BaseProps extends TypographyProps {
  colourMap: ColourMap;
  linkMap?: LinkMap;
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

const initialTooltipState = Object.freeze({
  image: "",
  icon: "",
  name: "",
  description: "",
});

export const TextColourizer: FC<TextColourizerProps> = (props) => {
  const { text, colourMap, children, linkMap, ...typographyProps } = props;
  const [rendered, setRendered] = useState<JSX.Element[]>();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [hoveredObject, setHoveredObject] = useState<LinkMapObject>(
    initialTooltipState
  );
  const open = Boolean(anchorEl);

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const originalText = text || children!.toString();
    const indexMap: IndexMap = {};
    let setOfStartingPositions: Set<number> = new Set();

    const populateIndexMap = () => {
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
    };

    const getColouredJSX = (): Array<JSX.Element> => {
      let result: Array<JSX.Element> = [];
      let key = 0;

      for (let i = 0; i <= originalText.length; ) {
        let curr = [];
        while (!setOfStartingPositions.has(i) && i !== originalText.length) {
          curr.push(originalText[i]);
          i++;
        }

        const normalPhrase = curr.join("");
        result.push(<span key={`normal_${key++}`}>{normalPhrase}</span>);
        if (i === originalText.length) return result;

        const colour = findKey(indexMap, (e) => e.some((x) => x.start === i));
        const phrase = indexMap[colour!].find((e) => e.start === i);

        result.push(
          <span key={`coloured_${key++}`} style={{ color: colour! }}>
            {originalText.substring(phrase!.start, phrase!.end)}
          </span>
        );
        i = phrase!.end;
      }

      return result;
    };

    const getJsxWithUrls = (arr: Array<JSX.Element>) => {
      let result: JSX.Element[] = [];
      let elemKey: number = 0;
      arr.forEach((e) => {
        let curr: JSX.Element[] = [];
        Object.keys(linkMap!).forEach((key) => {
          const children = e.props.children;
          if (children.includes(key)) {
            const start = children.indexOf(key);
            const end = start + key.length;
            if (start !== 0) {
              curr.push(
                <span key={`withUrl_${elemKey++}`} style={{ ...e.props.style }}>
                  {children.substring(0, start)}
                </span>
              );
            }
            curr.push(
              <a
                style={{ color: e.props.style?.color || "inherit" }}
                href={linkMap![key].url}
                key={`withUrl_${elemKey++}`}
                onMouseEnter={(e) => {
                  if (linkMap![key].hasTooltip) {
                    setHoveredObject(linkMap![key].tooltipData!);
                    handlePopoverOpen(e);
                  }
                }}
                onMouseLeave={() => {
                  if (linkMap![key].hasTooltip) {
                    handlePopoverClose();
                  }
                }}
              >
                {children.substring(start, end)}
              </a>
            );
            if (end !== children.length) {
              curr.push(
                <span key={`withUrl_${elemKey++}`} style={{ ...e.props.style }}>
                  {children.substring(end, children.length)}
                </span>
              );
            }
          }
        });
        curr.length
          ? result.push(<>{curr.map((elem) => elem)}</>)
          : result.push(e);
      });

      return result;
    };

    if (isEmpty(colourMap)) {
      if (linkMap) {
        setRendered(getJsxWithUrls([<span>{originalText}</span>]));
      } else {
        setRendered([<span>{originalText}</span>]);
      }
      return;
    }

    populateIndexMap();

    if (linkMap) {
      setRendered(getJsxWithUrls(getColouredJSX()));
    } else {
      setRendered(getColouredJSX());
    }
  }, [children, colourMap, text, linkMap]);

  return (
    <span>
      <Typography display="inline" {...typographyProps}>
        {rendered?.map((elem) => elem)}
      </Typography>
      <InfoPopover
        open={open}
        anchorEl={anchorEl}
        handlePopoverClose={handlePopoverClose}
        popoverObject={hoveredObject}
      />
    </span>
  );
};

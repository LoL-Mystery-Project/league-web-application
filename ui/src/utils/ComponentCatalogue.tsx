import React, { FC } from "react";
import { ColouredList } from "../layout/ColouredList";
import { mainColour } from "../styles/palette";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Grid from "@material-ui/core/Grid";
import { TextColourizer } from "./TextColourizer";
import { InfoHeader } from "../layout/InfoHeader";
import { Footer } from "../layout/Footer";
import { InfoContainer } from "../layout/InfoContainer";
import { InfoSection } from "../layout/InfoSection";

interface ComponentCatalogueProps {}

export const ComponentCatalogue: FC<ComponentCatalogueProps> = ({}) => {
  return (
    <>
      {/** TextColourizer */}
      <Grid container>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <h3>TextColourizer</h3>
        </Grid>
        <Grid item xs={4}>
          <div style={{ margin: 20 }}>
            <SyntaxHighlighter
              language="typescript"
              customStyle={{ borderRadius: 10 }}
              style={vscDarkPlus}
              wrapLongLines
            >
              {`const text = "Reduces the target's armor and magic resistance by 0.5, stacking up to 100 times for a total of 50 maximum resistances reduction. Lasts for 8s, reduced to 4.5s after Baron Nashor is slain";
              
const colourMap = {
  [mainColour.purple]: ["Baron Nashor"],
  [mainColour.green]: ["resistance", "0.5", "100", "50", "8s", "4.5s"],
  [mainColour.orange]: ["armor"],
};

<TextColourizer text={text} colourMap={colourMap} />

// or

<TextColourizer colourMap={colourMap}>
  {text}
</TextColourizer>`}
            </SyntaxHighlighter>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{ margin: 20 }}>
            <SyntaxHighlighter
              language="typescript"
              customStyle={{ borderRadius: 10 }}
              style={vscDarkPlus}
              wrapLongLines
            >
              {`// will accept either a text prop or a string as children (at least one and never both)
// also accepts any Typography prop

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

type TextColourizerProps = PropsWithChildren | PropsWithText;`}
            </SyntaxHighlighter>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{ margin: 20 }}>
            <TextColourizer
              colourMap={{
                [mainColour.purple]: ["Baron Nashor"],
                [mainColour.green]: [
                  "resistance",
                  "0.5",
                  "100",
                  "50",
                  "8s",
                  "4.5s",
                ],
                [mainColour.orange]: ["armor"],
              }}
            >
              Reduces the target's armor and magic resistance by 0.5, stacking
              up to 100 times for a total of 50 maximum resistances reduction.
              Lasts for 8s, reduced to 4.5s after Baron Nashor is slain
            </TextColourizer>
          </div>
        </Grid>
      </Grid>
      {/** ColouredList */}
      <Grid container>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <h3>ColouredList</h3>
        </Grid>
        <Grid item xs={4}>
          <div style={{ margin: 20 }}>
            <SyntaxHighlighter
              language="typescript"
              customStyle={{ borderRadius: 10 }}
              style={vscDarkPlus}
              wrapLongLines
            >
              {`const listItemProps: Array<TextColourizerTypes> = [
  {
    text: "List item 1",
    colourMap: {
      [mainColour.green]: ["List"],
      [mainColour.blue]: ["1"],
    },
  },
  {
    text: "List item 2",
    colourMap: {},
  },
  {
    text: "List item 3",
    colourMap: {
      [mainColour.red]: ["item"],
    },
  }
];

<ColouredList listItems={listItemProps} />`}
            </SyntaxHighlighter>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{ margin: 20 }}>
            <SyntaxHighlighter
              language="typescript"
              customStyle={{ borderRadius: 10 }}
              style={vscDarkPlus}
              wrapLongLines
            >
              {`interface ColouredListProps extends React.ComponentProps<"div"> {
  listItems: Array<TextColourizerTypes>;
}

interface TextColourizerTypes {
  text: string;
  colourMap: ColourMap | {};
}`}
            </SyntaxHighlighter>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{ margin: 20 }}>
            <ColouredList
              listItems={[
                {
                  text: "List item 1",
                  colourMap: {
                    [mainColour.green]: ["List"],
                    [mainColour.blue]: ["1"],
                  },
                },
                {
                  text: "List item 2",
                  colourMap: {},
                },
                {
                  text: "List item 3",
                  colourMap: {
                    [mainColour.red]: ["item"],
                  },
                },
              ]}
            />
          </div>
        </Grid>
      </Grid>
      {/** InfoHeader */}
      <Grid container>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <h3>InfoHeader</h3>
        </Grid>
        <Grid item xs={6}>
          <div style={{ margin: 20 }}>
            <SyntaxHighlighter
              language="typescript"
              customStyle={{ borderRadius: 10 }}
              style={vscDarkPlus}
              wrapLongLines
            >
              {`const title = "This is a title";
const subheader = "This is a subheader";
const subtitle = "This is a subtitle";

<InfoHeader title={title} />

<InfoHeader title={subheader} isSubheader={true} />

<InfoHeader title={subheader} subtitle={subtitle} isSubheader={true} />

<InfoHeader title={title} />
<InfoHeader title={subheader} subtitle={subtitle} isSubheader={true} />`}
            </SyntaxHighlighter>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid container style={{ display: "flex", flexDirection: "column" }}>
            <Grid item>
              <div style={{ margin: 20 }}>
                <SyntaxHighlighter
                  language="typescript"
                  customStyle={{ borderRadius: 10 }}
                  style={vscDarkPlus}
                  wrapLongLines
                >
                  {`interface InfoHeaderProps extends React.ComponentProps<"div"> {
  title: string;
  subtitle?: string;
  isSubheader?: boolean;
}`}
                </SyntaxHighlighter>
              </div>
            </Grid>
          </Grid>
          <Grid item>
            <div style={{ margin: 20 }}>
              <InfoHeader title={"This is a title"} />
              <hr />
              <InfoHeader title={"This is a subheader"} isSubheader={true} />
              <hr />
              <InfoHeader
                title={"This is a subheader"}
                subtitle={"This is a subtitle"}
                isSubheader={true}
              />
              <hr />
              <InfoHeader title={"This is a title"} />
              <InfoHeader
                title={"This is a subheader"}
                isSubheader
                subtitle={"This is a subtitle"}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
      {/** InfoSection */}
      <Grid container>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <h3>InfoSection</h3>
        </Grid>
        <Grid item xs={6}>
          <div style={{ margin: 20 }}>
            <SyntaxHighlighter
              language="typescript"
              customStyle={{ borderRadius: 10 }}
              style={vscDarkPlus}
              wrapLongLines
            >
              {`/** First example */
const firstExample: InfoSectionProps = {
  title: "This is coloured title",
  titleColour: "#b67f15",
  icon: "elderdrake.svg",
  effects: [
    {
      text: "With a list of coloured bullet points",
      colourMap: {
        "#aa0013": ["coloured", "points"],
      },
    },
    {
      text: "List items can have colours",
      colourMap: {
        "#108b94": ["List items"],
        "#8717de": ["colours"],
      },
    },
    {
      text: "But they don't have to",
      colourMap: {},
    },
  ],
};
              
<InfoSection item={firstExample} />

/** Second example */
<InfoSection
  item={{
    title: "This the title with an icon (eg. for an ability)",
    titleColour: "",
    icon: "cat.svg",
    effects: [
      {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        colourMap: {},
      },
    ],
  }}
/>

/** Third example */
<InfoSection
  item={{
    title:
      "This the title without an icon (eg. a trivia section)",
    titleColour: "",
    icon: "",
    effects: [
      {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        colourMap: {},
      },
    ],
  }}
/>`}
            </SyntaxHighlighter>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid container style={{ display: "flex", flexDirection: "column" }}>
            <Grid item>
              <div style={{ margin: 20 }}>
                <SyntaxHighlighter
                  language="typescript"
                  customStyle={{ borderRadius: 10 }}
                  style={vscDarkPlus}
                  wrapLongLines
                >
                  {`interface InfoSectionProps {
  item: InfoSectionItem;
}

interface InfoSectionItem {
  title: string;
  titleColour: string;
  icon: string;
  effects: Array<TextColourizerTypes>;
}

interface TextColourizerTypes {
  text: string;
  colourMap: ColourMap | {};
}`}
                </SyntaxHighlighter>
              </div>
            </Grid>
          </Grid>
          <Grid item>
            <div style={{ margin: 20 }}>
              <InfoSection
                item={{
                  title: "This is coloured title",
                  titleColour: "#b67f15",
                  icon: "elderdrake.svg",
                  effects: [
                    {
                      text: "With a list of coloured bullet points",
                      colourMap: {
                        "#aa0013": ["coloured", "points"],
                      },
                    },
                    {
                      text: "List items can have colours",
                      colourMap: {
                        "#108b94": ["List items"],
                        "#8717de": ["colours"],
                      },
                    },
                    {
                      text: "But they don't have to",
                      colourMap: {},
                    },
                  ],
                }}
              />
              <br />
              <InfoSection
                item={{
                  title: "This the title with an icon (eg. for an ability)",
                  titleColour: "",
                  icon: "cat.svg",
                  effects: [
                    {
                      text:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      colourMap: {},
                    },
                  ],
                }}
              />
              <br />
              <InfoSection
                item={{
                  title:
                    "This the title without an icon (eg. a trivia section)",
                  titleColour: "",
                  icon: "",
                  effects: [
                    {
                      text:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      colourMap: {},
                    },
                  ],
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
      {/** InfoContainer */}
      <Grid container>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <h3>InfoContainer</h3>
        </Grid>
        <Grid item xs={6}>
          <div style={{ margin: 20 }}>
            <SyntaxHighlighter
              language="typescript"
              style={vscDarkPlus}
              customStyle={{ borderRadius: 10 }}
              wrapLongLines
            >
              {`// this will come from API data most of the time. just for reference here if you want to use it somewhere else.
// This component is composed of a map of InfoSection components (see above)

const subcategories: InfoSectionCategory = [
  {
    title: "Mythical Creatures",
    data: [
      {
        title: "Pusheen",
        titleColour: "#6a0dad",
        icon: "pusheen.jpg",
        effects: [
          {
            text:
              "Pusheen is a tubby tabby cat who brings smiles and laughter to people all around the world.",
            colourMap: {
              "#108B94": ["tubby tabby cat"],
              "#FF6B00": ["smiles", "laughter"],
            },
          },
          {
            text:
              "She became famous through her animated comics and GIFs",
            colourMap: {
              "#ff6b00": ["animated comics", "GIFs"],
            },
          },
        ],
      },
      {
        title: "Poro",
        titleColour: "",
        icon: "poro.jpg",
        effects: [
          {
            text:
              "They have a heart-shaped underbelly because they're made of love",
            colourMap: {
              "#FFC0CB": ["heart-shaped", "love"],
            },
          },
          {
            text:
              "A poro's horns perk up when it's excited and droop down when it's scared.",
            colourMap: {},
          },
        ],
      },
    ],
  },
]

<InfoContainer subcategories={subcategories} />`}
            </SyntaxHighlighter>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid container style={{ display: "flex", flexDirection: "column" }}>
            <Grid item>
              <div style={{ margin: 20 }}>
                <SyntaxHighlighter
                  language="typescript"
                  style={vscDarkPlus}
                  customStyle={{ borderRadius: 10 }}
                  wrapLongLines
                >
                  {`interface InfoSectionCategory {
  title: string;
  data: Array<InfoSectionItem>;
}

interface InfoSectionItem {
  title: string;
  titleColour: string;
  icon: string;
  effects: Array<TextColourizerTypes>;
}

interface InfoContainerProps {
  subcategories: Array<InfoSectionCategory>;
}`}
                </SyntaxHighlighter>
              </div>
            </Grid>
            <Grid item>
              <div style={{ margin: 20 }}>
                <InfoContainer
                  subcategories={[
                    {
                      title: "Mythical Creatures",
                      data: [
                        {
                          title: "Pusheen",
                          titleColour: "#89cff0",
                          icon: "pusheen.jpg",
                          effects: [
                            {
                              text:
                                "Pusheen is a tubby tabby cat who brings smiles and laughter to people all around the world.",
                              colourMap: {
                                "#108B94": ["tubby tabby cat"],
                                "#FF6B00": ["smiles", "laughter"],
                              },
                            },
                            {
                              text:
                                "She became famous through her animated comics and GIFs",
                              colourMap: {
                                "#ff6b00": ["animated comics", "GIFs"],
                              },
                            },
                          ],
                        },
                        {
                          title: "Poro",
                          titleColour: "",
                          icon: "poro.jpg",
                          effects: [
                            {
                              text:
                                "They have a heart-shaped underbelly because they're made of love",
                              colourMap: {
                                "#FFC0CB": ["heart-shaped", "love"],
                              },
                            },
                            {
                              text:
                                "A poro's horns perk up when it's excited and droop down when it's scared.",
                              colourMap: {},
                            },
                          ],
                        },
                      ],
                    },
                  ]}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/** Footer */}
      <Grid container>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <h3>Footer</h3>
        </Grid>
        <Grid item xs={6}>
          <div style={{ margin: 20 }}>
            <SyntaxHighlighter
              language="typescript"
              style={vscDarkPlus}
              customStyle={{ borderRadius: 10 }}
              wrapLongLines
            >
              {`<Footer />\n<Footer style={{ border: "1px solid white" }} />`}
            </SyntaxHighlighter>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid container style={{ display: "flex", flexDirection: "column" }}>
            <Grid item>
              <div style={{ margin: 20 }}>
                <SyntaxHighlighter
                  language="typescript"
                  style={vscDarkPlus}
                  customStyle={{ borderRadius: 10 }}
                  wrapLongLines
                >
                  {`// can pass div props (eg. style={{}}) into Footer\ninterface FooterProps extends React.ComponentProps<"div"> {}`}
                </SyntaxHighlighter>
              </div>
            </Grid>
            <Grid item>
              <div style={{ margin: 20 }}>
                <Footer />
                <Footer style={{ border: "1px solid white" }} />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

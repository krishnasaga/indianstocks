const buttonStyles = {
  borderRadius: 0,
  cursor: "pointer",
};

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ["40em", "52em", "64em"],
  fonts: {
    body: "Inter,Open Sans, system-ui, sans-serif",
    heading: "Inter,Open Sans, system-ui, sans-serif",
    monospace: 'Inter,"Open Sans", monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#b5b8cf",
    text2: "#ffffff",
    text3: "#d20e0e",
    text4: "#b72828",

    background: "#fff",
    background2: "#b3b3b3",
    background3: "#b3b3b3",
    background4: "#b3b3b3",
    primary: "#1a73e8",
    secondary: "#9c27b0",
    muted: "#f1f3f4",
    color1: "#2B7FCA",
    color2: "#F3F5F5",
    color3: "#6CA5D4",
    color4: "#6F7899",
    color5: "#1F315D",
    color7: "rgb(34, 37, 49)"
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "'Open Sans', sans-serif",
      lineHeight: "heading",
      fontWeight: "nromal",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
  sizes: {
    container: ["500px", "1283px"],
  },
  buttons: {
    primary: {
      ...buttonStyles,
      bg: "color1",
    },
    secondary: {
      ...buttonStyles,
      bg: "color2",
    },
    outlined: {
      ...buttonStyles,
      bg: "white",
      border: "1px solid black",
      color: "black",
    },
  },
  text: {
    default: {
      color: "black",
      fontSize: 3,
    },
    smallLight: {
      color: "#948484",
      fontWeight: "normal",
      fontSize: "1rem",
    },
    smallPositiveNumber: {
      color: "#0CAF82",
      fontWeight: "normal",
      fontSize: "1rem",
      textAlign: "right",
    },
    smallNegativeNumber: {
      color: "#ff0101",
      fontWeight: "normal",
      fontSize: "1rem",
      textAlign: "right",
    },
    bold1: {
      fontWeight: "bold",
    },
    regular2: {
      fontWeight: "400",
    },
    light2: {
      fontWeight: "100",
    },
  },
};

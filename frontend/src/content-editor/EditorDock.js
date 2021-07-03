import React from "react";
import { Box, Grid, Input, Text, Button, Slider, Radio } from "theme-ui";
import { Portal } from "react-portal";
import Editor from "./Editor";

export const EditorDock = ({
  open,
  texts = [1, 2],
  media = [1],
  knobs = [1, 2],
  switches = [1, 2, 3, 4]
}) => {
  if(process.NODE_ENV !== 'editor'){
    return null;
  }
  if (!open) {
    return null;
  }
  return (
    <Portal>
      <Box
        bg={'white'}
        sx={{
          width: "45%",
          height: "100%",
          position: "fixed",
          right: 0,
          top: 0,
          boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
          zIndex: 9999
        }}
      >
        <Editor />
      </Box>
    </Portal>
  );
};

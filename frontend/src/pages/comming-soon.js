import React from "react";
import { Box, Spinner, Text } from "theme-ui";
import { TopNav } from "../components/TopNav";

export default () => {
  return (
    <Box>
      <TopNav />
      <Box
        bg={"color5"}
        sx={{
          height: "1000px",
          width: "100%",
          backgroundImage: "url()",
          position: "relative",
        }}
      >
        <Box
          mx={["auto"]}
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            textAlign: "center",
          }}
        >
          <Text sx={{ fontSize: "4rem" }}> Coming Soon</Text>
          <Box p={4}>
            <Spinner size={"10rem"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

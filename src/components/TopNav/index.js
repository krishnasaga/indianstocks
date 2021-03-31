import React, { useState } from "react";
import { Box, Grid, Link, Text } from "theme-ui";
import { Portal } from "react-portal";
import OutsideClickHandler from "react-outside-click-handler";
import { useSpring, animated } from "react-spring";
import { useBreakpointIndex } from "@theme-ui/match-media";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const AnimatedBox = animated(Box);

export const TopNav = () => {
  const [open, setOpen] = useState(false);
  const [Menuopen, setMenuopen] = useState(false);
  const [dropdownComponent, setDropdownComponent] = useState("");

  const menuHandler = (event, componentName) => {
    setOpen(!open);
    setDropdownComponent(componentName);
    event.stopPropagation();
  };
  const menuDropOpen = (event, valv) => {
    setMenuopen(valv);
    event.stopPropagation();
  };

  const index = useBreakpointIndex();

  return (
    <Box
      bg={"color2"}
      sx={{
        position: "fixed",
        top: "0",
        zIndex: "99",
        width: index > 1 ? "85%" : "100%",
      }}
    >
      <Grid columns={index > 1 ? ["1fr 1fr 1fr 1fr 1fr 1fr 1fr"] : ["1fr 1fr"]}>
        <Box
          p={25}
          sx={{
            gridAlignSelf: "start",
          }}
        >
          {" "}
          <Link href={"/"} sx={{ textDecoration: "none", color: "black" }}>
            Invest{" "}
          </Link>
        </Box>
        {index > 1 && <Box p={25}> </Box>}

        {index > 1 && (
          <>
            {" "}
            <Menu onClick={(event) => menuHandler(event, "disruptions")}>
              {" "}
              Disruptions{index}{" "}
            </Menu>
            <Menu onClick={(event) => menuHandler(event, "research")}>
              {" "}
              Research{" "}
            </Menu>
            <Menu onClick={(event) => menuHandler(event, "sectors")}>
              {" "}
              Sectors{" "}
            </Menu>
            <Menu onClick={(event) => menuHandler(event, "analytics")}>
              {" "}
              Analytics{" "}
            </Menu>
            <NavButton />
          </>
        )}
        {index <= 1 && (
          <Box p={0}>
            {!Menuopen ? (
              <Menu
                pt={2}
                sx={{
                  float: "right",
                }}
                onClick={(event) => menuDropOpen(event, true)}
              >
                {" "}
                <GiHamburgerMenu />
              </Menu>
            ) : (
              <Menu
                p={2}
                sx={{
                  float: "right",
                }}
                onClick={(event) => menuDropOpen(event, false)}
              >
                {" "}
                <AiOutlineClose />
              </Menu>
            )}
          </Box>
        )}
      </Grid>
      {open ? <Dropdown component={dropdownComponent} /> : null}
      {Menuopen ? <DropdownMenu /> : null}
      <OutsideClickHandler
        useCapture={true}
        onOutsideClick={() => {
          setOpen(false);
          setMenuopen(false);
        }}
      />
    </Box>
  );
};

function DropdownMenu() {
  return (
    <Box
      sx={{
        height: "90vh",
      }}
    >
      <Menu> Disruptions </Menu>
      <Menu> Research </Menu>
      <Menu> Sectors </Menu>
      <Menu> Analytics </Menu>
    </Box>
  );
}

function NavButton({ children, ...remainingProps }) {
  return (
    <Box
      {...remainingProps}
      p={25}
      color={"color2"}
      bg={"primary"}
      sx={{
        width: "100%",
        textAlign: "center",
        gridAlignSelf: "end",
        cursor: "pointer",
      }}
    >
      Explore
    </Box>
  );
}

export const Menu = ({ children, ...remainingProps }) => {
  return (
    <Box {...remainingProps}>
      <Box
        p={20}
        color={"color5"}
        sx={{
          textAlign: "center",
          gridAlignSelf: "end",
          cursor: "pointer",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

const dropdownComponents = {
  analytics: AnalyticsDropdown,
  disruptions: DisruptionsDropdown,
  research: ResearchDropdown,
  sectors: SectorsDropdown,
};

function Dropdown({ component }) {
  const Component = dropdownComponents[component];

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <Portal>
      <AnimatedBox
        onClick={(event) => {
          event.stopPropagation();
        }}
        p={20}
        bg={"color4"}
        color={"color2"}
        sx={{
          position: "fixed",
          left: "0",
          top: "74px",
          width: "85%",
          boxShadow: "4px 4px 10px -5px rgb(0 0 0 / 10%)",
        }}
        style={props}
      >
        <Component />
      </AnimatedBox>
    </Portal>
  );
}

function AnalyticsDropdown() {
  return (
    <Box
      sx={{
        height: "200px",
      }}
    >
      <Text py={10}>Analytics</Text>
      <Grid columns={[4]}>
        <Box sx={{ borderRight: "1px solid grey" }}>
          <Text color={"color2"}> Electric two wheeler penetration </Text>
          <Text color={"color2"}> Electric Cars penetration </Text>
          <Text color={"color2"}> Battery ecosystems </Text>
          <Text color={"color2"}> Materials </Text>
        </Box>
        <Box>
          <Text color={"color2"}> Telecom performance </Text>
          <Text color={"color2"}> 5G ready </Text>
        </Box>
        <Box>
          <Text color={"color2"}> Information Technology </Text>
          <Text color={"color2"}> Internet of things </Text>
        </Box>
        <Box>
          <Text color={"color2"}> Bioinformatics usage </Text>
          <Text color={"color2"}> Telemedicine penetration </Text>
        </Box>
      </Grid>
    </Box>
  );
}

function DisruptionsDropdown() {
  return (
    <Box
      sx={{
        height: "200px",
      }}
    >
      <Text py={20}>Disruptions</Text>
      <Grid columns={[4]}>
        <Box sx={{ borderRight: "1px solid grey" }}>
          <Text color={"color2"}> Electric Transport </Text>
          <Text color={"color2"}> Genomics </Text>
          <Text color={"color2"}> Battery ecosystems </Text>
          <Text color={"color2"}> Materials </Text>
        </Box>
        <Box>
          <Text color={"color2"}> Space Exploration </Text>
          <Text color={"color2"}> Next IT </Text>
        </Box>
        <Box>
          <Text color={"color2"}> Information Technology </Text>
          <Text color={"color2"}> Internet of things </Text>
        </Box>
        <Box>
          <Text color={"color2"}> Bioinformatics </Text>
          <Text color={"color2"}> Telemedicine </Text>
        </Box>
      </Grid>
    </Box>
  );
}

function ResearchDropdown() {
  return (
    <Box
      sx={{
        height: "200px",
      }}
    >
      Research
    </Box>
  );
}

function SectorsDropdown() {
  return (
    <Box
      sx={{
        height: "200px",
      }}
    >
      Sectors
    </Box>
  );
}

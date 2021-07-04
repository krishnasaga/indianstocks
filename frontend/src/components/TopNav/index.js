import React, {useEffect, useState} from "react";
import {Box, Grid, Image, Link, Text} from "theme-ui";
import {Portal} from "react-portal";
import OutsideClickHandler from "react-outside-click-handler";
import {animated, useSpring} from "react-spring";
import {useBreakpointIndex} from "@theme-ui/match-media";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";
import {RiArrowRightSLine} from "react-icons/ri";
import {MdKeyboardArrowLeft} from "react-icons/md";
import {TextArrow} from "../TextArrow";
import {DropdownMenuText} from "../DropdownMenuText";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const AnimatedBox = animated(Box);

const LinkMobile = ({children}) => {
  return (
    <Link
      color={"rgb(0, 0, 0)"}
      sx={{
        fontSize: ["0.9rem", "0.9rem"],
        fontWeight: "500",
        cursor: "pointer",
        marginTop: '20px',
        marginLeft: '10px'
      }}
    >
      {children}
    </Link>
  );
};

const LinkDropdown = ({children}) => {
  return (
    <TextArrow
      as={Link}
      color={"color2"}
      sx={{
        fontSize: ["0.9rem", "0.9rem"],
        fontWeight: "500",
        cursor: "pointer",
        marginBottom: '20px',
        marginLeft: '10px',
        ':hover': {
          color: 'color5',
        },
      }}
    >
      {children}
    </TextArrow>
  );
};

export const TopNav = () => {
  const [open, setOpen] = useState(false);

  const [MobileComponent, setMobileComponent] = useState({
    position: null,
  });
  const [Menuopen, setMenuopen] = useState(false);
  const [dropdownComponent, setDropdownComponent] = useState("");
  const index = useBreakpointIndex();

  const menuHandler = (event, componentName) => {
    setOpen(!open);
    setDropdownComponent(componentName);
    event.stopPropagation();
  };
  const menuDropOpen = (event, valv) => {
    setMenuopen(valv);
    event.stopPropagation();
  };


  useEffect(() => {
    if (index > 1) {
      setMenuopen(false);
    }
  }, [index]);

  return (
    <Box
      bg={"white"}
      sx={{
        position: "fixed",
        top: "0",
        zIndex: "99",
        width: index > 1 ? "85%" : "100%",
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px '
      }}
    >
      <Grid
        alignItems={['center']}
        columns={
          index > 1
            ? ["1fr 1fr 1fr 1fr 1fr 1fr 1fr"]
            : ["1fr 64px"]}>
        <Box
          p={12}
        >
          <Link href={"/"} sx={{
            textDecoration: "none",
            color: "black"
          }}>

            <Image sx={{
              height: '2rem'
            }} src={'/big_invest_comp.png'}/>

          </Link>

        </Box>
        {index > 1 && <Box p={25}> </Box>}

        {index > 1 && (
          <>
            {" "}
            <Menu onClick={(event) => menuHandler(event, "disruptions")}>
              <DropdownMenuText>
                Disruptions
              </DropdownMenuText>
            </Menu>
            <Menu onClick={(event) => menuHandler(event, "research")}>
              <DropdownMenuText>Research</DropdownMenuText>
            </Menu>
            <Menu onClick={(event) => menuHandler(event, "sectors")}>
              <DropdownMenuText>Sectors</DropdownMenuText>
            </Menu>
            <Menu onClick={(event) => menuHandler(event, "analytics")}>
              {" "}
              <DropdownMenuText>Analytics</DropdownMenuText>
              {" "}
            </Menu>
            <NavButton/>
          </>
        )}
        {index <= 1 && (
          <Box>
            {!Menuopen ? (
              <Box
                px={"1.5rem"}
                color="black"
                sx={{
                  height: '4rem'
                }}
                onClick={(event) => menuDropOpen(event, true)}
              >
                <GiHamburgerMenu
                  style={{
                    height: "25px",
                    width: "25px",
                    transform: 'translate(0,75%)'
                  }}
                />
              </Box>
            ) : (
              <Box
                px={"1.5rem"}
                color="black"
                sx={{
                  height: '4rem'
                }}
                onClick={(event) => menuDropOpen(event, false)}

              >
                <AiOutlineClose
                  style={{
                    height: "25px",
                    width: "25px",
                    transform: 'translate(0,75%)'
                  }}

                />
              </Box>
            )}
          </Box>
        )}
      </Grid>
      {open ? <Dropdown component={dropdownComponent}/> : null}
      {Menuopen ? (
        <DropdownMenu
          menuHandler={menuHandler}
          MobileComponent={MobileComponent}
          setMobileComponent={setMobileComponent}
        />
      ) : null}
      <OutsideClickHandler
        useCapture={true}
        onOutsideClick={() => {
          setOpen(false);
          if (index >= 1) setMenuopen(false);
        }}
      />
    </Box>
  );
};

function DropdownMenu({MobileComponent, setMobileComponent}) {
  const menuHandler = (componentName) => {
    setMobileComponent({position: componentName});
  };

  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  };

  function DisruptionsDropdownMobile() {
    return (
      <Box
        sx={{
          height: "100vh",
          width: "80vw",
          // background: "white",
        }}
      >
        <Box
          pt={1}
          onClick={() => menuHandler(null)}
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: '25px',
            borderBottom: '1px solid black'
          }}
        >
          <MdKeyboardArrowLeft color="black"/>
          <Text ml={2}>Disruptions</Text>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <LinkMobile color={"color1"}>Electric Transport </LinkMobile>
          <LinkMobile color={"color1"}> Genomics </LinkMobile>
          <LinkMobile color={"color1"}> Battery ecosystems </LinkMobile>
          <LinkMobile color={"color1"}> Materials </LinkMobile>
          <LinkMobile color={"color1"}> Space Exploration </LinkMobile>
          <LinkMobile color={"color1"}> Next IT </LinkMobile>
          <LinkMobile color={"color1"}> Information Technology </LinkMobile>
          <LinkMobile color={"color1"}> Internet of things </LinkMobile>
          <LinkMobile color={"color1"}> Bioinformatics </LinkMobile>
          <LinkMobile color={"color1"}> Telemedicine </LinkMobile>
        </Box>
      </Box>
    );
  }

  function ResearchDropdownMobile() {
    return (
      <Box
        bg={"white"}
        sx={{
          position: "absolute",
          top: "1px",
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          pt={3}
          pb={2}
          onClick={() => menuHandler(null)}
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: '1px solid black'
          }}
        >
          <MdKeyboardArrowLeft color="black"/>
          <Text ml={2}> Research</Text>
        </Box>
      </Box>
    );
  }

  function SectorsDropdownMobile() {
    return (
      <Box
        bg={"white"}
        sx={{
          position: "absolute",
          top: "1px",
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          pt={3}
          pb={2}
          onClick={() => menuHandler(null)}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <MdKeyboardArrowLeft color="black"/>
          <Text ml={2}> Sectors</Text>
        </Box>
      </Box>
    );
  }

  function AnalyticsDropdownMobile() {
    return (
      <Box
        bg={"white"}
        sx={{
          position: "absolute",
          top: "1px",
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          pt={3}
          pb={2}
          onClick={() => menuHandler(null)}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <MdKeyboardArrowLeft color="black"/>
          <Text ml={2}> Analytics</Text>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <LinkMobile color={"color1"}> Electric two wheeler penetration </LinkMobile>
          <LinkMobile color={"color1"}> Electric Cars penetration </LinkMobile>
          <LinkMobile color={"color1"}> Battery ecosystems </LinkMobile>
          <LinkMobile color={"color1"}> Materials </LinkMobile>

          <LinkMobile color={"color1"}> Telecom performance </LinkMobile>
          <LinkMobile color={"color1"}> 5G ready </LinkMobile>

          <LinkMobile color={"color1"}> Information Technology </LinkMobile>
          <LinkMobile color={"color1"}> Internet of things </LinkMobile>

          <LinkMobile color={"color1"}> Bioinformatics usage </LinkMobile>
          <LinkMobile color={"color1"}> Telemedicine penetration </LinkMobile>
        </Box>
      </Box>
    );
  }

  const menuStyles = {fontWeight: "500", fontSize: "1.3rem"};

  return (
    <Box
      sx={{
        position: "relative",
        height: "92vh",
      }}
    >
      {MobileComponent.position === "disruptions" ? (
        <Menu>
          {" "}
          <DisruptionsDropdownMobile/>{" "}
        </Menu>
      ) : (
        <Box sx={styles} onClick={() => menuHandler("disruptions")}>
          <Menu sx={menuStyles}> Disruptions </Menu>
          <RiArrowRightSLine
            color="black"
            style={{marginRight: "10px", height: "25px", width: "25px"}}
          />
        </Box>
      )}
      {MobileComponent.position === "research" ? (
        <Menu>
          {" "}
          <ResearchDropdownMobile/>{" "}
        </Menu>
      ) : (
        <Box sx={styles} onClick={() => menuHandler("research")}>
          <Menu sx={menuStyles}> Research </Menu>
          <RiArrowRightSLine
            color="black"
            style={{marginRight: "10px", height: "25px", width: "25px"}}
          />
        </Box>
      )}

      {MobileComponent.position === "sectors" ? (
        <Menu>
          {" "}
          <SectorsDropdownMobile/>{" "}
        </Menu>
      ) : (
        <Box sx={styles} onClick={() => menuHandler("sectors")}>
          <Menu sx={menuStyles}> Sectors </Menu>
          <RiArrowRightSLine
            color="black"
            style={{marginRight: "10px", height: "25px", width: "25px"}}
          />
        </Box>
      )}
      {MobileComponent.position === "analytics" ? (
        <Menu sx={menuStyles}>
          {" "}
          <AnalyticsDropdownMobile/>{" "}
        </Menu>
      ) : (
        <Box sx={styles} onClick={() => menuHandler("analytics")}>
          <Menu sx={menuStyles}> Analytics </Menu>
          <RiArrowRightSLine
            color="black"
            style={{marginRight: "10px", height: "25px", width: "25px"}}
          />
        </Box>
      )}
    </Box>
  );
}

function NavButton({children, ...remainingProps}) {
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
      <AnchorLink style={{
        textDecoration: 'none',
        color: 'inherit',
      }} href={"#explore"} offset={120}>Explore</AnchorLink>
    </Box>
  );
}

export const Menu = ({children, ...remainingProps}) => {
  return (
    <Box {...remainingProps}>
      <Box
        p={[10, 20]}
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

function Dropdown({component}) {
  const Component = dropdownComponents[component];

  const props = useSpring({opacity: 1, from: {opacity: 0}});

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
          zIndex: "99",
        }}
        style={props}
      >
        <Component/>
      </AnimatedBox>
    </Portal>
  );
}

function AnalyticsDropdown() {
  return (
    <Box
      sx={{
        height: "200px",
        marginBottom: "20px",
      }}
    >
      <Text pb={20} mx={10} color={"color2"} sx={{fontWeight: "bold"}}>Analytics</Text>
      <Grid columns={[4]}>
        <Box sx={{borderRight: "1px solid grey", display: "flex", flexDirection: "column"}}>
          <LinkDropdown> Electric two wheeler penetration
          </LinkDropdown>
          <LinkDropdown> Electric Cars penetration
          </LinkDropdown>
          <LinkDropdown> Battery ecosystems
          </LinkDropdown>
          <LinkDropdown> Materials
          </LinkDropdown>
        </Box>
        <Box sx={{borderRight: "1px solid grey", display: 'flex', flexDirection: 'column'}}>
          <LinkDropdown> Telecom performance
          </LinkDropdown>
          <LinkDropdown> 5G ready
          </LinkDropdown>
        </Box>
        <Box sx={{borderRight: "1px solid grey", display: 'flex', flexDirection: 'column'}}>
          <LinkDropdown> Information Technology
          </LinkDropdown>
          <LinkDropdown> Internet of things
          </LinkDropdown>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <LinkDropdown> Bioinformatics usage
          </LinkDropdown>
          <LinkDropdown> Telemedicine penetration
          </LinkDropdown>
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
        marginBottom: '20px',
      }}
    >
      <Text pb={20} mx={10} color={'color2'} sx={{fontWeight: 'bold'}}>Disruptions</Text>
      <Grid columns={[4]}>
        <Box sx={{borderRight: "1px solid grey", display: 'flex', flexDirection: 'column'}}>
          <LinkDropdown> Electric Transport
          </LinkDropdown>
          <LinkDropdown> Genomics
          </LinkDropdown>
          <LinkDropdown> Battery ecosystems
          </LinkDropdown>
          <LinkDropdown> Materials
          </LinkDropdown>
        </Box>
        <Box sx={{borderRight: "1px solid grey", display: 'flex', flexDirection: 'column'}}>
          <LinkDropdown> Space Exploration
          </LinkDropdown>
          <LinkDropdown> Next IT
          </LinkDropdown>
        </Box>
        <Box sx={{borderRight: "1px solid grey", display: 'flex', flexDirection: 'column'}}>
          <LinkDropdown> Information Technology
          </LinkDropdown>
          <LinkDropdown> Internet of things
          </LinkDropdown>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <LinkDropdown> Bioinformatics
          </LinkDropdown>
          <LinkDropdown> Telemedicine
          </LinkDropdown>
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
      <Text py={20} mx={10} color={'color2'} sx={{fontWeight: 'bold'}}>Research</Text>

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
      <Text py={20} mx={10} color={'color2'} sx={{fontWeight: 'bold'}}>Sectors</Text>

    </Box>
  );
}

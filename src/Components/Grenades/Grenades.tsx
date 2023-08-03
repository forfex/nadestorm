import { Box, Container, Flex, Navbar, Paper, ThemeIcon, createStyles, getStylesRef, rem } from "@mantine/core";
import { theme } from "../../ThemeProvider";
import { useLocation } from "react-router-dom";
import { GrenadePoint } from "./GrenadePoint";
import { useEffect, useRef, useState } from "react";

import $ from 'jquery'; // Import jQuery

const useStyles = createStyles((theme) => ({
  
}));

export function Grenades() {
  const { classes, cx } = useStyles();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search)
  const map = queryParams.get('map');

  const grenadeData = [
    { label: 'Schody', type: 'smoke', rt: false, jt: false, coords: [50, 50]}
  ]

  const grenadePoints = grenadeData.map((grenade) => (
    <GrenadePoint label={grenade.label} type={grenade.type} rt={grenade.rt} jt={grenade.jt}/>
  ));

  // const boxRef = useRef(null);
  // const [height, setHeight] = useState(0);

  // useEffect(() => {
  //   if (boxRef.current) {
  //     const boxHeight = $(boxRef.current).height()!; // Use jQuery to get the height
  //     setHeight(boxHeight);
  //   }
  // }, []);

  return (
  <Flex
    gap="xl"
    align="center"
    p="xl"
    w="100%"
  >
  {/* <Box
  sx={(theme) => ({
    position: 'absolute',
    width: '30%',
    height: '40%',
    backgroundColor: "white"
  })}
  /> */}
  
  <Box
    sx={(theme) => ({
      width: `100%`,
      height: '100%',
      backgroundImage: 'url("src/Components/Grenades/images/'+ map + '.png")',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
    })}
  >
  {grenadePoints}
  </Box>
  </Flex>
  )
}
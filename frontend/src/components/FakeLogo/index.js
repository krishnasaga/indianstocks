import React from 'react';
import {Box} from 'theme-ui';

export const FakeLogo = ({name, ...remainingProps}) => {
  const {color, complementaryColor ,letter} = getRandomColor(name);
  return <Box bg={color} color={'black'} {...remainingProps} >
    {letter}
  </Box>
}

function getRandomColor(name) {
  // get first alphabet in upper case
  const firstAlphabet = name.charAt(0).toLowerCase();

  // get the ASCII code of the character
  const asciiCode = firstAlphabet.charCodeAt(0);

  // number that contains 3 times ASCII value of character -- unique for every alphabet
  const colorNum = asciiCode.toString() + asciiCode.toString() + asciiCode.toString();

  var num = Math.round(0xffffff * parseInt(colorNum));
  var r = num >> 16 & 255;
  var g = num >> 8 & 255;
  var b = num & 255;
  console.log(r.toString(16));
  console.log(parseInt(`0x${parseInt(r,16)}${parseInt(g,16)}${parseInt(b,16)}`));
  return {
    color: 'rgb(' + r + ', ' + g + ', ' + b + ', 0.3)',
    letter: firstAlphabet.toUpperCase(),
    complementaryColor: `#${(0xFFFFFF - `0x${r.toString(16)}${g.toString(16)}${b.toString(16)}`).toString(16)}`
  };
}

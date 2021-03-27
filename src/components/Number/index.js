import React from 'react';
import { Text } from 'theme-ui';
import { useSpring, animated} from 'react-spring';

const AnimatedText = animated(Text);

export const AnimatedNumber = ({children,...remainingProps}) => {

  const parsedNumber = parseToNumber(children);

  const props = useSpring({ number: parsedNumber, from: { number: 0 } })

  return <AnimatedText {...remainingProps} >
    {props.number.interpolate(x => x.toFixed(0))}
  </AnimatedText>
}


function parseToNumber(numberOrString) {
  if(typeof  numberOrString === 'number') return numberOrString;
  const number = numberOrString.replace('%','');
  return Number.parseFloat(number);
}

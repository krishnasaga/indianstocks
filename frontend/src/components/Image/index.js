import React, {useEffect, useState} from 'react';
import { Image as __Image,Box} from 'theme-ui';

export const DynamicImage = (props) => {

  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const {src,fallback} = props;

  useEffect(() => {
    const image = new Image();
    image.addEventListener('load', function () {
      setLoading(false);
    }, false);
    image.src = src;


  }, []);


  return !loading ? <__Image src={src}/> : ( fallback || <Box/> )
}




export { DynamicImage as Image };

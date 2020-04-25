import React, { useRef, useEffect, useState } from 'react';

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  // reference to the img DOM element
  const imageRef = useRef(null);

  // to avoid flash of primary/secondary img, hide it until after useEffect is called
  const [isLoading, setIsLoading] = useState(true);

  // register/unregister scroll listener when component mounts/unmounts
  // also want to re-render when isLoading changes
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    // Kick this off in case this image is already in view when component mounts but user hasn't started scrolling yet
    setInView(isInView());
    setIsLoading(false);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [isLoading]);

  // keep track of whether this img is in view
  const [inView, setInView] = useState(false);

  // determine if this img is in view (aka scrollable area)
  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  // scrollHandler sets inView state based on whether img is in view
  const scrollHandler = () => {
    setInView(isInView());
    // Instructor has like this - WHY FUNCTION?
    // setInView(() => {
    //   return isInView();
    // });
  };

  // display secondaryImg when in view, otherwise, primaryImg, but only when not loading
  return isLoading ? null : (
    <img
      src={inView ? secondaryImg : primaryImg}
      alt=""
      ref={imageRef}
      width="300px"
      height="500px"
    />
  );
};

export default ImageToggleOnScroll;

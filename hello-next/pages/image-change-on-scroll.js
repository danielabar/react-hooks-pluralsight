import React from 'react';
import ImageToggleOnScroll from '../src/image-toggle-on-scroll';

const ImageChangeOnScroll = () => {
  return (
    <div>
      <ImageToggleOnScroll
        primaryImg="/static/bw/cristiane-teston-2iV9nqP4Y6A-unsplash.jpg"
        secondaryImg="/static/color/marco-chilese-Cn-mhBXzR_I-unsplash.jpg"
        alt=""
        width="300px"
      />
      <br />
      <ImageToggleOnScroll
        primaryImg="/static/bw/daniele-d-andreti-jQ49DUhffos-unsplash.jpg"
        secondaryImg="/static/color/scott-webb-eD853mTbBA0-unsplash.jpg"
        alt=""
        width="300px"
      />
    </div>
  );
};

export default ImageChangeOnScroll;

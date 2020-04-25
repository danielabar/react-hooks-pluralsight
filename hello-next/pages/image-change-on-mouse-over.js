import React from 'react';
import ImageToggleOnMouseOver from '../src/image-toggle-on-mouse-over';

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="/static/bw/cristiane-teston-2iV9nqP4Y6A-unsplash.jpg"
        secondaryImg="/static/color/marco-chilese-Cn-mhBXzR_I-unsplash.jpg"
        alt=""
        width="300px"
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImg="/static/bw/daniele-d-andreti-jQ49DUhffos-unsplash.jpg"
        secondaryImg="/static/color/scott-webb-eD853mTbBA0-unsplash.jpg"
        alt=""
        width="300px"
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;

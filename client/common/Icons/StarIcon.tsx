import * as React from 'react';

const StarIcon = (props: any) => (
  <svg width={props.width || 22} height={props.height || 22} viewBox='0 0 22 22' xmlns='http://www.w3.org/2000/svg' className={props.className}>
    <title>StarIcon</title>
    <path d='M11 0l3.399 6.94L22 8.054l-5.5 5.402 1.298 7.628-6.798-3.6-6.798 3.6L5.5 13.455 0 8.053l7.6-1.112z' fill='currentColor' fillRule='evenodd' />
  </svg>
);

export default StarIcon;

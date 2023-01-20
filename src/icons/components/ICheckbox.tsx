/* eslint-disable max-len */
import React from 'react';
import {ComponentBaseProps} from 'types/components';

const ICheckbox: React.FC<ComponentBaseProps> = (props) => {
  return (
    <svg
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.93426 6.75766L1.58682 4.40797C1.22381 4.04461 0.635262 4.04461 0.272255 4.40797C-0.0907517 4.77132 -0.0907517 5.36044 0.272255 5.72379L3.2703 8.72472C3.63699 9.09176 4.23152 9.09176 4.59821 8.72472L11.7277 1.58834C12.0908 1.22499 12.0908 0.635872 11.7277 0.272516C11.3647 -0.0908388 10.7762 -0.0908388 10.4132 0.272516L3.93426 6.75766Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ICheckbox;

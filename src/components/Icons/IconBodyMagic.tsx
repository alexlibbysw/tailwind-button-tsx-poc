import * as React from "react";
import { IconProps } from "./Icon.types";
// import useIconSizing from "./utils/useIconSizing";

const IconBodyMagic: React.FC<IconProps> = ({
  viewBox,
  width,
  height,
  color,
  ...props
}) => {
  const viewBoxWidth = 15;
  const viewBoxHeight = 21.8;
  const defaultViewBox = `0 0 ${viewBoxWidth} ${viewBoxHeight}`;

  // const [renderWidth, renderHeight] = useIconSizing(
  //   viewBoxWidth,
  //   viewBoxHeight,
  //   width,
  //   height
  // );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={21.8}
      viewBox={viewBox || defaultViewBox}
      data-testid="icon-body-magic"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M5,10.7L5,11.2l0.4-0.1l0-0.4L5,10.7z M2.1,11.2l-0.4,0.2l0.2,0.3l0.4-0.1L2.1,11.2z M5.4,7.9l0.5,0.2l0,0
        L5.4,7.9z M5.7,3.1L6.2,3v0L5.7,3.1z M3,0.5L3,0l0,0L3,0.5z M0.6,6.2L0.1,6.3L0.6,6.2z M12.4,16.2l-0.1,0.5l0.3,0.1l0.2-0.3
        L12.4,16.2z M9.6,15.4l-0.5,0l0,0.4l0.4,0.1L9.6,15.4z M14.3,11.4l-0.5-0.1l0,0L14.3,11.4z M9.5,7.8L10,8v0L9.5,7.8z M9.3,12.6
        l0.5-0.2L9.3,12.6z M9,16.8l0.2-0.5l-0.4-0.1l-0.2,0.3L9,16.8z M11.9,17.7h0.5v-0.4l-0.3-0.1L11.9,17.7z M9.5,21.2l-0.1,0.5h0
        L9.5,21.2z M5.4,12.1l0.4-0.2l-0.2-0.3l-0.4,0.1L5.4,12.1z M2.4,12.7l-0.1-0.5l-0.4,0.1l0,0.4L2.4,12.7z M4.5,16.5L4.4,16l0,0
        L4.5,16.5z M4.9,10.2L2,10.7l0.2,1L5,11.2L4.9,10.2z M5,7.7c-0.3,0.6-0.4,1.4-0.5,2c0,0.3,0,0.5-0.1,0.7c0,0.1,0,0.2,0,0.2
        c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0.5,0c0.5,0,0.5,0,0.5,0v0c0,0,0,0,0,0s0,0,0,0
        c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0-0.1,0-0.2c0-0.2,0-0.4,0-0.7c0.1-0.5,0.2-1.2,0.4-1.7L5,7.7z M5.2,3.3
        C5.7,5.2,5.4,6.6,5,7.7l0.9,0.4C6.4,6.9,6.8,5.2,6.2,3L5.2,3.3z M3,1c0.7,0,1.1,0.1,1.3,0.3c0.3,0.3,0.6,0.9,0.8,1.9l1-0.3
        C5.9,1.9,5.6,1.1,5.1,0.6C4.5,0.1,3.8,0,3,0L3,1z M1.1,6.1c-0.2-1.5,0-2.8,0.4-3.7C1.9,1.5,2.5,1,3,1L3,0C1.9,0.1,1.1,0.9,0.6,2
        C0.1,3.2-0.1,4.7,0.1,6.3L1.1,6.1z M2.1,11.2c0.4-0.2,0.4-0.2,0.4-0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
        c0,0,0,0,0-0.1c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.2-0.2-0.5-0.4-1c-0.3-0.8-0.7-2-0.9-3.5l-1,0.1C0.3,7.9,0.7,9.1,1,10
        c0.2,0.4,0.3,0.8,0.4,1c0.1,0.1,0.1,0.2,0.1,0.3c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
        C1.6,11.4,1.6,11.4,2.1,11.2z M12.5,15.7l-2.8-0.8l-0.3,1l2.8,0.8L12.5,15.7z M13.8,11.2c-0.3,1.5-0.8,2.6-1.2,3.4
        c-0.2,0.4-0.4,0.7-0.5,0.9c-0.1,0.1-0.1,0.2-0.1,0.2c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0l0,0
        c0,0,0,0,0.4,0.3c0.4,0.3,0.4,0.3,0.4,0.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0-0.1
        c0-0.1,0.1-0.1,0.2-0.3c0.1-0.2,0.3-0.6,0.5-1c0.4-0.9,0.9-2.1,1.3-3.6L13.8,11.2z M12.3,6c0.5,0.1,1.1,0.6,1.4,1.6
        c0.3,1,0.4,2.3,0.1,3.7l1,0.2c0.4-1.6,0.3-3.1-0.1-4.3c-0.4-1.1-1.2-2.1-2.2-2.2L12.3,6z M10,8c0.4-1,0.7-1.6,1-1.8
        c0.3-0.2,0.6-0.3,1.4-0.2l0.1-1c-0.8-0.1-1.5-0.1-2.1,0.4C9.8,5.9,9.4,6.6,9,7.7L10,8z M9.8,12.4C9.5,11.4,9.3,9.9,10,8L9,7.7
        c-0.8,2.1-0.6,3.8-0.2,5.1L9.8,12.4z M9.6,15.4c0.5,0,0.5,0,0.5,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
        c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2c0-0.2,0-0.4,0-0.7c0-0.6-0.1-1.3-0.3-2l-0.9,0.3c0.2,0.5,0.2,1.2,0.2,1.7c0,0.3,0,0.5,0,0.7
        c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0v0C9.1,15.4,9.1,15.4,9.6,15.4z M8.9,17.3l2.9,0.9
        l0.3-1l-2.9-0.9L8.9,17.3z M9.6,20.8c-0.5-0.2-0.8-0.4-0.9-0.7c-0.1-0.3-0.1-0.7,0-1.2c0.1-0.5,0.3-0.9,0.4-1.2
        c0.1-0.2,0.2-0.3,0.2-0.4c0,0,0-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0-0.4-0.3
        c-0.4-0.3-0.4-0.3-0.4-0.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0.1-0.1,0.1
        c-0.1,0.1-0.1,0.3-0.2,0.5c-0.2,0.4-0.4,0.9-0.5,1.5c-0.1,0.5-0.2,1.2,0.1,1.8C8,21,8.5,21.5,9.4,21.7L9.6,20.8z M11.9,17.7
        c-0.5,0-0.5,0-0.5,0v0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0.1,0,0.3,0,0.4c0,0.4-0.1,0.8-0.2,1.3
        c-0.1,0.4-0.3,0.8-0.6,1c-0.2,0.2-0.5,0.3-1,0.2l-0.3,1c0.8,0.2,1.4,0.1,1.9-0.4c0.4-0.4,0.7-1,0.9-1.5c0.2-0.5,0.2-1.1,0.3-1.5
        c0-0.2,0-0.4,0-0.5c0-0.1,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0C12.4,17.7,12.4,17.7,11.9,17.7z
         M5.3,11.6l-3,0.7l0.2,1l3-0.7L5.3,11.6z M4.6,17c0.8-0.2,1.4-0.6,1.7-1.2c0.3-0.6,0.3-1.2,0.2-1.8c-0.1-0.6-0.2-1.1-0.4-1.5
        C6,12.3,6,12.2,5.9,12c0-0.1,0-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0-0.4,0.2
        c-0.4,0.2-0.4,0.2-0.4,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0.1,0.1,0.1c0,0.1,0.1,0.2,0.2,0.4
        c0.1,0.4,0.3,0.8,0.3,1.3c0.1,0.5,0,0.9-0.1,1.2c-0.1,0.3-0.4,0.5-1,0.6L4.6,17z M2.4,12.7c-0.5,0-0.5,0-0.5,0c0,0,0,0,0,0
        c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0.1,0,0.3,0,0.5c0,0.4,0,1,0.2,1.5c0.1,0.5,0.3,1.1,0.7,1.5
        c0.4,0.5,1.1,0.7,1.8,0.5l-0.2-1c-0.5,0.1-0.7,0-0.9-0.2c-0.2-0.2-0.4-0.6-0.5-1.1c-0.1-0.4-0.1-0.9-0.1-1.3c0-0.2,0-0.3,0-0.4
        c0-0.1,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0C2.9,12.8,2.9,12.8,2.4,12.7z"
        fill={color}
        stroke={color}
      />
    </svg>
  );
};

export default IconBodyMagic;
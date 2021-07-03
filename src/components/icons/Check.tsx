import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgCheck(props: _SVGProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="Check_svg__feather Check_svg__feather-check"
      {...props}>
      <Path d="M20 6L9 17l-5-5" />
    </Svg>
  );
}

export default SvgCheck;
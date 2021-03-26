import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
interface _SVGProps extends SvgProps {
  xmlns?: string;
}

function SvgLogo(props: _SVGProps) {
  return (
    <Svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path fill="#B52525" d="M0 0h512v512H0z" />
      <Path
        d="M239.947 196.236L232.184 204h-9.991v-7.764h4.805v-31.113h12.949v31.113zm-24.58 0h4.776V204h-9.961l-7.793-7.764v-31.113h12.978v31.113zm-6.885-41.484h9.844v6.475h-9.844v-6.475zm15.528 0h9.844v6.475h-9.844v-6.475zM283.863 204h-13.769l-23.555-38.877h13.682L283.863 204zm-37.324 0v-35.186l11.279 18.487V204h-11.279zm37.324-38.877v35.186l-11.279-18.575v-16.611h11.279zm6.27 30.586h3.896v-22.324h-3.896v-8.262h20.742v8.262h-3.896v22.324h3.896V204h-20.742v-8.291zm5.508-40.957h9.843v6.475h-9.843v-6.475zm-118.741 120h-12.714l2.695-7.705h7.031l-10.4-26.924h12.627L191.637 279h-13.096l-1.641-4.248zM160.729 279h-12.51l13.886-37.119 5.743 15.439-7.119 21.68zm34.599 0v-38.877h12.949V279h-12.949zm15-31.113v-7.764h14.795l7.793 7.764v11.66l-5.977 5.976-.41-.82-12.158 1.611.469 1.026h-4.512v-7.529h9.727v-11.924h-9.727zM234.234 279h-13.828l-5.566-11.66h10.283l1.816-1.817L234.234 279zm17.578-15.967V279h-12.949v-38.877h12.949v15.41h12.393v7.5h-12.393zm2.051-15.381v-7.529h20.244v11.25H261.92v-3.721h-8.057zm0 31.348v-7.764h7.295v-3.896h12.949V279h-20.244zm63.809 0h-13.77l-23.554-38.877h13.681L317.672 279zm-37.324 0v-35.186l11.279 18.487V279h-11.279zm37.324-38.877v35.186l-11.279-18.575v-16.611h11.279zm32.373 34.629H337.33l2.695-7.705h7.032l-10.401-26.924h12.627L364.781 279h-13.095l-1.641-4.248zM333.873 279h-12.51l13.887-37.119 5.742 15.439-7.119 21.68z"
        fill="#F5F5F5"
      />
      <Path
        d="M424.999 88.59c.035-3.927-3.502-7.135-7.901-7.166a8.805 8.805 0 00-3.329.625c-19.297 7.898-40.254 12.041-61.483 12.157-33.005-.363-64.973-10.35-91.03-28.438-3.007-2.357-7.506-2.357-10.513 0-26.011 18.164-58.008 28.16-91.03 28.438-21.228-.115-42.186-4.26-61.483-12.157-4.012-1.61-8.726-.012-10.53 3.569a6.473 6.473 0 00-.7 2.972c0 1.492.558 148.089 0 196.647 0 26.02 67.536 110.196 164.938 161.811 2.464 1.269 5.5 1.269 7.964 0 97.561-51.615 165.415-135.862 165.097-161.882-.558-48.558 0-195.155 0-196.576zM260.061 399.059c-2.464 1.27-5.5 1.27-7.964 0-72.872-38.533-123.524-101.807-123.524-121.643.398-35.973 0-144.464 0-145.601-.035-3.926 3.502-7.134 7.901-7.165a8.814 8.814 0 013.329.624c14.018 5.755 29.248 8.785 44.678 8.887 23.974-.112 47.247-7.228 66.262-20.262 3.007-2.358 7.506-2.358 10.513 0 18.907 13.096 42.093 20.312 66.023 20.546 15.43-.102 30.66-3.131 44.679-8.886 4.012-1.611 8.725-.012 10.529 3.569a6.47 6.47 0 01.7 2.971c.239 1.067-.398 109.77.239 145.317 0 19.836-50.652 83.11-123.365 121.643z"
        fill="#F5F5F5"
      />
    </Svg>
  );
}

export default SvgLogo;
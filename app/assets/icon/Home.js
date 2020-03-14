import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Home = props => {
  return (
    <Svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.08 11V17H3V9H0L10 0L20 9H17V17H12V11H6.08ZM10.48 11.4H6.64002V16.2H10.48V11.4Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default Home;

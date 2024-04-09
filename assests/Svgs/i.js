import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"
const FirstIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={41}
    fill="none"
    {...props}
  >
    <Rect
      width={40}
      height={40}
      y={0.58}
      fill="#F3AB40"
      fillOpacity={0.12}
      rx={20}
    />
    <G
      stroke="#F3AB40"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      clipPath="url(#a)"
    >
      <Path d="m28.75 11.83-9.583 9.583M29.334 12.053a.625.625 0 0 0-.806-.807l-17.5 6.667a.625.625 0 0 0 .006 1.17L18.68 21.9l2.817 7.646a.625.625 0 0 0 1.17.007l6.667-17.5Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M10 10.58h20v20H10z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default FirstIcon

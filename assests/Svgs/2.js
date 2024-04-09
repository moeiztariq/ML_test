import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SecondIcon = (props) => (
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
    <Path
      fill="#F3AB40"
      fillRule="evenodd"
      d="M11.667 16.208c0-.23.187-.416.417-.416h15a.417.417 0 0 1 0 .833h-15a.417.417 0 0 1-.417-.417Z"
      clipRule="evenodd"
    />
    <Path
      fill="#F3AB40"
      fillRule="evenodd"
      d="M23.44 12.18a.417.417 0 0 1 .588-.031l4.167 3.75a.417.417 0 0 1 0 .619l-4.167 3.75a.417.417 0 0 1-.557-.62l3.823-3.44-3.823-3.44a.417.417 0 0 1-.031-.589ZM12.5 24.542c0-.23.187-.417.417-.417h15a.417.417 0 1 1 0 .833h-15a.417.417 0 0 1-.417-.416Z"
      clipRule="evenodd"
    />
    <Path
      fill="#F3AB40"
      fillRule="evenodd"
      d="M16.56 20.513a.417.417 0 0 1-.03.588l-3.824 3.44 3.823 3.441a.417.417 0 1 1-.557.62l-4.167-3.75a.417.417 0 0 1 0-.62l4.167-3.75a.417.417 0 0 1 .588.03Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SecondIcon

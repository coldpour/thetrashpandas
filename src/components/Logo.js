import React from "react";

import Svg from "components/Svg";

const Logo = props => (
  <Svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 439" {...props}>
    <defs>
      <path
        d="M4.37 9.8L6.54 10.98L8.89 12.23L11.43 13.52L14.13 14.85L16.97 16.23L19.96 17.65L23.06 19.09L26.27 20.57L29.58 22.06L32.96 23.57L36.41 25.1L39.91 26.63L43.45 28.17L47.01 29.71L50.57 31.24L54.13 32.76L57.68 34.26L61.18 35.75L64.64 37.21L68.04 38.64L71.36 40.04L74.59 41.4L77.72 42.72L80.72 43.99L83.6 45.2L86.32 46.36L88.89 47.46L91.28 48.49L93.48 49.46L95.48 50.34L97.26 51.15L98.8 51.87L100.11 52.5L101.15 53.03L101.92 53.47L102.4 53.8L102.58 54.03L102.44 54.14L99.64 54.6L96.81 54.99L93.97 55.31L91.12 55.57L88.26 55.77L85.4 55.92L82.54 56.01L79.68 56.05L76.84 56.04L74.01 55.99L71.21 55.9L68.43 55.77L65.68 55.6L62.97 55.41L60.29 55.18L57.67 54.93L55.09 54.66L52.57 54.37L50.1 54.06L47.7 53.74L45.37 53.42L43.12 53.08L40.94 52.75L38.85 52.41L36.84 52.08L34.93 51.75L33.12 51.44L31.41 51.14L29.81 50.85L28.32 50.58L26.94 50.34L25.69 50.12L24.57 49.93L23.57 49.77L22.72 49.65L22 49.57L21.43 49.53L21.01 49.53L20.75 49.58L20.65 49.69L20.54 50.5L20.48 51.39L20.44 52.37L20.44 53.41L20.47 54.52L20.53 55.69L20.61 56.92L20.72 58.2L20.85 59.52L21.01 60.88L21.19 62.28L21.38 63.7L21.59 65.15L21.82 66.62L22.06 68.09L22.31 69.58L22.57 71.07L22.84 72.56L23.12 74.03L23.4 75.5L23.68 76.94L23.97 78.36L24.25 79.75L24.53 81.1L24.81 82.41L25.08 83.68L25.35 84.9L25.61 86.06L25.85 87.15L26.09 88.18L26.31 89.14L26.51 90.02L26.7 90.82L26.87 91.52L27.01 92.14L27.14 92.65L27.23 93.06L27.31 93.36L27.35 93.54L27.37 93.6L49.58 118.28L52.44 114.35L55.4 110.52L58.46 106.79L61.6 103.15L64.83 99.63L68.14 96.2L71.51 92.89L74.94 89.68L78.42 86.58L81.95 83.6L85.52 80.73L89.11 77.97L92.73 75.34L96.37 72.82L100.01 70.43L103.65 68.16L107.29 66.02L110.91 64L114.52 62.12L118.09 60.36L121.63 58.74L125.12 57.25L128.56 55.91L131.95 54.7L135.27 53.63L138.51 52.7L141.68 51.92L144.76 51.28L147.74 50.8L150.62 50.46L153.39 50.28L156.04 50.25L158.57 50.37L160.97 50.66L163.22 51.1L165.33 51.71L167.29 52.47L169.09 53.41L170.71 54.51L172.16 55.78L173.53 56.76L174.86 58.03L176.15 59.57L177.41 61.36L178.63 63.39L179.82 65.65L180.96 68.11L182.08 70.75L183.15 73.58L184.18 76.56L185.18 79.68L186.14 82.93L187.06 86.29L187.94 89.74L188.78 93.28L189.58 96.87L190.34 100.51L191.05 104.18L191.73 107.87L192.36 111.56L192.95 115.22L193.5 118.86L194.01 122.44L194.47 125.96L194.89 129.4L195.26 132.74L195.59 135.96L195.88 139.06L196.11 142.01L196.31 144.81L196.46 147.42L196.56 149.84L196.61 152.05L196.62 154.04L196.57 155.79L196.48 157.28L196.35 158.5L196.16 159.42L195.92 160.05L195.64 160.35L195.3 161.33L194.65 162.25L193.71 163.12L192.48 163.93L190.97 164.69L189.19 165.39L187.15 166.05L184.86 166.66L182.34 167.22L179.58 167.73L176.6 168.21L173.42 168.64L170.03 169.03L166.45 169.39L162.69 169.71L158.76 170L154.67 170.25L150.42 170.47L146.03 170.67L141.51 170.84L136.86 170.98L132.1 171.1L127.24 171.19L122.28 171.27L117.24 171.33L112.13 171.37L106.94 171.4L101.71 171.41L96.42 171.42L91.1 171.41L85.76 171.4L80.39 171.38L75.02 171.36L69.66 171.33L64.3 171.3L58.97 171.28L53.67 171.26L48.41 171.24L43.2 171.23L38.05 171.22L37.73 175.1L37.5 178.98L37.37 182.87L37.34 186.74L37.42 190.61L37.63 194.46L37.95 198.29L38.41 202.09L39 205.87L39.74 209.61L40.62 213.3L41.66 216.96L42.86 220.56L44.23 224.1L45.78 227.59L47.5 231.01L49.42 234.36L51.52 237.63L53.83 240.82L56.34 243.93L59.07 246.94L62.01 249.86L65.18 252.68L68.58 255.39L72.22 257.99L76.1 260.48L80.23 262.84L84.62 265.08L89.28 267.18L94.2 269.15L99.4 270.98L104.88 272.67L110.65 274.2L116.72 275.57L123.08 276.79L129.76 277.84L136.75 278.71L144.05 279.41L151.69 279.93L159.66 280.26L161.22 285.37L162.74 290.4L164.2 295.36L165.6 300.25L166.95 305.07L168.24 309.8L169.47 314.46L170.64 319.04L171.75 323.53L172.8 327.93L173.78 332.25L174.69 336.47L175.54 340.61L176.32 344.64L177.02 348.58L177.66 352.42L178.22 356.16L178.71 359.79L179.12 363.32L179.46 366.74L179.71 370.05L179.89 373.24L179.99 376.32L180 379.28L179.93 382.13L179.78 384.85L179.53 387.44L179.2 389.91L178.78 392.25L178.27 394.46L177.67 396.54L176.98 398.48L176.18 400.29L175.3 401.95L174.31 403.47L173.23 404.85L172.05 406.08L170.76 407.17L169.37 408.1L167.88 408.88L157.49 406.33L147.54 403.22L138.04 399.58L128.96 395.43L120.31 390.81L112.08 385.74L104.25 380.25L96.83 374.36L89.81 368.11L83.17 361.51L76.92 354.61L71.04 347.42L65.52 339.97L60.37 332.3L55.56 324.42L51.11 316.37L46.98 308.17L43.19 299.86L39.73 291.45L36.57 282.98L33.73 274.47L31.19 265.95L28.94 257.45L26.98 248.99L25.29 240.61L23.88 232.33L22.74 224.18L21.85 216.19L21.21 208.37L20.82 200.77L20.66 193.41L20.73 186.31L21.02 179.51L21.53 173.03L22.24 166.89L23.15 161.13L24.26 155.78L25.55 150.85L27.01 146.39L28.65 142.41L28.65 142.4L28.65 142.37L28.66 142.32L28.66 142.25L28.66 142.15L28.66 142.04L28.65 141.9L28.65 141.74L28.64 141.56L28.62 141.35L28.6 141.12L28.57 140.87L28.54 140.59L28.5 140.28L28.45 139.95L28.39 139.59L28.32 139.21L28.24 138.8L28.15 138.36L28.05 137.89L27.93 137.39L27.81 136.87L27.66 136.32L27.5 135.73L27.33 135.12L27.14 134.47L26.93 133.8L26.71 133.09L26.47 132.35L26.2 131.58L25.92 130.77L25.62 129.94L25.29 129.06L24.94 128.16L24.57 127.22L24.18 126.24L23.76 125.23L23.32 124.18L22.85 123.1L22.35 121.98L21.82 121.35L21.31 120.75L20.8 120.16L20.31 119.6L19.83 119.05L19.36 118.52L18.91 118.01L18.46 117.51L18.03 117.04L17.61 116.57L17.19 116.13L16.79 115.69L16.39 115.28L16.01 114.87L15.63 114.48L15.26 114.1L14.9 113.73L14.54 113.38L14.2 113.03L13.85 112.69L13.52 112.37L13.19 112.05L12.87 111.74L12.55 111.44L12.23 111.14L11.93 110.86L11.62 110.57L11.32 110.3L11.02 110.03L10.72 109.76L10.43 109.49L10.14 109.23L9.85 108.98L9.56 108.72L9.27 108.46L8.98 108.21L8.7 107.96L8.41 107.7L8.12 107.45L7.83 107.19L7.68 104.7L7.54 102.21L7.4 99.72L7.28 97.23L7.16 94.74L7.05 92.25L6.94 89.76L6.84 87.28L6.74 84.79L6.65 82.3L6.56 79.81L6.47 77.32L6.38 74.83L6.29 72.34L6.19 69.85L6.1 67.36L6 64.87L5.9 62.38L5.79 59.89L5.67 57.4L5.55 54.91L5.42 52.42L5.29 49.93L5.14 47.44L4.98 44.95L4.81 42.46L4.62 39.97L4.43 37.48L4.22 34.99L3.99 32.5L3.75 30.01L3.48 27.52L3.21 25.03L2.91 22.54L2.59 20.06L2.25 17.57L1.89 15.08L1.51 12.59L1.1 10.1L0.67 7.61L2.41 8.67L4.37 9.8ZM146.74 121.38L145.49 121.58L144.26 121.85L143.06 122.2L141.9 122.62L140.76 123.11L139.66 123.66L138.6 124.28L137.58 124.96L136.61 125.7L135.68 126.49L134.8 127.34L133.96 128.24L133.19 129.18L132.46 130.18L131.79 131.22L131.19 132.29L130.64 133.41L130.16 134.57L129.75 135.75L129.41 136.98L129.14 138.22L128.94 139.5L128.82 140.8L128.78 142.12L128.82 143.45L128.94 144.75L129.14 146.02L129.41 147.27L129.75 148.49L130.16 149.68L130.64 150.84L131.19 151.95L131.79 153.03L132.46 154.07L133.19 155.06L133.96 156.01L134.8 156.91L135.68 157.76L136.61 158.55L137.58 159.29L138.6 159.97L139.66 160.58L140.76 161.14L141.9 161.63L143.06 162.05L144.26 162.39L145.49 162.67L146.74 162.87L148.02 162.99L149.32 163.03L150.62 162.99L151.89 162.87L153.15 162.67L154.37 162.39L155.57 162.05L156.74 161.63L157.87 161.14L158.97 160.58L160.03 159.97L161.05 159.29L162.03 158.55L162.96 157.76L163.84 156.91L164.67 156.01L165.45 155.06L166.17 154.07L166.84 153.03L167.45 151.95L167.99 150.84L168.47 149.68L168.88 148.49L169.23 147.27L169.5 146.02L169.69 144.75L169.81 143.45L169.85 142.12L169.81 140.8L169.69 139.5L169.5 138.22L169.23 136.98L168.88 135.75L168.47 134.57L167.99 133.41L167.45 132.29L166.84 131.22L166.17 130.18L165.45 129.18L164.67 128.24L163.84 127.34L162.96 126.49L162.03 125.7L161.05 124.96L160.03 124.28L158.97 123.66L157.87 123.11L156.74 122.62L155.57 122.2L154.37 121.85L153.15 121.58L151.89 121.38L150.62 121.26L149.32 121.21L148.02 121.26L146.74 121.38Z"
        id="b2CZ9tOpN"
      ></path>
      <path
        d="M341.81 0C354.17 11.9 360.11 88.87 367.75 133.18C369.56 143.67 331.27 81.88 328.2 76.69C324.43 70.32 321.94 49.72 314.69 36.2C302.81 41.65 292.08 48.26 281.91 55.44C265.61 53.06 245.29 51.84 240.16 46.2C267.97 25.74 295.64 5.17 341.81 0Z"
        id="a1MWaQx3qn"
      ></path>
      <path
        d="M242.65 50.93L246.45 52.09L250.52 53.64L254.83 55.58L259.36 57.87L264.08 60.51L268.97 63.47L274 66.72L279.15 70.24L284.39 74.02L289.7 78.03L295.06 82.24L300.44 86.65L305.82 91.22L311.16 95.94L316.45 100.78L321.67 105.73L326.78 110.75L331.77 115.83L336.6 120.95L341.26 126.09L345.71 131.22L349.94 136.32L353.92 141.38L357.63 146.36L361.04 151.25L364.12 156.03L366.86 160.68L369.22 165.16L371.19 169.47L372.73 173.58L373.83 177.47L374.46 181.12L374.59 184.5L370.96 184.5L367.21 184.46L363.36 184.39L359.4 184.28L355.36 184.14L351.25 183.97L347.06 183.77L342.82 183.53L338.53 183.27L334.21 182.97L329.85 182.65L325.48 182.3L321.1 181.92L316.72 181.52L312.35 181.08L308.01 180.63L303.69 180.15L299.42 179.65L295.2 179.12L291.04 178.58L286.95 178.01L282.95 177.42L279.03 176.82L275.22 176.19L271.51 175.55L267.93 174.89L264.48 174.22L261.17 173.53L258 172.83L255 172.11L252.17 171.38L249.52 170.64L247.06 169.88L244.8 169.12L242.75 168.35L240.92 167.57L239.32 166.78L237.96 165.98L236.85 165.18L236 164.37L235.19 163.29L234.4 161.95L233.65 160.34L232.94 158.49L232.25 156.42L231.6 154.14L230.97 151.66L230.38 148.99L229.82 146.16L229.28 143.18L228.78 140.06L228.3 136.82L227.86 133.46L227.44 130.02L227.05 126.49L226.69 122.9L226.36 119.27L226.05 115.59L225.78 111.9L225.52 108.2L225.3 104.52L225.1 100.86L224.92 97.23L224.77 93.66L224.65 90.16L224.55 86.75L224.47 83.43L224.42 80.23L224.39 77.15L224.39 74.22L224.4 71.44L224.44 68.84L224.51 66.42L224.59 64.21L224.69 62.21L224.82 60.44L224.97 58.92L225.14 57.66L225.32 56.68L225.53 55.99L226.79 53.71L228.48 51.99L230.58 50.8L233.08 50.12L235.93 49.93L239.13 50.21L242.65 50.93ZM266.58 122.56L265.32 122.77L264.09 123.06L262.89 123.42L261.72 123.86L260.59 124.37L259.49 124.95L258.44 125.59L257.43 126.3L256.46 127.07L255.55 127.89L254.68 128.77L253.87 129.7L253.12 130.68L252.43 131.71L251.79 132.79L251.23 133.9L250.73 135.06L250.3 136.25L249.94 137.47L249.65 138.72L249.45 140.01L249.32 141.32L249.28 142.65L249.32 143.98L249.45 145.29L249.65 146.57L249.94 147.83L250.3 149.05L250.73 150.24L251.23 151.39L251.79 152.51L252.43 153.58L253.12 154.61L253.87 155.59L254.68 156.52L255.55 157.4L256.46 158.23L257.43 159L258.44 159.7L259.49 160.35L260.59 160.92L261.72 161.43L262.89 161.87L264.09 162.24L265.32 162.52L266.58 162.73L267.87 162.86L269.18 162.9L270.48 162.86L271.77 162.73L273.03 162.52L274.26 162.24L275.46 161.87L276.63 161.43L277.76 160.92L278.86 160.35L279.91 159.7L280.92 159L281.89 158.23L282.8 157.4L283.67 156.52L284.48 155.59L285.23 154.61L285.92 153.58L286.56 152.51L287.12 151.39L287.62 150.24L288.05 149.05L288.41 147.83L288.7 146.57L288.9 145.29L289.03 143.98L289.07 142.65L289.03 141.32L288.9 140.01L288.7 138.72L288.41 137.47L288.05 136.25L287.62 135.06L287.12 133.9L286.56 132.79L285.92 131.71L285.23 130.68L284.48 129.7L283.67 128.77L282.8 127.89L281.89 127.07L280.92 126.3L279.91 125.59L278.86 124.95L277.76 124.37L276.63 123.86L275.46 123.42L274.26 123.06L273.03 122.77L271.77 122.56L270.48 122.43L269.18 122.39L267.87 122.43L266.58 122.56Z"
        id="b19rNWuot"
      ></path>
      <path
        d="M237.71 217.1C250.95 209.78 266.23 193.17 261.72 187.2C249.78 171.39 205.42 176.78 200.66 186.01C198.86 189.5 229.59 213.41 237.71 217.1Z"
        id="a7JV3VAoVN"
      ></path>
      <path
        d="M207.7 405.29C255.47 398.37 292.7 389.91 328.67 381.27C328.16 323.31 315.64 267.77 275.18 229.71C241.61 242.85 210.52 258.09 182.08 275.59C195.27 308.77 207.78 344.25 207.7 405.29Z"
        id="jbDJzBtok"
      ></path>
      <path
        d="M347.14 374.25C382.75 365.69 416.09 353.68 449.17 341.25C451.21 296.31 438.46 219.78 417.77 190.03C411.81 181.47 313.52 211.36 298.99 219.44C336.77 274.73 355.53 326.8 347.14 374.25Z"
        id="iIDqaeNNU"
      ></path>
      <path
        d="M463.42 337.08C491.9 330 519.72 322.02 546.91 313.2C558.16 291.58 558.99 246.74 554.44 223.41C514.93 203.04 475.43 190.48 435.92 185.36C467.07 235.65 473.71 286.51 463.42 337.08Z"
        id="g1AL3iZycW"
      ></path>
      <path
        d="M567.41 232.54C606.89 276.23 645.42 349.66 639.37 435.51C610.32 364.75 588.23 334.74 558.33 319.84C571.51 295.37 573.9 265.71 567.41 232.54Z"
        id="a4aqzQDxk3"
      ></path>
    </defs>
    <g>
      <g>
        <g>
          <use
            href="#b2CZ9tOpN"
            opacity="1"
            fill="#ffffff"
            fill-opacity="1"
          ></use>
          <g>
            <use
              href="#b2CZ9tOpN"
              opacity="1"
              fill-opacity="0"
              stroke="#000000"
              stroke-width="1"
              stroke-opacity="0"
            ></use>
          </g>
        </g>
        <g>
          <use
            href="#a1MWaQx3qn"
            opacity="1"
            fill="#ffffff"
            fill-opacity="1"
          ></use>
          <g>
            <use
              href="#a1MWaQx3qn"
              opacity="1"
              fill-opacity="0"
              stroke="#000000"
              stroke-width="1"
              stroke-opacity="0"
            ></use>
          </g>
        </g>
        <g>
          <use
            href="#b19rNWuot"
            opacity="1"
            fill="#ffffff"
            fill-opacity="1"
          ></use>
          <g>
            <use
              href="#b19rNWuot"
              opacity="1"
              fill-opacity="0"
              stroke="#000000"
              stroke-width="1"
              stroke-opacity="0"
            ></use>
          </g>
        </g>
        <g>
          <use
            href="#a7JV3VAoVN"
            opacity="1"
            fill="#ffffff"
            fill-opacity="1"
          ></use>
          <g>
            <use
              href="#a7JV3VAoVN"
              opacity="1"
              fill-opacity="0"
              stroke="#000000"
              stroke-width="1"
              stroke-opacity="0"
            ></use>
          </g>
        </g>
        <g>
          <use
            href="#jbDJzBtok"
            opacity="1"
            fill="#ffffff"
            fill-opacity="1"
          ></use>
          <g>
            <use
              href="#jbDJzBtok"
              opacity="1"
              fill-opacity="0"
              stroke="#000000"
              stroke-width="1"
              stroke-opacity="0"
            ></use>
          </g>
        </g>
        <g>
          <use
            href="#iIDqaeNNU"
            opacity="1"
            fill="#ffffff"
            fill-opacity="1"
          ></use>
          <g>
            <use
              href="#iIDqaeNNU"
              opacity="1"
              fill-opacity="0"
              stroke="#000000"
              stroke-width="1"
              stroke-opacity="0"
            ></use>
          </g>
        </g>
        <g>
          <use
            href="#g1AL3iZycW"
            opacity="1"
            fill="#ffffff"
            fill-opacity="1"
          ></use>
          <g>
            <use
              href="#g1AL3iZycW"
              opacity="1"
              fill-opacity="0"
              stroke="#000000"
              stroke-width="1"
              stroke-opacity="0"
            ></use>
          </g>
        </g>
        <g>
          <use
            href="#a4aqzQDxk3"
            opacity="1"
            fill="#ffffff"
            fill-opacity="1"
          ></use>
          <g>
            <use
              href="#a4aqzQDxk3"
              opacity="1"
              fill-opacity="0"
              stroke="#000000"
              stroke-width="1"
              stroke-opacity="0"
            ></use>
          </g>
        </g>
      </g>
    </g>
  </Svg>
);

export default Logo;

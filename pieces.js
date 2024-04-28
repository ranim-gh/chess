const pawn = '<div class="piece"  draggable="true"  id="pawn"><svg > <g  class="white" transform="translate(15,0 )"> <Path    d="M 14.00,30.00 C 10.93,26.10 9.67,24.16 10.11,19.00 11.35,4.51 32.65,4.51 33.89,19.00 34.33,24.16 33.07,26.10 30.00,30.00 36.68,31.18 36.85,37.34 29.00,38.00 29.32,52.66 32.92,52.88 37.00,62.00 37.00,62.00 7.00,62.00 7.00,62.00 11.08,52.88 14.68,52.66 15.00,38.00 7.15,37.34 7.32,31.18 14.00,30.00 Z M 4.29,63.74 C 9.47,62.33 25.67,62.99 32.00,63.00 34.01,63.00 37.97,62.86 39.70,63.74 42.24,65.02 42.23,68.16 39.70,69.40 38.20,70.13 34.72,70.00 33.00,70.00 33.00,70.00 10.00,70.00 10.00,70.00 6.19,69.97 -1.63,68.76 4.29,63.74 Z" /></g> </svg></div>'

const queen = '<div class="piece"  draggable="true" id="queen"><svg> <g transform="translate(-5,0 )"><path  stroke-width="1" transform="scale(1.4)" viewBox="5 100 90 100" stroke-width="5" d="M 24.00,3.00 C 24.00,3.00 26.00,3.00 26.00,3.00 26.00,3.00 28.00,26.00 28.00,26.00 31.26,22.57 32.84,17.60 33.87,13.00 34.88,8.50 33.10,6.73 38.00,5.00 38.00,5.00 36.74,12.00 36.74,12.00 36.74,12.00 38.00,28.00 38.00,28.00 38.00,28.00 43.34,16.17 43.34,16.17 43.34,16.17 45.07,10.56 45.07,10.56 45.07,10.56 48.00,9.00 48.00,9.00 47.24,14.11 46.18,14.12 45.28,18.00 45.28,18.00 43.49,30.00 43.49,30.00 41.47,36.62 38.25,35.17 39.00,44.00 26.38,40.35 23.62,40.35 11.00,44.00 11.75,35.17 8.53,36.62 6.51,30.00 6.51,30.00 4.72,18.00 4.72,18.00 3.82,14.12 2.76,14.11 2.00,9.00 6.97,10.70 5.03,12.27 6.91,17.04 8.45,20.94 10.57,24.60 13.13,28.00 13.13,28.00 13.13,12.00 13.13,12.00 13.13,12.00 12.00,5.00 12.00,5.00 16.90,6.73 15.12,8.50 16.13,13.00 16.87,16.32 19.59,23.79 21.00,27.00 21.00,27.00 24.00,3.00 24.00,3.00 Z M 39.00,35.00 C 31.07,31.68 18.02,30.03 11.00,36.00 11.00,36.00 27.00,34.04 27.00,34.04 27.00,34.04 39.00,35.00 39.00,35.00 Z M 37.00,41.00 C 33.12,35.25 16.88,35.25 13.00,41.00 13.00,41.00 25.00,38.18 25.00,38.18 25.00,38.18 37.00,41.00 37.00,41.00 Z M 12.00,45.00 C 19.74,42.76 30.97,41.23 38.00,46.00 31.37,47.19 17.82,48.38 12.00,45.00 Z"  /></g> </svg></div>'
const bishop ='<div class="piece"  draggable="true" id="bishop"><svg> <g stroke="white" stroke-width="1" transform="translate(13, 0)"> <path viewBox="0 0 100 100" fill="black" stroke="black"  d="M 15.00,9.00 C 3.52,0.95 30.97,-5.26 27.22,6.82 26.77,8.29 25.93,8.93 25.00,10.00 27.30,12.20 31.94,16.60 31.75,20.00 31.56,23.43 20.93,32.91 18.00,37.00 25.34,36.63 29.11,28.26 36.00,25.00 37.18,30.24 39.93,36.69 38.43,42.00 36.27,49.65 31.36,46.73 31.00,57.00 31.00,57.00 9.00,57.00 9.00,57.00 8.64,46.73 3.73,49.65 1.57,42.00 -1.60,30.80 8.87,17.20 15.00,9.00 Z M 0.00,59.00 C 0.00,59.00 40.00,59.00 40.00,59.00 40.00,59.00 40.00,65.00 40.00,65.00 40.00,65.00 0.00,65.00 0.00,65.00 0.00,65.00 0.00,59.00 0.00,59.00 Z" /></g> </svg></div>'
const knight= '<div class="piece" draggable="true"  id="knight"><svg   > <g  draggable="true" transform="translate(-10, -6)"> <path  stroke="white" stroke-width="1"  transform="scale(0.8)" d= "M 50.00,53.00 C 44.99,55.64 39.24,60.33 35.01,64.17 32.76,66.21 29.90,69.86 26.91,70.48 24.97,70.88 22.87,70.20 21.00,69.73 13.65,67.86 11.54,66.15 12.05,58.00 12.44,51.93 19.70,39.42 23.06,34.00 23.06,34.00 27.36,27.00 27.36,27.00 29.28,22.51 26.76,18.02 30.31,16.66 34.13,15.19 36.13,20.33 39.87,19.02 41.31,18.51 43.07,16.42 45.07,15.84 49.17,14.66 49.83,18.40 52.29,20.43 52.29,20.43 58.00,24.00 58.00,24.00 58.00,24.00 54.00,24.00 54.00,24.00 57.84,31.01 62.56,27.63 69.64,38.00 80.22,53.50 78.00,71.23 78.00,89.00 78.00,89.00 40.00,89.00 40.00,89.00 37.05,88.98 33.27,89.44 32.33,85.85 30.45,78.67 38.55,71.61 42.55,66.91 46.92,61.79 47.92,59.18 50.00,53.00 Z M 65.00,26.00 C 78.36,33.57 82.03,44.68 84.43,59.00 85.60,65.96 85.99,65.48 86.00,73.00 86.01,78.17 87.19,84.67 84.00,89.00 84.00,72.61 83.68,54.90 75.95,40.00 71.30,31.04 67.93,31.03 65.00,26.00 Z M 29.77,40.00 C 30.75,39.61 31.32,39.63 32.67,38.46 39.50,32.51 30.89,28.53 29.77,36.02 29.24,37.68 29.66,38.49 29.77,40.00 Z M 22.00,55.00 C 22.00,55.00 18.00,55.00 18.00,55.00 18.00,55.00 18.00,60.00 18.00,60.00 18.00,60.00 22.00,60.00 22.00,60.00 22.00,60.00 22.00,55.00 22.00,55.00 Z" /></g></svg></div>'

const rook ='<div class="piece"  id="rook" draggable="true" ><svg> <g transform="translate(-5,0 )"><path   fill="black" transform="scale(1.4)"   d="M 19.00,6.00 C 19.00,6.00 23.00,6.00 23.00,6.00 23.00,6.00 23.00,10.00 23.00,10.00 23.00,10.00 26.00,10.00 26.00,10.00 26.00,10.00 26.00,6.00 26.00,6.00 26.00,6.00 34.00,6.00 34.00,6.00 34.00,6.00 34.00,10.00 34.00,10.00 34.00,10.00 37.00,10.00 37.00,10.00 37.00,10.00 37.00,6.00 37.00,6.00 37.00,6.00 41.00,6.00 41.00,6.00 41.00,6.00 41.00,17.00 41.00,17.00 41.00,17.00 19.00,17.00 19.00,17.00 19.00,17.00 19.00,6.00 19.00,6.00 Z M 20.00,18.00 C 20.00,18.00 40.00,18.00 40.00,18.00 40.00,18.00 40.00,20.00 40.00,20.00 40.00,20.00 20.00,20.00 20.00,20.00 20.00,20.00 20.00,18.00 20.00,18.00 Z M 23.00,21.00 C 23.00,21.00 37.00,21.00 37.00,21.00 37.01,30.81 37.90,37.68 41.00,47.00 41.00,47.00 19.00,47.00 19.00,47.00 22.10,37.68 22.99,30.81 23.00,21.00 Z M 17.00,48.00 C 17.00,48.00 43.00,48.00 43.00,48.00 43.00,48.00 43.00,50.00 43.00,50.00 43.00,50.00 17.00,50.00 17.00,50.00 17.00,50.00 17.00,48.00 17.00,48.00 Z" > /></g> </svg></div>'




const f="M 25.00,0.00 C 25.00,0.00 30.00,3.00 30.00,3.00 25.10,8.22 29.96,7.09 30.00,20.00 34.89,16.58 42.99,10.85 48.57,16.43 50.30,18.16 51.01,20.60 50.73,23.00 50.19,27.69 45.55,31.50 43.84,36.00 42.13,40.49 44.05,44.60 41.40,47.15 37.94,50.47 26.70,50.05 22.00,50.00 18.72,49.96 12.04,49.49 9.60,47.15 6.95,44.60 8.87,40.49 7.16,36.00 5.33,31.19 0.21,27.28 0.21,22.00 0.22,19.91 0.94,17.92 2.43,16.43 8.01,10.85 16.11,16.58 21.00,20.00 21.00,20.00 21.72,12.09 21.72,12.09 21.72,12.09 23.86,6.96 23.86,6.96 23.86,6.96 21.00,2.00 21.00,2.00 21.00,2.00 25.00,0.00 25.00,0.00 Z"
const g="C 26.00,28.00 28.24,21.00 28.24,21.00 28.88,18.48 29.96,8.25 24.39,10.62 19.06,12.90 23.75,24.85 26.00,28.00 Z M 11.00,15.00 C 11.00,15.00 5.00,16.00 5.00,16.00 5.00,16.00 11.00,15.00 11.00,15.00 Z M 46.00,15.00 C 46.00,15.00 40.00,16.00 40.00,16.00 40.00,16.00 46.00,15.00 46.00,15.00 Z M 5.00,16.00 C 5.00,16.00 3.00,16.00 3.00,16.00 3.00,16.00 2.00,19.00 2.00,19.00 2.00,19.00 5.00,16.00 5.00,16.00 Z M 47.00,16.00 C 47.00,16.00 46.00,16.00 46.00,16.00 46.00,16.00 47.00,17.00 47.00,17.00"
const h=" 47.00,17.00 47.00,16.00 47.00,16.00 Z M 2.00,19.00 C 0.75,22.29 0.93,23.18 3.00,26.00 3.00,26.00 2.00,19.00 2.00,19.00 Z M 18.00,19.00 C 18.00,19.00 17.00,19.00 17.00,19.00 17.00,19.00 18.00,20.00 18.00,20.00 18.00,20.00 18.00,19.00 18.00,19.00 Z M 34.00,19.00 C 34.00,19.00 33.00,19.00 33.00,19.00 33.00,19.00 34.00,20.00 34.00,20.00 34.00,20.00 34.00,19.00 34.00,19.00 Z M 50.00,19.00 C 50.00,19.00 49.00,26.00 49.00,26.00 49.00,26.00 50.00,19.00 50.00,19.00 Z M 19.00,20.00 C 19.00,20.00 18.00,20.00 18.00,20.00 18.00,20.00 19.00,21.00 19.00,21.00 19.00,21.00 19.00,20.00 19.00,20.00 Z M 22.00,20.00"
const k="C 22.00,20.00 21.00,20.00 21.00,20.00 21.00,20.00 22.00,21.00 22.00,21.00 22.00,21.00 22.00,20.00 22.00,20.00 Z M 30.00,20.00 C 30.00,20.00 29.00,20.00 29.00,20.00 29.00,20.00 30.00,21.00 30.00,21.00 30.00,21.00 30.00,20.00 30.00,20.00 Z M 33.00,20.00 C 33.00,20.00 32.00,20.00 32.00,20.00 32.00,20.00 33.00,21.00 33.00,21.00 33.00,21.00 33.00,20.00 33.00,20.00 Z M 20.00,21.00 C 20.00,21.00 19.00,21.00 19.00,21.00 19.00,21.00 20.00,22.00 20.00,22.00 20.00,22.00 20.00,21.00 20.00,21.00 Z M 32.00,21.00 C 32.00,21.00 31.00,21.00 31.00,21.00 31.00,21.00 32.00,22.00 32.00,22.00 32.00,22.00 32.00,21.00 32.00,21.00 Z M 21.00,22.00 C 21.00,22.00 20.00,22.00 20.00,22.00 20.00,22.00 21.00,23.00 21.00,23.00 21.00,23.00 21.00,22.00 21.00,22.00 Z M 31.00,22.00 C 31.00,22.00 30.00,22.00 30.00,22.00 30.00,22.00 31.00,23.00 31.00,23.00 31.00,23.00 31.00,22.00 31.00,22.00 Z M 23.00,25.00"
const s="C 23.00,25.00 22.00,25.00 22.00,25.00 22.00,25.00 23.00,26.00 23.00,26.00 23.00,26.00 23.00,25.00 23.00,25.00 Z M 29.00,25.00 C 29.00,25.00 28.00,25.00 28.00,25.00 28.00,25.00 29.00,26.00 29.00,26.00 29.00,26.00 29.00,25.00 29.00,25.00 Z M 5.00,28.00 C 5.00,28.00 4.00,28.00 4.00,28.00 4.00,28.00 5.00,29.00 5.00,29.00 5.00,29.00 5.00,28.00 5.00,28.00 Z M 47.00,28.00 C 47.00,28.00 46.00,28.00 46.00,28.00 46.00,28.00 47.00,29.00 47.00,29.00 47.00,29.00 47.00,28.00 47.00,28.00 Z M 25.00,30.00 C 25.00,30.00 9.00,36.00 9.00,36.00 9.00,36.00 27.00,34.18 27.00,34.18 27.00,34.18 42.00,35.00 42.00,35.00 42.00,35.00 26.00,30.00 26.00,30.00 26.00,30.00 25.00,32.00 25.00,32.00 25.00,32.00 25.00,30.00 25.00,30.00 Z M 7.00,31.00 C 7.00,31.00 6.00,31.00 6.00,31.00 6.00,31.00 7.00,32.00 7.00,32.00 7.00,32.00 7.00,31.00 7.00,31.00 Z M 45.00,31.00 C 45.00,31.00 44.00,31.00 44.00,31.00 44.00,31.00 45.00,32.00 45.00,32.00 45.00,32.00 45.00,31.00 45.00,31.00 Z M 41.00,43.00 C 36.35,36.93 14.65,36.93 10.00,43.00 27.70,39.01 23.30,39.01 41.00,43.00 Z M 41.00,46.00 C 32.67,42.46 17.35,40.72 10.00,47.00 10.00,47.00 26.00,45.00 26.00,45.00 26.00,45.00 41.00,46.00 41.00,46.00 Z"
  



let one = f.concat(g)
let two = h.concat(k)
let three= two.concat(s)
let path =one.concat(three)
let five='<div class="pieace" id="king"> <Svg><g><Path transform="scale(1.3)" stroke="black" fill="black"  d="'
let six = five.concat(path)
let seven='" /></Svg></div></g>'
let eight= six.concat(seven)
const king= eight.toString()





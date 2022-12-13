import * as React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledHeader = styled.header`
  background-color: #FFFFFF;
  color: #C90EA5;
  margin-bottom: 45px;
`
const CartName = styled.span`
  font-size: 15px;
  line-height: 13px;
  margin-right: 5px;
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, #7E00E8 0%, #FF1876 54.17%, #BB0CB2 100%);
  opacity: 0.3;
`

const Logo = styled.svg`
  margin-right: 10px;
`

function Header() {
  return (
    <StyledHeader>
      <Container>
        <FlexBox>
          <Logo xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" width="26" height="26">
            <path clipRule="evenodd" fill="url(#paint0_linear_4_47)" fillRule="evenodd" d="M 21.4276 0.187426 C 21.5609 -0.0125741 21.8943 -0.0792408 22.0943 0.120759 C 22.3609 0.320759 22.3609 0.587426 22.2276 0.787426 L 3.82761 25.1874 C 3.76095 25.3208 3.56095 25.3874 3.42761 25.3874 C 3.29428 25.3874 3.16095 25.3208 3.09428 25.2541 C 2.89428 25.1208 2.89428 24.7874 3.02761 24.5874 L 21.4276 0.187426 Z M 0.0942809 13.5874 L 5.22761 16.5208 C 5.29428 16.5874 5.36095 16.5874 5.49428 16.5874 C 5.69428 16.5874 5.82761 16.5208 5.96095 16.3208 C 6.09428 16.0541 6.02761 15.7874 5.76095 15.6541 L 1.36095 13.1208 L 5.76095 10.5874 C 6.02761 10.4541 6.09428 10.1208 5.96095 9.92076 C 5.82761 9.65409 5.49428 9.58743 5.29428 9.72076 L 0.160948 12.6541 L 0.0942809 12.7208 L 0.0276142 12.7874 V 12.8541 V 12.9208 V 12.9874 V 13.0541 V 13.1208 V 13.1874 C -0.0390524 13.4541 0.0276142 13.5208 0.0942809 13.5874 Z M 25.3609 13.1208 V 13.0541 V 12.9874 V 12.9208 L 25.2943 12.8541 L 25.2276 12.7874 L 20.0943 9.85409 C 19.8276 9.72076 19.5609 9.78743 19.4276 10.0541 C 19.2943 10.3208 19.3609 10.5874 19.6276 10.7208 L 24.0276 13.2541 L 19.6276 15.7874 C 19.3609 15.9208 19.2943 16.2541 19.4276 16.4541 C 19.4943 16.5874 19.6943 16.7208 19.8943 16.7208 C 19.9609 16.7208 20.0943 16.7208 20.1609 16.6541 L 25.2943 13.7208 L 25.4943 13.5208 V 13.4541 V 13.3874 L 25.4943 13.3874 C 25.392 13.234 25.3682 13.1983 25.3626 13.1599 C 25.3609 13.1482 25.3609 13.1363 25.3609 13.1208 Z" />
            <defs>
              <linearGradient id="paint0_linear_4_47" gradientUnits="userSpaceOnUse" x1="25.4943" y1="0" x2="0" y2="0">
                <stop stopColor="#7e00e8" />
                <stop stopColor="#ff1876" offset="0.541721" />
                <stop stopColor="#bb0cb2" offset="1" />
              </linearGradient>
            </defs>
          </Logo>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 227 17" width="227" height="17">
            <path clipRule="evenodd" fill="#5a1094" fillRule="evenodd" d="M 0 0 H 8.064 V 0.684 H 0.792 V 5.832 H 7.344 V 6.516 H 0.792 V 12.852 H 0 V 0 Z M 9.378 5.652 H 9.432 C 9.516 5.352 9.669 5.07 9.891 4.806 C 10.113 4.542 10.383 4.314 10.701 4.122 C 11.019 3.93 11.373 3.783 11.763 3.681 C 12.153 3.579 12.558 3.534 12.978 3.546 V 4.23 C 12.618 4.182 12.207 4.218 11.745 4.338 C 11.283 4.458 10.842 4.722 10.422 5.13 C 10.254 5.31 10.107 5.484 9.981 5.652 C 9.855 5.82 9.75 6.006 9.666 6.21 C 9.582 6.414 9.516 6.642 9.468 6.894 C 9.42 7.146 9.39 7.446 9.378 7.794 V 12.852 H 8.694 V 3.6 H 9.378 V 5.652 Z M 13.05 8.226 C 13.05 7.566 13.143 6.945 13.329 6.363 C 13.515 5.781 13.788 5.268 14.148 4.824 C 14.508 4.38 14.952 4.029 15.48 3.771 C 16.008 3.513 16.614 3.384 17.298 3.384 C 17.982 3.384 18.588 3.513 19.116 3.771 C 19.644 4.029 20.088 4.38 20.448 4.824 C 20.808 5.268 21.081 5.781 21.267 6.363 C 21.453 6.945 21.546 7.566 21.546 8.226 C 21.546 8.886 21.453 9.51 21.267 10.098 C 21.081 10.686 20.808 11.199 20.448 11.637 C 20.088 12.075 19.644 12.423 19.116 12.681 C 18.588 12.939 17.982 13.068 17.298 13.068 C 16.614 13.068 16.008 12.939 15.48 12.681 C 14.952 12.423 14.508 12.075 14.148 11.637 C 13.788 11.199 13.515 10.686 13.329 10.098 C 13.143 9.51 13.05 8.886 13.05 8.226 Z M 13.734 8.226 C 13.734 8.778 13.812 9.309 13.968 9.819 C 14.124 10.329 14.352 10.782 14.652 11.178 C 14.952 11.574 15.324 11.889 15.768 12.123 C 16.212 12.357 16.722 12.474 17.298 12.474 C 17.874 12.474 18.384 12.357 18.828 12.123 C 19.272 11.889 19.644 11.574 19.944 11.178 C 20.244 10.782 20.472 10.329 20.628 9.819 C 20.784 9.309 20.862 8.778 20.862 8.226 C 20.862 7.674 20.784 7.143 20.628 6.633 C 20.472 6.123 20.244 5.67 19.944 5.274 C 19.644 4.878 19.272 4.563 18.828 4.329 C 18.384 4.095 17.874 3.978 17.298 3.978 C 16.722 3.978 16.212 4.095 15.768 4.329 C 15.324 4.563 14.952 4.878 14.652 5.274 C 14.352 5.67 14.124 6.123 13.968 6.633 C 13.812 7.143 13.734 7.674 13.734 8.226 Z M 23.148 3.6 H 23.832 V 5.58 H 23.868 C 23.988 5.232 24.159 4.923 24.381 4.653 C 24.603 4.383 24.861 4.152 25.155 3.96 C 25.449 3.768 25.77 3.624 26.118 3.528 C 26.466 3.432 26.82 3.384 27.18 3.384 C 27.72 3.384 28.179 3.45 28.557 3.582 C 28.935 3.714 29.244 3.888 29.484 4.104 C 29.724 4.32 29.913 4.563 30.051 4.833 C 30.189 5.103 30.288 5.376 30.348 5.652 C 30.408 5.928 30.444 6.195 30.456 6.453 C 30.468 6.711 30.474 6.936 30.474 7.128 V 12.852 H 29.79 V 7.002 C 29.79 6.774 29.772 6.486 29.736 6.138 C 29.7 5.79 29.595 5.457 29.421 5.139 C 29.247 4.821 28.983 4.548 28.629 4.32 C 28.275 4.092 27.786 3.978 27.162 3.978 C 26.634 3.978 26.166 4.074 25.758 4.266 C 25.35 4.458 25.002 4.725 24.714 5.067 C 24.426 5.409 24.207 5.817 24.057 6.291 C 23.907 6.765 23.832 7.284 23.832 7.848 V 12.852 H 23.148 V 3.6 Z M 35.892 4.194 H 33.876 V 10.656 C 33.876 11.028 33.918 11.322 34.002 11.538 C 34.086 11.754 34.215 11.919 34.389 12.033 C 34.563 12.147 34.773 12.216 35.019 12.24 C 35.265 12.264 35.55 12.27 35.874 12.258 V 12.852 C 35.526 12.876 35.187 12.873 34.857 12.843 C 34.527 12.813 34.236 12.723 33.984 12.573 C 33.732 12.423 33.531 12.198 33.381 11.898 C 33.231 11.598 33.168 11.184 33.192 10.656 V 4.194 H 31.482 V 3.6 H 33.192 V 0.72 H 33.876 V 3.6 H 35.892 V 4.194 Z M 37.386 7.614 H 41.238 V 8.298 H 37.386 V 7.614 Z M 43.758 8.316 V 8.424 C 43.758 8.964 43.83 9.48 43.974 9.972 C 44.118 10.464 44.331 10.896 44.613 11.268 C 44.895 11.64 45.249 11.934 45.675 12.15 C 46.101 12.366 46.596 12.474 47.16 12.474 C 48.084 12.474 48.816 12.231 49.356 11.745 C 49.896 11.259 50.268 10.584 50.472 9.72 H 51.156 C 50.952 10.8 50.511 11.628 49.833 12.204 C 49.155 12.78 48.258 13.068 47.142 13.068 C 46.458 13.068 45.861 12.945 45.351 12.699 C 44.841 12.453 44.415 12.117 44.073 11.691 C 43.731 11.265 43.476 10.761 43.308 10.179 C 43.14 9.597 43.056 8.97 43.056 8.298 C 43.056 7.65 43.143 7.029 43.317 6.435 C 43.491 5.841 43.752 5.319 44.1 4.869 C 44.448 4.419 44.883 4.059 45.405 3.789 C 45.927 3.519 46.542 3.384 47.25 3.384 C 47.898 3.384 48.471 3.504 48.969 3.744 C 49.467 3.984 49.884 4.311 50.22 4.725 C 50.556 5.139 50.811 5.619 50.985 6.165 C 51.159 6.711 51.246 7.296 51.246 7.92 C 51.246 7.98 51.243 8.049 51.237 8.127 C 51.231 8.205 51.228 8.268 51.228 8.316 H 43.758 Z M 50.544 7.722 C 50.52 7.218 50.436 6.741 50.292 6.291 C 50.148 5.841 49.935 5.445 49.653 5.103 C 49.371 4.761 49.029 4.488 48.627 4.284 C 48.225 4.08 47.766 3.978 47.25 3.978 C 46.698 3.978 46.212 4.083 45.792 4.293 C 45.372 4.503 45.018 4.779 44.73 5.121 C 44.442 5.463 44.22 5.862 44.064 6.318 C 43.908 6.774 43.812 7.242 43.776 7.722 H 50.544 Z M 52.83 3.6 H 53.514 V 5.58 H 53.55 C 53.67 5.232 53.841 4.923 54.063 4.653 C 54.285 4.383 54.543 4.152 54.837 3.96 C 55.131 3.768 55.452 3.624 55.8 3.528 C 56.148 3.432 56.502 3.384 56.862 3.384 C 57.402 3.384 57.861 3.45 58.239 3.582 C 58.617 3.714 58.926 3.888 59.166 4.104 C 59.406 4.32 59.595 4.563 59.733 4.833 C 59.871 5.103 59.97 5.376 60.03 5.652 C 60.09 5.928 60.126 6.195 60.138 6.453 C 60.15 6.711 60.156 6.936 60.156 7.128 V 12.852 H 59.472 V 7.002 C 59.472 6.774 59.454 6.486 59.418 6.138 C 59.382 5.79 59.277 5.457 59.103 5.139 C 58.929 4.821 58.665 4.548 58.311 4.32 C 57.957 4.092 57.468 3.978 56.844 3.978 C 56.316 3.978 55.848 4.074 55.44 4.266 C 55.032 4.458 54.684 4.725 54.396 5.067 C 54.108 5.409 53.889 5.817 53.739 6.291 C 53.589 6.765 53.514 7.284 53.514 7.848 V 12.852 H 52.83 V 3.6 Z M 69.318 10.872 H 69.282 C 68.898 11.604 68.418 12.153 67.842 12.519 C 67.266 12.885 66.564 13.068 65.736 13.068 C 65.04 13.068 64.44 12.936 63.936 12.672 C 63.432 12.408 63.018 12.054 62.694 11.61 C 62.37 11.166 62.13 10.653 61.974 10.071 C 61.818 9.489 61.74 8.88 61.74 8.244 C 61.74 7.56 61.824 6.921 61.992 6.327 C 62.16 5.733 62.415 5.22 62.757 4.788 C 63.099 4.356 63.528 4.014 64.044 3.762 C 64.56 3.51 65.166 3.384 65.862 3.384 C 66.234 3.384 66.6 3.435 66.96 3.537 C 67.32 3.639 67.653 3.786 67.959 3.978 C 68.265 4.17 68.532 4.41 68.76 4.698 C 68.988 4.986 69.162 5.31 69.282 5.67 H 69.318 V 0 H 70.002 V 12.852 H 69.318 V 10.872 Z M 65.88 12.474 C 66.468 12.474 66.975 12.354 67.401 12.114 C 67.827 11.874 68.181 11.556 68.463 11.16 C 68.745 10.764 68.955 10.311 69.093 9.801 C 69.231 9.291 69.3 8.772 69.3 8.244 C 69.3 7.704 69.231 7.179 69.093 6.669 C 68.955 6.159 68.748 5.703 68.472 5.301 C 68.196 4.899 67.839 4.578 67.401 4.338 C 66.963 4.098 66.45 3.978 65.862 3.978 C 65.25 3.978 64.728 4.095 64.296 4.329 C 63.864 4.563 63.507 4.878 63.225 5.274 C 62.943 5.67 62.739 6.126 62.613 6.642 C 62.487 7.158 62.424 7.692 62.424 8.244 C 62.424 8.784 62.493 9.309 62.631 9.819 C 62.769 10.329 62.979 10.782 63.261 11.178 C 63.543 11.574 63.9 11.889 64.332 12.123 C 64.764 12.357 65.28 12.474 65.88 12.474 Z M 77.31 0 H 81.522 C 82.674 0 83.631 0.179998 84.393 0.54 C 85.155 0.900002 85.764 1.38 86.22 1.98 C 86.676 2.58 86.997 3.264 87.183 4.032 C 87.369 4.8 87.462 5.592 87.462 6.408 C 87.462 7.32 87.345 8.169 87.111 8.955 C 86.877 9.741 86.514 10.422 86.022 10.998 C 85.53 11.574 84.909 12.027 84.159 12.357 C 83.409 12.687 82.518 12.852 81.486 12.852 H 77.31 V 0 Z M 81.558 12.168 C 82.158 12.168 82.761 12.075 83.367 11.889 C 83.973 11.703 84.522 11.391 85.014 10.953 C 85.506 10.515 85.905 9.927 86.211 9.189 C 86.517 8.451 86.67 7.52401 86.67 6.408 C 86.67 5.532 86.583 4.782 86.409 4.158 C 86.235 3.534 86.007 3.009 85.725 2.583 C 85.443 2.157 85.119 1.821 84.753 1.575 C 84.387 1.329 84.009 1.14 83.619 1.008 C 83.229 0.875999 82.839 0.789 82.449 0.747 C 82.059 0.705 81.708 0.684 81.396 0.684 H 78.102 V 12.168 H 81.558 Z M 89.46 8.316 V 8.424 C 89.46 8.964 89.532 9.48 89.676 9.972 C 89.82 10.464 90.033 10.896 90.315 11.268 C 90.597 11.64 90.951 11.934 91.377 12.15 C 91.803 12.366 92.298 12.474 92.862 12.474 C 93.786 12.474 94.518 12.231 95.058 11.745 C 95.598 11.259 95.97 10.584 96.174 9.72 H 96.858 C 96.654 10.8 96.213 11.628 95.535 12.204 C 94.857 12.78 93.96 13.068 92.844 13.068 C 92.16 13.068 91.563 12.945 91.053 12.699 C 90.543 12.453 90.117 12.117 89.775 11.691 C 89.433 11.265 89.178 10.761 89.01 10.179 C 88.842 9.597 88.758 8.97 88.758 8.298 C 88.758 7.65 88.845 7.029 89.019 6.435 C 89.193 5.841 89.454 5.319 89.802 4.869 C 90.15 4.419 90.585 4.059 91.107 3.789 C 91.629 3.519 92.244 3.384 92.952 3.384 C 93.6 3.384 94.173 3.504 94.671 3.744 C 95.169 3.984 95.586 4.311 95.922 4.725 C 96.258 5.139 96.513 5.619 96.687 6.165 C 96.861 6.711 96.948 7.296 96.948 7.92 C 96.948 7.98 96.945 8.049 96.939 8.127 C 96.933 8.205 96.93 8.268 96.93 8.316 H 89.46 Z M 96.246 7.722 C 96.222 7.218 96.138 6.741 95.994 6.291 C 95.85 5.841 95.637 5.445 95.355 5.103 C 95.073 4.761 94.731 4.488 94.329 4.284 C 93.927 4.08 93.468 3.978 92.952 3.978 C 92.4 3.978 91.914 4.083 91.494 4.293 C 91.074 4.503 90.72 4.779 90.432 5.121 C 90.144 5.463 89.922 5.862 89.766 6.318 C 89.61 6.774 89.514 7.242 89.478 7.722 H 96.246 Z M 102.06 12.852 H 101.214 L 97.488 3.6 H 98.28 L 101.628 12.06 H 101.664 L 104.796 3.6 H 105.552 L 102.06 12.852 Z M 106.794 8.316 V 8.424 C 106.794 8.964 106.866 9.48 107.01 9.972 C 107.154 10.464 107.367 10.896 107.649 11.268 C 107.931 11.64 108.285 11.934 108.711 12.15 C 109.137 12.366 109.632 12.474 110.196 12.474 C 111.12 12.474 111.852 12.231 112.392 11.745 C 112.932 11.259 113.304 10.584 113.508 9.72 H 114.192 C 113.988 10.8 113.547 11.628 112.869 12.204 C 112.191 12.78 111.294 13.068 110.178 13.068 C 109.494 13.068 108.897 12.945 108.387 12.699 C 107.877 12.453 107.451 12.117 107.109 11.691 C 106.767 11.265 106.512 10.761 106.344 10.179 C 106.176 9.597 106.092 8.97 106.092 8.298 C 106.092 7.65 106.179 7.029 106.353 6.435 C 106.527 5.841 106.788 5.319 107.136 4.869 C 107.484 4.419 107.919 4.059 108.441 3.789 C 108.963 3.519 109.578 3.384 110.286 3.384 C 110.934 3.384 111.507 3.504 112.005 3.744 C 112.503 3.984 112.92 4.311 113.256 4.725 C 113.592 5.139 113.847 5.619 114.021 6.165 C 114.195 6.711 114.282 7.296 114.282 7.92 C 114.282 7.98 114.279 8.049 114.273 8.127 C 114.267 8.205 114.264 8.268 114.264 8.316 H 106.794 Z M 113.58 7.722 C 113.556 7.218 113.472 6.741 113.328 6.291 C 113.184 5.841 112.971 5.445 112.689 5.103 C 112.407 4.761 112.065 4.488 111.663 4.284 C 111.261 4.08 110.802 3.978 110.286 3.978 C 109.734 3.978 109.248 4.083 108.828 4.293 C 108.408 4.503 108.054 4.779 107.766 5.121 C 107.478 5.463 107.256 5.862 107.1 6.318 C 106.944 6.774 106.848 7.242 106.812 7.722 H 113.58 Z M 116.712 0 V 12.852 H 116.028 V 0 H 116.712 Z M 118.458 8.226 C 118.458 7.566 118.551 6.945 118.737 6.363 C 118.923 5.781 119.196 5.268 119.556 4.824 C 119.916 4.38 120.36 4.029 120.888 3.771 C 121.416 3.513 122.022 3.384 122.706 3.384 C 123.39 3.384 123.996 3.513 124.524 3.771 C 125.052 4.029 125.496 4.38 125.856 4.824 C 126.216 5.268 126.489 5.781 126.675 6.363 C 126.861 6.945 126.954 7.566 126.954 8.226 C 126.954 8.886 126.861 9.51 126.675 10.098 C 126.489 10.686 126.216 11.199 125.856 11.637 C 125.496 12.075 125.052 12.423 124.524 12.681 C 123.996 12.939 123.39 13.068 122.706 13.068 C 122.022 13.068 121.416 12.939 120.888 12.681 C 120.36 12.423 119.916 12.075 119.556 11.637 C 119.196 11.199 118.923 10.686 118.737 10.098 C 118.551 9.51 118.458 8.886 118.458 8.226 Z M 119.142 8.226 C 119.142 8.778 119.22 9.309 119.376 9.819 C 119.532 10.329 119.76 10.782 120.06 11.178 C 120.36 11.574 120.732 11.889 121.176 12.123 C 121.62 12.357 122.13 12.474 122.706 12.474 C 123.282 12.474 123.792 12.357 124.236 12.123 C 124.68 11.889 125.052 11.574 125.352 11.178 C 125.652 10.782 125.88 10.329 126.036 9.819 C 126.192 9.309 126.27 8.778 126.27 8.226 C 126.27 7.674 126.192 7.143 126.036 6.633 C 125.88 6.123 125.652 5.67 125.352 5.274 C 125.052 4.878 124.68 4.563 124.236 4.329 C 123.792 4.095 123.282 3.978 122.706 3.978 C 122.13 3.978 121.62 4.095 121.176 4.329 C 120.732 4.563 120.36 4.878 120.06 5.274 C 119.76 5.67 119.532 6.123 119.376 6.633 C 119.22 7.143 119.142 7.674 119.142 8.226 Z M 129.402 5.724 H 129.438 C 129.51 5.496 129.63 5.244 129.798 4.968 C 129.966 4.692 130.188 4.437 130.464 4.203 C 130.74 3.969 131.073 3.774 131.463 3.618 C 131.853 3.462 132.3 3.384 132.804 3.384 C 133.512 3.384 134.127 3.516 134.649 3.78 C 135.171 4.044 135.603 4.398 135.945 4.842 C 136.287 5.286 136.542 5.802 136.71 6.39 C 136.878 6.978 136.962 7.596 136.962 8.244 C 136.962 8.952 136.878 9.6 136.71 10.188 C 136.542 10.776 136.287 11.283 135.945 11.709 C 135.603 12.135 135.171 12.468 134.649 12.708 C 134.127 12.948 133.512 13.068 132.804 13.068 C 132.036 13.068 131.352 12.9 130.752 12.564 C 130.152 12.228 129.714 11.682 129.438 10.926 H 129.402 V 16.164 H 128.718 V 3.6 H 129.402 V 5.724 Z M 132.804 12.474 C 133.404 12.474 133.923 12.36 134.361 12.132 C 134.799 11.904 135.159 11.598 135.441 11.214 C 135.723 10.83 135.933 10.383 136.071 9.873 C 136.209 9.363 136.278 8.82 136.278 8.244 C 136.278 7.716 136.212 7.197 136.08 6.687 C 135.948 6.177 135.744 5.721 135.468 5.319 C 135.192 4.917 134.835 4.593 134.397 4.347 C 133.959 4.101 133.428 3.978 132.804 3.978 C 132.192 3.978 131.67 4.098 131.238 4.338 C 130.806 4.578 130.455 4.896 130.185 5.292 C 129.915 5.688 129.72 6.141 129.6 6.651 C 129.48 7.161 129.42 7.692 129.42 8.244 C 129.42 8.796 129.474 9.327 129.582 9.837 C 129.69 10.347 129.873 10.797 130.131 11.187 C 130.389 11.577 130.737 11.889 131.175 12.123 C 131.613 12.357 132.156 12.474 132.804 12.474 Z M 138.834 8.316 V 8.424 C 138.834 8.964 138.906 9.48 139.05 9.972 C 139.194 10.464 139.407 10.896 139.689 11.268 C 139.971 11.64 140.325 11.934 140.751 12.15 C 141.177 12.366 141.672 12.474 142.236 12.474 C 143.16 12.474 143.892 12.231 144.432 11.745 C 144.972 11.259 145.344 10.584 145.548 9.72 H 146.232 C 146.028 10.8 145.587 11.628 144.909 12.204 C 144.231 12.78 143.334 13.068 142.218 13.068 C 141.534 13.068 140.937 12.945 140.427 12.699 C 139.917 12.453 139.491 12.117 139.149 11.691 C 138.807 11.265 138.552 10.761 138.384 10.179 C 138.216 9.597 138.132 8.97 138.132 8.298 C 138.132 7.65 138.219 7.029 138.393 6.435 C 138.567 5.841 138.828 5.319 139.176 4.869 C 139.524 4.419 139.959 4.059 140.481 3.789 C 141.003 3.519 141.618 3.384 142.326 3.384 C 142.974 3.384 143.547 3.504 144.045 3.744 C 144.543 3.984 144.96 4.311 145.296 4.725 C 145.632 5.139 145.887 5.619 146.061 6.165 C 146.235 6.711 146.322 7.296 146.322 7.92 C 146.322 7.98 146.319 8.049 146.313 8.127 C 146.307 8.205 146.304 8.268 146.304 8.316 H 138.834 Z M 145.62 7.722 C 145.596 7.218 145.512 6.741 145.368 6.291 C 145.224 5.841 145.011 5.445 144.729 5.103 C 144.447 4.761 144.105 4.488 143.703 4.284 C 143.301 4.08 142.842 3.978 142.326 3.978 C 141.774 3.978 141.288 4.083 140.868 4.293 C 140.448 4.503 140.094 4.779 139.806 5.121 C 139.518 5.463 139.296 5.862 139.14 6.318 C 138.984 6.774 138.888 7.242 138.852 7.722 H 145.62 Z M 148.59 5.652 H 148.644 C 148.728 5.352 148.881 5.07 149.103 4.806 C 149.325 4.542 149.595 4.314 149.913 4.122 C 150.231 3.93 150.585 3.783 150.975 3.681 C 151.365 3.579 151.77 3.534 152.19 3.546 V 4.23 C 151.83 4.182 151.419 4.218 150.957 4.338 C 150.495 4.458 150.054 4.722 149.634 5.13 C 149.466 5.31 149.319 5.484 149.193 5.652 C 149.067 5.82 148.962 6.006 148.878 6.21 C 148.794 6.414 148.728 6.642 148.68 6.894 C 148.632 7.146 148.602 7.446 148.59 7.794 V 12.852 H 147.906 V 3.6 H 148.59 V 5.652 Z M 156.654 0.684 V 0 H 166.5 V 0.684 H 161.964 V 12.852 H 161.172 V 0.684 H 156.654 Z M 165.798 8.316 V 8.424 C 165.798 8.964 165.87 9.48 166.014 9.972 C 166.158 10.464 166.371 10.896 166.653 11.268 C 166.935 11.64 167.289 11.934 167.715 12.15 C 168.141 12.366 168.636 12.474 169.2 12.474 C 170.124 12.474 170.856 12.231 171.396 11.745 C 171.936 11.259 172.308 10.584 172.512 9.72 H 173.196 C 172.992 10.8 172.551 11.628 171.873 12.204 C 171.195 12.78 170.298 13.068 169.182 13.068 C 168.498 13.068 167.901 12.945 167.391 12.699 C 166.881 12.453 166.455 12.117 166.113 11.691 C 165.771 11.265 165.516 10.761 165.348 10.179 C 165.18 9.597 165.096 8.97 165.096 8.298 C 165.096 7.65 165.183 7.029 165.357 6.435 C 165.531 5.841 165.792 5.319 166.14 4.869 C 166.488 4.419 166.923 4.059 167.445 3.789 C 167.967 3.519 168.582 3.384 169.29 3.384 C 169.938 3.384 170.511 3.504 171.009 3.744 C 171.507 3.984 171.924 4.311 172.26 4.725 C 172.596 5.139 172.851 5.619 173.025 6.165 C 173.199 6.711 173.286 7.296 173.286 7.92 C 173.286 7.98 173.283 8.049 173.277 8.127 C 173.271 8.205 173.268 8.268 173.268 8.316 H 165.798 Z M 172.584 7.722 C 172.56 7.218 172.476 6.741 172.332 6.291 C 172.188 5.841 171.975 5.445 171.693 5.103 C 171.411 4.761 171.069 4.488 170.667 4.284 C 170.265 4.08 169.806 3.978 169.29 3.978 C 168.738 3.978 168.252 4.083 167.832 4.293 C 167.412 4.503 167.058 4.779 166.77 5.121 C 166.482 5.463 166.26 5.862 166.104 6.318 C 165.948 6.774 165.852 7.242 165.816 7.722 H 172.584 Z M 175.194 9.774 C 175.218 10.206 175.314 10.587 175.482 10.917 C 175.65 11.247 175.869 11.529 176.139 11.763 C 176.409 11.997 176.724 12.174 177.084 12.294 C 177.444 12.414 177.834 12.474 178.254 12.474 C 178.554 12.474 178.875 12.447 179.217 12.393 C 179.559 12.339 179.877 12.24 180.171 12.096 C 180.465 11.952 180.708 11.751 180.9 11.493 C 181.092 11.235 181.188 10.908 181.188 10.512 C 181.188 9.996 181.032 9.606 180.72 9.342 C 180.408 9.078 180.015 8.874 179.541 8.73 C 179.067 8.586 178.557 8.469 178.011 8.379 C 177.465 8.289 176.955 8.154 176.481 7.974 C 176.007 7.794 175.614 7.539 175.302 7.209 C 174.99 6.879 174.834 6.396 174.834 5.76 C 174.834 5.304 174.936 4.923 175.14 4.617 C 175.344 4.311 175.605 4.068 175.923 3.888 C 176.241 3.708 176.598 3.579 176.994 3.501 C 177.39 3.423 177.786 3.384 178.182 3.384 C 178.662 3.384 179.112 3.438 179.532 3.546 C 179.952 3.654 180.315 3.828 180.621 4.068 C 180.927 4.308 181.167 4.614 181.341 4.986 C 181.515 5.358 181.602 5.808 181.602 6.336 H 180.918 C 180.918 5.916 180.849 5.556 180.711 5.256 C 180.573 4.956 180.381 4.713 180.135 4.527 C 179.889 4.341 179.598 4.203 179.262 4.113 C 178.926 4.023 178.566 3.978 178.182 3.978 C 177.87 3.978 177.555 4.008 177.237 4.068 C 176.919 4.128 176.634 4.23 176.382 4.374 C 176.13 4.518 175.923 4.704 175.761 4.932 C 175.599 5.16 175.518 5.436 175.518 5.76 C 175.518 6.132 175.608 6.432 175.788 6.66 C 175.968 6.888 176.205 7.071 176.499 7.209 C 176.793 7.347 177.123 7.458 177.489 7.542 C 177.855 7.626 178.224 7.71 178.596 7.794 C 179.052 7.878 179.481 7.977 179.883 8.091 C 180.285 8.205 180.633 8.361 180.927 8.559 C 181.221 8.757 181.452 9.012 181.62 9.324 C 181.788 9.636 181.872 10.032 181.872 10.512 C 181.872 11.016 181.758 11.43 181.53 11.754 C 181.302 12.078 181.014 12.339 180.666 12.537 C 180.318 12.735 179.931 12.873 179.505 12.951 C 179.079 13.029 178.662 13.068 178.254 13.068 C 177.726 13.068 177.237 12.999 176.787 12.861 C 176.337 12.723 175.944 12.513 175.608 12.231 C 175.272 11.949 175.008 11.604 174.816 11.196 C 174.624 10.788 174.522 10.314 174.51 9.774 H 175.194 Z M 186.93 4.194 H 184.914 V 10.656 C 184.914 11.028 184.956 11.322 185.04 11.538 C 185.124 11.754 185.253 11.919 185.427 12.033 C 185.601 12.147 185.811 12.216 186.057 12.24 C 186.303 12.264 186.588 12.27 186.912 12.258 V 12.852 C 186.564 12.876 186.225 12.873 185.895 12.843 C 185.565 12.813 185.274 12.723 185.022 12.573 C 184.77 12.423 184.569 12.198 184.419 11.898 C 184.269 11.598 184.206 11.184 184.23 10.656 V 4.194 H 182.52 V 3.6 H 184.23 V 0.72 H 184.914 V 3.6 H 186.93 V 4.194 Z M 191.934 0.684 V 0 H 201.78 V 0.684 H 197.244 V 12.852 H 196.452 V 0.684 H 191.934 Z M 206.946 11.016 H 206.91 C 206.802 11.292 206.646 11.553 206.442 11.799 C 206.238 12.045 205.989 12.264 205.695 12.456 C 205.401 12.648 205.068 12.798 204.696 12.906 C 204.324 13.014 203.916 13.068 203.472 13.068 C 202.488 13.068 201.726 12.855 201.186 12.429 C 200.646 12.003 200.376 11.346 200.376 10.458 C 200.376 9.918 200.484 9.477 200.7 9.135 C 200.916 8.793 201.189 8.523 201.519 8.325 C 201.849 8.127 202.215 7.986 202.617 7.902 C 203.019 7.818 203.406 7.758 203.778 7.722 L 204.84 7.632 C 205.332 7.596 205.719 7.539 206.001 7.461 C 206.283 7.383 206.496 7.275 206.64 7.137 C 206.784 6.999 206.874 6.822 206.91 6.606 C 206.946 6.39 206.964 6.12 206.964 5.796 C 206.964 5.544 206.916 5.31 206.82 5.094 C 206.724 4.878 206.574 4.686 206.37 4.518 C 206.166 4.35 205.902 4.218 205.578 4.122 C 205.254 4.026 204.858 3.978 204.39 3.978 C 203.562 3.978 202.893 4.182 202.383 4.59 C 201.873 4.998 201.594 5.616 201.546 6.444 H 200.862 C 200.91 5.424 201.237 4.659 201.843 4.149 C 202.449 3.639 203.31 3.384 204.426 3.384 C 205.542 3.384 206.355 3.603 206.865 4.041 C 207.375 4.479 207.63 5.052 207.63 5.76 V 11.142 C 207.63 11.274 207.633 11.406 207.639 11.538 C 207.645 11.67 207.666 11.79 207.702 11.898 C 207.738 12.006 207.798 12.093 207.882 12.159 C 207.966 12.225 208.086 12.258 208.242 12.258 C 208.362 12.258 208.53 12.24 208.746 12.204 V 12.78 C 208.566 12.828 208.38 12.852 208.188 12.852 C 207.912 12.852 207.693 12.816 207.531 12.744 C 207.369 12.672 207.246 12.576 207.162 12.456 C 207.078 12.336 207.021 12.195 206.991 12.033 C 206.961 11.871 206.946 11.694 206.946 11.502 V 11.016 Z M 206.946 7.596 C 206.778 7.8 206.523 7.938 206.181 8.01 C 205.839 8.082 205.458 8.136 205.038 8.172 L 203.886 8.28 C 203.55 8.316 203.214 8.367 202.878 8.433 C 202.542 8.499 202.239 8.61 201.969 8.766 C 201.699 8.922 201.48 9.135 201.312 9.405 C 201.144 9.675 201.06 10.026 201.06 10.458 C 201.06 11.142 201.276 11.649 201.708 11.979 C 202.14 12.309 202.734 12.474 203.49 12.474 C 204.27 12.474 204.888 12.333 205.344 12.051 C 205.8 11.769 206.148 11.445 206.388 11.079 C 206.628 10.713 206.781 10.359 206.847 10.017 C 206.913 9.675 206.946 9.444 206.946 9.324 V 7.596 Z M 210.132 9.774 C 210.156 10.206 210.252 10.587 210.42 10.917 C 210.588 11.247 210.807 11.529 211.077 11.763 C 211.347 11.997 211.662 12.174 212.022 12.294 C 212.382 12.414 212.772 12.474 213.192 12.474 C 213.492 12.474 213.813 12.447 214.155 12.393 C 214.497 12.339 214.815 12.24 215.109 12.096 C 215.403 11.952 215.646 11.751 215.838 11.493 C 216.03 11.235 216.126 10.908 216.126 10.512 C 216.126 9.996 215.97 9.606 215.658 9.342 C 215.346 9.078 214.953 8.874 214.479 8.73 C 214.005 8.586 213.495 8.469 212.949 8.379 C 212.403 8.289 211.893 8.154 211.419 7.974 C 210.945 7.794 210.552 7.539 210.24 7.209 C 209.928 6.879 209.772 6.396 209.772 5.76 C 209.772 5.304 209.874 4.923 210.078 4.617 C 210.282 4.311 210.543 4.068 210.861 3.888 C 211.179 3.708 211.536 3.579 211.932 3.501 C 212.328 3.423 212.724 3.384 213.12 3.384 C 213.6 3.384 214.05 3.438 214.47 3.546 C 214.89 3.654 215.253 3.828 215.559 4.068 C 215.865 4.308 216.105 4.614 216.279 4.986 C 216.453 5.358 216.54 5.808 216.54 6.336 H 215.856 C 215.856 5.916 215.787 5.556 215.649 5.256 C 215.511 4.956 215.319 4.713 215.073 4.527 C 214.827 4.341 214.536 4.203 214.2 4.113 C 213.864 4.023 213.504 3.978 213.12 3.978 C 212.808 3.978 212.493 4.008 212.175 4.068 C 211.857 4.128 211.572 4.23 211.32 4.374 C 211.068 4.518 210.861 4.704 210.699 4.932 C 210.537 5.16 210.456 5.436 210.456 5.76 C 210.456 6.132 210.546 6.432 210.726 6.66 C 210.906 6.888 211.143 7.071 211.437 7.209 C 211.731 7.347 212.061 7.458 212.427 7.542 C 212.793 7.626 213.162 7.71 213.534 7.794 C 213.99 7.878 214.419 7.977 214.821 8.091 C 215.223 8.205 215.571 8.361 215.865 8.559 C 216.159 8.757 216.39 9.012 216.558 9.324 C 216.726 9.636 216.81 10.032 216.81 10.512 C 216.81 11.016 216.696 11.43 216.468 11.754 C 216.24 12.078 215.952 12.339 215.604 12.537 C 215.256 12.735 214.869 12.873 214.443 12.951 C 214.017 13.029 213.6 13.068 213.192 13.068 C 212.664 13.068 212.175 12.999 211.725 12.861 C 211.275 12.723 210.882 12.513 210.546 12.231 C 210.21 11.949 209.946 11.604 209.754 11.196 C 209.562 10.788 209.46 10.314 209.448 9.774 H 210.132 Z M 218.502 0 H 219.186 V 8.514 L 224.892 3.6 H 225.882 L 221.832 7.056 L 226.17 12.852 H 225.234 L 221.292 7.578 L 219.186 9.36 V 12.852 H 218.502 V 0 Z" />
          </svg>
        </FlexBox>

        <FlexBox>
          <CartName>cart</CartName>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 16" width="21" height="16">
            <path clipRule="evenodd" fill="url(#paint0_radial_4_55)" fillRule="evenodd" d="M 5.81366 10.5839 H 18.5839 C 18.6335 10.5839 18.6832 10.5839 18.7329 10.5342 H 18.7826 C 18.8323 10.5342 18.8323 10.4845 18.8323 10.4845 C 18.8323 10.4845 18.8323 10.4348 18.882 10.4348 L 18.9317 10.3851 V 10.3354 C 18.9317 10.3354 18.9317 10.3354 18.9317 10.2857 L 20.4224 3.03106 V 2.98137 C 20.4224 2.98137 20.4224 2.98137 20.4224 2.93168 C 20.4224 2.93168 20.4224 2.93168 20.4224 2.88199 C 20.4224 2.8323 20.4224 2.8323 20.4224 2.8323 C 20.4224 2.8323 20.4224 2.78261 20.3727 2.78261 C 20.3727 2.78261 20.3727 2.73292 20.323 2.73292 L 20.2733 2.68323 L 20.2236 2.63354 C 20.2236 2.63354 20.1739 2.63354 20.1739 2.58385 C 20.1739 2.58385 20.1739 2.58385 20.1242 2.58385 H 20.0745 C 20.0745 2.58385 20.0745 2.58385 20.0248 2.58385 H 15.8012 H 14.7578 H 4.57143 L 4.07453 0.298137 C 4.07453 0.298137 4.07453 0.298137 4.07453 0.248447 C 4.07453 0.198758 4.07453 0.198758 4.02484 0.198758 C 4.02484 0.198758 4.02484 0.149068 3.97516 0.149068 L 3.92547 0.0993789 L 3.87578 0.0496894 C 3.87578 0.0496894 3.82609 0.0496894 3.82609 0 C 3.7764 0 3.7764 0 3.72671 0 C 3.72671 0 3.72671 0 3.67702 0 H 0.397516 C 0.198758 0 0 0.149068 0 0.397516 C 0 0.645963 0.149068 0.795031 0.397516 0.795031 H 3.37888 L 5.31677 9.93789 C 4.47205 10.1366 3.82609 10.882 3.82609 11.8261 C 3.82609 12.8696 4.67081 13.764 5.76398 13.764 H 6.70807 C 6.55901 13.9627 6.50932 14.2112 6.50932 14.5093 C 6.50932 15.354 7.15528 16 8 16 C 8.84472 16 9.49068 15.354 9.49068 14.5093 C 9.49068 14.2609 9.3913 13.9627 9.29193 13.764 H 15.0062 C 14.8571 13.9627 14.8075 14.2112 14.8075 14.5093 C 14.8075 15.354 15.4534 16 16.2981 16 C 17.1429 16 17.7888 15.354 17.7888 14.5093 C 17.7888 14.2609 17.6894 13.9627 17.5901 13.764 H 18.5342 C 18.7329 13.764 18.9317 13.6149 18.9317 13.3665 C 18.9317 13.118 18.7826 12.9689 18.5342 12.9689 H 5.81366 C 5.1677 12.9689 4.62112 12.4224 4.62112 11.7764 C 4.62112 11.1304 5.1677 10.5839 5.81366 10.5839 Z M 14.8075 3.32919 H 15.8509 H 19.6273 L 18.2857 9.83851 H 6.1118 L 4.7205 3.32919 H 14.8075 Z M 8.79503 14.4596 C 8.79503 14.8571 8.44721 15.205 8.04969 15.205 C 7.65217 15.205 7.30435 14.8571 7.30435 14.4596 C 7.30435 14.0621 7.65217 13.7143 8.04969 13.7143 C 8.44721 13.7143 8.79503 14.0621 8.79503 14.4596 Z M 17.0932 14.4596 C 17.0932 14.8571 16.7453 15.205 16.3478 15.205 C 15.9503 15.205 15.6025 14.8571 15.6025 14.4596 C 15.6025 14.0621 15.9503 13.7143 16.3478 13.7143 C 16.7453 13.7143 17.0932 14.0621 17.0932 14.4596 Z" />
            <defs>
              <radialGradient id="paint0_radial_4_55" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.3359 12.248) rotate(-143.645) scale(14.6092 7.55667)" cx="0" cy="0" r="1">
                <stop stopColor="#7e00e8" />
                <stop stopColor="#ff1876" offset="0.401611" />
                <stop stopColor="#bb0cb2" offset="1" />
              </radialGradient>
            </defs>
          </svg>
        </FlexBox>
      </Container>
      <Line />
    </StyledHeader>
  )
}

export default Header;
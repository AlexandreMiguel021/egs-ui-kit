import React from 'react'

export const AlertCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-11 9a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm1-15v8h-2V6h2Zm0 10v2h-2v-2h2Z"
      fill="currentColor"
    />
  </svg>
)

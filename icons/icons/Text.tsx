import React from 'react'

export const Text = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M1 6h22a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2Zm0 5h14a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2Zm14 8H1a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Zm8-5H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" />
  </svg>
)

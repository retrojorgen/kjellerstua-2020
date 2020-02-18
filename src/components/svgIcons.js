import React from "react"

const TvIconPath = () => (
  <>
    <style>
      {
        ".prefix__st0{fill:none;stroke:#fff;stroke-width:4;stroke-miterlimit:10}.prefix__st1{fill:#fff}"
      }
    </style>
    <path
      className="prefix__st0"
      d="M93 60c0 2.75-2.25 5-5 5H12c-2.75 0-5-2.25-5-5V10c0-2.75 2.25-5 5-5h76c2.75 0 5 2.25 5 5v50zM87.5 65.5h-75v11h10.82L9.57 94.57l15.83.27L38.08 76.5h24.3l12.93 18.8 16.24.15-14.4-18.95H87.5z"
    />
    <path
      className="prefix__st0"
      d="M20 48c0 2.75 2.25 5 5 5h27c2.75 0 5-2.25 5-5V21c0-2.75-2.25-5-5-5H25c-2.75 0-5 2.25-5 5v27z"
    />
    <circle className="prefix__st0" cx={76} cy={23} r={6.5} />
    <path
      transform="rotate(-45.001 74.232 21.233)"
      className="prefix__st1"
      d="M72.23 17.32h4v7.83h-4z"
    />
    <path
      className="prefix__st1"
      d="M68 37h6v6h-6zM78 37h6v6h-6zM68 49h6v6h-6zM78 49h6v6h-6z"
    />
  </>
)

const LampIconPath = () => (
  <>
    <style>
      {
        ".prefix__st0{fill:none;stroke:#fff;stroke-width:4;stroke-miterlimit:10}"
      }
    </style>
    <path
      className="prefix__st0"
      d="M74.76 41.69c.98 2.57-.47 4.67-3.22 4.67h-44c-2.75 0-4.24-2.12-3.32-4.71L35.86 9.08c.92-2.59 3.93-4.71 6.68-4.71h13c2.75 0 5.8 2.1 6.78 4.67l12.44 32.65zM49.54 86.37h-27l2 8h49l2-8z"
    />
    <path
      fill="#fff"
      stroke="#fff"
      strokeWidth={4}
      strokeMiterlimit={10}
      d="M49.54 46.37v40"
    />
  </>
)

const CouchIconPath = () => (
  <>
    <style>
      {
        ".prefix__st0{fill:none;stroke:#fff;stroke-width:4;stroke-miterlimit:10}"
      }
    </style>
    <path
      className="prefix__st0"
      d="M24.5 78.5c0 2.75-2.25 5-5 5h-9c-2.75 0-5-2.25-5-5v-29c0-2.75 2.25-5 5-5h9c2.75 0 5 2.25 5 5v29zM92.5 78.5c0 2.75-2.25 5-5 5h-9c-2.75 0-5-2.25-5-5v-29c0-2.75 2.25-5 5-5h9c2.75 0 5 2.25 5 5v29zM83.5 83.5H14.49M14.5 44.5v-29c0-5.5 4.5-10 10-10h49c5.5 0 10 4.5 10 10v29M87.5 95.5h-8l-2-12h12zM19.05 95.5h-8l-2-12h12zM24.5 61.02h49"
    />
  </>
)

const SvgIcon = props => (
  <svg
    id="prefix__Layer_4"
    x={0}
    y={0}
    viewBox="0 0 100 100"
    xmlSpace="preserve"
    {...props}
  >
    {props.name == "tv" && <TvIconPath />}
    {props.name == "lamp" && <CouchIconPath />}
    {props.name == "couch" && <LampIconPath />}
  </svg>
)

export default SvgIcon

import React, { type FC } from 'react'
import './Loader.scss'
const Loader: FC = () => {
  return (
      <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
  )
}

export default Loader

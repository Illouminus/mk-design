import React, { type FC, memo } from 'react'
import './Loader.scss'
export const Loader: FC = memo(() => {
  return (
      <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
  )
})

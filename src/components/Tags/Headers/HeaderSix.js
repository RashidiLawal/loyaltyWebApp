import React from 'react'

const HeaderSix = ({onClickEvent, customClasses, text}) => {
  return (
    <h6 onClick={onClickEvent} className={customClasses}>{text}</h6>
  )
}

export default HeaderSix
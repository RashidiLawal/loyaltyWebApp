import React from 'react'

const Paragraph = ({onClickEvent, customClasses, elementRef, text}) => {
  return (
    <p ref={elementRef} onClick={onClickEvent} className={customClasses} tabIndex='0'>{text}</p>
  )
}

export default Paragraph
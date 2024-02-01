import React from 'react'

const Icon = ({url, alt, customClasses, onClickEvent}) => {
  return (
    <img src={url} alt={alt} onClick={onClickEvent} className={`${customClasses}`}/>
  )
}

export default Icon
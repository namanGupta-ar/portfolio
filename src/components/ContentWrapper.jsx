import React from 'react'

const ContentWrapper = ({children}) => {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
        {children}
    </div>
  )
}

export default ContentWrapper
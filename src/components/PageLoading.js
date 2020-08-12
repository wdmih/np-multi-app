import React from 'react'

export const PageLoading = () => {
  return (
    <div className="row no-margin h-100 valign-wrapper">
      <div className="preloader-wrapper m-auto big active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

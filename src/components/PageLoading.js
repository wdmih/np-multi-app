import React from "react"

export const PageLoading = () => {
  return (
    <div className="row no-margin h-100 valign-wrapper">
      <div class="preloader-wrapper m-auto big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

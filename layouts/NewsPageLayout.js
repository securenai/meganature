import React from 'react'

const NewsPageLayout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Default Layout Header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Default Layout Footer</p>
      </footer>
    </div>
  )
}

export default NewsPageLayout

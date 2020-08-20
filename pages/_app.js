import React from 'react'
import App from 'next/app'

// global css
import '../src/styles/global.scss'


class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props
    return (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
    )
  }
}
export default MyApp

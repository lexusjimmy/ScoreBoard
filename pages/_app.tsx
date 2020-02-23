import NextApp from 'next/app';
import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import theme from "../theme";


export default class App extends NextApp {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }

  render() {
    const { Component, pageProps } = this.props

    return (
        <MuiThemeProvider theme={theme}>
            <SCThemeProvider theme={theme}>
                <Component {...pageProps} />
            </SCThemeProvider>
        </MuiThemeProvider>
    )
  }
}
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './index.scss'
import React from 'react'
import Dice from './Components/dice'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.context_landing}>
        <div className={styles.spacer}></div>
        <Dice />
        <div className={styles.footer}> Copyright 2016 by Kyon (developement, design) & Art3mis (idea, pre-development)</div>
      </div>
    )
  }
}

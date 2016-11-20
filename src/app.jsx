import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './index.scss'
import React from 'react'
import Dice from './Components/dice'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.list}>
        <h2> The League# Giveaway Terminal </h2>
        <Dice />
      </div>
    )
  }
}

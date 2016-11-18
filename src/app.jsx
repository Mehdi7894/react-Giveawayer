import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import React from 'react';
import Dice from './modules/dice'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.heading}>
          <h1>The LeagueSharp Giveaway terminal.</h1>
          <p>In the following Input section, you'll be able to input your numbers to generate the winner for your giveaway. <br/>
          Please be aware that the entire system is currently under construction and will be improved from time to time.<br/>
          So check out my site later. You can probably save your old Giveaways you have finished so far by just entering it.<br/>
          </p>
        </div>
        <div>
            <Dice />
        </div>
      </div>
    )
  }
}

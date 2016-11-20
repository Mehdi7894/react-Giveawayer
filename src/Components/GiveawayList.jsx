import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../index.scss'
import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

export default class GiveawayList extends React.Component {

    constructor(props) {
        super(props)
        this.props = props
        //console.log(props)
    }

    copyToClipboard = (e) => {
        //console.log(this.props.lists[e])
    }

    render() {

        const stylus = {
          chip: {
            margin: 4,
          },
          wrapper: {
            display: 'flex',
            flexWrap: 'wrap',
          },
        };

        return (
            <div className={styles.heading}>
              {this.props.lists.map((obj, i) => {
                return (
                  <div key={i}>
                    <Card key={i}>
                      <CardHeader
                        key={i}
                        title={"Giveaway #" + (this.props.lists.length - i)}
                        subtitle={"Winner is " + obj.win + " | post: " + obj.post + " | upvotes: " + obj.upvote}
                        actAsExpander={false}
                        showExpandableButton={false} />
                    </Card>
                  </div>
                )
              })}
            </div>
        )
    }
}

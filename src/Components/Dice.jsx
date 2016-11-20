import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../index.scss'
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import TextField from 'material-ui/TextField'
import Snackbar from 'material-ui/Snackbar'
import GiveawayList from './GiveawayList'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'

export default class Dice extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          post: '',
          upvote: '',
          result: 'none',
          sent: false,
          working: false,
          lists: []
        }

        this.handleChangePost = this.handleChangePost.bind(this)
        this.handleChangeUpvote = this.handleChangeUpvote.bind(this)
        this.handleRequestClose = this.handleRequestClose.bind(this)
        this.handleTouchTap = this.handleTouchTap.bind(this)
    }

    handleChangePost = (event) => {
        this.setState({post: event.target.value})
    }

    handleChangeUpvote = (event) => {
        this.setState({upvote: event.target.value})
    }

    handleTouchTap = () => {
        if(this.state.working) return

        let postID = this.state.post
        let upvoteCount = this.state.upvote
        let winner = 0
        while(winner === 0){
          winner = Math.round(((Math.random() * (postID + upvoteCount)) / (postID + upvoteCount)) * upvoteCount)
        }

        let item = {
          post: postID,
          upvote: upvoteCount,
          win: "#"+winner,
        }

        this.state.lists.unshift(item)
        this.setState({
          result: "#" + winner,
          sent: true,
          working: true,
        })
    }

    handleRequestClose = () => {
        this.setState({
          sent: false,
          working: false,
        })
    }

    render() {
        const style = {
          margin: 12,
        };

        const text = {
          width: '20%',
          "margin-left": '10px',
          "margin-right": '10px',
        };

        return (
          <div>
            <Card className={styles.heading}>
              <CardHeader title={"The League# Giveaway Terminal"}>
                <CardText>
                  <TextField floatingLabelText="Post ID" onChange={this.handleChangePost} style={text} /><span style={{color: "#999999"}}> / </span>
                  <TextField floatingLabelText="Upvotes" onChange={this.handleChangeUpvote} style={text} /><br/>
                  <RaisedButton label="draw the winner" onClick={this.handleTouchTap} disabled={this.state.working} primary={true} />
                  <Snackbar open={this.state.sent} message={"The winner was rolled: " + this.state.result}  autoHideDuration={4000} onRequestClose={this.handleRequestClose} />
                </CardText>
              </CardHeader>
            </Card>
            <div>
             <GiveawayList lists={this.state.lists}/>
            </div>
          </div>
        )
    }
}

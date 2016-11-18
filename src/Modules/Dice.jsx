import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../index.scss'
import React from 'react'

export default class Dice extends React.Component {
  
    constructor() {
        super()
        this.state = {post: '', upvote: '', result: 'none'}

        this.handleChangePost = this.handleChangePost.bind(this)
        this.handleChangeUpvote = this.handleChangeUpvote.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleChangePost(event) {
        this.setState({post: event.target.value})
    }

    handleChangeUpvote(event) {
        this.setState({upvote: event.target.value})
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.post + ' and ' + this.state.upvote)
        let kappa = fetch("http://teemo.club/fair.php?tx=3" + this.state.post.substring(0,4) + this.state.upvote.substring(0,2))
            .then((res) => {
                if (res.headers.get('Content-Type') === 'application/json') {
                   res.body.json()
                }
                res.body.text()
            })
            .then((read) => { 
                console.log(read)
                this.setState({result: read}) 
            })
        event.preventDefault()
    }

    render() {
        return (
            <div className={styles.formular}>
            <form onSubmit={this.handleSubmit}>
                <div className={"form-group"}>
                    <label>Post-ID</label>
                    <input type="text" onChange={this.handleChangePost} value={this.state.post} className={"form-control"} id="PostId" placeholder="Put your post Id in here"/>
                    <br/><label>Upvote count</label>
                    <input type="text" onChange={this.handleChangeUpvote} value={this.state.upvote} className={"form-control"} id="UpvoteId" placeholder="Put your upvote count in here"/>
                    <br/><button type="submit" className={"btn btn-default"}>Submit</button>
                    <p> Result: { this.state.result } has won. </p>
                </div>
            </form>
            </div>
        )
    }
}
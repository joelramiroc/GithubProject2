import React, { Component } from 'react';
import './list.css';
const UrlForUserName = userName =>
'https://api.github.com/users/'+userName + '/repos'
class JSon extends Component {
    constructor(props){
        super(props)
            this.state ={
                requestFailed : false
        }
    }
    componentDidMount()
    {
        fetch(UrlForUserName(this.props.userName))
        .then(response => {
            if(!response.ok)
            {
                throw Error("Network request failed")
            }
            return response
        })
        .then(d => d.json())
        .then(d =>{
            this.setState({
                githubData: d
            })
        }, () => {
            this.setState({
                    requestFailed : true
                }
            )
        })
    }

    render() {
        if(this.state.requestFailed) return  <p>Failed...</p>
        if(!this.state.githubData) return  <p>loading...</p>
        var repos = this.state.githubData

        return (
            <ul className = "ulList">
                {
                    repos.map(rep =>
                    {
                        return <li className = "list" >
                        <a class="hreflink" href={rep.html_url} class="hreflink">{rep.name}</a>
                        </li>
                    })
                }
            </ul>
        );
    }
  }

  export default JSon;
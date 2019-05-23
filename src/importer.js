import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Photo }from './pexels-photo-236705.jpg';
class Importer extends Component {
  constructor(props) {
   super(props);
   this.state = {data: []};
  }
  componentDidMount() {
   var that = this;
   fetch('https://devtest.equisolve-dev.com/')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      var sortedJson = myJson.sort(function(a,b){
      var date1 = new Date(a.published_at)
      var date2 = new Date(b.published_at)
      return date2 - date1;
      })
    that.setState({data: sortedJson})
    });
  }

  render(){
    return (
      <div className="jumbotron">
      <Jumbotron>
      <h1>Articles</h1>
      <center>
      {
        this.state.data.map((item,index) =>
          <div key={index}className="mapped-div">
          <img id="native-img"src={require('./pexels-photo-236705.jpg')} />
          <h3><u>{item.title}</u></h3>
          <p>{item.published_at}</p>
          </div>
          )
        }
      </center>
      </Jumbotron>
      </div>
    )
  }

}

export default Importer;

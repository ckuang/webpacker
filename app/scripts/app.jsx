var CongressPerson = require("./congress")
var ReactDOM = require('react-dom')
var React = require('react')

var App = React.createClass({
  getInitialState: function() {
    return ({input: "", data: [], fetched: false})
  },
  handleChange: function(event) {
    this.setState({input: event.target.value})
  },
  getData: function(event) {
    event.preventDefault()
    var that = this
    $.ajax({
      url: "https://congress.api.sunlightfoundation.com/legislators/locate?zip="+ that.state.input +"&apikey=d94cb94a0eaa41babbf1b43b14ea4afd",
      success: function(data) {
        that.setState({data: data.results, fetched: true})
      }
    })
  },
  render: function() {
    var congress = []
    if (this.state.fetched) {
      this.state.data.forEach(function(person, i) {
        congress.push(<CongressPerson key={i} bio={person}/>)
      })
    }
    return(
      <div>
        <form onSubmit={this.getData}>
          <input
            type="text"
            placeholder="zipcode"
            value={this.state.input}
            onChange={this.handleChange}/>
          <input type="submit" value="Find Congress People"/>
        </form>
        {congress}
      </div>
    )
  }
})


ReactDOM.render(<App />, document.getElementById('root'))

var React = require('react')

var CongressPerson = React.createClass({
  render: function() {
    var first = this.props.bio.first_name
    var last = this.props.bio.last_name
    return (<div>{first + " " + last}</div>)
  }
})

module.exports = CongressPerson

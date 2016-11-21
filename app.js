class GroceryListItem extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onMouseOn() {
    this.setState({
      hover: true
    });
  }

  onMouseOff() {
    this.setState({
      hover: false
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li 
        style={style}
        onMouseLeave={this.onMouseOff.bind(this)} 
        onMouseEnter={this.onMouseOn.bind(this)}
      >
        {this.props.item}
      </li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item => <GroceryListItem item = {item}/>)}
  </ul>
);

ReactDOM.render(<GroceryList items = {['Cucumbers', 'Kale', 'Ketchup']}/>, document.getElementById('app'));
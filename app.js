var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceryItems = {['Cucumbers', 'Kale', 'Milk', 'Butter', 'Toilet Paper']}/> 
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem => 
      <GroceryListItem groceryItem = {groceryItem} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    var style = {
      fontWeight : this.state.hover? 'bold':'normal'
    };

    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.groceryItem}</li>
    );
  }

};

ReactDOM.render(<App />, document.getElementById('app'));
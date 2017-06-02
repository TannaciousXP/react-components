// TODO
/*
var GroceryList = (GroceryListItem) => (
  <ul>
    <li>{GroceryListItem.toget[0]}</li>
    <li>{GroceryListItem.toget[1]}</li>
    <li>{GroceryListItem.toget[2]}</li>   
  </ul>
);

var App = () => (
  <div>
    <h2>GroceryList Items</h2>
    <GroceryList toget={['apples', 'eggs', 'veggies']}/>
  </div>
);
*/


/*
// props in this instance is GroceryListItem and they are immutable
var GroceryList = (GroceryListItem) => {
  
  var onListItemClick = (event) => {
    console.log('I got clicked');
  };

  return (
    <ul>
      <li onClick={onListItemClick}>{GroceryListItem.toget[0]}</li>
      <li>{GroceryListItem.toget[1]}</li>
      <li>{GroceryListItem.toget[2]}</li>   
    </ul>
  );
};

var App = () => (
  <div>
    <h2>GroceryList Items</h2>
    <GroceryList toget={['apples', 'eggs', 'veggies']}/>
  </div>
);



ReactDOM.render(<App />, document.getElementById ('app'));
*/

// props in this instance is GroceryListItem and they are immutable
// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render () {
//     return(
//         <li>{this.props.item}</li>      
//     )
//   };
// }

// var GroceryList = (props) => (
//   <ul>
//     {props.items.map(item => 
//       <GroceryListItem item={item} />  
//     )}
//   </ul>    
// );

// ReactDOM.render(
//   <GroceryList items={['veggies', 'milk']}/>,
//   document.getElementById('app')
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {done: false}
  }
  
  onListItemMouseOver() {
    this.setState({
    done: !this.state.done
    });
  }
  
  
  render () {
    var style = {
        textDecoration: this.state.done ? 'line-through' : 'none'
    };
    
    return(
        <li style={style} onMouseOver={this.onListItemMouseOver.bind(this)}>{this.props.item}</li>      
    )
  };
}

var GroceryList = (props) => (
  
  <ul>
    {props.items.map(item => 
      <GroceryListItem item={item} />  
    )}
  </ul>    
);

ReactDOM.render(
  <GroceryList items={['veggies', 'milk']}/>,
  document.getElementById('app')
);


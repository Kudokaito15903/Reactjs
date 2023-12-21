
// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }

//   return (
//     <div className="warning">
//       Warning!
//     </div>
//   );
// }

// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showWarning: true};
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }

//   handleToggleClick() {
//     this.setState(state => ({
//       showWarning: !state.showWarning
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide' : 'Show'}
//         </button>
//       </div>
//     );
//   }
// }

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//       {number}
//      </li>
//     );
//     return (
//       <ul>{listItems}</ul>
  
//     );
//   }
  
// const numbers = [1, 2, 3, 4, 5];
// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<NumberList numbers = {numbers} />);

function ListItem(props) {
    return <li>{props.value}</li>;
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    return (
      <ul>
        {numbers.map((number) =>
          <ListItem key={number.toString()}
                    value={number} />
        )}
      </ul>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  const root = ReactDOM.createRoot(document.getElementById('root')); 
  root.render(<NumberList numbers={numbers} />);
  
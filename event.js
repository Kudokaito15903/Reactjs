const root = ReactDOM.createRoot(document.getElementById('root'));


function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  }
  
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // Cú pháp này đảm bảo `this` được ràng buộc trong handleClick
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
  
  class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isToggleOn: true };
    }
  
    // Sử dụng arrow function để không cần phải bind "this"
    handleClick = () => {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    };
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
          <LoggingButton />
        </div>
      );
    }
  }
      
root.render (<Toggle />);
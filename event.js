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
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      isLoggedIn: true,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <LoggingButton />
        <Greeting isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

root.render(<Toggle />);
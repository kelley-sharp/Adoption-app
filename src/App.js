const Pet = props => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h1', {}, props.animal),
    React.createElement('h1', {}, props.breed)
  ]);
};

class App extends React.Component {
  handleTitleClick() {
    alert('you clicked the title');
  }

  render() {
    return React.createElement('div', {}, [
      React.createElement(
        'h1',
        { onClick: this.handleTitleClick },
        'Adopt me!'
      ),
      React.createElement(Pet, {
        name: 'Whiskey',
        animal: 'dogpig',
        breed: 'mixed'
      }),
      React.createElement(Pet, {
        name: 'Luna',
        animal: 'dog',
        breed: 'Havanese'
      }),
      React.createElement(Pet, {
        name: 'Sammy',
        animal: 'cat',
        breed: 'Maine Coon'
      })
    ]);
  }
}

//render App with attributes, children and location.
ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById('root')
);

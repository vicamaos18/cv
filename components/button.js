'use strict';

const e = React.createElement;
console.log(React)
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    return (<h1>Menu</h1>)
    return e(
      'button',
      {
        onClick: () => this.setState({ liked: true }),
        className: "btn btn-primary"
      },
      'Like'
    );
  }

}


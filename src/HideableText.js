import React from 'react';

export default class HideableText extends React.Component {
  constructor (props) {
    super(props); // calls the parent class constructor
    this.state = {
      isHidden: false,
    }
  }

  // the 'setState' React.Component method will return an object
  toggleIsHidden () {
    this.setState((currentState) => ({
      isHidden: !currentState.isHidden,
    }));
  }

  render () {
    return (
      <div>
        <button onClick={() => this.toggleIsHidden()}>Toggle</button>
        {/* the text will only show if 'isHidden' is true */}
        {!this.state.isHidden && this.props.text}
      </div>
    );
  }
}
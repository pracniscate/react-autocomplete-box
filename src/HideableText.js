import React from 'react';

export default class HideableText extends React.Component {
  constructor (props) {
    super(props); // calls the parent class constructor
  }

  render () {
    return (
      <div>
        <button>Toggle</button>
        {this.props.text}
      </div>
    );
  }
}
import React from 'react';

export default class AutoCompleteText extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      'David',
      'Damien',
      'Sara',
      'Jane',
    ];
    this.state = {
      suggestions: [],
      text: '',
    };
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = []; // make mutable
    if (value.length > 0) {
      // create a case insensitive Regular Expression to test for matches in the items list that start with the text the user entered
      const regex = new RegExp(`^${value}`, 'i');
      // define a list of max matching suggestions,
      // sorting them alphabetically, & filtering it for items that match the regex
      suggestions = this.items.sort().filter(v => regex.test(v));
    }
    // update the state with the filtered list of suggestions
    // when the text box value changes, we want to set that value in the state as text
    this.setState(() => ({ suggestions, text: value }));
  }

  suggestionSelected (value) {
    // update the state so the value the textbox uses is the selected suggestion
    this.setState(() => ({
      text: value,
      // wipe the suggestions list
      suggestions: [],
    }))
  }

  // only render the filtered list of suggestions instead of the full list
  renderSuggestions () {
    // de-structure the suggestions from the state
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {/* instead of mapping through all the items, map only through the suggestions */}
        {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
      </ul>
    )
  }

  render () {
    // extract the text value from the state
    const { text } = this.state;
    return (
      <div>
        {/* take user input & output it into the console */}
        <input value={text} onChange={this.onTextChanged}type="text"/>
        {/* change to render suggestions */}
        {this.renderSuggestions()}
      </div>
    )
  }
}
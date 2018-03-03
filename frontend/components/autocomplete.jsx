import React from 'react';

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: '', name: '' };
    this.filter = this.filter.bind(this);
    this.toggleNames = this.toggleNames.bind(this);
    this.setInputVal = this.setInputVal.bind(this);
  }

  toggleNames() {
    alert("hi. filter() triggered me. i am toggleNames()");
  }

  //set first list-item equal to name clicked
  //make the other names disappear

  filter(event, name) {
    const inputVal = name;
    this.setState({ inputVal });
    // this.props.names[0].name = name
    var list_item = event.target.innerText;
    alert(list_item);
  }

  setInputVal(event) {
    const inputVal = event.target.value ? event.target.value : "";
    this.setState({ inputVal });
    if (inputVal == '') {
      // alert('inputVal is empty');
      // this.props.names[0].name = "hello";
      // alert(`input text field is empty`);
    }


  }

  render() {
    return (
      <div>
        <div id="autocomplete">
          <div class="title">
            <p>Autocomplete</p>
          </div>
          <div id="search">
            <input onChange={this.setInputVal} value={this.state.inputVal} />
            <ul id="list">
              {this.props.names.map((obj) => {
                return <li id="list-item" key={obj.id} onClick={(e) => this.filter(e, obj.name)}>{obj.name}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

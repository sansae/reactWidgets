import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';

const Panes = [
  {title: 'one', content: 'first pane'},
  {title: 'two', content: 'second pane'},
  {title: 'three', content: 'third pane'}
];

const Names = [
  {id: 1, name: "Abba"},
  {id: 2, name: "Barney"},
  {id: 3, name: "Barbara"},
  {id: 4, name: "Jeff"},
  {id: 5, name: "Jenny"},
  {id: 6, name: "Sarah"},
  {id: 7, name: "Sally"},
  {id: 8, name: "Xander"}
]

class Root extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Weather />
        <Tabs />
        <Autocomplete names={Names}/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root/>,
    document.getElementById('main')
  );
});

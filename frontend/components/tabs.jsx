import React from 'react';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 0 };
  }

  render() {
    return (
      <div>
        <div id="tabs">
          <div class="title">
            <p>Tabs</p>
          </div>
          <div id="panes">
            <p>Hello world. I am the Tabs Component</p>
          </div>
        </div>
      </div>
    );
  }
}

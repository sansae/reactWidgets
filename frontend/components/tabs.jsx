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
            <ul>
              <ul>
                {this.props.panes.map((obj) => {
                  return <li key={obj.title}>{obj.content}</li>
                })}
              </ul>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

"use strict";

var FilteredList = React.createClass({
  displayName: "FilteredList",

  filterList: function filterList(event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function (item) {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: updatedList });
  },
  getInitialState: function getInitialState() {
    return {
      initialItems: ["Apples", "Broccoli", "Chicken", "Duck", "Eggs", "Fish", "Granola", "Hash Browns"],
      items: []
    };
  },
  componentWillMount: function componentWillMount() {
    this.setState({ items: this.state.initialItems });
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "filter-list" },
      React.createElement("input", { type: "text", placeholder: "Search", onChange: this.filterList }),
      React.createElement(List, { items: this.state.items })
    );
  }
});

var List = React.createClass({
  displayName: "List",

  render: function render() {
    return React.createElement(
      "ul",
      null,
      this.props.items.map(function (item) {
        return React.createElement(
          "li",
          { key: item },
          item
        );
      })
    );
  }
});

ReactDOM.render(React.createElement(FilteredList, null), document.getElementById('main-body'));
//# sourceMappingURL=app.js.map

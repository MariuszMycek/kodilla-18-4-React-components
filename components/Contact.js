var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },
  render: function() {
    return React.createElement(
      "div",
      { className: "contactItem" },
      React.createElement("img", {
        className: "contactImage",
        src:
          "http://icons.veryicon.com/256/System/Dynamic%20Yosemite/Contacts.png"
      }),
      React.createElement(
        "div",
        { className: "label-wrapper" },
        React.createElement(
          "p",
          { className: "contactLabel" },
          "Imię: " + this.props.item.firstName
        ),
        React.createElement(
          "p",
          { className: "contactLabel" },
          "Nazwisko: " + this.props.item.lastName
        ),
        React.createElement(
          "a",
          {
            className: "contactEmail",
            href: "mailto:" + this.props.item.email
          },
          this.props.item.email
        )
      )
    );
  }
});

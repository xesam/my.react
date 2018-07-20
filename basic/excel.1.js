var headers = ["Book", "Author", "Language", "Published", "Sales"];
var data = [
    ["The Lord of the Rings", "J. R. R. Tolkien", "English", "1954–1955", "150 million"],
    ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943", "140 million"],
    ["Harry Potter and the Philosopher's Stone", "J. K. Rowling", "English", "1997", "107 million"],
    ["And Then There Were None", "Agatha Christie", "English", "1939", "100 million"],
    ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754–1791", "100 million"],
    ["The Hobbit", "J. R. R. Tolkien", "English", "1937", "100 million"],
    ["She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100 million"]
];

var Excel = React.createClass({
    displayName: "Excel",
    propTypes: {
        headers: React.PropTypes.arrayOf(React.PropTypes.string),
        initialData: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.string))
    },
    getInitialState: function() {
        return {
            data: this.props.initialData,
            sortby: null,
            descending: false
        };
    },
    _sort: function(e) {
        var column = e.target.cellIndex;
        var data = this.state.data.slice();
        var descending = this.state.sortby === column && !this.state.descending;
        data.sort(function(a, b) {
            return descending ? (a[column] < b[column] ? 1 : -1) : a[column] > b[column] ? 1 : -1;
        });
        this.setState({
            data: data,
            sortby: column,
            descending: descending
        });
    },
    render: function() {
        return React.DOM.table(
            null,
            React.DOM.thead(
                { onClick: this._sort },
                React.DOM.tr(
                    null,
                    this.props.headers.map((title, index) => {
                        if (this.state.sortby === index) {
                            title += this.state.descending ? " \u2191" : " \u2193";
                        }
                        return React.DOM.th({ key: index }, title);
                    })
                )
            ),
            React.DOM.tbody(
                null,
                this.state.data.map(row => {
                    return React.DOM.tr(null, row.map(cell => React.DOM.td(null, cell)));
                })
            )
        );
    }
});

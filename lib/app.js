'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hello = _react2.default.createClass({
    displayName: 'Hello',
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h1',
                null,
                'Hello,boy!'
            )
        );
    }
});

(0, _reactDom.render)(_react2.default.createElement(Hello, null), document.getElementById('react'));
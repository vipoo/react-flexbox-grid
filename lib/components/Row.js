'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _cleanProps = require('../cleanProps');

var _cleanProps2 = _interopRequireDefault(_cleanProps);

var _flexboxgrid = require('flexboxgrid');

var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModificatorType = _react.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);
var modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];

var propTypes = {
  reverse: _react.PropTypes.bool,
  start: ModificatorType,
  center: ModificatorType,
  end: ModificatorType,
  top: ModificatorType,
  middle: ModificatorType,
  bottom: ModificatorType,
  around: ModificatorType,
  between: ModificatorType,
  first: ModificatorType,
  last: ModificatorType,
  className: _react.PropTypes.string,
  tagName: _react.PropTypes.string,
  children: _react.PropTypes.node
};

var propKeys = Object.keys(propTypes);

var Row = function (_Component) {
  _inherits(Row, _Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Row.prototype.render = function render() {
    var modificators = [_flexboxgrid2.default.row];
    for (var i = 0; i < modificatorKeys.length; ++i) {
      var key = modificatorKeys[i];
      var value = this.props[key];
      if (value) {
        modificators.push(_flexboxgrid2.default[key + '-' + value]);
      }
    }

    if (this.props.reverse) {
      modificators.push(_flexboxgrid2.default.reverse);
    }

    var className = (0, _classnames2.default)(this.props.className, modificators);

    var newProps = Object.assign({}, (0, _cleanProps2.default)(propKeys, this.props), { className: className });

    return _react2.default.createElement(this.props.tagName || 'div', newProps, this.props.children);
  };

  return Row;
}(_react.Component);

exports.default = Row;


Row.propTypes = propTypes;
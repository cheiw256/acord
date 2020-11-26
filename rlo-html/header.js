'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var LikeButton = function (_React$Component) {
    _inherits(LikeButton, _React$Component);

    function LikeButton(props) {
        _classCallCheck(this, LikeButton);

        var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(LikeButton, [{
        key: 'render',
        value: function render() {
            if (this.state.liked) {
                return 'You liked this.';
            }

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'header',
                    { className: 'clearfix', role: 'banner' },
                    React.createElement('img', { src: 'images/um logo crop.jpg', width: '144', height: '65', id: 'university_logo',
                        className: 'pull-right' }),
                    React.createElement('img', { src: 'images/acord-logo.png', alt: 'ACoRD', width: '65', height: '70', id: 'acord_logo',
                        className: 'pull-right' }),
                    React.createElement(
                        'p',
                        { className: 'rlo_title' },
                        'Prescription Writing: Back to Basics\xA0'
                    ),
                    React.createElement(
                        'p',
                        { className: 'school_title' },
                        React.createElement(
                            'b',
                            null,
                            'Learning Objective'
                        ),
                        ': At the end of this module, you will be able to explain the components of a prescription. You will be able to write a prescription based on principles of good prescribing. '
                    )
                ),
                React.createElement(
                    'nav',
                    { className: 'nav nav-pills hidden-xs', role: 'navigation', id: 'main_nav' },
                    React.createElement(
                        'div',
                        { className: 'btn-group' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary dropdown-toggle btn-sm', 'data-toggle': 'dropdown' },
                            'Contents ',
                            React.createElement('span', { className: 'glyphicon glyphicon-chevron-down' })
                        ),
                        React.createElement(
                            'ul',
                            { className: 'dropdown-menu', role: 'menu' },
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: 'index.html' },
                                    'Home'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '1.html' },
                                    'Amalina\'s story'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '2.html' },
                                    'Prescription in the dispensing process'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '3.html' },
                                    'Structure of a prescription'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '4.html' },
                                    'Route of administration'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '5.html' },
                                    'Frequency and duration'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '6.html' },
                                    'Spot the prescription error[1]'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '7.html' },
                                    'Spot the prescription error[2]'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '8.html' },
                                    'Now it is your turn...'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '9.html' },
                                    'Summary'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '10.html' },
                                    'Feedback'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '11.html' },
                                    'Resources'
                                )
                            ),
                            React.createElement('li', { className: 'nav-divider' }),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: 'http://acord.my/rlos' },
                                    'ACoRD RLOs'
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'a',
                        { href: 'index.html', className: 'btn btn-primary btn-sm' },
                        React.createElement('span', {
                            className: 'glyphicon glyphicon-circle-arrow-left' }),
                        'Previous '
                    ),
                    React.createElement(
                        'a',
                        { href: '1.html', id: 'next_btn', className: 'btn btn-primary btn-sm' },
                        'Next ',
                        React.createElement('span', {
                            className: 'glyphicon glyphicon-circle-arrow-right' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'visible-xs-block', id: 'small_screen_menu_container' },
                    React.createElement(
                        'p',
                        { className: 'rlo_title' },
                        'Prescription writing: Back to Basics'
                    ),
                    React.createElement(
                        'p',
                        null,
                        React.createElement(
                            'a',
                            { className: 'btn btn-primary btn-block', 'data-toggle': 'collapse', href: '#collapseExample',
                                'aria-expanded': 'false',
                                'aria-controls': 'collapseExample', id: 'toggle_ss_nav' },
                            'Toggle Navigation ',
                            React.createElement('span', { className: 'glyphicon glyphicon-remove glyphicon-menu-hamburger',
                                'aria-hidden': 'true' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'collapse', id: 'collapseExample' },
                        React.createElement(
                            'ul',
                            { className: 'btn-group btn-group-vertical center-block', role: 'menu', id: 'small_screen_menu' },
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: 'index.html', className: 'btn btn-info btn-block' },
                                    'Home'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '1.html', className: 'btn btn-info btn-block' },
                                    'Amalina\'s story'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '2.html', className: 'btn btn-info btn-block' },
                                    'Prescription in the dispensing process'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '3.html', className: 'btn btn-info btn-block' },
                                    'Structure of a prescription'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '4.html', className: 'btn btn-info btn-block' },
                                    'Route of administration'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '5.html', className: 'btn btn-info btn-block' },
                                    'Frequency and duration'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '6.html', className: 'btn btn-info btn-block' },
                                    'Spot the prescription error[1]'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '7.html', className: 'btn btn-info btn-block' },
                                    'Spot the prescription error[2]'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '8.html', className: 'btn btn-info btn- btn-block' },
                                    'Now it is your turn...'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '9.html', className: 'btn btn-info btn- btn-block' },
                                    'Summary'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '10.html', className: 'btn btn-info btn- btn-block' },
                                    'Feedback'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '11.html', className: 'btn btn-info btn-block' },
                                    'Resources'
                                )
                            ),
                            React.createElement('li', { className: 'nav-divider' }),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: 'http://acord.my/rlos' },
                                    'ACoRD RLOs'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LikeButton;
}(React.Component);

var domContainer = document.querySelector('#header');
ReactDOM.render(e(LikeButton), domContainer);
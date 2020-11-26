'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer(props) {
        _classCallCheck(this, Footer);

        var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            if (this.state.liked) {
                return 'You liked this.';
            }

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'footer',
                    { role: 'contentinfo' },
                    React.createElement(
                        'div',
                        { className: 'progress' },
                        React.createElement(
                            'div',
                            { className: 'progress-bar progress-bar-success', role: 'progressbar', 'aria-valuenow': '10',
                                'aria-valuemin': '0', 'aria-valuemax': '100', style: 'width: 0%' },
                            React.createElement(
                                'span',
                                { className: 'sr-only' },
                                '0% Complete'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-md-8 text-left' },
                            React.createElement(
                                'ul',
                                null,
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement(
                                        'i',
                                        null,
                                        '"This project has been funded with support from the European Commission. This publication [communication] reflects the view only of the author, and the Commission cannot be held responsible for any use which may be made of the information contained therein."'
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'Content authors: Christina Phoay Lay Tan, Julia Binti Suhaimi, Hooi Min Lim, Pauline Siew Mei Lai, Fadzilah Binti Hanum'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'Storyboard co-creators: Soh Chen Ng, Indra Gayatri Valliyappan, Sui Weng Wong, Asma Binti Mohd Hussin, Jazmina Binti Azahar'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'Mentor: Hooi Min Lim'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'Developer: Kuhan Krishnan, Jing Hooi Koey, Chin Hai Teo, Kai Nan Tee'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'HTML5 Conversion: ',
                                    React.createElement(
                                        'a',
                                        { href: 'mailto:aaron.fecowycz@nottingham.ac.uk' },
                                        'Aaron Fecowycz'
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-md-4 text-right' },
                            React.createElement('img', { src: 'images/erasmus.jpg',
                                alt: 'Co-funded by the Erasmus+ Programme of the European Union',
                                width: '194', height: '50', id: 'eu_logo' }),
                            React.createElement(
                                'p',
                                null,
                                'RLO released: 1 September 2020 '
                            ),
                            React.createElement(
                                'p',
                                null,
                                'Page last updated: 18 June 2020'
                            ),
                            React.createElement(
                                'p',
                                null,
                                React.createElement(
                                    'a',
                                    { href: 'http://creativecommons.org/licenses/by-nc/2.0/uk/',
                                        title: 'Creative Commons licence.' },
                                    React.createElement('img', { src: 'images/cc_88x31.png',
                                        alt: 'Creative Commons licence.', width: '88',
                                        height: '31' })
                                ),
                                ' ',
                                React.createElement(
                                    'a',
                                    {
                                        href: 'http://www.nottingham.ac.uk/nmp/sonet/rlos/rlocopyright.html' },
                                    'Terms of use'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(React.Component);

var domContainer = document.querySelector('#footer');
ReactDOM.render(e(Footer), domContainer);
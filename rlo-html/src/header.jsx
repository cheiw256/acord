'use strict';

const e = React.createElement;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return (
            <div>
                <header className="clearfix" role="banner">
                    <img src="images/um logo crop.jpg" width="144" height="65" id="university_logo"
                         className="pull-right"/>
                    <img src="images/acord-logo.png" alt="ACoRD" width="65" height="70" id="acord_logo"
                         className="pull-right"/>
                    <p className="rlo_title">Prescription Writing: Back to Basics&nbsp;</p>
                    <p className="school_title"><b>Learning Objective</b>: At the end of this module, you will
                        be able to explain the
                        components of a prescription. You will be able to write a prescription based on
                        principles of good
                        prescribing. </p>
                    <!-- START Narration Audio -->

                    <!-- END Narration Audio -->
                </header>

                <nav className="nav nav-pills hidden-xs" role="navigation" id="main_nav">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown">
                            Contents <span className="glyphicon glyphicon-chevron-down"></span>
                        </button>
                        <ul className="dropdown-menu" role="menu">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="1.html">Amalina's story</a></li>
                            <li><a href="2.html">Prescription in the dispensing process</a></li>
                            <li><a href="3.html">Structure of a prescription</a></li>
                            <li><a href="4.html">Route of administration</a></li>
                            <li><a href="5.html">Frequency and duration</a></li>
                            <li><a href="6.html">Spot the prescription error[1]</a></li>
                            <li><a href="7.html">Spot the prescription error[2]</a></li>
                            <li><a href="8.html">Now it is your turn...</a></li>
                            <li><a href="9.html">Summary</a></li>
                            <li><a href="10.html">Feedback</a></li>
                            <li><a href="11.html">Resources</a></li>
                            <li className="nav-divider"></li>
                            <li><a href="http://acord.my/rlos">ACoRD RLOs</a></li>
                        </ul>
                    </div>
                    <a href="index.html" className="btn btn-primary btn-sm"><span
                        className="glyphicon glyphicon-circle-arrow-left"></span>
                        Previous </a>
                    <a href="1.html" id="next_btn" className="btn btn-primary btn-sm">Next <span
                        className="glyphicon glyphicon-circle-arrow-right"></span></a>

                </nav>


                <div className="visible-xs-block" id="small_screen_menu_container">
                    <p className="rlo_title">Prescription writing: Back to Basics</p>
                    <p><a className="btn btn-primary btn-block" data-toggle="collapse" href="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample" id="toggle_ss_nav">
                        Toggle Navigation <span className="glyphicon glyphicon-remove glyphicon-menu-hamburger"
                                                aria-hidden="true"></span></a></p>
                    <div className="collapse" id="collapseExample">
                        <ul className="btn-group btn-group-vertical center-block" role="menu" id="small_screen_menu">
                            <li><a href="index.html" className="btn btn-info btn-block">Home</a></li>
                            <li><a href="1.html" className="btn btn-info btn-block">Amalina's story</a></li>
                            <li><a href="2.html" className="btn btn-info btn-block">Prescription in the dispensing
                                process</a></li>
                            <li><a href="3.html" className="btn btn-info btn-block">Structure of a prescription</a></li>
                            <li><a href="4.html" className="btn btn-info btn-block">Route of administration</a></li>
                            <li><a href="5.html" className="btn btn-info btn-block">Frequency and duration</a></li>
                            <li><a href="6.html" className="btn btn-info btn-block">Spot the prescription error[1]</a>
                            </li>
                            <li><a href="7.html" className="btn btn-info btn-block">Spot the prescription error[2]</a>
                            </li>
                            <li><a href="8.html" className="btn btn-info btn- btn-block">Now it is your turn...</a></li>
                            <li><a href="9.html" className="btn btn-info btn- btn-block">Summary</a></li>
                            <li><a href="10.html" className="btn btn-info btn- btn-block">Feedback</a></li>
                            <li><a href="11.html" className="btn btn-info btn-block">Resources</a></li>
                            <li className="nav-divider"></li>
                            <li><a href="http://acord.my/rlos">ACoRD RLOs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const domContainer = document.querySelector('#header');
ReactDOM.render(e(Header), domContainer);

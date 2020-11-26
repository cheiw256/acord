'use strict';

const e = React.createElement;

class Footer extends React.Component {
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
                <footer role="contentinfo">
                    <div className="progress">
                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="10"
                             aria-valuemin="0" aria-valuemax="100" style="width: 0%">
                            <span className="sr-only">0% Complete</span>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-8 text-left">
                            <ul>
                                <li><i>"This project has been funded with support from the European Commission. This
                                    publication [communication] reflects the view only of the author, and the Commission
                                    cannot be held responsible for any use which may be made of the information
                                    contained
                                    therein."</i></li>
                                <li>Content authors: Christina Phoay Lay Tan, Julia Binti Suhaimi, Hooi Min Lim, Pauline
                                    Siew Mei Lai, Fadzilah Binti Hanum
                                </li>
                                <li>Storyboard co-creators: Soh Chen Ng, Indra Gayatri Valliyappan, Sui Weng Wong, Asma
                                    Binti Mohd Hussin, Jazmina Binti Azahar
                                </li>
                                <li>Mentor: Hooi Min Lim</li>
                                <li>Developer: Kuhan Krishnan, Jing Hooi Koey, Chin Hai Teo, Kai Nan Tee</li>
                                <li>HTML5 Conversion: <a href="mailto:aaron.fecowycz@nottingham.ac.uk">Aaron
                                    Fecowycz</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 text-right">
                            <img src="images/erasmus.jpg"
                                 alt="Co-funded by the Erasmus+ Programme of the European Union"
                                 width="194" height="50" id="eu_logo"/>
                            <p>RLO released: 1 September 2020 </p>
                            <p>Page last updated: 18 June 2020</p>
                            <p><a href="http://creativecommons.org/licenses/by-nc/2.0/uk/"
                                  title="Creative Commons licence."><img src="images/cc_88x31.png"
                                                                         alt="Creative Commons licence." width="88"
                                                                         height="31"/></a> <a
                                href="http://www.nottingham.ac.uk/nmp/sonet/rlos/rlocopyright.html">Terms of use</a></p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

const domContainer = document.querySelector('#footer');
ReactDOM.render(e(Footer), domContainer);

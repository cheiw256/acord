import Receipt from './images/RX3img.png'
import UMLogo from './images/um logo crop.jpg'
import AcordLogo from './images/acord-logo.png'
import EramusLogo  from './images/erasmus.jpg'
import CreativeLogo from './images/cc_88x31.png'
import {Button, Col, Row} from "react-bootstrap";
import {Component} from "react";
import {FaArrowCircleUp} from "react-icons/fa"

const mainTitle = "Prescription Writing: Back to Basics"

const subTitle = `<b>Learning Objective</b>: At the end of this module, you will be able to explain the
                    components of a prescription. You will be able to write a prescription based on principles
                    of good
                    prescribing.`

const contents = [
    {link: "index.html", label: "Home"},
    {link: "1.html", label: "Amalina's story"},
    {link: "2.html", label: "Pçrescription in the dispensing process"},
    {link: "3.html", label: "Structure of a prescription"},
    {link: "4.html", label: "Route of administration"},
    {link: "5.html", label: "Frequency and duration"},
    {link: "6.html", label: "Spot the prescription error[1]"},
    {link: "7.html", label: "Spot the prescription error[2]"},
    {link: "8.html", label: "Now it is your turn..."},
    {link: "9.html", label: "Summary"},
    {link: "10.html", label: "Feedback"},
    {link: "11.html", label: "Resources"},
]

const releaseDate = "1 September 2020"

const updatedDate = "18 June 2020"

class App extends Component {

    render() {
        return (
            <body>
            <a id="doc_top"></a>
            <a className="sr-only sr-only-focusable" href="#content_start">Skip to main content</a>
            <div className="container" id="main_container">
                <header className="clearfix" role="banner">
                    <img src={UMLogo} width="144" height="65" id="university_logo" className="float-right"/>
                    <img src={AcordLogo} alt="ACoRD" width="65" height="70" id="acord_logo" className="float-right"/>
                    <p className="rlo_title">{mainTitle}</p>
                    <p className="school_title" dangerouslySetInnerHTML={{__html: subTitle}}></p>

                </header>
                <nav className="nav nav-pills d-none d-sm-block" role="navigation" id="main_nav">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle btn-sm" data-toggle="dropdown">
                            Contents <span className="glyphicon glyphicon-chevron-down"></span>
                        </button>
                        <ul className="dropdown-menu" role="menu">
                            {contents.map(({link, title}) => (
                                <li><a href={link}>{title}</a></li>
                            ))}
                            <li className="nav-divider"></li>
                            <li><a href="http://acord.my/rlos">ACoRD RLOs</a></li>
                        </ul>
                    </div>
                    <a href="2.html" className="btn btn-primary btn-sm"><span
                        className="glyphicon glyphicon-circle-arrow-left"></span>
                        Previous </a>
                    <a href="4.html" id="next_btn" className="btn btn-primary btn-sm">Next <span
                        className="glyphicon glyphicon-circle-arrow-right"></span></a>
                </nav>
                <div className="d-block d-sm-none" id="small_screen_menu_container">
                    <p className="rlo_title"> Prescription Writing: Back to Basics</p>
                    <p><a className="btn btn-primary btn-block" data-toggle="collapse" href="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample" id="toggle_ss_nav">
                        Toggle Navigation <span className="glyphicon glyphicon-remove glyphicon-menu-hamburger"
                                                aria-hidden="true"></span></a></p>
                    <div className="collapse" id="collapseExample">
                        <ul className="btn-group btn-group-vertical center-block" role="menu" id="small_screen_menu">
                            {contents.map(({link, label}) => (
                                <li><a href={link} className="btn btn-info btn-block">{label}</a></li>
                            ))}
                            <li className="nav-divider"></li>
                            <li><a href="http://acord.my/rlos">ACoRD RLOs</a></li>
                        </ul>
                    </div>
                </div>

                <main role="main">
                    <article>
                        <a id="content_start"></a>
                        <h2>Structure of a Prescription</h2>

                        <p> A prescription comprises of several key components. It must be written clearly and
                            accurately. </p>
                        <p>Here is a written prescription. There are five important details that you have to correctly
                            fill
                            in a
                            prescription.<br/><br/></p>


                        <div className="row">
                            <div className="col-md-5 col-xs-12 col-md-offset-3">
                                <div id="footballer">
                                    <img className="img-responsive" style={{width: '100%'}} src={Receipt}/>

                                    <a tabIndex="0" className="btn btn-primary image_button" role="button"
                                       id="button_01"
                                       data-info="<p>A diagnosis is written for the pharmacist to confirm the indication of the medication prescribed.</p>">1</a>
                                    <a tabIndex="0" className="btn btn-primary image_button" role="button"
                                       id="button_02"
                                       data-info="<p>Patient's details are required to identify the patient for whom the medications are prescribed. <br><br>Essential information includes: name, age, hospital identification number or personal ID, age and gender. <br><br>The patient's information is important for the pharmacist to counter check on the medication safety issues. <br><br>For children under 12 years of age, the weight must be written on the prescription for dosage calculation.  </p>">2</a>
                                    <a tabIndex="0" className="btn btn-primary image_button" role="button"
                                       id="button_03"
                                       data-info="<p>The medication prescribed with the name of medication in generic form, route of administration, dose, frequency and duration.</p>">3</a>
                                    <a tabIndex="0" className="btn btn-primary image_button" role="button"
                                       id="button_04"
                                       data-info="<p>Signature of the medical practitioner and official stamp are required to ensure that the prescriber is a registered medical practitioner and is authorised to prescribe the medication. <br><br>The prescriber's contact details are necessary should there be a need to clarify the medicine prescribed. <br><br>For example, clarification is needed when the handwriting is illegible, wrong dosage or when a patient is accidentally prescribed with a medication which he/she is allergic to.</p>">4</a>
                                    <a tabIndex="0" className="btn btn-primary image_button" role="button"
                                       id="button_05"
                                       data-info="<p>Date is required to ensure the validity of a prescription. The prescription is valid for the duration it is written for.</p>">5</a>
                                    <a tabIndex="0" className="btn btn-primary image_button" role="button"
                                       id="button_06"
                                       data-info="<p>Cross through the empty space of a prescription to avoid amendment by others.</p>">6</a>
                                    <br/>
                                </div>
                            </div>

                            <div className="col-md-4 col-xs-12">
                                <div id="info-container" className="alert alert-warning" role="alert"></div>
                            </div>

                        </div>

                        <nav className="section_nav" role="navigation">
                            <ul className="clearfix ">
                                <li className="float-left"><a href="2.html" className="btn btn-primary"><span
                                    className="glyphicon glyphicon-circle-arrow-left"></span> Previous </a></li>
                                <li className="float-right"><a href="4.html" className="btn btn-primary">Next <span
                                    className="glyphicon glyphicon-circle-arrow-right"></span></a></li>
                            </ul>
                        </nav>

                    </article>
                </main>

                {/*START doc top navigation*/}
                <div className="d-block d-sm-none" id="doc_top_btn">
                    <Button className="btn btn-info btn-block" onClick={() => window.scrollTo(0, 0)}>
                        Document Top
                        <FaArrowCircleUp
                        
                        
                        />

                    </Button>
                </div>
                {/*END doc top navigation*/}

                <footer role="contentinfo">
                    <div className="progress">
                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="10"
                             aria-valuemin="0"
                             aria-valuemax="100" style={{width: '27%'}}>
                            <span className="sr-only">27% Complete</span>
                        </div>
                    </div>
                    <Row>
                        <Col className="text-left" md={8}>
                            <ul>
                                <li><i>"This project has been funded with support from the European Commission. This
                                    publication
                                    [communication] reflects the view only of the author, and the Commission cannot be
                                    held
                                    responsible for any use which may be made of the information contained therein."</i>
                                </li>
                                <li>Content authors: Christina Phoay Lay Tan, Julia Suhaimi, Hooi Min Lim, Pauline Siew
                                    Mei
                                    Lai,
                                    Fadzilah Hanum
                                </li>
                                <li>Storyboard co-creators: Soh Chen Ng, Indra Gayatri Valliyappan, Sui Weng Wong, Asma
                                    Binti Mohd
                                    Hussin, Jazmina Binti Azahar
                                </li>
                                <li>Mentor: Hooi Min Lim</li>
                                <li>Developer: Kuhan Krishnan, Jing Hooi Koey, Chin Hai Teo, Kai Nan Tee</li>
                                <li>HTML5 Conversion: <a href="mailto:aaron.fecowycz@nottingham.ac.uk">Aaron
                                    Fecowycz</a>
                                </li>
                            </ul>
                        </Col>
                        <Col className="text-right" md={4}>
                            <div className="text-right">
                                <img src={EramusLogo} alt="Co-funded by the Erasmus+ Programme of the European Union" width="194" height="50" id="eu_logo"/>
                                <p>RLO released: {releaseDate}</p>
                                <p>Page last updated: {updatedDate}</p>
                                <p>
                                    <a href="http://creativecommons.org/licenses/by-nc/2.0/uk/" title="Creative Commons licence.">
                                    <img src={CreativeLogo} alt="Creative Commons licence." width="88" height="31"/></a>
                                    <a href="http://www.nottingham.ac.uk/nmp/sonet/rlos/rlocopyright.html">Terms of use</a>
                                </p>
                            </div>
                        </Col>
                    </Row>

                </footer>
            </div>
            </body>
        );
    }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    state = {
        search: "",
        result: [],
    }


    convert() {
        let mySearch = this.state.search; {
            if (this.state.search != "") {
                return mySearch.toLowerCase();
            }
        }
    }


    getPresident() {
        let lowerCased = this.convert();
        axios.get(`http://localhost:5000/presidents/${lowerCased}`)
          .then(res => {
                this.setState({
                    result: res.data
                })
            })
    }

    presPortrait() {
        if(this.state.result != "") {
            return(
            <div className="row">
                <img id="presidential-portrait" src={this.state.result.portrait} className="rounded-circle mx-auto d-block" alt="" />
            </div>);
        }
    }

    render() {
        return (
            <div className="flex-container container-fluid">

                <div id="jumbo-row" className="row">
                    <div className="jumbotron">
                        <h1>Presidential API</h1>
                        <p className="lead">Data on the Presidents of the USA</p>
                    </div>
                </div>

                <div id="description" className="row">
                    <i>
                        <p>Search Presidents with different API calls</p>
                        <p><b>Search by name or by number in the presidency</b></p>
                    </i>
                </div>

                {this.presPortrait()}

                <div className="api-container">
                    <div className="api-content">
                    </div>
                    <div className="api-search-container">
                        <h1>Try an API Call</h1>

                        <div className="input-form">
                            <span>http://localhost:5000/presidents/</span>
                            <input type="text"  placeholder="number/1/"
                                onChange={(e) => this.setState({ search: e.target.value })} />
                                <button onClick={(e) =>  this.getPresident(e)} >Search</button>
                        </div>

                        <div className="sample">
                            <small>Try these formats: <a href="#">number/1</a>, <a href="#">name/George%20Washington</a> </small>
                        </div>

                        <div className="code-result">
                            <p><b><i>President {this.state.result.number} of the United States of America</i></b></p>
                            <p><b>{this.state.result.name}</b><i> ({this.state.result.born} - {this.state.result.died})</i></p>
                            <p><b>In Office:</b> <i>{this.state.result.start} - {this.state.result.end}</i></p>
                            <p><b>Number of terms served:</b> <i>{this.state.result.terms}</i></p>
                            <p><b>Party:</b><i> {this.state.result.party}</i></p>
                            <p><b>Vice President:</b> <i>{this.state.result.vice}</i></p>
                            <p><b>Prior profession:</b><i> {this.state.result.prior}</i></p>
                            <p><b>From:</b> <i>{this.state.result.home}, {this.state.result.state}</i></p>
                            <p><b>Married to:</b><i> {this.state.result.spouse}</i></p>
                        </div>

                    </div>
                </div>

                <div id="info-container" className="row">
                        <div className="col-sm-1 col-lg-1 col-md-1"></div>
                        <div className="col-sm-3 col-lg-3 col-md-3">
                            <h4 className="center">What this is:</h4>
                            <p>Presidential API is a free to use database with information on the Presidents of the USA.</p>
                            <p>This is a work in progress. Please contact us for any errors in our data or any suggestions for additional data we should include on the Presidents.</p>
                        </div>
                        <div className="col-sm-3 col-lg-3 col-md-3">
                            <h4 className="center">How to make a call:</h4>
                            <p>Data will be available for use once this is deployed. </p>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="col-sm-3 col-lg-3 col-md-3">
                            <h4 className="center">Contribute or support</h4>
                            <p>Reach out to us for any suggestions through e-mail, or contribute on GitHub.</p>
                            <p>Donations accepted.</p>
                        </div>
                        <div className="col-sm-1 col-lg-1 col-md-1"></div>
                    </div>
                    
            </div> 
        )
    }
}

export default Home;
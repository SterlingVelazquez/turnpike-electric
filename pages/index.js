import Head from 'next/head'
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Head>
          <title>Turnpike Electric</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway&family=Secular+One&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"></link>
        </Head>

        <main className="main">
          <div className="introSection">
            <img className="introLeftImage" src="lightning.jpg"></img>
            <div className="header">
              <p className="title" id="title">Turnpike Electric</p>
              <div className="divider" id="divider"></div>
              <p className="bottomText">From Tallahassee to the Keys</p>
            </div>
          </div>

          <span className="shadowWrap">
            <img className="introRightImage" src="Panels_Multiple_Repairs2.jpg"></img>
          </span>

          <form className="inquiryForm" id="inquiryform" onSubmit={e => this.submitForm(e)}>
            <div className="inquiryContainer" id="inquirycontainer">
              <p className="inquiryHeader">Make An Inquiry</p>
              <input className="inquiryInput" id="inquiryfirst" defaultValue="" placeholder="First Name *" onInput={e => this.setFirstName(e)} required></input>
              <input className="inquiryInput" id="inquirylast" defaultValue="" placeholder="Last Name *" onInput={e => this.setLastName(e)} required></input>
              <br />
              <input className="emailInput" id="email" defaultValue="" placeholder="Email *" onInput={e => this.setEmail(e)} required></input>
              <textarea className="inquiryNote" id="inquirynote" defaultValue="" onInput={e => this.setNote(e)} placeholder="How can we help?"></textarea>
              <button type="submit" className="submitButton" id="submitbutton">Submit</button>
            </div>
            <div className="submitContainer" id="submitcontainer">
              <p className="sentHeader">Inquiry Sent</p>
              <p className="sentSubheader" id="sentsubheader"></p>
            </div>
          </form>

          <div className="aboutSection">
            <div className="aboutBio">
              <p className="aboutHeader" id="aboutheader"><b>About Us</b></p>
              <div className="aboutSubheader" id="aboutsubheader"><b>Founded in 2010 with only one premise... <br/>Quality Over Anything and Everything</b></div>
              <p className="aboutText">Over 10 years of experience in Commercial, Residential, Hotels and Light Industrial projects. New construction and 
                remodeling. Fire Alarm, Data, Generators and medium to large UPS installations are also part of our line of work.<br/><br/> We can provide <b>Turnkey Solutions</b></p>
            </div>
            <img className="aboutImage" src="Breaker_Two.jpg"></img>
          </div>

          <div className="contactSection">
            <img className="contactBackground" src="Monticello_Outside.jpg"></img>
            <div className="contactBio">
              <p className="contactHeader" id="contactheader"><b>Contact Us</b></p>
              <i class="fas fa-phone-alt" id="phoneIcon"></i>
              <p className="contactText" id="phone">(786) 712-1024</p>
              <br/>
              <i class="fas fa-print" id="faxIcon"></i>
              <p className="contactText" id="fax">(305) 675-3711</p>
              <br/>
              <i class="fas fa-id-badge" id="licenseIcon"></i>
              <p className="contactText" id="license">EC13004836</p>
            </div>
            <span className="shadowWrap" id="wrap2">
              <img className="contactImage" src="Monticello_Outside.jpg"></img>
            </span>
          </div>

          <div className="footer">
            <p className="copyright">Copyright © 2021 Turnpike Electric</p>
            <p className="powered">Powered by Turnpike Electric</p>
          </div>

        </main>
      </div>
    )
  }
}

export default Home;
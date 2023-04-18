import Head from 'next/head'
import React from 'react';

var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
const emailTest = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

class Application extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            month: '',
            day: '',
            year: '',
            experience: '',
            employment: '',
            tools: '',
            description: '',
            language: false
        }
    }

    toggleApply() {
        document.getElementById("applyform").scrollTo({ top: 0 });
        document.getElementById("applyform").classList.toggle("show");
        document.getElementById("fullscreenshadow").classList.toggle("show");
    }
    toggleSent() {
        document.getElementById("applyform").scrollTo({ top: 0 });
        document.getElementById('applycontainer').classList.toggle("hide");
        document.getElementById("applyform").classList.toggle("submit");
    }
    closeApply() {
        this.cancelForm();
        document.getElementById('applysubmitcontainer').classList.toggle("show");
        setTimeout(() => { this.toggleSent() }, 500);
    }

    submitForm(e) {
        e.preventDefault();

        Email.send({
            SecureToken: "802e66e4-b8d2-4e2b-8e0e-8fbe8094db4d",
            To: 'website@turnpikelectric.us',
            From: "website@turnpikelectric.us",
            Subject: "Job Application from " + this.state.fullname,
            Body: `<html><p>Name: ${this.state.fullname} </p></br>` + 
                `<p>Email: ${this.state.email} </p></br>` +
                `<p>Date of Birth: ${this.state.month}/${this.state.day}/${this.state.year}</p></br>` + 
                `<p>Years of Experience: ${this.state.experience} </p></br>` + 
                `<p>Previous Place of Employment: ${this.state.employment} </p></br>` + 
                `<p>Have trade tools? - ${this.state.tools} </p></br>` + 
                `<p>Brief description of experience and skills: ${this.state.description} </p></br></br></html>`,
        }).then(function () { })

        document.getElementById('applysubmitcontainer').classList.toggle("show");
        this.toggleSent();
    }
    cancelForm() {
        this.toggleApply();
        document.getElementById("applyform").reset();
    }

    setFullName(e) { this.setState({ fullname: e.target.value }) }
    setEmail(e) { this.setState({ email: e.target.value }) }
    setMonth(e) {
        var month = e.target.value
        if (!/^\d+$/.test(month) || month.length > 2) e.target.value = this.state.month
        this.setState({ month: e.target.value })
        if (month.length > 1) document.getElementById("datedayinput").focus()
    }
    setDay(e) {
        var day = e.target.value
        if (!/^\d+$/.test(day) || day.length > 2) e.target.value = this.state.day
        this.setState({ day: e.target.value })
        if (day.length > 1) document.getElementById("dateyearinput").focus()
    }
    setYear(e) {
        var year = e.target.value
        if (!/^\d+$/.test(year) || year.length > 4) e.target.value = this.state.year
        this.setState({ year: e.target.value })
    }
    setExperience(e) {
        var experience = e.target.value
        if (!/^\d+$/.test(experience) || experience.length > 2) e.target.value = this.state.experience
        this.setState({ experience: e.target.value })
    }
    setEmployment(e) { this.setState({ employment: e.target.value }) }
    setTools(e) { this.setState({ tools: e }) }
    setDescription(e) { this.setState({ description: e.target.value }) }

    render() {
        return (
            <form className="applyForm" id="applyform" onSubmit={e => this.submitForm(e)}>
                <div className="applyContainer" id="applycontainer">
                    <p className="applyHeader">Job Application</p>
                    <p className="applySubheader">All fields are required</p>

                    <input className="applyInput" id="applyfirst" defaultValue="" placeholder="Full Name" onInput={e => this.setFullName(e)} required></input><br />

                    <input className="applyInput" id="applyemail" defaultValue="" placeholder="Email" onInput={e => this.setEmail(e)} required></input><br />

                    <p className="applyField">Date of Birth</p>
                    <input className="dateInput" id="datemonthinput" defaultValue="" placeholder="MM" onInput={e => this.setMonth(e)} required></input>
                    <p className="applyDateDivider">/</p>
                    <input className="dateInput" id="datedayinput" defaultValue="" placeholder="DD" onInput={e => this.setDay(e)} required></input>
                    <p className="applyDateDivider">/</p>
                    <input className="dateInput" id="dateyearinput" defaultValue="" placeholder="YYYY" onInput={e => this.setYear(e)} required></input>
                    <br />

                    <p className="applyField">Years of Experience</p>
                    <input className="experienceInput" id="experienceinput" defaultValue="" onInput={e => this.setExperience(e)} required></input>

                    <input className="applyInput" id="applyemployment" defaultValue="" placeholder="Previous Place of Employment" onInput={e => this.setEmployment(e)} required></input><br />

                    <p className="applyField">Have trade tools?</p>
                    <select className="toolSelect" name="tools" id="tool-select" defaultValue="No">
                        <option className="toolOption" value="No" onClick={e => this.setTools("No")}>No</option>
                        <option className="toolOption" value="Yes" onClick={e => this.setTools("Yes")}>Yes</option>
                    </select>

                    <textarea className="applyDescription" id="applydescription" defaultValue="" onInput={e => this.setDescription(e)} placeholder="Briefly describe your experience and skills" required></textarea>
                    <button type="button" className="cancelButton" id="cancelbutton" onClick={e => this.cancelForm()}>Cancel</button>
                    <button type="submit" className="applySubmit" id="applysubmit">Submit</button>
                </div>
                <div className="applySubmitContainer" id="applysubmitcontainer">
                    <p className="applySentHeader">Application Sent</p>
                    <p className="applySentSubheader" id="applysentsubheader">You will receive a response within 5 business days.<br/><br/>You may also feel free to contact us using the information at the bottom of the page. Thank you for applying!</p>
                    <button type="button" className="applyCloseButton" onClick={() => this.closeApply()}>Close</button>
                </div>
            </form>
        )
    }
}

export default Application;
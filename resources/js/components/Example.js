import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputForm: { amount: 30, },
            inputError: {},
            errorMsg: [false, ''],
            summary: false,
            sending: false,
            sendErrMsg: '',
            sendOkMsg: '',
            checkingAmount: false,
            amountErrMsg:[false,''],

        };
        this.checkAmount = this.checkAmount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.inputValidate = this.inputValidate.bind(this);
        this.emailValidate = this.emailValidate.bind(this);
    }

    backToForm(){
        this.setState({ summary: false, sending: false, sendErrMsg: '', sendOkMsg: '',})
    }

   async checkAmount(event) {
        this.setState({checkingAmount: true});
        event.persist();
        let inputForm = this.state.inputForm;
        let checkAmount = event.target.value;
        const response = await fetch('http://0-360.pl/public/vouchers.json');
        const data = await response.json();
          
    setTimeout(()=>{
        if (data.voucher[checkAmount] == 0) {
            
            const msg = 'Voucher amount ' + checkAmount + ' is unavailable. Please choose another.';
            this.setState({amountErrMsg: [true, msg]})
        } else {
            inputForm["amount"] = checkAmount;
            this.setState({ inputForm, amountErrMsg:[false, ''], });
            console.log("amount", this.state.inputForm.amount);
        }
        this.setState({checkingAmount: false});
    }, 500);

    }

    inputValidate(event) {
        let inputForm = this.state.inputForm;
        let inputError = this.state.inputError;
        inputForm[event.target.name] = event.target.value;

        if (event.target.value.length < 2) {
            inputError[event.target.name] = 'Error: Must type at least 2 characters';
            this.setState({ inputError });
        } else {
            inputError[event.target.name] = '';
            this.setState({ inputError });
        }
        this.setState({ inputForm });
        console.log(inputError);
        }

    emailValidate(event) {
        let inputError = this.state.inputError;
        let inputForm = this.state.inputForm;
        inputForm[event.target.name] = event.target.value;
        this.setState({ inputForm });
        const reg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!reg.test(event.target.value)) {
          
          inputError[event.target.name] = 'Email address is invalid';
          this.setState({ inputError });
        }else{
            
            inputError[event.target.name] = '';
            this.setState({ inputError });
        }
        console.log(inputError)
    }


    handleChange(event) {
        let inputForm = this.state.inputForm;
        inputForm[event.target.name] = event.target.value;
        this.setState({ inputForm });
    }

    handleSubmit(event) {
        event.preventDefault();
        let errorsStrings = "";
        //console.log(Object.keys(this.state.inputError).length);
        //console.log(this.state.inputError);
        if (Object.keys(this.state.inputError).length === 4) {
            Object.values(this.state.inputError).forEach(val => {
                errorsStrings = errorsStrings.concat(val);

            });
            console.log("validate " + errorsStrings.length);
            if (errorsStrings.length === 0) {
                this.setState({ errorMsg: [false, ''] });
                //sending form - summary page
                this.setState({ summary: true });

            } else { this.setState({ errorMsg: [true, 'The form contains errors'] }); }
        } else {
            //console.log("not valid");
            this.setState({ errorMsg: [true, 'Please fill all mandatory fields'] });
        }


    }

    sendForm() {
        this.setState({ sending: true });
        const sendOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                from: this.state.inputForm.from,
                from_email: this.state.inputForm.fromEmail,
                to: this.state.inputForm.to,
                to_email: this.state.inputForm.toEmail,
                amount: this.state.inputForm.amount,
                message: this.state.inputForm.message
            })
        };
        fetch('http://127.0.0.1:8000/api/voucher', sendOptions)
            .then(async response => {
                const data = await response.json();
                
                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                this.setState({ sendOkMsg: 'The form was send', sending: false });

            })
            .catch(error => {
                console.error('There was an error!', error);
                this.setState({ sendErrMsg: error.toString(), sending: false });
            });

    }

    alertAmount(){
        return(<div className="alert alert-danger m-4">{this.state.amountErrMsg[1]}</div>)
    }
    alertValidate(){
        return(<div className="alert alert-danger m-4">{this.state.errorMsg[1]}</div>)
    }

    elementForm() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-6 p-3 columnForm">

                        <div className="form-group">
                            <label htmlFor="from">From: </label><span className="alert-danger ml-2"> {this.state.inputError.from} </span>
                            <input type="text" className="form-control mb-4" id="from" name="from" value={this.state.inputForm.from} placeholder="YOUR NAME HERE" maxlength="50" onChange={this.inputValidate} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fromEmail">Your email address:</label><span className="alert-danger ml-2"> {this.state.inputError.fromEmail} </span>
                            <input type="text" className="form-control mb-4" id="fromEmail" name="fromEmail" value={this.state.inputForm.fromEmail} placeholder="YOUR EMAIL ADDRESS HERE" maxlength="100" onChange={this.emailValidate} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="to">To:</label><span className="alert-danger ml-2"> {this.state.inputError.to} </span>
                            <input type="text" className="form-control mb-4" id="to" name="to" value={this.state.inputForm.to} placeholder="RECIPIENT'S NAME HERE" maxlength="100" onChange={this.inputValidate} />
                        </div>
                        <div >
                            <label htmlFor="toEmail">Recipient's email address:</label><span className="alert-danger ml-2"> {this.state.inputError.toEmail} </span>
                            <input type="text" class="form-control mb-4" id="toEmail" name="toEmail" value={this.state.inputForm.toEmail} placeholder="RECIPIENT'S EMAIL ADDRESS HERE" maxlength="120" onChange={this.emailValidate} />
                        </div>
                    </div>
                    <div className="col-md-6 p-3 columnForm">
                        <div className="form-group">
                            <label htmlFor="formSelect">Voucher amount</label>
                            <select className="form-control" id="amount" value={this.state.inputForm["amount"]} onChange={this.checkAmount}>
                                <option value='10'>&#163; 10</option>
                                <option value='20'>&#163; 20</option>
                                <option value='30'>&#163; 30</option>
                                <option value='40'>&#163; 40</option>
                                <option value='50'>&#163; 50</option>
                                <option value='60'>&#163; 60</option>
                                <option value='70'>&#163; 70</option>
                                <option value='80'>&#163; 80</option>
                                <option value='90'>&#163; 90</option>
                                <option value='100'>&#163; 100</option>

                            </select>
                        </div>
                        
                        {this.state.errorMsg[0] && (this.alertValidate())}
                        {this.state.amountErrMsg[0] && (this.alertAmount())}

                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea className="form-control" id="message" rows="5" name="message" value={this.state.inputForm.message} onChange={this.handleChange}></textarea>
                        </div>
                    </div>
                </div>

                <div className="endForm">
                    <div>FAQs about our Gift Vouchers</div>
                    <div><input type="submit" className="btn mb-2" value="BUY GIFT VOUCHER" /></div>
                </div>
            </form>
        );
    }

    elementSend() {
        return (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className="content border rounded col-md-10 p-4 m-4">

                    <h2>SUMMARY GIF VOUCHER</h2>
                    <h5>Voucher Amount:</h5><h3>{this.state.inputForm.amount}</h3>
                    <h5>From:</h5><h3>{this.state.inputForm.from}, {this.state.inputForm.fromEmail}</h3>
                    <h5>To:</h5><h3>{this.state.inputForm.to}, {this.state.inputForm.toEmail}</h3>
                    <h5>Message:</h5><h3>{this.state.inputForm.message}</h3>
                    {this.state.sendOkMsg.length > 0 ? this.elementConfirm() : this.elementButtons()}
                </div>  
            </div>
        );
    }

    elementConfirm(){
        return(
            <div className="alert alert-success" role="alert">{this.state.sendOkMsg}</div>
        )
    }

    elementButtons() {
        if (this.state.sending) {
            return(
                <div className="alert alert-secondary" role="alert">Sending data ...</div>
            )

        } else {
            return (
            <>
              {this.state.sendErrMsg.length > 0 && (<div className="alert alert-danger" role="alert"> {this.state.sendErrMsg} <br />Try again</div>)}

              <input type="submit" className="btn m-3" value="ACCEPT AND BUY GIFT VOUCHER" onClick={() => this.sendForm()} /><br />
              <input type="submit" className="btn btn-sm" value="BACK" onClick={() => this.backToForm()} />
            </>
            )
        }
    }

    elementAmount(){
        if(this.state.checkingAmount){
            return(<h2>checking ...</h2>)
        }else{
        return(<h1>&#163; {this.state.inputForm.amount}</h1>)
        }
    }


    render() {
        return (

            <div className="row justify-content-center">

                <div className="col-md-12" >
                    <div>GIFT VOUCHERS</div>
                    <div className="row2">
                        <div className="bg1"><img src="http://127.0.0.1:8000/img/img_left596x360.png" /></div>
                        <div className="bg2 "><img src="http://127.0.0.1:8000/img/img_r360e.png" />
                            <div className="amount">{this.elementAmount()}</div>
                        </div>
                    </div>
                    {
                        this.state.summary ? this.elementSend() : this.elementForm()
                    }
                </div>

            </div>

        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

import React, {Component} from 'react'
import RandomHadiah from "./random"


var firebase = require('firebase')
var uuid = require('uuid')

var config = {
    apiKey: "AIzaSyDHk0RPIdYMxaabyr_r5bhThPze8YB77pY",
    authDomain: "usurvey-001.firebaseapp.com",
    databaseURL: "https://usurvey-001.firebaseio.com",
    projectId: "usurvey-001",
    storageBucket: "usurvey-001.appspot.com",
    messagingSenderId: "1044358092500"
};
firebase.initializeApp(config);



class Survey extends Component {
    constructor(){
         super()
         this.state = {
             uid: uuid.v1(),
             pembuka: true,
             page1: false,
             page2: false,
             pageSurvey: false,
             user: {
                 username: "",
                 email: 0,
                 phone: 0
             },
             
             survey: {
                 quest1: "",
                 quest2: "",
                 quest3: ""

             }
         }

         this.next = this.next.bind(this)
         this.masuk = this.masuk.bind(this)
         this.submitSurvey = this.submitSurvey.bind(this)
         this.finish = this.finish.bind(this)
    }

    next(){
        this.setState({
            pembuka: false,
            page1: true,
            page2: false,
            
            
        })
    }

    masuk(e){

        var st = this.state.user

        var username = this.refs.username.value
        var email = this.refs.email.value
        var phone = this.refs.phone.value

        st.username = username
        st.email = email
        st.phone = phone
        
        this.setState({
            page2: false,
            pembuka:false,
            page1: false,
            pageSurvey: true
        })        

        e.preventDefault()
    }

    submitSurvey(e){
        var sur = this.state.survey
        sur.quest1 = this.refs.answer1.value
        sur.quest2 = this.refs.answer2.value
        sur.quest3 = this.refs.answer3.value

        this.setState({
            page2: true
        })
        e.preventDefault()
    }


    finish(){
        firebase.database().ref('uSurvey/' + this.state.uid).set({
            dataUser: this.state.user,
            survey: this.state.survey,
            date: Date()
        })

        this.setState({pembuka: true})
    }

    render(){

        var pembuka
        var page1
        var pageSurvey

        if(this.state.pembuka === true){
            pembuka = <div>
                <h3>selamat datang {this.state.test}</h3>
                <button onClick={this.next}>Next</button>
            </div>
        }else if(this.state.page1 === true){
            page1 = <div>
                <h1>Data User</h1>
                <form onSubmit={this.masuk} class="formInput">
                    <input type="text" ref="username" placeholder="masukan nama anda" required/>
                    <input type="email" ref="email" placeholder="masukan email anda" required/>
                    <input type="number" ref="phone" placeholder="masukan no Hape anda" required/>
                    <input type="submit" value="submit"/>

                </form>
            </div>
        }else if(this.state.page2 === true){
            page1 = <div>
                <h3>Terimakasih telah melakukan <br />survey singkat ini</h3>
                <h3>{this.state.user.username}</h3>
                <button onClick={this.finish}>Finish</button>
            </div>
        }else if(this.state.pageSurvey === true){
            pageSurvey = < div >
                <h1>Survey</h1>
                <form onSubmit={this.submitSurvey} class="formInput">
                    <input type="text" ref="answer1" placeholder="smartphone yang anda gunakan ?" required/>
                    <input type="text" ref="answer2" placeholder="sim card yang anda gunakan ?" required/>
                    <input type="text" ref="answer3" placeholder="online shop kesukaan" required/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        }

       


         return(
            <div>
                {pembuka}
                {page1}
                {pageSurvey}
                
            </div>
        )
    }
}

export default Survey

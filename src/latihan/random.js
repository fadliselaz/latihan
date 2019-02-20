import React, {Component} from 'react'
import "../App.css"
import LogoArtace from "./artaceLogo"

class RandomHadiah extends Component {
    constructor(){
        super()
        this.state = {
            hadiah: ["sepatu Nike", "chiki balls", "lolypop", "buku gambar", "bang bang", "voucher 10.000", "chiki balls", "lolypop", "buku gambar", "bang bang", "voucher 10.000"],
            dapat: "",
            display: "none"
        }
    }

    start() {
        this.refs.mulai.style.display = "none"
        this.refs.main.style.display = "block"
    }

    acak(){
        
        var hd = this.state.hadiah
        var ac = Math.floor(Math.random()*11)
        this.setState({
            dapat: hd[ac]
        })
        
        this.refs.main.style.display = "none"
        
        this.setState({display: "flex"})

        setTimeout(() =>{
        this.setState({display: "none"})
        this.refs.dapatnya.style.display = "flex"
        },3000)

        
        
    }

    selesai(){
        this.refs.mulai.style.display = "flex"
        this.refs.main.style.display = "none"
        this.refs.dapatnya.style.display = "none"
        this.setState({dapat: ""})
    }

    

    render(){
        
        var hide = {
            display: "none"
        }
        
        var clear = {
            backgroundColor: "yellow",
            color: "purple",
        }
        return(
            < div class = "App-header" >
                <div ref="mulai" class="App-header">
                    <h1>Silakan klik start untuk mulai</h1>
                    <button class="bt animate bounceIn delay-1s" onClick={() => this.start()}>Start</button>    
                </div>

                <div ref="main" class="App-header" style={hide}>
                    <div class="random">
                    <h1 class="animate bounceIn slow">Dapatkan Hadiahnya..!!</h1>
                    <p class="animate bounceIn slow">Silakan pilih Huruf Berikut <br/> dan dapatkan hadiahnya..</p>
                    <button onClick={() => this.acak()}class="bt animate bounceIn slow"> A</button>
                    <button onClick={() => this.acak()} class="bt animate bounceIn faster"> R</button>
                    <button onClick={() => this.acak()} class="bt animate bounceIn fast"> T</button>
                    <button onClick={() => this.acak()}class="bt animate bounceIn slow"> A</button>
                    <button onClick={() => this.acak()} class="bt animate bounceIn faster"> C</button>
                    <button onClick={() => this.acak()} class="bt animate bounceIn fast"> E</button>
                    </div>
                </div>

                <div ref="dapatnya"  class="cardDapat">
                    <h3>Selamat kamu mendapatkan </h3>
                    <h1 class="animated infinite flash">
                    {this.state.dapat}
                    </h1>
                    <button onClick={() => this.selesai()}class="bt animate bounceIn fast" style={clear}>SELESAI</button>
                    

                </div>

                <div>
                    <LogoArtace ds={this.state.display} ref="artace"/>
                </div>

                
            </div>
        )
    }
}

export default RandomHadiah
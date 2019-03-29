import React, { Component } from 'react';
import Iframe from 'react-iframe'



class Frame extends Component {
    render() {
        return (
            <div>
                < Iframe url = "https://jatim.indeksnews.com/2019/02/03/polling-siapa-calon-anggota-dpr-ri-jawa-timur-dapil-xi-pilihan-anda/"
                width = "450px"
                height = "450px"
                id = "myId"
                className = "myClassname"
                display = "initial"
                position = "relative"
                allowFullScreen />
            </div>
        )
    }
}

export default Frame;

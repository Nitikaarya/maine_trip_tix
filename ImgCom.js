import React from 'react'

function ImgCom({ src }) {
    let imgStyles={
        width:100+"%",
        height:"auto",
    }
    return <img src={src} alt="slide-img" style={imgStyles}/>
}

export default ImgCom

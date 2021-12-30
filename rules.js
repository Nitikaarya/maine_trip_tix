import React from 'react';
import './rules.css';

function Rule(){
    return(
        <div id='rules' className ='bgNotGray'>
            <br/><br/><br/><br/><h1>Rules</h1><br/>
            <div style = {{textAlign:'justify'}}>
            <h5>Maine Trip Tix complies with Sectioin 4.2.3 G in the Rules from the Office of Marijuana Policy:</h5>
            <p>A licensee or individual identification card holder transporting marijuana or marijuana products must carry three copies of each transport manifest during the transportation of marijuana or marijuana products and must:</p>
            <p>a) Give one copy to the receiving licensee following the verification of the transport manifest and delivery of the marijuana or marijuana products.</p>
            <p>b) Possess one copy that is to be provided to a law enforcement officer or government agent upon request.</p>
            <p>i) A licensee or individual identification card holder who has given a transport manifest to a law enforcement officer or government agent shall obtain the name, rank, and agency of the law enforcement officer.</p>
            <p>ii) The licensee or individual identification card holder who has given a transport manifest to a law enforcement officer or government agent must retain the name and identification number of the law enforcement officer or government agent for the duration of the transport.</p>
            <p>c) Maintain a copy of the transport manifest that must be returned to the marijuana establishment for record-keeping purposes.</p>
            </div><br/><br/><br/>
        </div>
    )
}
export default Rule;
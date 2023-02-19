import React from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import '../styles/wallet.css'



const Wallet = () => {
    return (
        <div className ="Wallet">
            {/* <h1>Connect to Wallet</h1> */}
            <button class="cWallet" onClick={async ()=>{
                
                if(window.ethereum){
            
                    console.log(await window.ethereum.enable());
                }
                }}><i class="ri-wallet-line"></i>Connect Wallet</button>
        </div>
    )
}
export default Wallet
import React from 'react'

import { Routes, Route, Navigate } from "react-router-dom"

import Home from "../pages/Home"
import Market from "../pages/Market"
import Create from "../pages/Create"
import Lottery from "../pages/Lottery"
import SellerProfile from "../pages/SellerProfile"
import EditProfile from "../pages/EditProfile"
import Wallet from "../pages/Wallet"

const Routers = () => {
    return ( <
        Routes >
        <
        Route path = "/"
        element = { < Navigate to = "/nft-react/home" / > }
        /> <
        Route path = "/nft-react/home"
        element = { < Home / > }
        /> <
        Route path = "/nft-react/market"
        element = { < Market / > }
        /> <
        Route path = "/nft-react/create"
        element = { < Create / > }
        /> <
        Route path = "/nft-react/lottery"
        element = { < Lottery / > }
        /> <
        Route path = "/nft-react/edit-profile"
        element = { < EditProfile / > }
        /> <
        Route path = "/nft-react/seller-profile"
        element = { < SellerProfile / > }
        />  
        <Route path="/nft-react/wallet" element={<Wallet />} />
        </Routes >
    )
}

export default Routers
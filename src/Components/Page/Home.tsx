
import React, { Fragment } from 'react'
import DesktopStackLayout from "../Layout/desktop-stack.layout";
import Navbar from "../Shared/Navbar/MenuBar";
import LatestNewsComponent from "../Section/LatestNewsComponent/LatestNewsComponent";
import Footer from "../Section/Footer/Footer"
const HomePage = () => {
    return (
        <Fragment>
            <DesktopStackLayout components={[{
                type: 'nav',
                component: <Navbar />
            },
            {
                type: 'section',
                component: <LatestNewsComponent />
            },
            {
                type: 'footer',
                component: <Footer />
            },
            ]} />
        </Fragment>
    )
}

export default HomePage
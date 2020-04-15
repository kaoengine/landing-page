
import React, { Fragment } from 'react'
import FixedMenuLayout from "../Layout/base.layout";
import Navbar from "../Shared/Navbar/MenuBar";
import LatestNewsComponent from "../Section/LatestNewsComponent/LatestNewsComponent";
import Footer from "../Section/Footer/Footer"
const HomePage = () => {
    return (
        <Fragment>
            <FixedMenuLayout components={[{
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
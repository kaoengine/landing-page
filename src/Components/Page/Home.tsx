
import React, { Fragment, ReactElement } from 'react'
import DesktopStackLayout from "../Layout/desktop-stack.layout";
import Navbar from "../Shared/Navbar/MenuBar";
import LatestNewsComponent from "../Section/LatestNewsComponent/LatestNewsComponent";
import Footer from "../Section/Footer/Footer";
import { LayoutItemType } from "../../Types/LayoutItem";

/** 
 * As clean process data 1st is define on component as [] 
 * then when data is bigger we can split out as module.
*/

type Component = {
    type: LayoutItemType,
    component: ReactElement
}

const HomePage = () => {
    let homeComponents: Array<Component> = [{
        type: LayoutItemType.Nav,
        component: <Navbar />
    },
    {
        type: LayoutItemType.Section,
        component: <LatestNewsComponent />
    },
    {
        type: LayoutItemType.Footer,
        component: <Footer />
    },
    ]
    return (
        <Fragment>
            <DesktopStackLayout components={homeComponents} />
        </Fragment>
    )
}

export default HomePage
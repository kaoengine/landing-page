import React, { Fragment } from 'react'
import {
    Container,
} from 'semantic-ui-react'


/**
 * The !fixed navigation
 *
 * @version 1.0.1
 * @author [Khanh Tran](https://github.com/khanhtran8)
 */
const LayoutSegment = (componentObject: any) => {
    const { type, component } = componentObject;

    switch (type) {
        case 'nav':
            return <Fragment>
                {component}
            </Fragment>
        case 'footer':
            return <Fragment>
                {component}
            </Fragment>
        /** SEGMENT BY DEFAULT */
        default:
            return <Fragment>
                {component}
            </Fragment>
    }
}

/**
 * Stack Layout
 */

const StackLayout = ({ components }: any) => {
    return (
        <Fragment>
            {
                components.map((component: any, index: number) =>
                    <LayoutSegment key={index} {...component}></LayoutSegment>)
            }
        </Fragment>
    )
}

export default StackLayout
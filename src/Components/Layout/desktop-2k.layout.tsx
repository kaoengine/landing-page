import React, { Fragment } from 'react'
import {
    Container,
} from 'semantic-ui-react'


/**
 * The fixed navigation
 *
 * @version 1.0.1
 * @author [Khanh Tran](https://github.com/khanhtran8)
 */
const LayoutSegment = (componentObject: any) => {
    const { type, component } = componentObject;

    console.log('componentObject', componentObject);

    switch (type) {
        case 'nav':
            return <Container fixed='top' inverted>
                {component}
            </Container>
        case 'footer':
            return <Container>
                {component}
            </Container>
        /** SEGMENT BY DEFAULT */
        default:
            return <Container>
                {component}
            </Container>
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
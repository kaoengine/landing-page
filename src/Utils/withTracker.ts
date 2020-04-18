import React, { Component, ReactElement } from 'react'
import GoogleAnalytics from 'react-ga'
import config from '../Config/Config'

GoogleAnalytics.initialize(config.ga_uid)

const withTracker = (WrappedComponent: ReactElement, options = {}) => {

    const trackPage = (page: any) => {
        GoogleAnalytics.set({
            page,
            ...options
        })
        GoogleAnalytics.pageview(page)
    }

    const HOC = class extends Component {
        private _page: any;
        componentDidMount() {
            this._page = this.props && this.props.location.pathname;
            trackPage(this._page);
        }

        componentWillReceiveProps(nextProps: any) {
            const currentPage = this.props.location.pathname;
            const nextPage = nextProps.location.pathname;

            if (currentPage !== nextPage) {
                trackPage(nextPage)
            }
        }

        render() {
            return <WrappedComponent { ...this.props } />
        }
    }

    return HOC
}

export default withTracker
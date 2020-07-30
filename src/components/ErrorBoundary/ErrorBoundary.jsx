import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }
    componentDidCatch(error) {
        console.log('error', error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <React.Fragment>
                    <div className="empty-sb-wrapper">
                        <div className="sb-empty-heading">There is some error, please try reload the website or visit later</div>
                    </div>
                </React.Fragment>
            )
        }
        return this.props.children

    }
}

export default ErrorBoundary;

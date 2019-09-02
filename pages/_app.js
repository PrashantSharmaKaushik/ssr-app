import React from 'react'
import App, { Container } from 'next/app'
import redirectTo from '../components/redirectTo';



class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        if (typeof window !== 'undefined') {
              
        }

        return { pageProps }
    }

    componentDidMount() {
        // console.log(window, "window")
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default MyApp
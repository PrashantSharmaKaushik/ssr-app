import React, { Component } from 'react';
import Link from 'next/link';
import withRedux from "next-redux-wrapper";
import actions from "../actions";
import store from "../store"
import { connect } from "react-redux";
import Router from 'next-routes';

const { dispatch } = store;

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

class Nav extends Component{ 

  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  componentDidMount() {
    dispatch({
      type: "AUTH_LOGIN",
      payload: {name : "Prashant"}
    });
  }

  render() {
    return (<nav>
      <ul>
        <li>
          <Link href="Home">
            <a className="Home-Anchor">Home</a>
          </Link>
        </li>
        <ul>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </ul>

      <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
    </nav>
)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCount: () => dispatch(Actions.addCount())
  };
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};


export default connect(mapStateToProps)(Nav);

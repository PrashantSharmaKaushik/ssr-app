import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import { Login } from "./Login" 
import { Provider } from 'react-redux';
import store from '../store';
import "../assets/scss/style.scss";

const Home = () => (
  <Provider store={store}>
      <div>
      <Head title="Home" />
      <div class="wrapper">
        <Link href="/Login">
          <span class="group-btn">
            <a href="#" class="btn btn-primary btn-md">login <i class="fa fa-sign-in"></i></a>
          </span>
        </Link>
      </div>
      {/* <Login /> */}
       <Nav/>
        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
        </div>
    </Provider>
)

export default Home;

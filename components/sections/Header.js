import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import { logEvent } from '../../utils/analytics';

import IfOffline from '../../containers/IfOffline';
import NavMenu from '../../containers/NavMenu';

function Header(props) {
  const { description, active, title  } = props;
  // const GA_NAVIGATION_CATEGORY="Navigation";
  // const GA_NAVIGATION_ACTION="Nav Logo";
  // const GA_NAVIGATION_LABEL=`Nav Logo From ${active||'-'} to Home`
	return(
		<header>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta 
          name="description" 
          content={description || "Vive la experiencia completa con Italika el Motor de tu vida."}
        />
        {
          (active=="Home" || active=="About" || active=="Resume" || active=="Work" || active=="Contact")?
          <meta name="robots" content="index, follow" />
          :<meta name="robots" content="noindex, nofollow" />
        }
        <title>{title || "Italika | El motor de tu vida"}</title>
        <link rel="icon" href="http://italika.mx/recursos/img/Generales/favicon.png" />
        
        {/* <!-- Chrome, Firefox OS and Opera --> */}
        <meta name="theme-color" content="#020f2b" />
        <link rel="manifest" href="/static/manifest.webmanifest" />

        {/* <!-- iOS --> */}
        <link rel='apple-touch-icon' href='/static/Logo_256.png' />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-title" content="Italika" />
        <meta name="apple-mobile-web-apps-status-bar-style" content="black-translucent" />
      </Head>
      
      <div className="navbar">
        <div className="left">
          <Link href="/">
            <img 
              className="btn" 
              src="/static/Logo_55.png" 
              alt="Italika"
              // onClick={()=>logEvent(GA_NAVIGATION_CATEGORY,GA_NAVIGATION_ACTION,GA_NAVIGATION_LABEL)}
            />
          </Link>  
          <div className="Offline"><IfOffline>Offline</IfOffline></div>
        </div>

        <NavMenu active={active}/>
        
      </div>
      
      <style jsx global>{`
        body{
          margin: 0;
          margin-top: 100px;
          /*font-family: system-ui;
          background-color: #fff;*/
          background-color: #f1f1f1;
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: transparent;
          font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
        }
        button{
          user-select: none;
        }
        @media only screen and (max-width : 667px) {
          body{
            margin-top: 80px;
          }
        }
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        /*COLOR Normal*/
        ::-webkit-scrollbar-thumb {
          background: #040f28;
          border-radius: 10px;
          border: 0px none #ffffff;
          box-shadow: inset 0 0 6px rgba(0,0,0,.3);
          -moz-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        }
        /*COLOR HOVER*/
        ::-webkit-scrollbar-thumb:hover {
          background: #030d22;
        }
        ::-webkit-scrollbar-thumb:active {
          background: #020919;
        }
        ::-webkit-scrollbar-track {
          background: #848890;
          border-radius: 10px;
          border: 0px none #ffffff;
          box-shadow: inset 0 0 6px rgba(0,0,0,.3);
          -moz-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        }
        ::-webkit-scrollbar-track:hover {
          background: #848890;
        }
        ::-webkit-scrollbar-track:active {
          background: #848890;
        }
        ::-webkit-scrollbar-corner {
          background: transparent;
        }
        ::-webkit-scrollbar-button {
          width: 0px;
          height: 0px;
        }
        ::-webkit-scrollbar-button:start {
          display: none;
        }
        ::-webkit-scrollbar-button:end {
          display: none;
        }
      `}</style>
      <style jsx>{`
        header{
          top: 0;
          left: 0;
          right: 0;
          z-index: 99;
          padding: 10px;
          position: fixed;
          min-height: 28px;
          max-height: 28px;
          background: #020f2b;
          border-radius: 0px 0px 10px 10px;
          box-shadow: 0 1px 5px 0 rgba(0,0,0,0.4);
        }
        .navbar{
          display:grid;
          grid-template-columns: 9fr 1fr;
          align-items:center;
        }
        img{
          width: 30px;
        }
        .btn{
          cursor:pointer;
        }
        .left{
          flex:1;
          float:left;
          display:grid;
          grid-auto-flow: column;
          grid-template-columns: 40px 1fr;
        }
        .left .Offline{
          margin:0;
          padding:0;
          color:#0f3585;
          font-size: 24px;
          font-weight: bold;
          align-self: flex-end;
        }
        @media only screen and (max-width : 768px) {
          header{
            min-height: 23px;
            max-height: 23px;
          }
          .left .Offline{
            font-size:20px;
          }
          img{
            width: 24px;
          }
          .left{
            grid-template-columns: 30px 1fr;
          }
        }
        @media only screen and (max-width : 667px) {
          header{
            min-height: 15px;
            max-height: 15px;
          }
          .left .Offline{
            font-size:14px;
            align-self: baseline;
          }
          img{
            width: 18px;
          }
          .left{
            grid-template-columns: 25px 1fr;
          }
        }
      `}</style>
    </header>
	);
}

export default Header;
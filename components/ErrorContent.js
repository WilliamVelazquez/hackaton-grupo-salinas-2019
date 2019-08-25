import React from 'react';
import Link from 'next/link';
// import { logEvent } from '../utils/analytics';

import TitleBand from './ui/TitleBand';

function ErrorContent(props) {
  const { msg, error, children } = props
  // const GA_NOTFOUND_CATEGORY="NotFound";
  // const GA_NOTFOUND_ACTION="Visit Contact Page";
  // const GA_NOTFOUND_IMAGE_ACTION="Visit Home Page";
  // const GA_NOTFOUND_LABEL=`Message->${msg}${error?" || Error->"+error:""}`
	return(
		<div className="container">
      <TitleBand 
        rounded={true}
        position="center"
        containerMargin="10px 0px"
        title="The content of the page will be available soon!"
      />
      {children}
      <Link href="/">
        <img 
          src="/static/Logo_512.png" 
          alt="Italika Logo"
          // onClick={()=>logEvent(GA_NOTFOUND_CATEGORY,GA_NOTFOUND_IMAGE_ACTION,GA_NOTFOUND_LABEL)}
        />
      </Link> 

      <h1 className="text">{msg}</h1>

      {
        error &&
        <h2 className="text">Error {error}</h2>
      }

      <style jsx>{`
        .container{
          border-radius: 10px;
          background: #eaeaea;
          padding: 10px;
          margin: 30px;
          margin-top: -30px;
          height: 100%;
          text-align: center;
          color: #111317;
        }
        .text{
          margin: 10px;
        }
        img{
          width: 22%;
          margin-top: 25px;
          cursor:pointer;
        }
        @media only screen and (max-width : 768px) {
          img{
            width: 50%;
          }
        }
      `}</style>
    </div>
	);
}

export default ErrorContent;
import React from 'react';

// import UserImageCard from './ui/UserImageCard';
import SimplePanel from './ui/SimplePanel';
import MotoHero from './sections/MotoHero';

function HomeContent(props) {
  

	return(
		<div>
      {/* <UserImageCard imgSrc={"/static/Logo_381.png"} imgAltText={"Italika Photo"} >
        <p>El motor de tu vida</p>
      </UserImageCard> */}

      <MotoHero />

      <SimplePanel backgroundColor="#020f2b" color="#fff">
        <img
          src={"/static/Logo_381.png"} 
          alt={"Italika Photo"}
        />
        <p>El motor de tu vida</p>
      </SimplePanel>

      <SimplePanel backgroundColor="#020f2b" color="#fff">
        <h2>Test</h2>
      </SimplePanel>
      
      <style jsx global>{`
        body{
          margin-top: 0px;
        }
      `}</style>
      <style jsx>{`
        p{
          font-size: 22px;
        }
        h2{
          margin: 20px;
          font-size: 38px;
        }
        img{
          width: 25%;
        }
        @media only screen and (max-width : 768px) {
          p{
            font-size: 16px;
          }
          h2{
            margin: 10px;
            font-size: 25px;
          }
          img{
            width: 50%;
          }
        }
      `}</style>
    </div>
	);
}

export default HomeContent;
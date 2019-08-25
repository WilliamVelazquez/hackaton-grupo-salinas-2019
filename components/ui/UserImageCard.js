import React from 'react';

import SimplePanel from './SimplePanel';
import RoundedImage from './RoundedImage';

function UserImageCard(props) {
    const { imgSrc, imgAltText, imgSize } = props;
	return(
      <div className="container" id={props.id || null}>
        <SimplePanel backgroundColor="#111317" color="#fff">
            {
                imgSrc &&
                <div className="img-container">
                    <RoundedImage
                    src={imgSrc}
                    alt={imgAltText || "Image"}
                    size={imgSize || "25%"}
                    />
                    <div className="children-container">
                        {props.children}
                    </div>
                </div>
            }
        </SimplePanel>

        <style jsx>{`
            .container{
                margin-top: 15%;
            }
            .img-container{
                margin-top: -15%;
            }
            .children-container{
                display:grid;
            }
        `}</style>
      </div>  
	);
}

export default UserImageCard;
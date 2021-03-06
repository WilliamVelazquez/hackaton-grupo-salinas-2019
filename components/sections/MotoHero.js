import React, {useState} from 'react';

import { scrollToClassElementBottom, getIndexOf } from '../../utils/functions';

import ChevronIcon from '../icons/ChevronIcon';
import LabelSelect from '../ui/LabelSelect';

function MotoHero(props) {
	const [selectedBike, setSelectedBike] = useState("")
	const MOTO_LIST = [
    {id:1, name:'FT 250 TS', src:'http://italika.mx/WebVisorArchivosITK/Archivo.aspx?Tipo=3&Archivo=WebPortalMexicoITK/img/Modelos/Trabajo/Principal/FT250TS.png', description:'Esta motocicleta de trabajo es para los que buscan una fiel compañera que les permita ser más productivos en sus días.'},
    {id:2, name:'FT180 TS', src:'http://italika.mx/WebVisorArchivosITK/Archivo.aspx?Tipo=3&Archivo=WebPortalMexicoITK/img/Modelos/Trabajo/Maxis/FT180TS.png', description:'Completa tus actividades diarias con la resistencia para rodar durante toda tu jornada de una forma cómoda y práctica.'},
    {id:3, name:'FT200 TS', src:'http://italika.mx/WebVisorArchivosITK/Archivo.aspx?Tipo=3&Archivo=WebPortalMexicoITK/img/Modelos/Trabajo/Principal/FT200TS.png', description:'Hecha para quienes requieren moverse con más potencia, con la FT200 TS completa tus trayectos de forma más eficiente.'}
  ];
	return(
    <div className="hero">
			{/* <SimplePanel backgroundColor="#020f2b" color="#fff"> */}
			<div className="road-background">
				<div className="moto-content">
					<LabelSelect options={MOTO_LIST} selectedBike={selectedBike} setSelectedBike={setSelectedBike} />
					<div className="moto-data">
						<div className="moto-selected">
							<img src={selectedBike?MOTO_LIST[getIndexOf(selectedBike,MOTO_LIST)].src:"/static/Logo_256.png"} alt={selectedBike?MOTO_LIST[getIndexOf(selectedBike,MOTO_LIST)].name:""} />
						</div>
						<div className="moto-info">
							<h2>{selectedBike?MOTO_LIST[getIndexOf(selectedBike,MOTO_LIST)].name:""}</h2>
							<p>{selectedBike?MOTO_LIST[getIndexOf(selectedBike,MOTO_LIST)].description:""}</p>
						</div>
					</div>
				</div>
			</div>
			{/* </SimplePanel> */}
      <a className="hero-caret-down" onClick={()=>scrollToClassElementBottom('hero')}>
        <ChevronIcon 
          direction="down" 
          color={"#fff"} 
          hoverColor={"#0f3585"} 
          size={32}
        />
      </a>
      
      <style jsx>{`
        .hero{
					height: 100vh;
					padding-top: 50px;
          background-image: linear-gradient(141deg,#020f2b 10%,#0f3585 51%,#020f2b 75%);
				}
				.road-background{
					width: 90%;
					height: 100vh;
					background-size:cover;
					background-position:center;
					background-repeat:no-repeat;
					background-image: url('/static/road.png');
				}
				.moto-content{
					display: grid;
					padding: 30px;
				}
				.moto-data{
					width:100%;
					display:grid;
					grid-template-columns: ${!selectedBike?'1fr':'min-content 1fr'};
				}
				.moto-data img{
					width: 450px;
					min-width: 450px;
					justify-self: center;
				}
				.moto-data h2{
					color: #fff;
					font-size: 30px;
					text-shadow: 2px 2px 4px #000000;
				}
				.moto-data p{
					color: #fff;
					font-size: 20px;
					text-shadow: 2px 2px 4px #000000;
				}
				.moto-selected{
					text-align: center;
				}
				.moto-info{
					padding: 40px;
					padding-top: 60px;
					justify-self: center;
					text-align: center;
				}
        .hero-caret-down{
          bottom: 0;
          width: 100%;
          margin-bottom: 20px;
          display: grid;
          position: absolute;
          justify-items: center;
          transition-duration: 0.4s;
          -o-transition-duration: 0.4s; /* Opera */
          -moz-transition-duration: 0.4s; /* Mozilla */
          -webkit-transition-duration: 0.4s; /* Safari */
        }
        .hero-caret-down:hover{
          cursor: pointer;
          margin-bottom: 10px;
				}
				@media only screen and (max-width : 900px) {
					.moto-data img{
						width: 350px;
						min-width: 350px;
					}
				}
				@media only screen and (max-width : 768px) {
					.hero{
						padding-top: 10px;
					}
					.moto-data{
						grid-template-columns: 1fr;
					}
					.moto-data img{
						width: 80%;
						min-width: 80%;
					}
					.moto-info{
						padding-top: 0px;
					}
					.road-background{
						width: 100%;
						/*height: 80%;*/
						background-image: url('/static/road2.png');
					}
					.hero-caret-down{
						padding-left: 10px;
						justify-items: left;
					}
				}
      `}</style>
    </div>
	);
}
export default MotoHero;
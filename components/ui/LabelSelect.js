import React from 'react';

function LabelSelect(props){
	const { text, options, selectedBike, setSelectedBike } = props;
	return(
		<div className="control-form-select">
			<label>
				{text}
			</label>
			<select onChange={(event)=>setSelectedBike(event.target.value)} value={selectedBike} >
				<option value="">Selecciona una de tus motocicletas...</option>
				{ options &&
					options.map((item)=>{
						return <option key={item.id} value={item.id}>{item.name}</option>
					})
				}
			</select>

			<style jsx>{`
				.control-form-select{
					display: grid;
					justify-items: center;
					grid-template-columns: 1fr;
				}
				.control-form-select select{
					padding: 5px;
					max-width: 350px;
					/* border-radius: 5px;*/
					background: transparent;
					border: none;
					border-bottom: 2px solid #f1f1f1;
					color: #f1f1f1;
					font-size: 18px;
				}
				.control-form-select select option{
					border: none;
					color: #000000;
					font-size: 18px;
				}
			`}</style>
		</div>
	)
}

export default LabelSelect;
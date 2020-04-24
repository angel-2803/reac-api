import React, { Component } from 'react';

class Buscador extends Component{

	busquedaRef = React.createRef();  // creando una referencia referencia de hay se obtiene los datos

	obtenerDatos = (e) => {  //metodo que a la hora de rar click en el boton de buscar se ejecutara
		e.preventDefault();

		//se obtiene el valor del de la caja de texto
		const termino = this.busquedaRef.current.value; //como referencia esta la caja de texto de buscador y obtengo lo que se escribe

		//lo obtenido en la caja de texto se manda al componente principal App.js
		this.props.datosBusqueda(termino);

		// esto a la ves se ejecuta cuando se da click en el boton de buscar...
	}
		// se crea un formulario donde esta la caja de texto y el boton
	render(){
		return(
			// cuando se de click o enter se ejecutara el metodo (Despues ver el componente App)
			<form onSubmit={this.obtenerDatos}> 
				<div className="row">
					<div className="form-group col-md-8">

						<input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen. Ejemplo: Futbol" /> 
					
					</div>
					<div className="form-group col-md-4">
						
						<input type="submit" className="btn btn-log btn-danger btn-block" value="Buscar..." /> 
					
					</div>
				</div>
			</form>
			);
	}
}

export default Buscador;
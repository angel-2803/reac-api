import React, { Component } from 'react';
import Imagen from './imagen';
import Paginacion from './Paginacion';

class Resultado extends Component {
	mostrarImagenes = () =>{
		const imagenes = this.props.imagenes;

		//cuando este vacio el state no se ejecuta el arreglo, esta vacio no se ejecuta la linea siguiente
		if (imagenes.length === 0) return null;

		//  console.log(imagenes);
		//si es arreglo no esta vacio entonces mostrara los datos
		return(
			<React.Fragment>
				<div className="col-md-12 p-5 row">
					{imagenes.map(imagen => (  // recorre todo el arreglo de objetos
							<Imagen
								key={imagen.id}
								imagen={imagen}
							/>
						) ) }

				</div>
				<Paginacion
					paginaAnterior={this.props.paginaAnterior}
					paginaSiguiente={this.props.paginaSiguiente}
				/>
			</React.Fragment>
			)
	}

	render() {
		return ( 
			<React.Fragment>
				{this.mostrarImagenes() }
			</React.Fragment>
		 );
	}
}

export default Resultado;
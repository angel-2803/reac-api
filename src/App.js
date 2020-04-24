import React, { Component } from 'react'
import Buscador from './componentes/Buscador'
import Resultado from './componentes/Resultado'

//componente principal
class App extends Component {

    //el estado como inicializa las propiedades
    state = {
        termino : '', // va a contener lo que se escriba en el unput del buscador
        imagenes : [], //va a contener todo sobre las imegenes que vienen de la api de pixabay
        pagina : '' // se utiliza para la paginacion 
    }

    scroll = () =>{  //metodo que se utiliza para que cuando se de click en siguiente o anterior la pagina suba e inicie de arriba
        const elemento = document.querySelector('.jumbotron');
        elemento.scrollIntoView('smooth','start');
    }

    paginaAnterior = () => {
        // leer el state de la pagina actual
        let pagina = this.state.pagina;

        //leer si la pagina es 1, ya no ir hacia atras
        if(pagina === 1) return null;

       // restar uno a la pagina actual 
        pagina -= 1;

       // agregar el cambio al state
       this.setState({
        pagina
       }, () =>{
           this.consultarApi();
           this.scroll();
       });

    //    console.log(pagina);
    }

    paginaSiguiente = () => {
       // leer el state de la pagina actual
        let pagina = this.state.pagina;

       // sumar uno a la pagina actual 
        pagina += 1;

       // agregar el cambio al state
       this.setState({
        pagina
       }, () => {
           this.consultarApi();
           this.scroll();
       } );

    //    console.log(pagina);
    }

    consultarApi = () => {
        const termino = this.state.termino; // estado actualizado le manda los datos a la api para que consulte loq ue se busca
        const pagina = this.state.pagina;
        //la api de pixabay
        const url = `https://pixabay.com/api/?key=15968816-e92a5239f2e4025a85ba8b870&q=${termino}&page=${pagina}`;

        // console.log(url);
        fetch(url) //de la api obtiene uan respuesta en formato json
        .then(respuesta => respuesta.json() )
        //.then(resultado => this.setState({ imagenes: resultado }) ) aqui se obtiene todo lo que manda la api de cada imagen pero solo se ocupa los hits
        .then(resultado => this.setState({ imagenes: resultado.hits }) ) //el resultado solo obtiene los hits que es son los datos de la imagen
    }


    //primero ver el componente de Buscador
    //esto viene del componente Buscador
    datosBusqueda = (termino) => {  //para actualizar el estado se utiliza setState({ }) 
        this.setState({
            termino : termino, //esta los datos a consultar o lo que viene de la caja de texto
            pagina : 1
        }, () => { 
            this.consultarApi(); //se ejecuta la funcion
        })
    }
        // render es lo que ya se ve en pantalla (con dos componenetes mas el Buscador y Resultado)
    render(){
        return(
            <div className="app container">
                <div className="jumbotron">
                    <p className="text-white text-center ">Buscador de Imágenes</p>

                        {/* componenete del Buscador */}
                    <Buscador //se utiliza this para acceser metodos, el estado
                        // obtiene lo que viene de la caja de texto
                        datosBusqueda={this.datosBusqueda}
                    />
                </div>
                <div className="row justify-content-center">
                    <Resultado
                        imagenes={this.state.imagenes}
                        paginaAnterior={this.paginaAnterior}
                        paginaSiguiente={this.paginaSiguiente}
                    />
                </div>
                
            </div>
            );
    }
}

export default App
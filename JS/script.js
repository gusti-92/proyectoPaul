//index//

var titleIndex = $("#titleIndex");

titleIndex.append('Gustavo Ariel Paez');

var textIndex = $("#textIndex");

textIndex.append('Mi nombre es Gustavo, me encuentro en una búsqueda laboral presentando mi web diseñada a base de las habilidades y conocimientos que he adquirido en un curso de Introducción a la Programación Web y al deseo de instruirme por completo en la materia. Ya que en el presente me encuentro desempleado estaría a interesado en comenzar una nueva experiencia laboral no sólo por la necesidad económica, sino también por el deseo de seguir progresando en el campo de la programación, puesto que al no poder contar con una entrada de capital se me dificulta poder abonar cursos en los que podría alcanzar nuevos conocimientos.');

var footingText = $("#footingText");

footingText.append('Actualizado el 15 de septiembre 2020');


var footer1 = $("#footer1");
var footer2 = $("#footer2");

footer1.append(' - Gustavo Ariel Paez') + footer2.append('Año 2020');


// datosPersonales //

var datos = $("#datosPersonales");

listaDatos = [ 

    { dato1: 'Fecha de nacimiento:',
      dato2: ' 27/05/1992.'},

    {dato1:'Edad:',
     dato2:' 28 años.'},

     {dato1:'D. N. I:',
     dato2:' 36.843.569.'},

     {dato1:'C. U. I. L:',
     dato2:' 20-36843569-5.'},

     {dato1:'Estado civil:',
     dato2:' Soltero.'},

     {dato1:'Dirección:',
     dato2:' Labarden 6655, Del Viso, Pilar.'},

     {dato1:'Teléfonos:',
     dato2:' 011-34411916 / 02320-659884.'},

     {dato1:'Movilidad Propia -',
     dato2:' Licencia de conducir - B2'}

];


for (let index = 0; index < listaDatos.length; index++) {
    const dato1= listaDatos[index]['dato1'];
    const dato2= listaDatos[index]['dato2'];

    datos.append('<a href="#" class="list-group-item list-group-item-action list-group-item-primary">'+ dato1 + dato2 +'</a>');


    
};


// experienciaLaboral //

var cuadros = $("#trabajosAnteriores");

var tarjetas = [



    {
        
        empresa: 'Burger King.',
        lugar_anio: 'Pilar, (2014).',
        tareas: 'Limpieza general, bachero, preparación de alimentos, repositor.',
    },

    {
        empresa:'Kiosco Drugstore "50+".',
        lugar_anio:'Del Viso, (2015,2017).',
        tareas: 'Cajero, atención al cliente, limpieza, repositor, encargado de realizar pedidos.',
    },

    {
        empresa: 'Lavadero “Don Lavadero”.',
        lugar_anio: 'Maquinista Savio, (2018).',
        tareas: 'Atención al cliente, cajero, encargado.'
    },

    {
        
        empresa: 'Kiosco "El Urbano".',
        lugar_anio: 'Del Viso, (2018-2019).',
        tareas: 'Cajero, atención al cliente, limpieza, repositor, cadete, encargado en realizar pedidos.',
    },

    {
        empresa:'Distribuidora del sistema Sube y Carga Virtual “Del Viso Cargas”.',
        lugar_anio: 'Del Viso,(2019-2020).',
        tareas: 'Atención al cliente, cadete bancario, técnico en sistema sube, administración.'
    },


];

for (let index = 0; index < tarjetas.length; index++) {
    const empresa = tarjetas[index]['empresa'];
    const lugar_anio = tarjetas[index] ['lugar_anio'];
    const tareas = tarjetas[index] ['tareas'];
    


    cuadros.append('<div class="col-sm"><div class="card text-white bg-primary mb-3" style="max-width: 18rem;">'+'<div class="card-header"><strong>' + empresa +'</strong></div>'+ '<div class="card-body">' + '<p class="card-text">' + lugar_anio + '</h5>' + '<p class="card-text">' + tareas + '</p>'+'</div></div>' )
}; 


// formacionAcademica //

var fAcademica = $("#fAcademica");

listaFAcademica = [ 

    { dato1: 'Secundaria Completa. Plan FinEs, sede "PAC", Del Viso.'},

    {dato1:'Curso auxiliar de administración. Escuela municipal anexo Del Viso.'},

     {dato1:'Curso de introducción a la programación web (Html, Css, Javascript). Educarte, sede Villa Crespo.'},

     {dato1:'Curso inicial universitario (Universidad General Sarmiento) en Técnico en informática (en curso).'},

    

];


for (let index = 0; index < listaFAcademica.length; index++) {
    const dato1= listaFAcademica[index]['dato1'];

    fAcademica.append(' <a href="#" class="list-group-item list-group-item-action list-group-item-info">' + dato1 +'</a>');
};

//proyectos//

var tarjetasProyectos = $('#proyectos');

listaProyectos =[
    {titulo: 'Color Game',
     imagen: '../images/image_colorGame.jpg',
     descripcion: 'Juego de colores',
     link: 'https://github.com/gusti-92/ColorGame',
    },

    {titulo: 'Proyecto del Clima',
     imagen: '../images/image_proyectoClima.jpg',
     descripcion: 'Mediante una api podremos saber el clima de la ciudad que elijas!',
     link: 'https://github.com/gusti-92/proyectoClima',
    },
    
    {titulo: 'Proyecto Hackaton',
     imagen: '../images/image_proyectoHackaton.jpg',
     descripcion: 'Se simula una página de compra y ventas de videojuegos en la cuál podrás elegir tu videojuego favorito o vender uno que ya no uses.',
     link: 'https://github.com/gusti-92/proyectoHackaton'
    },

    {titulo: 'Proyecto Lista',
     imagen: '../images/image_proyectoLista.jpg',
     descripcion: 'Un anotador recordatorio de tareas en las que podes agregar algunas para hacer y eliminar otras ya realizadas',
     link: 'https://github.com/gusti-92/proyectoLista'
    },
    

];


for ( index = 0; index < listaProyectos.length; index++) {
    const imagen = listaProyectos[index] ['imagen'];
    const descripcion = listaProyectos[index] ['descripcion'];
    const link = listaProyectos[index] ['link'];
    const titulo = listaProyectos[index] ['titulo'];    

tarjetasProyectos.append('<div class="col-sm-6"><div class="card" id="proyectCard"><img src=' + imagen + ' class="card-img-top" alt="..." id="imagenProyecto"><div class="card-body"><h5 class="card-title">' + titulo + '</h5><p class="card-text">' + descripcion + '</p><a href=' + link + ' target="_blank" class="btn btn-primary">Ver Proyecto en GitHub</a></div></div></div>')};


//conocimientoWeb//

var conocimientos = $('#conocimientoWeb');

listaConocimientos = [
    {titulo: 'javascript',
     color: 'progress-bar bg-success'},

     {titulo: 'jquery',
     color: 'progress-bar bg-info'},
     
     {titulo: '',
     color: ''},

     {titulo: '',
     color: ''},
     
     {titulo: '',
     color: ''},

     {titulo: '',
     color: ''},
     
]

for (let index = 0; index < listaConocimientos.length; index++) {
    const titulo = listaConocimientos[index] ['titulo'];
    const color = listaConocimientos[index] ['color'];
    


    conocimientos.append('<div class="col-sm-4"></div><div class="col-sm-4"><h3>' +titulo + '<h3><div class="progress"><div class="' + color + '" role="progressbar"style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div></div><div class="col-sm-4"></div>')
}




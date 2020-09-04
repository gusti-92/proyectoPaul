var botonn = $("#boton");

botonn.click(cambioColor);

function cambioColor() {
    botonn.css("background", colorRandom)

};

function colorRandom() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";

};


var titulo = $("h1")

$(titulo).mouseover(function () {
    $(titulo).css("background", "rgba(225, 255, 255, .6)");
    $(titulo).css("color", "black");
});

$(titulo).mouseout(function () {
    $(titulo).css("background", "none")
    $(titulo).css("color","white")
});


var pablito = $("#pablito");

$("#pablito").append("eeeeeeeeeee");

var card = $("#card")
var trabajos;

var tarjeta = '<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">';
tarjeta += '<div class="card-header">Burger King Torres del Sol</div>';
tarjeta += '<div class="card-body">'
tarjeta += '<h5 class="card-title">Pilar (2014)</h5>'
tarjeta += '<p class="card-text">limpieza, bachero, preparación de alimentos repositor</p>';
tarjeta += '</div>'



/*

let array = [1, 23, 34, "sds"];
let objeto = { elemento: 'mielemento', 1: 'palabra', valor: 10 };

let puto = 'so vo';
var miObjeto = [
    {
        clase: "btn btn-primary",
        nombre: "Primero",
        deshabilitado: true,
        tamanio: 'btn-lg'

    },
    {
        clase: "btn btn-secondary",
        nombre: "Segundo",
        deshabilitado: false,
        tamanio: ''

    },
    {
        clase: "btn btn-danger",
        nombre: "Tercero",
        deshabilitado: false,
        tamanio: 'btn-sm'

    },
    {
        clase: "btn btn-info",
        nombre: puto,
        deshabilitado: true,
        tamanio: ''

    },
];
let btn = '<button type="button" class="btn btn-dark">Dark</button>';

for (let index = 0; index < miObjeto.length; index++) {
    const nombre = miObjeto[index]['nombre'];
    const tamanio = miObjeto[index]['tamanio'];
    let deshabilitado = miObjeto[index]['deshabilitado'];
    const clase = miObjeto[index]['clase'];

    if (deshabilitado) {
        deshabilitado = 'disabled';
    } else {
        deshabilitado = '';
    }

    //card.append('<button type="button" class="' + clase + ' ' + tamanio + '" ' + deshabilitado + '>' + nombre + '</button>')

}
*/
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
        tareas: 'Cajero, atención al cliente, limpieza, repositor, cadete, encargado de realizar pedidos, control de mercadería.',
    },

    {
        empresa: 'Lavadero “Don Lavadero”.',
        lugar_anio: 'Maquinista Savio, (2018).',
        tareas: 'Atención al cliente, limpieza de autos interna y externa, cajero, encargado.'
    },

    {
        
        empresa: 'Kiosco "El Urbano".',
        lugar_anio: 'Del Viso, (2018-2019).',
        tareas: 'Cajero, atención al cliente, limpieza, repositor, cadete, encargado en realizar pedidos, control de mercadería.',
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

//Index
/*
var texto1 =  $("#textoIndex");
texto1.append("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tempora voluptatum cumque iusto unde fugit tempore atque distinctio non porro aliquam enim, voluptatem consequatur. Delectus optio obcaecati accusamus pariatur quia.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta facere doloremque voluptas voluptate optio, iste nihil sint debitis fugit commodi laudantium dolorem et sit, eaque, eius harum vero voluptatibus fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sequi iusto facere aliquam itaque corporis, quod eveniet, animi ratione eaque suscipit beatae, temporibus officiis quas? Nisi dolorem natus distinctio dignissimos" +"Facere nihil quam assumenda enim qui aspernatur magni deleniti, voluptas minus eum, dolores laborum voluptate quo! Necessitatibus architecto incidunt quo deserunt aliquam sit perferendis veniam, molestiae sed officiis voluptate ad Voluptatum corporis error molestiae, tempore suscipit doloribus. Quaerat, magni, dolorum suscipit cum amet, praesentium perferendis provident officiis debitis maiores rerum error consectetur. Repellendus, accusamus cum aut assumenda quaerat veniam illo.Dolor, eius sunt vel quae sequi ratione modi id nobis harum totam rerum eaque fugit recusandae excepturi voluptas, aut itaque quas laudantium voluptatum nulla ad, commodi distinctio amet aspernatur! Quae.Sit possimus delectus maiores totam sapiente, commodi fugiat, at reprehenderit labore minima aut perspiciatis doloribus? Aliquid voluptatibus facilis blanditiis! Provident ea doloremque tempora dolores distinctio voluptas hic alias veritatis labore! Velit, qui iure, fugit delectus soluta, odit illo quo vitae accusamus rerum quidem eaque reiciendis hic cumque et consequuntur ullam repellendus aperiam optio totam! Sequi iste sed accusantium ipsa eum."); 

var redes = $("#redesSociales");
redes.append("Redes Sociales");

*/
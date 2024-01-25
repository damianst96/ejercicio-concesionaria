let autos = require("./autos");

let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
}

const concesionaria = {
    autos: autos,

    buscarAuto: function(patente){
        for(let i = 0; i < autos.length; i++){
            if (patente == autos[i].patente){
                return autos[i];
            }
        }
        return null;
    },

    venderAuto: function(patente){
        let buscar = this.buscarAuto(patente);
        if (buscar !== null) {
            buscar.vendido = true;
            autos.vendido = true;
            return buscar;
        } else {
            return "Auto disponible para la venta";
        };
    },

    autosParaLaVenta: function(){
        let filtro = autos.filter(function(vendido){
            if (vendido.vendido == true){
                return vendido = false;
            } else {
                return "No hay autos en venta";
            }
        });
        return filtro;
    },

    autosNuevos: function(){
        let lista = this.autosParaLaVenta();
        let filtro = lista.filter(function(auto){
           return auto.km < 100;
        })
        return filtro;
    },

    listaDeVentas: function(){
        let filtro = this.autos.filter(function(auto){
            return auto.vendido === true;
        });
        const total = filtro.map(function(venta){
            return venta.precio;
        });
        return total;
    },

    totalDeVentas: function(){
        let valor = 0;
        return this.listaDeVentas().reduce((acum, ventas) => acum + ventas, valor);
     },

    puedeComprar: function(auto, persona){
        if(persona.capacidadDePagoEnCuotas * auto.cuotas >= auto.precio && auto.precio <= persona.capacidadDePagoTotal){
            return true;
        } else {
            return false;
        }
    },

    autosQuePuedeComprar: function(persona){
        let lista = this.autosParaLaVenta();
        let puede = this.puedeComprar("JJK116", persona);
        let filtro = lista.filter(function(auto){
           return persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas >= auto.precio/auto.cuotas;
        });
        return filtro;
    }
}

// EJECUCIONES

// ETAPA 3
// console.log(concesionaria.buscarAuto("APL123"));
// console.log(concesionaria.buscarAuto("JJK116"));
// console.log(concesionaria.buscarAuto("JA123"));

// ETAPA 4
// console.log(concesionaria.venderAuto("APL123"));

// ETAPA 5
// console.log(concesionaria.autosParaLaVenta());

// ETAPA 6
// console.log(concesionaria.autosNuevos());

// ETAPA 7
// console.log(concesionaria.listaDeVentas());

// ETAPA 8
// console.log(concesionaria.totalDeVentas());

// ETAPA 9
// console.log(concesionaria.puedeComprar("JJK116", persona));

// ETAPA 10
// console.log(concesionaria.autosQuePuedeComprar(persona));
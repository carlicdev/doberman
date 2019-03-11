export const machos = [
    {
        id: 1,
        name: "Von Algun Macho",
        img: "images/maindoberman.jpg",
        age: 5,
        titles: ["Campeon Nacional 2017"],
        description: "Un perro con excelete temperamento y con mucha agresividad.",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae vestibulum justo. Fusce blandit velit lacus, eget pulvinar diam auctor ac. Donec efficitur eros nec lobortis ornare. Mauris risus ipsum, porttitor in aliquam ut, vehicula quis turpis. In tristique tellus ac ultricies facilisis. Aliquam condimentum urna et erat gravida, et egestas ex tempor. Integer sit amet elit nunc."    },
    {
        id: 2,
        name: "Von Alguna Hembra",
        img: "images/doberman2.jpg",
        age: 3,
        titles: ["Campeon Nacional 2018", "Campeon Internacional 2019"],
        description: "Un perro con excelete temperamento y con mucha agresividad.",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae vestibulum justo. Fusce blandit velit lacus, eget pulvinar diam auctor ac. Donec efficitur eros nec lobortis ornare. Mauris risus ipsum, porttitor in aliquam ut, vehicula quis turpis. In tristique tellus ac ultricies facilisis. Aliquam condimentum urna et erat gravida, et egestas ex tempor. Integer sit amet elit nunc."
    },
    {
        id: 3,
        name: "Von Algun Macho Mas",
        img: "images/maindoberman.jpg",
        age: 4,
        titles: ["Campeon Nacional 2018", "Campeon Internacional 2019"],
        description: "Un perro con excelete temperamento y con mucha agresividad.",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae vestibulum justo. Fusce blandit velit lacus, eget pulvinar diam auctor ac. Donec efficitur eros nec lobortis ornare. Mauris risus ipsum, porttitor in aliquam ut, vehicula quis turpis. In tristique tellus ac ultricies facilisis. Aliquam condimentum urna et erat gravida, et egestas ex tempor. Integer sit amet elit nunc."    },
    {
        id: 4,
        name: "Von Alguna Hembra II",
        img: "images/maindoberman.jpg",
        age: 3,
        titles: ["N/A"],
        description: "Un perro con excelete temperamento y con mucha agresividad.",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae vestibulum justo. Fusce blandit velit lacus, eget pulvinar diam auctor ac. Donec efficitur eros nec lobortis ornare. Mauris risus ipsum, porttitor in aliquam ut, vehicula quis turpis. In tristique tellus ac ultricies facilisis. Aliquam condimentum urna et erat gravida, et egestas ex tempor. Integer sit amet elit nunc."    },
];

export const hembras = [
    {
        id: 1,
        name: "Hembra I",
        img: "images/dobermann1.jpg",
        age: 3,
        titles: "Campeon Nacional 2017, Campeon Interamericano 2018",
        description: "Excelente reproductora.",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae vestibulum justo. Fusce blandit velit lacus, eget pulvinar diam auctor ac. Donec efficitur eros nec lobortis ornare. Mauris risus ipsum, porttitor in aliquam ut, vehicula quis turpis. In tristique tellus ac ultricies facilisis. Aliquam condimentum urna et erat gravida, et egestas ex tempor. Integer sit amet elit nunc."    },
    {
        id: 2,
        name: "Hembra II",
        img: "images/doberman2.jpg",
        age: 4,
        titles: ["Campeon Nacional 2018", "Campeon Internacional 2019"],
        description: "Excelente reproductora. Madre de campeon Nacional.",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae vestibulum justo. Fusce blandit velit lacus, eget pulvinar diam auctor ac. Donec efficitur eros nec lobortis ornare. Mauris risus ipsum, porttitor in aliquam ut, vehicula quis turpis. In tristique tellus ac ultricies facilisis. Aliquam condimentum urna et erat gravida, et egestas ex tempor. Integer sit amet elit nunc."    },
    {
        id: 3,
        name: "Hembra III",
        img: "images/dobberman-camada.jpg",
        age: 2,
        titles: ["Campeon Nacional 2018", "Campeon Internacional 2019"],
        description: "Esperando su primer camada.",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae vestibulum justo. Fusce blandit velit lacus, eget pulvinar diam auctor ac. Donec efficitur eros nec lobortis ornare. Mauris risus ipsum, porttitor in aliquam ut, vehicula quis turpis. In tristique tellus ac ultricies facilisis. Aliquam condimentum urna et erat gravida, et egestas ex tempor. Integer sit amet elit nunc."    },
    {
        id: 4,
        name: "Hembra IV",
        img: "images/maindoberman.jpg",
        age: 3,
        titles: ["N/A"],
        description: "Madre de campeones.",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae vestibulum justo. Fusce blandit velit lacus, eget pulvinar diam auctor ac. Donec efficitur eros nec lobortis ornare. Mauris risus ipsum, porttitor in aliquam ut, vehicula quis turpis. In tristique tellus ac ultricies facilisis. Aliquam condimentum urna et erat gravida, et egestas ex tempor. Integer sit amet elit nunc."    },
];

export const camadas = [
    {
        id: 1,
        name: "Camada I",
        img: "images/dobermann1.jpg",
        birth: "3 de Agosto de 2018",
        madre: "Hembra I",
        padre: "Semental II",
        cachorros: {
            hembras: 3,
            machos: 4
        }
    },
    {
        id: 2,
        name: "Camada II",
        img: "images/dobermann1.jpg",
        birth: "13 de Diciembre de 2018",
        madre: "Hembra III",
        padre: "Semental I",
        cachorros: {
            hembras: 2,
            machos: 3
        }
    },
    {
        id: 3,
        name: "Camada III",
        img: "images/dobermann1.jpg",
        birth: "5 de Enero de 2019",
        madre: "Hembra II",
        padre: "Semental II",
        cachorros: {
            hembras: 4,
            machos: 1
        }
    },
];

export const detailMacho = {
    id: 1,
    name: "Von Algun Macho",
    img: "images/maindoberman.jpg",
    age: 5,
    titles: ["Campeon Nacional 2017"],
    description: "Un perro con excelete temperamento y con mucha agresividad."
};


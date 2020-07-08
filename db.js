conn = new Mongo();
db = conn.getDB('proyect_BDA');


//Inserción de autos
db.autos.insert(
    [
        {nombre:'Yaris Sedan',
        marca:'Toyota',
        color: 'Rojo',
        estado: 'Nuevo',
        stock: 25,
        capacidad: 4},

        {nombre:'Kia Picanto',
        marca:'Kia',
        color: 'Gris',
        estado: 'Usado',
        stock: 56,
        capacidad: 4},

        {nombre:'Spark GT',
        marca:'Chevrolet',
        color: 'Beige',
        estado: 'Seminuevo',
        stock: 45,
        capacidad: 6},

        {nombre:'Hyundai Creta',
        marca:'Hyundai',
        color: 'Naranja',
        estado: 'Nuevo',
        stock: 54,
        capacidad: 6 },

        {nombre:'Mirage',
        marca:'Mitsubishi',
        color: 'Azul',
        estado: 'Usado',
        stock: 50,
        capacidad: 4}

    ]
);


//Inserción de usuarios
db.usuarios.insert(
    [
        {nombre:'Hugo Mendoza',
        username: 'hmendoza',
        correo: 'hmendoza@gmail.com',
        celular: '987854321',
        preferencia: 'Kia',
        edad: 45},

        {nombre:'Julio Huaman',
        username: 'jhuaman',
        correo: 'jhuaman@gmail.com',
        celular: '987654321',
        preferencia: 'Hyundai',
        edad: 29},

        {nombre:'Mavila Montoya',
        username: 'mmontoya',
        correo: 'mmontoya@gmail.com',
        celular: '987687321',
        preferencia: 'Chevrolet',
        edad: 28}
    ]
);

//Inserción de trabajadores
db.trabajadors.insert(
    [
        {nombre:'Alvaro Motta',
        username: 'amotta',
        correo: 'amotta@gmail.com',
        celular: '987854321',
        cargo: 'Administrador',
        area: 'Administracion de la pagina'},

        {nombre:'Paulo Ugarte',
        username: 'pugarte',
        correo: 'pugarte@gmail.com',
        celular: '987858321',
        cargo: 'Administrador',
        area: 'Administracion de la pagina'},

        {nombre:'Karolina Bustinza',
        username: 'kbustinza',
        correo: 'kbustin@gmail.com',
        celular: '987858321',
        cargo: 'Administradora',
        area: 'Administracion de la pagina'},

        {nombre:'Gerardo Ponce',
        username: 'gponce',
        correo: 'gponce@gmail.com',
        celular: '987858821',
        cargo: 'Administrador',
        area: 'Administracion de la pagina'}
    ]
);
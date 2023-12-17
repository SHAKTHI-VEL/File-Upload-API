const swaggerJSDoc = require("swagger-jsdoc");
const {Options} =require("swagger-jsdoc");
const swaggerUI =require("swagger-ui-express");

const swaggerOptions={
    swaggerDefinition:{
        info:{
            title:'File upload',
            version:'1.0.0',
            description:'File uploader in cloudinary',
            contact:{
                name:'Shakthivel Arumugam',
                email:'shaktivel888@gmail.com'
            },
        },
    },
    apis:['./routes/*.js'],
};

const swaggerDocs=swaggerJSDoc(swaggerOptions);
const setup=swaggerUI.setup(swaggerDocs);
const serve=swaggerUI.serve;

module.exports={setup,serve};
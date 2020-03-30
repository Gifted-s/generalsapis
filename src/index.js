import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { getMessageController,
  editMessageController,
  listMessagesController,
  deleteMessageController,
  putMessageController,
  downloadMesageController,
  handlesFeedBackController } from './controllers'
import makeCallback from './express-callback/makeCallback'
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import serverless from 'serverless-http'
dotenv.config()
const app = express()

const router = express.Router()
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Message Api for the General Mobile application',
      contact: {
        name: 'Adewumi Sunkanmi',
        email: 'sunkanmiadewumi1@gmail.com',
        phone_number: '0703185081'
      },
      description: `This api was designed to handle every request from to the Generals Mobile application.
       
      TECHNOLOGY USED :

      > Language - Nodejs,

      > Framework - Express.js,

      > Version Control - Git and Git Hub,

      > Database - MongoDB,

      > ODM(Object Document Mapper) - MongoDB driver,

      > Testing tool-Jest,

      > Convention - eslint,

      > Documentation - Swagger,
      `,
      servers: ['http://localhost:3000']
    }

  },
  apis: ['index.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
const PORT = process.env.PORT
const endpoint = process.env.endpoint
app.listen(PORT, () => {
  console.log(`Message Miscroservice Listening at Port ${PORT}`)
})

router.get(`${endpoint}/`, (req, res) => {
  res.status(200).send('hitting me')
})
router.use(`${endpoint}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocs))
// app.all('/*', (req, res) => {
//   res.send('hello from' + process.pid)
// })
router.get(`${endpoint}/l`, (req, res) => {
  console.log('listening')
})
/**
* @swagger
* /messageapi/getmessage/:id :
*    get:
*       tags:
*         - Handles fetching a particular message
*       parameters:
*         - name : id
*           description: This is the unique identifires that would be used to query the database
*           required: true
*
*       description:  >
*          This endpoint returns a particular message object based on the id that was passed as a parameter,,
*           this would return a status 200 if a mesage was found and 400 if not
*       responses:
*         '200':
*             description:
*                The request is succesfull and the message is returned
*             content:
*                application/json
         '500':
             description: An internal server Error occured

*
*/
router.get(`${endpoint}/getmessage/:id`, makeCallback(getMessageController))

/**
* @swagger
* /messageapi/listmessages :
*    get:
*       tags:
*         - Handles the fetching of all the message objects
*       description: This endpoint returns all messages stored
*       responses:
*         '200':
*             description: The request is succesfull and all messages is returned
         '500':
             description: An internal server Error occured
*
*/
router.get(`${endpoint}/listmessages`, makeCallback(listMessagesController))

/**
* @swagger
* /messageapi/editmessage/:id :
*    patch:
*       tags:
*         - Handles editing a particular message
*       parameters:
*         - name : id
*           description: This is the unique identifier that would be used to quesry the message object to edit
*           required: true
*       description: This endpoint provide the functionality to edit message
*       responses:
*         '200':
*             description: The request is succesfull the message was edited successfully
*             content : application/json
         '500':
             description: An internal server Error occured
*
*/
router.patch(`${endpoint}/editmessage/:id`, makeCallback(editMessageController))

/**
* @swagger
* /messageapi/deletemessage/:id :
*    delete:
*       tags:
*          - Handles the deletion of a message
*       parameters:
*         - name : id
*           description: This is the identifier  that would be used to fetch the message that would be deleted
*           required: true
*       description: This endpoint handles the deletion of message from the database
*       responses:
*         '200':
*             description: this returns an object that  indicates a successfull deletion
*             content: application/json
*
         '500':
             description: An internal server Error occured
*
*/
router.delete(`${endpoint}/deletemessage/:id`, makeCallback(deleteMessageController))

/**
* @swagger
* /messageapi/addmessage:
*    post:
*       tags:
*          - Handles the adding of message to the database
*       description: This endpoint handles the addition of message to the database
*       responses:
*         '200':
*             description: this returns an object that contains the new message just added
*             content: application/json
*
         '500':
             description: An internal server Error occured
*
*/
router.post(`${endpoint}/addmessage`, makeCallback(putMessageController))
/**
* @swagger
* /messageapi/downloadmessage/:id/:play :
*    get:
*       tags:
*         - Handles downloading of message or streaming a message
*       parameters:
*         - name : id
*           description: This is the unique identifier that would be used to query the database
*           required: true
*         - name : play
*           description: This sholud be set to **true** if you want the message to play
*           required: false
*
*       description:  >
*          This endpoint returns a particular message object
*          based on the id that was passed as a parameter, and gives a page to download the message locally or play the message
*       responses:
*         '200':
*             description:
*                This means a successful request andit return a static HTML page either to download or play the message based on the play parameter
*             content:
*                application/json
         '500':
             description: An internal server Error occured

*
*/
router.post(`${endpoint}/feedback`, makeCallback(handlesFeedBackController))
router.get(`${endpoint}/download/:id/:play`, makeCallback(downloadMesageController))
app.use('/.netlify/functions/index', router)
export default { handler: serverless(app) }

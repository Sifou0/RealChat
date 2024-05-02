import swaggerjsdoc from "swagger-jsdoc";
import {Express, Request,Response} from "express";
import swagger from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        components: {
          securitySchemas: {
              bearerAuth: {
                  type:"http",
                  schema: "bearer",
                  bearerFormat:"JWT"
              }
          }
        },
        security: [
            {
                bearerAuth:[]
            }
        ],
        info: {
            title: 'Express API for RealChat',
            version: '1.0.0',
        },
    },
    apis: ["./src/routes/**/*.ts","./src/models/*.ts"]
};

const specs = swaggerjsdoc(options)

function swaggerDocs(app: Express, port: string) {
    app.use("/api-docs",swagger.serve,swagger.setup(specs));

    app.get("docs.json", (req: Request, res: Response) => {
       res.setHeader("Content-Type","application/json")
        res.send(specs)
    })
}

export default swaggerDocs
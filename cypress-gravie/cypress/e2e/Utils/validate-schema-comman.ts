import Ajv from "ajv";
// import { definitionsHelper } from "../schemas/schema-definitions";
import { definitionsHelper } from "./schema-definitions";

const getSchemaError = (getAjvError: any) => {
  return cy.wrap(
    `Field: ${getAjvError[0]["dataPath"]} is invalid. Cause: ${getAjvError[0]["message"]}`
  );
};

export const validateSchema = (schema: any, response: any) => {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid = validate(response);
  if (!valid) {
    getSchemaError(validate.errors).then((schemaError) => {
      throw new Error(schemaError);
    });
  } else {
       assert.isTrue(valid, "Schema validation successful")
  }
};
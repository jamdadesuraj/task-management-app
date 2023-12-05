import * as Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

const loginSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .error((errors) => {
      errors.forEach((err) => {
        if (err.code === "string.empty") {
          err.message = "email is required";
        } else if (err.code === "string.empty") {
          err.message = "plz enter valid email";
        }
      });
      return errors;
    }),
  password: Joi.string()
    // .pattern(new RegExp("^[a-zA-Z0-9@#]{3,30}$ "))
    .error((errors) => {
      errors.forEach((err) => {
        if (err.code === "string.empty") {
          err.message = "password is required";
        } else if (err.code === "string.pattern.field") {
          err.message = "plz enter valid password";
        }
      });
      return errors;
    }),
});

export const loginResolver = joiResolver(loginSchema);

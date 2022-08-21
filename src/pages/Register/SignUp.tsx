import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
interface ISingupValues {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignUp = () => {
  const initialValues: ISingupValues = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };
  return (
    <>
      <h1 className="text-5xl mb-8 mt-8">Sign up</h1>
      <div className="w-1/2 h-fit">
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            username: Yup.string()
              .min(3, "Must be at least 3 caracters")
              .max(20, "Must be 20 caracters or less")
              .matches(/^\w+$/, {
                message: "Must container only caracters, digits and _",
              })
              .required("Username is required !"),
            email: Yup.string()
              .email("Please enter a valid email !")
              .max(50, "Must be 50 caracter or less")
              .required("Email is required !"),
            password: Yup.string()
              .min(8, "Must be at least 8 caracters")
              .required("Password is required !"),
            passwordConfirm: Yup.string()
              .min(8, "Must be at least 8 caracters")
              .when("password", {
                is: (value: string) => value && value.length > 0,
                then: Yup.string().oneOf(
                  [Yup.ref("password")],
                  "Password and the confirmation aren't the same !"
                ),
              })
              .required("Password confirmation is required !"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="flex flex-col items-center">
            <Input
              id="username"
              name="username"
              label="Username"
              placeholder="username"
              size="medium"
              className="border border-gray-400 rounded-md px-2 text-lg"
            />
            <Input
              type="email"
              id="email"
              name="email"
              label="Email"
              placeholder="email"
              size="medium"
              className="border border-gray-400 rounded-md px-2 text-lg"
            />
            <Input
              type="password"
              id="password"
              name="password"
              label="Password"
              placeholder="password"
              size="medium"
              className="border border-gray-400 rounded-md px-2 text-lg"
            />
            <Input
              type="Password"
              id="passwordConfirm"
              name="passwordConfirm"
              label="Confirmation"
              placeholder="password confirmation"
              size="medium"
              className="border border-gray-400 rounded-md px-2 text-lg"
            />
            <Button
              type="primary"
              htmlType="submit"
              className="w-4/6 mt-4"
              size="medium"
            >
              Submit
            </Button>
          </Form>
        </Formik>
        <span className="block mt-4">
          I already have an account?{" "}
          <Link className="text-blue-400" to="../signin">
            Sign in
          </Link>
        </span>
      </div>
    </>
  );
};

export default SignUp;

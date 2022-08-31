import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

//local component
import Input from "components/Input/Input";
import Button from "components/Button/Button";

interface IInitialValues {
  username: string;
  password: string;
}

const SignIn = () => {
  const initialValues: IInitialValues = {
    username: "",
    password: "",
  };

  return (
    <>
      <h1 className="text-5xl mb-8 mt-8">Sign in</h1>
      <div className="w-1/2 h-fit">
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            username: Yup.string()
              .matches(/^\w+$/, {
                message: "username contain only caracters,digits and _",
              })
              .min(3, "Must be at least 3 caracters")
              .max(20, "Must be 20 caracters or less")
              .required("Username is required"),
            password: Yup.string()
              .min(8, "Must be at least 8 caracters")
              .min(20, "Must be at least 20 caracters")
              .required("Password is required"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="flex flex-col items-center">
            <Input
              name="username"
              id="username"
              placeholder="user name"
              label="Username"
              className="border border-gray-400 rounded-md px-2 text-lg"
              labelClassName="block text-md"
              size="medium"
            />
            <Input
              name="password"
              id="password"
              placeholder="password"
              label="Password"
              className="border border-gray-400 rounded-md px-2 text-lg"
              labelClassName="block text-md"
              size="medium"
            />
            <Button
              htmlType="submit"
              type="primary"
              size="medium"
              className="w-4/6 mt-4"
            >
              Submit
            </Button>
          </Form>
        </Formik>
        <span className="block mt-4">
          You don't have an account?{" "}
          <Link className="text-blue-400" to="../signup">
            Sign up
          </Link>
        </span>
      </div>
    </>
  );
};

export default SignIn;

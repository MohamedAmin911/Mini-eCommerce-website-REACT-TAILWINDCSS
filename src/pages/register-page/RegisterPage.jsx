import React, { useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AppLogo from "../../components/AppLogo";
import FormField from "../../components/FormField";

function RegisterPage() {
  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    name: Yup.string().required("Name is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[^a-zA-Z0-9\s]/, "Password requires a special character"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const navigate=useNavigate();

  const {setUser}=useContext(AuthContext);
  const handleSubmit = (values) => {
    console.log(values);
    setUser({...values});
    navigate("/products");

  };
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#d1fae5_0%,#f8fafc_34%,#f4efe6_100%)] px-4 py-8 text-slate-900 sm:px-6 lg:px-12">
      <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <AppLogo
            giant
          />
       

        <div className="order-1 rounded-[36px] border border-stone-200 bg-white/95 p-7 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur sm:p-10 lg:order-1">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
              Register
            </p>
      
     
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <FormField name="name" placeholder="Name" />
              <FormField name="username" placeholder="Username" />
              <FormField name="email" type="email" placeholder="Email" />
              <FormField
                name="password"
                type="password"
                placeholder="Password"
              />
              <FormField
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />

              <button
                type="submit"
                className="mt-2 w-full rounded-2xl bg-emerald-700 px-4 py-3 text-base font-bold text-white transition hover:bg-emerald-600 active:bg-emerald-500"
              >
                Create Account
              </button>
            </Form>
          </Formik>
        </div>
      </section>
    </main>
  );
}

export default RegisterPage;

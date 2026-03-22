import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import AppNavbar from "../../components/AppNavbar";
import FormField from "../../components/FormField";

function ContactPage() {
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    message: "",
    acceptedTerms: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Email address is required."),
    firstName: Yup.string().required("First name is required."),
    lastName: Yup.string().required("Last name is required."),
    phoneNumber: Yup.string(),
    message: Yup.string()
      .required("Message is required.")
      .min(10, "Message must be at least 10 characters.")
      .max(500, "Message must be at most 500 characters."),
    acceptedTerms: Yup.boolean().oneOf(
      [true],
      "You must agree to the terms before submitting.",
    ),
  });

  const handleSubmit = (values,{ resetForm}) => {
    console.log(values);
    resetForm();
    alert("Form submitted successfully!");
  };

  return (
    <main className="min-h-screen  px-4 py-8 text-slate-900 sm:px-6 lg:px-10">
      <section className="mx-auto max-w-7xl">
        <AppNavbar />
        <div className="mb-8 flex items-center justify-between">
      
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          

          <div className="rounded-4xl border border-stone-200 bg-white p-7 shadow-[0_25px_70px_rgba(15,23,42,0.12)] sm:p-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-black">
              Send Us a Message
            </h2>
            <p className="mt-2 text-sm text-stone-500">
              Please fill in the form below to get in touch with us.
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField name="firstName" placeholder="First name" />
                    <FormField name="lastName" placeholder="Last name" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      name="email"
                      type="email"
                      placeholder="Email address"
                    />
                    <FormField
                      name="phoneNumber"
                      placeholder="Phone number"
                    />
                  </div>

                  <FormField
                    name="message"
                    as="textarea"
                    rows="5"
                    placeholder="Message"
                    className="resize-none bg-stone-50"
                  />

                  <label className="flex items-start gap-3 text-sm text-stone-600">
                    <Field
                      type="checkbox"
                      name="acceptedTerms"
                      className="mt-1 h-4 w-4 rounded border-stone-300 text-emerald-700 focus:ring-emerald-600"
                    />
                    <span>
                      I&apos;ve read and agree with Terms of Service and Privacy
                      Policy.
                    </span>
                  </label>
                  <ErrorMessage
                    name="acceptedTerms"
                    component="div"
                    className="-mt-2 text-sm text-red-500"
                  />

                  <button
                    type="submit"
                    className="rounded-xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                     Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;

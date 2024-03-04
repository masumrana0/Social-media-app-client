import * as yup from "yup";

// Define current year (you need to add this line)
const currentYear = new Date().getFullYear();

const userSignupSchema = yup.object({
  name: yup.object({
    firstName: yup.string().required("First Name is required."),
    lastName: yup.string().optional(),
  }),
  email: yup.string().required("Email is required").email("Invalid email"),
  phoneNumber: yup.string().required("Phone number is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 6 characters, one uppercase, one number, and one special case character"
    ),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords don't match"),
  year: yup
    .date()
    .test(
      "is-not-current-year",
      "Can't select the current year",
      function (value) {
        // 'this' refers to the entire form values
        const selectedYear = value ? new Date(value).getFullYear() : null;

        // If the selected year is the current year, return false to trigger the validation error
        return selectedYear !== currentYear;
      }
    ),
  gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["male", "female"], "Invalid gender"),
});

export default userSignupSchema;

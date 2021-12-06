import { Link, Redirect, useHistory } from "react-router-dom";
import { Facebook, Twitter, Mail, GitHub } from "react-feather";
import InputPasswordToggle from "@components/input-password-toggle";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Button,
} from "reactstrap";
import "@styles/base/pages/page-auth.scss";
import { useState, Fragment } from "react";
import axios, * as others from "axios";
import config from "@src/configs/config";
import Toast from "@src/@core/components/Toast";
import ComponentSpinner from "@src/@core/components/spinner/Loading-spinner";
import { toast } from "react-toastify";

const Login = () => {
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const submitForm = (event) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = JSON.stringify(Object.fromEntries(formData));

    axios
      .post(`${config.baseUrl}/users/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        // console.log(response.data.isError==false);
        if (response.data.isError) {
          toast.error(
            <Toast title="Invalid Credentials" text="" type="Error" />,
            { autoClose: 3000, hideProgressBar: true }
          );
        } else {
          console.log(JSON.stringify(response.data));
          toast.error(
            <Toast title="Welcome to INKS-VILLA" text="" type="Info" />,
            { autoClose: 3000, hideProgressBar: true }
          );
          localStorage.setItem("userData", JSON.stringify(response.data));
          history.push("/home");
        }
      })
      .catch(function (error) {
        if (error.response && error.response.status === 400)
          toast.success(
            <Toast
              title={error.response.data.message}
              text={error.response.data.errors.Error}
              type="Error"
            />,
            { autoClose: 3000, hideProgressBar: true }
          );
        else
          toast.success(
            <Toast title="Some Error Occurred" text="" type="Error" />,
            { autoClose: 3000, hideProgressBar: true }
          );
        setLoading(false);
      });
  };

  return (
    <Fragment>
      {loading && <ComponentSpinner />}
      <div className="auth-wrapper auth-v1 px-2">
        <div className="auth-inner py-2">
          <Card className="mb-0">
            <CardBody>
              <Link
                className="brand-logo"
                to="/"
                onClick={(e) => e.preventDefault()}
              >
                <svg viewBox="0 0 139 95" version="1.1" height="28">
                  <defs>
                    <linearGradient
                      x1="100%"
                      y1="10.5120544%"
                      x2="50%"
                      y2="89.4879456%"
                      id="linearGradient-1"
                    >
                      <stop stopColor="#000000" offset="0%"></stop>
                      <stop stopColor="#FFFFFF" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient
                      x1="64.0437835%"
                      y1="46.3276743%"
                      x2="37.373316%"
                      y2="100%"
                      id="linearGradient-2"
                    >
                      <stop
                        stopColor="#EEEEEE"
                        stopOpacity="0"
                        offset="0%"
                      ></stop>
                      <stop stopColor="#FFFFFF" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Artboard"
                      transform="translate(-400.000000, -178.000000)"
                    >
                      <g
                        id="Group"
                        transform="translate(400.000000, 178.000000)"
                      >
                        <path
                          d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"
                          id="Path"
                          className="text-primary"
                          style={{ fill: "currentColor" }}
                        ></path>
                        <path
                          d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z"
                          id="Path"
                          fill="url(#linearGradient-1)"
                          opacity="0.2"
                        ></path>
                        <polygon
                          id="Path-2"
                          fill="#000000"
                          opacity="0.049999997"
                          points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"
                        ></polygon>
                        <polygon
                          id="Path-2"
                          fill="#000000"
                          opacity="0.099999994"
                          points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"
                        ></polygon>
                        <polygon
                          id="Path-3"
                          fill="url(#linearGradient-2)"
                          opacity="0.099999994"
                          points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"
                        ></polygon>
                      </g>
                    </g>
                  </g>
                </svg>
                <h2 className="brand-text text-primary ml-1">INKS-VILLA</h2>
              </Link>
              <CardTitle tag="h4" className="mb-1">
                <h2 className="brand-text text-primary ml-1">Admin Login</h2>
              </CardTitle>

              <Form className="auth-login-form mt-2" onSubmit={submitForm}>
                <FormGroup>
                  <Label className="form-label" for="lusername">Username
                  </Label>
                  <Input
                    type="text"
                    name="emailOrUsername"
                    id="emailOrUsername"
                    placeholder="emailOrUsername"
                    autoFocus
                  />
                </FormGroup>
                <FormGroup>
                  <div className="d-flex justify-content-between">
                    <Label className="form-label" for="login-password">
                      Password
                    </Label>
                    <Link to="/pages/forgot-password-v1">
                      <small>Forgot Password?</small>
                    </Link>
                  </div>
                  <InputPasswordToggle
                    name="password"
                    className="input-group-merge"
                    id="login-password"
                  />
                </FormGroup>
                <FormGroup>
                  <CustomInput
                    type="checkbox"
                    className="custom-control-Primary"
                    id="remember-me"
                    label="Remember Me"
                  />
                </FormGroup>
                <Button.Ripple color="primary" block>
                  Sign in
                </Button.Ripple>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { PrimaryButton, SecondaryButton } from "../components/buttons";
import { Checkbox, Input } from "../components/field";
import { Link, Loader } from "../components/utils";
import { toast } from "../helpers";
import AuthLayout from "../layouts/AuthLayout";

const Register = () => {
    const navigate = useNavigate();
    const defaultMessage = {
        email: [],
        password: [],
        firstname: [],
        lastname: []
    };

    const [loading, setLoading] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [errorMessage, setErrorMessage] = useState(defaultMessage);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
        setLoading(true);
        setTimeout(() => {
            const newErrorMessage = defaultMessage;
            if (!email) {
                newErrorMessage.email = ["This field is required"];
            }
            if (!password) {
                newErrorMessage.password = ["This field is required"];
            }

            if (!firstname) {
                newErrorMessage.firstname = ["This field is required"];
            }

            if (!lastname) {
                newErrorMessage.lastname = ["This field is required"];
            }

            if (email && lastname && password && firstname) {
                toast("success", "Successful registration");
                navigate("/login");
            } else {
                toast("error", "Failed registration");
            }
            setErrorMessage(defaultMessage);
            setLoading(false);
        }, 3000);
    };

    return (
        <AuthLayout
            title={
                <>
                    Welcome to <br /> Crowd Farming
                </>
            }
        >
            <h3 className="text-center text-xl font-semibold text-gray-700">Create New Account</h3>
            <p className="text-center text-sm mt-2 mb-10">
                Use your remail email continue with Nioboard (it's free)!
            </p>

            <form className="space-y-5">
            <div>
                    <Input
                        label={"Firstname"}
                        id="firstname"
                        type="firstname"
                        placeholder="Enter firstname"
                        value={firstname}
                        onChange={e => setFirstname(e.target.value)}
                        error={errorMessage.firstname}
                    />
                </div>

                <div>
                    <Input
                        label={"Last Name"}
                        id="firstname"
                        type="text"
                        placeholder="Enter Lastname"
                        value={lastname}
                        onChange={e => setLastname(e.target.value)}
                        error={errorMessage.lastname}
                    />
                </div>

                <div>
                    <Input
                        label={"Email"}
                        id="email"
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        error={errorMessage.email}
                    />
                </div>

                <div>
                    <Input
                        label={"Password"}
                        id="password"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        error={errorMessage.password}
                    />
                </div>

                <div>
                    <Checkbox id="remember" label="I agree to privacy policy & terms" />
                </div>

                <PrimaryButton onClick={register}>
                    {loading && <Loader color={"white"} />}
                    <span>Sign up</span>
                </PrimaryButton>

                <div className="flex items-center justify-center space-x-3">
                    <hr className="w-12" />
                    <span className="font-bold uppercase text-xs text-gray-400">Or</span>
                    <hr className="w-12" />
                </div>

                <div className="flex items-center space-x-4 lg:space-x-2 xl:space-x-4 text-sm font-semibold">
                    <SecondaryButton as="a" href="#auth-google">
                        <FcGoogle className="h-5 w-5 lg:w-4 lg:h-4 xl:h-5 xl:w-5" />

                        <span className="text-[0.7rem] md:text-sm lg:text-[0.7rem] xl:text-sm">
                            Continue with Google
                        </span>
                    </SecondaryButton>

                    <SecondaryButton as="a" href="#auth-facebook">
                        <RiFacebookCircleFill className="h-5 w-5 lg:w-4 lg:h-4 xl:h-5 xl:w-5 text-blue-600" />

                        <span className="text-[0.7rem] md:text-sm lg:text-[0.7rem] xl:text-sm">
                            Continue with Facebook
                        </span>
                    </SecondaryButton>
                </div>

                <p className="text-sm text-center">
                    Already have an account? <Link href="/login">Login</Link>
                </p>
            </form>
        </AuthLayout>
    );
};

export default Register;

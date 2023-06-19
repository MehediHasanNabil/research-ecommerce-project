import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";
import { useRegisterMutation } from "../features/auth/authApi";
import { toast } from "react-hot-toast";

export default function Registration() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  toast.success("Signup successfully!");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signUpEmailAndPassword() {
  
  }

  return (
    <section className="flex justify-center items-center min-h-screen bg-indigo-100 dark:bg-gray-800">
      <div className="w-96 shadow-lg rounded-lg px-6 py-6 lg:px-8 bg-indigo-50 dark:bg-gray-700">
        <div className="flex-center">
          <Link to="/">
            <img className="w-20 py-3 mx-auto" src={logo} alt="logo" />
          </Link>
        </div>
        <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">
          Sign up to your account
        </h3>
        <form onSubmit={(e) => signUpEmailAndPassword(e)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <button
            //   disabled={isLoading}
            type="submit"
            className={`w-full text-white shadow-xl bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 disabled:cursor-not-allowed`}
          >
            Registration
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{"  "}
            <Link
              to="/registration"
              className="text-indigo-700 hover:underline dark:text-indigo-500"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

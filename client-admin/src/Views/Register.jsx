import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    role: "admin",
    phoneNumber: "",
    address: "",
  });

  const onChangeInput = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
    console.log(formState);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("https://movie-api.murfidar.online/user", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    if (!response.ok) {
      console.log("ada yang salah");
      console.log(response);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="card bg-neutral w-96">
          <div className="card-body text-white">
            <h1 className="card-title font-mono">Register a New Admin</h1>
            <form method="post" onSubmit={handleRegister}>
              <div className="form-control w-full max-w-xs">
                <label className="label ">
                  <span className="label-text text-white font-bold font-mono">
                    Username
                  </span>
                </label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  onChange={onChangeInput}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label ">
                  <span className="label-text text-white font-bold font-mono">
                    Email
                  </span>
                </label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  onChange={onChangeInput}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-white font-bold font-mono">
                    Password
                  </span>
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={onChangeInput}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label ">
                  <span className="label-text text-white font-bold font-mono">
                    Phone Number
                  </span>
                </label>
                <input
                  id="phoneNumber"
                  type="text"
                  name="phoneNumber"
                  onChange={onChangeInput}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label ">
                  <span className="label-text text-white font-bold font-mono">
                    Address
                  </span>
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  onChange={onChangeInput}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <br />
              <input
                className="btn btn-shadow btn-primary"
                type="submit"
                value="Sign Up"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ key: "", password: "" });

  const onChangeInput = ({ target: { name, value } }) => {
    setLogin({ ...login, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let options = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      };

      const response = await fetch(
        `https://movie-api.murfidar.online/login`,
        options
      );

      const data = await response.json();

      if (data.message) throw data.message;

      localStorage.setItem("access_token", data.access_token);
      navigate("/");
    } catch (error) {
      navigate("/login");
      console.log(error);
    }
  };

  return (
    <div
      className="hero min-h-screen bg-base-100"
      style={{
        backgroundImage:
          "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wallpaperup.com%2Fuploads%2Fwallpapers%2F2015%2F12%2F12%2F858387%2F4b8a92b93fc6b6a5a91175fdc7692d3c-700.jpg&f=1&nofb=1&ipt=07d04707bd4b642bdb64ef987b9ae7e858fc72c275724ddfd526400f6f3a4779&ipo=images)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center">
        <div className="card bg-neutral w-96">
          <div className="card-body text-white">
            <h1 className="card-title font-mono">Login</h1>
            <form method="post" onSubmit={handleLogin}>
              <div className="form-control w-full max-w-xs">
                <label className="label ">
                  <span className="label-text text-white font-bold font-mono">
                    Username or Email
                  </span>
                </label>
                <input
                  id="key"
                  type="text"
                  name="key"
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
              <br />
              <input
                className="btn btn-shadow btn-primary"
                type="submit"
                value="Sign In"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

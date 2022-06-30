import classes from "./AuthItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { start } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

export default function AuthComp() {
  const dispatch = useDispatch();
  const { error, localId } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  function onAuthStart(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(
      start({
        email: formData.get("email"),
        password: formData.get("password"),
        method:
          event.nativeEvent.submitter.innerText === "Sign up"
            ? "signup"
            : "signin",
      })
    );
  }
  if (localId !== null) {
    navigate("/");
  }
  let errorOutput = null;
  if (error) {
    errorOutput = <strong style={{ color: "red" }}>{error}</strong>;
  }

  return (
    <div className={classes.AuthItem}>
      <form className={classes.container} onSubmit={onAuthStart}>
        {errorOutput}
        <h1>Welcome</h1>
        <label>
       
          Email:
          <input type="email" name="email"  placeholder="Enter Email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" placeholder="Enter Password" />
        </label>
        <button>Sign in</button>
        <button>Sign up</button>
      </form>
    </div>
  );
}
import { FunctionComponent, useEffect, useState } from "react";
import { Paper } from "../layout/paper/Paper";
import { Button } from "../button/Button";
import { handleSignIn } from "../../firebase/firebase";
import { Input } from "../input/Input";
import { useNavigate } from "react-router-dom";
import { Title } from "../text/Title";
import { KeyCodes } from "../../keycode/KeyCodes";

export const LoginPage: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginText, setLoginText] = useState("Log in");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (password && email) {
      setLoginText("Logging in");
      setLoading(true);
      const { success, errorCode, errorMessage } = await handleSignIn(email, password);
      if (success) {
        navigate("/guest");
      } else {
        setLoginText("Login");
        console.log("ERROR:", errorMessage);
        console.log("ERROR CODE:", errorCode);
        if (errorCode === "auth/wrong-password") {
          setPasswordError("Forkert kodeord");
          setEmailError("");
        }
        if (errorCode === "auth/user-not-found") {
          setEmailError("Brugeren findes ikke");
          setPasswordError("");
        }
        if (errorCode === "auth/invalid-email") {
          setEmailError("ugyldig email");
          setPasswordError("");
        }
      }
      setLoading(false);
    }
  };

  const handlePasswordKeyUp = async (key: string) => {
    if (key === KeyCodes.Enter) {
      await handleLogin();
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordError("");
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailError("");
  };

  useEffect(() => {
    if (loading) {
      const index = loginText.length;
      const interval = setInterval(() => {
        if (index < 10 || index > 12) {
          setLoginText("Logging in");
        }
        if (index >= 10 && index <= 12) {
          setLoginText((prev) => prev + ".");
        }
      }, 500);
      return () => {
        clearInterval(interval);
      };
    }
  }, [loginText, loading]);

  return (
    <Paper gap={20}>
      <Title title="Login" />
      <Input
        label="Email"
        value={email}
        type="email"
        onChange={(e) => handleEmailChange(e.target.value)}
        error={emailError}
        disabled={loading}
        placeholder="Email"
        required
      />
      <Input
        label="Password"
        value={password}
        type="password"
        onChange={(e) => handlePasswordChange(e.target.value)}
        onKeyUp={async (e) => await handlePasswordKeyUp(e.key)}
        error={passwordError}
        disabled={loading}
        placeholder="Kodeord"
        required
      />
      <Button text={loginText} onClick={handleLogin} height="3rem" loading={loading} disabled={loading} />
    </Paper>
  );
};

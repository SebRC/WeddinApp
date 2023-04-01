import { FunctionComponent, useEffect, useState } from "react";
import { Paper } from "../layout/paper/Paper";
import { Button } from "../button/Button";
import { handleSignIn } from "../../firebase/firebase";
import { Input } from "../input/Input";
import { useNavigate } from "react-router-dom";
import { Title } from "../text/Title";
import { KeyCodes } from "../../keycode/KeyCodes";
import { useTranslator } from "../../translations/useTranslator";

export const LoginPage: FunctionComponent = () => {
  const translator = useTranslator();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginText, setLoginText] = useState(translator.login());
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (password && email) {
      setLoginText(translator.loggingIn());
      setLoading(true);
      const { success, errorCode, errorMessage } = await handleSignIn(email, password);
      if (success) {
        navigate("/guest");
      } else {
        setLoginText(translator.login());
        console.log("ERROR:", errorMessage);
        console.log("ERROR CODE:", errorCode);
        if (errorCode === "auth/wrong-password") {
          setPasswordError(translator.wrongPassword());
          setEmailError("");
        }
        if (errorCode === "auth/user-not-found") {
          setEmailError(translator.emailDoesNotExist());
          setPasswordError("");
        }
        if (errorCode === "auth/invalid-email") {
          setEmailError(translator.invalidEmail());
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
          setLoginText(translator.loggingIn());
        }
        if (index >= 10 && index <= 12) {
          setLoginText((prev) => prev + ".");
        }
      }, 500);
      return () => {
        clearInterval(interval);
      };
    }
  }, [loginText, loading, translator]);

  return (
    <Paper gap={20}>
      <Title title={translator.login()} />
      <Input
        label={translator.email()}
        value={email}
        type="email"
        onChange={(e) => handleEmailChange(e.target.value)}
        error={emailError}
        disabled={loading}
        placeholder={translator.email()}
        required
      />
      <Input
        label={translator.password()}
        value={password}
        type="password"
        onChange={(e) => handlePasswordChange(e.target.value)}
        onKeyUp={async (e) => await handlePasswordKeyUp(e.key)}
        error={passwordError}
        disabled={loading}
        placeholder={translator.password()}
        required
      />
      <Button text={loginText} onClick={handleLogin} height="3rem" loading={loading} disabled={loading} />
    </Paper>
  );
};

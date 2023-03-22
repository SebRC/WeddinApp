import { FunctionComponent, useEffect, useState } from "react";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Paper } from "../layout/paper/Paper";
import { Button } from "../button/Button";
import { handleSignIn } from "../../firebase/firebase";
import { Input } from "../input/Input";
import { useNavigate } from "react-router-dom";

export const LoginPage: FunctionComponent = () => {
  const users = [
    { email: "larke@ahosrcwedding.com", password: "Laerke" },
    { email: "martin@ahosrcwedding.com", password: "Martin" },
  ];
  const [email, setEmail] = useState(users[1].email);
  const [password, setPassword] = useState(users[1].password);
  const [loading, setLoading] = useState(false);
  const [loginText, setLoginText] = useState("Log in");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoginText("Logging in");
    setLoading(true);
    const { success, errorCode, errorMessage } = await handleSignIn(email, password);
    if (success) {
      navigate("/guest");
    } else {
      console.log("ERROR:", errorMessage);
      console.log("ERROR CODE:", errorCode);
    }
    setLoading(false);
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
    <Paper>
      <Flexbox flexDirection="column" gap={20}>
        <Input label="Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        <Button text={loginText} onClick={handleLogin} height="3rem" loading={loading} disabled={loading} />
      </Flexbox>
    </Paper>
  );
};

import { FunctionComponent, useState } from "react";
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
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { success, errorCode, errorMessage } = await handleSignIn(email, password);
    if (success) {
      navigate("/guest");
    }
  };

  return (
    <Paper>
      <Flexbox flexDirection="column" gap={20}>
        <Input label="Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        <Button text="Log in" onClick={handleLogin} height="3rem" />
      </Flexbox>
    </Paper>
  );
};

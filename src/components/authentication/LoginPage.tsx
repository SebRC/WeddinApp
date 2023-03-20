import { FunctionComponent, useState } from "react";
import { Flexbox } from "../flexbox/Flexbox";
import { Paper } from "../layout/Paper";
import { Button } from "../button/Button";
import { handleSignIn } from "../../firebase/firebase";
import { Input } from "../input/Input";
import { useNavigate } from "react-router-dom";

export const LoginPage: FunctionComponent = () => {
  const [email, setEmail] = useState("martin@ahosrcwedding.com");
  const [password, setPassword] = useState("Martin");
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
        <Button text="Log in" onClick={handleLogin} />
      </Flexbox>
    </Paper>
  );
};

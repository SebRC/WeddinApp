import { FunctionComponent, useState } from "react";
import { Flexbox } from "../flexbox/Flexbox";
import { Paper } from "../layout/Paper";
import { Button } from "../button/Button";
import { handleSignIn } from "../../firebase/firebase";
import { Input } from "../input/Input";

export const LoginPage: FunctionComponent = () => {
  const [email, setEmail] = useState("martin@ahosrcwedding.com");
  const [password, setPassword] = useState("");

  return (
    <Paper>
      <Flexbox flexDirection="column" gap={20}>
        <Input label="Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
        <Button text="Log in" onClick={() => handleSignIn(email, password)} />
      </Flexbox>
    </Paper>
  );
};

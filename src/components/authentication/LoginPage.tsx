import { FunctionComponent } from "react";
import { Flexbox } from "../flexbox/Flexbox";
import { Paper } from "../layout/Paper";

export const LoginPage: FunctionComponent = () => {
  return (
    <Paper>
      <label htmlFor="email">Email</label>
      <input type="email" id="email"></input>
      <label htmlFor="password">Password</label>
      <input type="password" id="password"></input>
    </Paper>
  );
};

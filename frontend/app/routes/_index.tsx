import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Dashboard" }];
};

export default function Index() {
  return (
    <>
      <h1>Boas-vindas ao Dashboard!</h1>
      <Link to="login">Login</Link>
    </>
  );
}

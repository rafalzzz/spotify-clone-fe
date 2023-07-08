import { CustomHeader } from "@/components/custom-header";
import { RegisterForm } from "@/register/components/register-form";

import "./page.scss";

export default function Home() {
  return (
    <main className="main">
      <CustomHeader title="Create an account" />
      <RegisterForm />
    </main>
  );
}

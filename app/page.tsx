"use client";
import { THEME_MODE } from "@/utils/enums";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { useReactiveVar } from "@apollo/client";
import { themeModeVar } from "@/apollo/localState";

export default function Home() {
  const { data: session } = useSession();
  const theme = useReactiveVar(themeModeVar);
  const { resolvedTheme, setTheme } = useTheme();

  const handleGoogleLogin = async () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };
  const changeTheme = () => {
    setTheme(
      resolvedTheme === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT
    );
  };

  return (
    <main>
      <Button onClick={handleGoogleLogin}>Login with google</Button>
      <Button onClick={changeTheme}>Change Theme</Button>
    </main>
  );
}

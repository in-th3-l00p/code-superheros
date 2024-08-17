"use client";

import {signIn} from "next-auth/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {Button} from "@/components/Button";

export default function GithubLogin() {
  return (
    <Button onClick={() => signIn("github")} className={"mt-5 gap-4"}>
      <FontAwesomeIcon icon={faGithub} size={"xl"} />
      Login with GitHub
    </Button>
  );
}
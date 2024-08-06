"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { GithubIcon, HeyGenLogo } from "./Icons";

export default function NavBar() {
  return (
    <Navbar className="w-full">
      <NavbarBrand>
        <Link isExternal aria-label="Vasa" href="https://tediseño.org/">
          <HeyGenLogo />
        </Link>
        <div className="bg-gradient-to-br from-lime-400 to-slate-950 bg-clip-text ml-4">
          <p className="text-xl font-semibold text-transparent">
           Vasa Demo v0.1.0
          </p>
        </div>
    </NavbarBrand>
       <NavbarContent justify="center">
         {/*<NavbarItem className="flex flex-row items-center gap-4">
          <Link
            isExternal
            color="secondary"
            href="https://app.heygen.com/streaming-avatar"
          >
            Avatars
          </Link>
          <Link
            isExternal
            color="secondary"
            href="https://docs.heygen.com/reference/list-voices-v2"
          >
            Voices
          </Link>
          <Link
            isExternal
            color="foreground"
            href="https://docs.heygen.com/reference/new-session-copy"
          >
            API Docs
          </Link>
          <Link
            isExternal
            color="foreground"
            href="https://help.heygen.com/en/articles/9182113-streaming-avatar-101-your-ultimate-guide"
          >
            Guide
          </Link>
          <Link
            isExternal
            aria-label="Github"
            href="https://github.com/HeyGen-Official/StreamingAvatarSDK"
            className="flex flex-row justify-center gap-1 text-foreground"
          >
            <GithubIcon className="text-default-500" />
            SDK
          </Link>
          <ThemeSwitch />
        </NavbarItem>*/}
      </NavbarContent>
    </Navbar>
  );
}

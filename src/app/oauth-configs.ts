import {
  GoogleLoginProvider,
  MicrosoftLoginProvider,
} from "@abacritt/angularx-social-login";
import { GithubLoginProvider } from "./oauth/github-login-provider";

export const googleLoginProvider = {
  id: GoogleLoginProvider.PROVIDER_ID,
  provider: new GoogleLoginProvider(
    "1098777895952-5crsvjfi7m8tl3b851cl25s7fhoi92iu.apps.googleusercontent.com",
    {
      oneTapEnabled: false,
      prompt: "select_account",
      scopes: "openid email profile",
    }
  ),
};

export const githubLoginProvider = {
  id: GithubLoginProvider.PROVIDER_ID,
  provider: GithubLoginProvider,
};

export const microsoftLoginProvider = {
  id: MicrosoftLoginProvider.PROVIDER_ID,
  provider: new MicrosoftLoginProvider(""),
};

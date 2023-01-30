// Replace me with `require` if you're using CommonJS modules
import { Octokit } from "octokit";

const octokitOptions: {
  owner: string;
  repo: string;
  path: string;
} & {
  ref?: string | undefined;
} & {
  mediaType: {
    format: string;
  };
} = {
  owner: "gvalenc",
  repo: "environment-aio-iks-app-us",
  path: "IBM-ResourceGroup/provider_metadata.yaml",
  mediaType: {
    format: "raw",
  },
};

const authToken = process.env.GH_TOKEN;
const baseUrl = process.env.GHE_URL
  ? process.env.GHE_URL
  : `https://github.ibm.com/api/v3`;

let octokit;
if (authToken) {
  octokit = new Octokit({
    baseUrl,
    auth: authToken,
    log: console,
  });
} else {
  octokit = new Octokit({
    baseUrl,
    log: console,
  });
}

// github.ibm.com/gvalenc/environment-aio-iks-app-us/IBM-ResourceGroup
(async () => {
  const response = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    octokitOptions
  );

  console.log(response);
})();

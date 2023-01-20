// Replace me with `require` if you're using CommonJS modules
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

// github.ibm.com/gvalenc/environment-aio-iks-app-us/IBM-ResourceGroup
(async () => {
  const response = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      baseUrl: "http://github.ibm.com/api/v3",
      owner: "gvalenc",
      repo: "environment-aio-iks-app-us",
      path: "IBM-ResourceGroup/provider_metadata.yaml",
      ref: "master",
    }
  );

  console.log(response);
})();

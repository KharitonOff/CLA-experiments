import { context, octokit, personalOctokit } from "./src/utils.ts";

// console.log(context.eventName);

console.log(Deno.inspect(context));

personalOctokit.issues.createLabel({
    ...context.repo,
    name: "CLA",
    color: "1DC515",
})

// console.log(Deno.inspect(context.payload.issue));

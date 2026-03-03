import { Agent, openai, anthropic,  createAgent } from "@inngest/agent-kit";

import { inngest } from "./client";
import { success } from "zod";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" ,
    retries:2
  },
  { event: "test/hello.world" },
  async ({ event}) => {

     const codeagent = createAgent({
      name: "code-agent",
      system: "You are an expert next.js developer . You write readable, maintainable code. Write simple Next.js & React snippets",
      model: openai({ model: "gpt-4.1-mini" },),
    });
    const { output } = await codeagent.run(`Write the following snippet: ${event.data.value}`);
    return {output };
  },
);
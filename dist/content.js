(function(){"use strict";const s="io-v2-eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvd25lciI6IjEzN2YxZGI4LTZlZmEtNGMxYS04NjJlLTliNDA0MDlhM2RlYiIsImV4cCI6NDg5OTUzMzIwMX0.iltz3VKwH8sLOQhixg-2h8if4fIvvC2KdH9GTV87fXfXaSWdC-cguuifwVMbd7RzfG8qVCUNyjdH7lNYfwBfRQ",a=e=>new DOMParser().parseFromString(`<div data-testid="prompt-enhancer">
      <div
        class="inline-flex h-9 rounded-full border text-[13px] font-medium duration-75 motion-safe:transition-all text-token-text-secondary border-token-border-default can-hover:hover:bg-token-main-surface-secondary focus-visible:outline-black dark:focus-visible:outline-white"
        style="background: linear-gradient(45deg, #ff6ec4, #7873f5); border-color: #c832e3;"
      >
        <button
          type="button"
          id="prompt-enhancer"
          class="flex h-full min-w-8 items-center justify-center p-2"
          data-testid="composer-button-search"
          aria-pressed="false"
          aria-label="Prompt Enhancer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 456 464"
            fill="none"
          >
            <path
              d="M140.5 17C109.609 94.3988 83.0894 123.144 17 144.5C94.5725 171.871 119.567 199.874 140.5 266C161.124 199.871 194.348 176.305 267 141C195.48 121.025 170.02 90.9961 140.5 17Z"
              stroke="white"
              stroke-width="34"
              stroke-linejoin="round"
            />
            <path
              d="M339.318 150C314.976 210.924 294.078 233.551 242 250.361C303.127 271.906 322.822 293.949 339.318 346C355.57 293.947 381.75 275.397 439 247.606C382.642 231.883 362.58 208.246 339.318 150Z"
              stroke="white"
              stroke-width="34"
              stroke-linejoin="round"
            />
            <path
              d="M214.618 301C196.454 346.382 180.861 363.237 142 375.759C187.613 391.808 202.309 408.227 214.618 447C226.745 408.226 246.281 394.408 289 373.707C246.946 361.994 231.976 344.387 214.618 301Z"
              stroke="white"
              stroke-width="34"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>`,"text/html").body.firstChild,l=()=>{const e=document.querySelector('[data-testid="composer-footer-actions"]');if(!e||e.querySelector("#prompt-enhancer"))return;const o=a();e.insertBefore(o,e.childNodes[1]),o.addEventListener("click",async()=>{const n=document.querySelector("#prompt-textarea"),i=n.textContent,{content:r,error:t}=await c(i);r?n.textContent=r:t&&alert(t)})},c=async e=>{const n={model:"meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",messages:[{role:"system",content:"Your task is to help users improve their prompts by making them more detailed, structured, and clear for the AI. You may correct any errors in the original prompt, including grammar, spelling, or logical issues. Reformulate or expand the prompt to ensure maximum clarity and completeness, with the goal of achieving the best possible results from the AI model. Do not answer the user's questions or try to solve their requests directly — your sole role is to edit and enhance their prompt. Be concise, but do not omit important context or intent."},{role:"user",content:`You are a Prompt Enhancer Assistant. Your **only** task is to rewrite user prompts to be **highly detailed, precise, and comprehensive** for an AI model, **strictly preserving the exact language of the original prompt (e.g., English stays English, Russian stays Russian)**. Transform short prompts into **lengthy, richly detailed requests** with clear context, specific instructions, and defined objectives to ensure the best AI response.

**Strict rules:**
- **Never** respond to the prompt’s content or provide answers.
- **Never** change the language of the original prompt; the enhanced prompt **must** match the original language exactly.
- **Never** output conversational text (e.g., 'I’m ready to assist').
- **Never** output anything except the enhanced prompt or error message.
- **Empty prompt**: Output **only**: 'ERROR: The prompt is empty. Please provide a valid prompt and try again.'

**Task:**
1. Expand short prompts with extensive context, requirements (e.g., format, tone, audience), and objectives.
2. Define a specific **role** (e.g., 'expert programming instructor') and **response style** (e.g., 'simple, with analogies').
3. Clarify ambiguities, specifying task, outcome, and constraints in the original language.
4. Include detailed instructions (e.g., steps for technical tasks, tone for creative tasks).
5. Fix grammar and logical errors while keeping the original language.
6. Preserve user intent while optimizing for AI.

**Example:**
- Original (English): 'My function isn’t working in code'
  Enhanced (English): 'You are an expert programming instructor with 15 years of experience. Provide a detailed, step-by-step guide to diagnose and fix a malfunctioning function in the user’s code, assuming basic programming knowledge. Specify the language (assume Python if unclear), function purpose, and error. Explain debugging simply, using analogies (e.g., debugging as finding a recipe typo). List potential issues with code examples, suggest fixes with annotated snippets, and include best practices like error handling. Use a patient, encouraging tone with numbered steps.'

**Error handling:**
- Empty prompt: 'ERROR: The prompt is empty. Please provide a valid prompt and try again.'
- Unclear/invalid prompt: 'ERROR: The prompt is unclear or invalid. Please provide a clear and valid prompt and try again.'

**Output:**
- Output **only** the enhanced prompt in the **exact same language** as the original or the error message.
- **No** commentary, questions, or extra text.

Prompt: ${e}`}]},t=(await(await fetch("https://api.intelligence.io.solutions/api/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify(n)})).json()).choices[0].message.content;return t.includes("ERROR")?{content:null,error:t.split("ERROR: ")[1]}:{content:t,error:null}};new MutationObserver(()=>{l()}).observe(document.body,{childList:!0,subtree:!0})})();

import type { ToolContent } from "./tool-content.ts";

const local = {
  question: "Is my text sent to a server?",
  answer:
    "The original buttons stay in your browser and do not upload the text. When you choose Generate with AI, Analyze with AI, or Compress with AI, the text you submit is sent to Google's Gemini API through ToolStarHub to produce the result. ToolStarHub does not save that text. On the free tier, Google may use it to improve its products.",
};

export const aiToolContent: Record<string, ToolContent> = {
  "ai-prompt-generator": {
    about:
      "The AI Prompt Generator turns the fields you fill in into one prompt you can copy. A preset only fills the use case, tone, format, detail, and a starter instruction. You still need to say what the piece is about.",
    howTo: [
      "Choose a preset or type your own use case.",
      "Add a topic or a goal. The tool needs at least one of those.",
      "Set the audience, tone, language, format, and how much detail you want.",
      "Press Generate prompt to assemble a prompt in the browser, or Generate with AI to have Gemini rewrite it.",
      "Press Clear to empty the form.",
    ],
    features: [
      "Twelve presets for articles, posts, scripts, product copy, research outlines, and code tasks.",
      "A structured prompt that names the task, audience, tone, language, and format.",
      "A line that tells the model not to invent missing facts.",
      "Copy and clear controls. Nothing is stored.",
    ],
    examples: [
      {
        title: "A blog post about leap-day age",
        body: "Preset: Blog article. Topic: how to count age when someone was born on 29 February. Audience: people using a date calculator. The prompt asks for a short opening and no padded ending.",
      },
      {
        title: "A coding task",
        body: "Preset: Coding prompt. Goal: write a function that rejects an empty page range. Extra instruction: use TypeScript and show one failing example. The prompt asks for the language, the inputs, and what done looks like.",
      },
    ],
    explanation:
      "Generate prompt joins your answers into labeled lines. If both topic and goal are blank, it stops and asks for one. Generate with AI sends those fields to Gemini and returns a rewritten prompt.",
    tips: [
      "Name the reader. “New parents” is more useful than “everyone.”",
      "Say what the output should look like: a list, an email, a script.",
      "Put facts you already know in the extra instructions so the model does not guess them.",
    ],
    faqs: [
      {
        question: "Does this tool use AI?",
        answer: "Generate prompt builds the prompt on this page. Generate with AI sends the fields to Google's Gemini API through ToolStarHub and returns a rewritten prompt. You can still paste either result into another model.",
      },
      {
        question: "What if I only know the topic?",
        answer: "A topic is enough to generate. Add a goal when you know what the reader should be able to do afterward.",
      },
      local,
    ],
  },
  "prompt-to-image": {
    about:
      "Prompt to Image Generator writes a prompt for an image model. You describe the subject, the place, the light, and the framing. The page does not draw the picture, because no image API is connected.",
    howTo: [
      "Pick a style preset if you want a starting point.",
      "Write the subject. The tool will not build a prompt without it.",
      "Add the setting, light, camera, palette, mood, and aspect ratio you care about.",
      "Add a negative prompt for things that should stay out of the frame.",
      "Press Build prompt, then copy the prompt and the negative prompt separately.",
    ],
    features: [
      "Presets for photo, cinematic, illustration, product, portrait, landscape, architecture, fantasy, anime, 3D, and thumbnail work.",
      "Separate copy buttons for the main prompt and the negative prompt.",
      "Empty fields are left out, so you do not get a string of blank labels.",
    ],
    examples: [
      {
        title: "A product shot",
        body: "Subject: a steel water bottle. Preset: Product photography. Aspect ratio: 1:1. Negative prompt: extra logos, people, cluttered table. The result is a studio description, not a file.",
      },
      {
        title: "A thumbnail",
        body: "Subject: a person holding a marked-up PDF. Preset: YouTube thumbnail. Composition stays “one subject, room for a short title.” You still write the title words yourself.",
      },
    ],
    explanation:
      "Each filled field becomes a short clause. The subject is required so the prompt is about something specific. A preset changes style and a few related fields. It does not erase the subject you already typed.",
    tips: [
      "One subject is easier to describe than a crowd.",
      "Name the light. “Window light” and “hard noon sun” produce different pictures.",
      "Use the negative prompt for defects you keep seeing, such as extra fingers or warped text.",
    ],
    faqs: [
      {
        question: "Why is there no picture?",
        answer: "This page writes a prompt. It does not render an image. Generate with AI asks Gemini for a more detailed prompt. You still paste that prompt into a service that creates images.",
      },
      {
        question: "Will every model read the prompt the same way?",
        answer: "No. Models treat wording differently. Treat the result as a clear brief, then adjust it for the tool you use.",
      },
      local,
    ],
  },
  "prompt-to-video": {
    about:
      "Prompt to Video Generator writes a one-shot description: who or what is in frame, what moves, how the camera moves, and how long the shot lasts. It does not generate video.",
    howTo: [
      "Choose a preset for a starting style, or leave the fields blank and type your own.",
      "Add a subject or an action. One of those is required.",
      "Describe the scene, camera, lens, light, duration, and aspect ratio.",
      "Add audio or dialogue only if the shot needs sound.",
      "Press Build prompt and copy the text. Clear resets the form, including the default duration.",
    ],
    features: [
      "Presets for cinematic, commercial, social, YouTube, documentary, travel, action, fashion, nature, historical, and animation shots.",
      "A closing line that keeps the request to one continuous shot.",
      "A separate negative prompt for motion and image problems you want to avoid.",
    ],
    examples: [
      {
        title: "A product orbit",
        body: "Subject: a ceramic mug. Action: steam rises. Preset: Product commercial. Duration stays at 6 seconds. The prompt asks for an orbit and studio light.",
      },
      {
        title: "A travel drift",
        body: "Subject: a coastal path. Action: a person walks away from camera. Preset: Travel. You add the time of day in the environment field so the light is not left blank.",
      },
    ],
    explanation:
      "Video models do better with one action than with a sequence of scenes. The builder keeps your clauses in a stable order and adds “one continuous shot” so the request does not turn into a storyboard.",
    tips: [
      "Say what moves and what stays still.",
      "A duration such as “5 seconds” is more useful than “short.”",
      "If you need dialogue, write the line. Do not ask the model to invent a speech.",
    ],
    faqs: [
      {
        question: "Can I download a video from this page?",
        answer: "No. This page does not render a video. Generate with AI only returns a written shot prompt from Gemini. Copy that prompt into a video tool you trust.",
      },
      {
        question: "What if I only describe the action?",
        answer: "An action is enough. Adding a subject makes the shot easier to picture.",
      },
      local,
    ],
  },
  "ai-article-detector": {
    about:
      "AI Article Detector looks at the draft you paste and reports sentence length, how much those lengths vary, how wide the vocabulary is, and which short phrases repeat. The heading on the result is Writing pattern analysis. That is the whole claim.",
    howTo: [
      "Paste at least 40 words.",
      "Press Analyze writing for the browser check, or Analyze with AI for a Gemini writing-pattern analysis.",
      "Read the counts and the note under them.",
      "If the sample is too short, the page says so instead of scoring it.",
      "Clear removes the text from the page.",
    ],
    features: [
      "Average sentence length and a low, moderate, or varied label.",
      "A vocabulary label based on how many different words appear.",
      "Four-word phrases that show up three or more times.",
      "A short list of stock phrases, when they are present.",
    ],
    examples: [
      {
        title: "A draft that repeats itself",
        body: "If the same four words appear in several sentences, they show up in the list with a count. That means the draft is repetitive. It does not mean a model wrote it.",
      },
      {
        title: "A short caption",
        body: "Twenty words is not enough. The tool asks for 40 words so a single sentence is not treated as a pattern.",
      },
    ],
    explanation:
      "Sentence variation compares the spread of sentence lengths with the average. Vocabulary compares unique words with total words. Both measures move around in ordinary editing. A careful human draft can look even. A generated draft can look varied. The page says that in the result.",
    tips: [
      "Use a full section, not a headline.",
      "Treat repeated phrases as an editing note. Cut them if the reader would notice.",
      "Do not use the labels to accuse someone of using a model.",
    ],
    faqs: [
      {
        question: "Can this tell if text was written by AI?",
        answer: "No. It cannot do that with certainty. Pattern checks produce false positives and false negatives. The result is a description of the draft, not a verdict.",
      },
      {
        question: "Why is there no percentage score?",
        answer: "A percentage would look like proof. Analyze writing and Analyze with AI both describe patterns. Neither one claims it can tell who wrote the text.",
      },
      local,
    ],
  },
  "ai-article-compressor": {
    about:
      "AI Article Compressor makes a long draft shorter. Light compression swaps a few wordy phrases and tidies spaces. Medium and strong compression also drop repeated sentences. You should read the result. Meaning can shift when a sentence is removed.",
    howTo: [
      "Paste the article. It needs at least 12 words.",
      "Choose light, medium, or strong compression.",
      "Press Shorten article for the browser rules, or Compress with AI to have Gemini shorten it.",
      "Compare the word counts, then copy the shorter draft if it still says what you meant.",
      "Clear empties both boxes and returns the setting to medium.",
    ],
    features: [
      "Three strengths, so a light pass does not delete sentences.",
      "Word counts before and after.",
      "Fixed phrase swaps, such as “in order to” becoming “to.”",
      "Duplicate-sentence removal on medium and strong.",
    ],
    examples: [
      {
        title: "A wordy sentence",
        body: "“In order to finish the form, you need to sign it” becomes “to finish the form, you need to sign it” on every setting.",
      },
      {
        title: "The same sentence twice",
        body: "Medium and strong keep the first copy and drop the later exact repeat. Light leaves both copies in place.",
      },
    ],
    explanation:
      "Shorten article uses a fixed list of replacements. Strong compression also skips a later sentence that starts with the same six words as an earlier one. Compress with AI asks Gemini to shorten the article at the level you chose. Read either result before you rely on it.",
    tips: [
      "Start with light if the article is already tight.",
      "Use strong on a rough paste, then restore any sentence that mattered.",
      "This is not a way to hide how a draft was written.",
    ],
    faqs: [
      {
        question: "Will the shorter text bypass an AI detector?",
        answer: "No. The tool does not try to do that, and it does not claim the result will look like a particular kind of author.",
      },
      {
        question: "Does it keep my meaning?",
        answer: "Shorten article keeps most of the words and removes some filler and repeats. Compress with AI asks Gemini to keep the main meaning and important facts. Read the shorter draft before you rely on it.",
      },
      local,
    ],
  },
};

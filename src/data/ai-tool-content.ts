import type { ToolContent } from "./tool-content.ts";

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
    limitations:
      "Generate prompt only joins the fields you filled in, and it needs a topic or a goal. A preset fills style fields. It does not invent the subject. Generate with AI rewrites the prompt through Gemini. The page does not run that prompt in a writing model.",
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
      {
        question: "Is my text sent to a server?",
        answer:
          "Generate prompt stays in this tab and does not upload the fields. Generate with AI sends those fields to Google's Gemini API through ToolStarHub and returns a rewritten prompt. ToolStarHub does not save that text. On the free tier, Google may use it to improve its products.",
      },
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
    limitations:
      "The page writes a prompt and an optional negative prompt. It does not return an image file. A subject is required. Generate with AI asks Gemini for a longer prompt, which you still paste into an image tool.",
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
      {
        question: "Is my text sent to a server?",
        answer:
          "Build prompt stays in this browser and does not upload the brief. Generate with AI sends that brief to Google's Gemini API through ToolStarHub and returns a longer prompt. ToolStarHub does not save that text. On the free tier, Google may use it to improve its products. The page still does not create an image.",
      },
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
    limitations:
      "The builder describes one continuous shot. It does not render or download a video. You need a subject or an action. Duration, camera, and dialogue are included only when you type them.",
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
      {
        question: "Is my text sent to a server?",
        answer:
          "Build prompt writes the shot in this tab. Generate with AI sends the shot fields to Google's Gemini API through ToolStarHub and returns a written prompt. ToolStarHub does not save that text. On the free tier, Google may use it to improve its products. No video file is created.",
      },
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
    limitations:
      "The browser check needs at least 40 words. It reports sentence length, vocabulary spread, and repeated phrases. It does not return a percentage or a verdict that a model wrote the draft. Analyze with AI sends the text to Gemini for the same kind of description.",
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
      {
        question: "Is my text sent to a server?",
        answer:
          "Analyze writing counts patterns in this tab and does not upload the draft. Analyze with AI sends the draft to Google's Gemini API through ToolStarHub for a written description. ToolStarHub does not save that text. On the free tier, Google may use it to improve its products.",
      },
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
    limitations:
      "Light compression swaps a fixed list of wordy phrases. Medium and strong also drop a later exact repeat, and strong can skip a later sentence that starts with the same six words. The draft needs at least 12 words. Shortening can drop a sentence you still wanted.",
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
      {
        question: "Is my text sent to a server?",
        answer:
          "Shorten article runs in this tab and does not upload the draft. Compress with AI sends the draft to Google's Gemini API through ToolStarHub and returns a shorter version. ToolStarHub does not save that text. On the free tier, Google may use it to improve its products.",
      },
    ],
  },
  "ai-text-humanizer": {
    about:
      "AI Text Humanizer swaps a fixed list of stock phrases for plainer wording. Rewrite text does that in this tab. Humanize with AI sends the draft to Google's Gemini API through ToolStarHub and returns a rewritten draft. The text is not stored. Check the result before you use it. Neither result is a way to hide how a draft was written.",
    howTo: [
      "Paste the draft. It needs at least 12 words and at most 4,000 characters.",
      "Press Rewrite text for the browser phrase list, or Humanize with AI to have Gemini rewrite it.",
      "Check the result. A deletion can leave the next word lowercase.",
      "Copy the rewritten draft if it still says what you meant.",
      "Clear empties the box and the local result.",
    ],
    features: [
      "A fixed phrase list, applied in the browser.",
      "A separate Humanize with AI result.",
      "A 4,000-character limit on both buttons.",
      "No sentence deletion and no duplicate-sentence removal.",
    ],
    examples: [
      {
        title: "Stock openers",
        body: "“In today's digital world, let's dive into the setup. It is important to note that you can unlock the power of a short checklist.” becomes “here is the setup. you can use a short checklist.”",
      },
      {
        title: "A repeated sentence",
        body: "“The form is short. The form is short. Please sign it before noon today and bring a pen.” stays as two copies. This pass does not drop a repeated sentence.",
      },
    ],
    explanation:
      "Rewrite text walks a fixed list once. It does not recapitalize after a deletion, and a curly apostrophe does not match. Humanize with AI asks Gemini to keep the same facts, names, and numbers, and not to shorten the draft into a summary. Check either result before you use it.",
    limitations:
      "The draft needs at least 12 words for Rewrite text, and at most 4,000 characters for either button. The local pass only swaps phrases on the list. A curly apostrophe will not match. The tool does not try to bypass an AI detector, and it does not claim the result will look like a particular kind of author.",
    tips: [
      "Check the result before you use it. The next word may stay lowercase after a phrase is removed.",
      "A repeated sentence stays. This pass does not delete it.",
      "Neither result is a way to hide how a draft was written.",
    ],
    faqs: [
      {
        question: "Is the AI Text Humanizer free?",
        answer:
          "Yes. You can rewrite a draft here without paying or creating an account. Rewrite text stays in this tab. Humanize with AI still sends the draft to Google's Gemini API through ToolStarHub.",
      },
      {
        question: "Will this bypass an AI detector?",
        answer: "No. The tool does not try to do that, and it does not claim the result will look like a particular kind of author.",
      },
      {
        question: "Does it keep my meaning?",
        answer:
          "Rewrite text keeps the words that are not on the phrase list. Humanize with AI is told to keep the same facts, names, and numbers, and not to shorten the draft into a summary. Check the result before you use it.",
      },
      {
        question: "Is my text sent to a server?",
        answer:
          "Rewrite text runs in this tab and does not upload the draft. Humanize with AI sends the draft to Google's Gemini API through ToolStarHub and returns a rewritten draft. ToolStarHub does not save that text. On the free tier, Google may use it to improve its products.",
      },
    ],
  },
};

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
  "urdu-news-translator": {
    about:
      "Paste an Urdu news story and get three English drafts: Brief, Medium, and Full. Brief keeps who, what, when, and where. Medium adds the main quote and the key date or figure. Full translates every sentence. A fact check compares each draft with the Urdu. The page also checks digits, quotation marks, length, and a glossary of Pakistani names. Nothing here is published. An editor approves the draft first.",
    howTo: [
      "Paste the Urdu story into the right-to-left box. Translate sends it to Google's Gemini model through Tools Star Hub.",
      "Read Brief, Medium, and Full. Medium is selected first. Use this switches the version that Expand and the approval Copy button use. Humanize rewrites the expanded body when one is open, and otherwise rewrites the selected body.",
      "Read the facts table and the verification report. An amber banner means the draft needs review.",
      "Edit the title, permalink, meta title, or any draft. An edit clears approval.",
      "Press Expand news if you want a fuller article made only from facts in the Urdu. The expanded body is the paragraphs only. Humanize rewrites that body, or the selected body, and leaves the title, subtitle, permalink, and meta fields alone.",
      "Each field has its own Copy button, and that button copies only that field. Press Approve, then Copy or Copy all. Copy all keeps the labels. If a check needs review, Approve asks you to read the list and confirm.",
    ],
    features: [
      "Brief, Medium, and Full on one page, with editable subtitle, body, and meta description.",
      "A permalink, title, and meta title built in code, with live character counts.",
      "A facts table showing which length includes each person, place, number, date, or quote.",
      "Code checks for extra numbers, Brief quotations, length, bracketed words, and glossary spellings.",
      "A glossary of Pakistani politicians, parties, cities, and institutions. Only the entries found in the story are sent with the request.",
    ],
    examples: [
      {
        title: "A two-sentence lead",
        body: "Sample Urdu meaning: the chief minister said in Lahore on Monday that the city would open two clinics. Brief keeps the person, the place, the day, and the plan, and it leaves the quotation out. Medium can keep the quote and the day. Full keeps both sentences and the verb said. If the English says 20 clinics, the number check marks an error because 20 is not in the Urdu.",
      },
    ],
    explanation:
      "Translate asks for structured JSON. The page then builds the headline, permalink, and meta description in code. Brief is two sentences and 25 to 40 words, with no quotation. Medium is 60 to 100 words. Full should cover every Urdu sentence. The model is told not to add background, not to guess a name, and not to change claimed into confirmed. Unclear words stay in brackets. Urdu digits and Arabic-Indic digits become Western digits. A fact-check pass compares the Urdu with each version and reports only a real problem. Humanize returns only the news paragraphs. Title, subtitle, permalink, meta title, and meta description stay in their own fields. Expand and Humanize run the code checks again.",
    sections: [
      {
        heading: "What each length is allowed to do",
        paragraphs: [
          "Brief selects. It answers who did what, when, and where. It does not quote anyone, and it does not add a reason the Urdu never gave. If the story is only a denial, Brief stays a denial.",
          "Medium keeps the key facts, the main quote, and the key date or figure. A quote stays inside quotation marks. The verb stays faithful: said, claimed, or alleged. Full translates every sentence. The page warns when Full is under 70 percent of the Urdu word count, which usually means a sentence was dropped.",
        ],
      },
      {
        heading: "What the checks can and cannot see",
        paragraphs: [
          "The code reads digits and number words. دو in the Urdu counts as 2, and two in the English counts as 2. A simple دو ہزار counts as 2000. A number in the English that is not in the Urdu is an error. For 1 to 10, the line is a warning, in case the Urdu used a word, unless the fact check also flags that number. A number from the Urdu that is missing in Full is a warning. The fact check also covers a changed name, place, quote, or meaning.",
          "Brief fails if it contains a quotation mark. Square brackets raise a warning so you can confirm the unclear word. If a glossary name is in the Urdu and the English uses a different spelling, the report warns. Any warning or error sets the status to needs review. Each field copies on its own. Approve unlocks Copy and Copy all. Copy all keeps the labels.",
        ],
      },
      {
        heading: "Headline, permalink, and description",
        paragraphs: [
          "The title is title case and at most 70 characters. The meta title adds “ | Tools Star Hub” when that line fits in 60 characters. If the suffix will not fit, the meta title is the title alone. A longer title is cut at a word to 60 characters, with no suffix, and it does not stop on a number or a small word such as in, of, the, to, or and. Each meta description is cut at a word to 155 characters.",
          "The permalink is lowercase, hyphenated, and ASCII. Small words such as the, of, and in are removed. Dates and Urdu letters are left out. It keeps 4 to 8 words and at most 60 characters. A repeat in the same browser session gets a numeric suffix. The site does not store stories, so it cannot reserve that address on the server.",
        ],
      },
    ],
    tips: [
      "Paste the story you want translated, not a summary you wrote beside it. Extra lines become source facts.",
      "Read Full against the Urdu before you trust Brief. Brief is allowed to leave sentences out. It is not allowed to invent them.",
      "If a name is in brackets, check the Urdu spelling before you delete the brackets.",
      "After you approve a draft, the Word Counter can confirm the length you are about to file.",
    ],
    limitations:
      "The tool drafts English. It does not publish, and it does not know your newsroom style beyond the glossary. It can miss a number written as a word, and it can miss a meaning change that the fact check also misses. Expand and Humanize are still limited to the Urdu. They are not a source of background. The rate limit is about 20 requests per 15 minutes on each server instance, and a story over 8,000 characters is refused. Text sent for translation is not saved on this site.",
    faqs: [
      {
        question: "Does this page publish the story?",
        answer:
          "No. It prepares a draft. Each field has a Copy button for that text alone. Copy and Copy all in the approval bar stay off until you press Approve, and an editor still reviews the English before it is used anywhere else.",
      },
      {
        question: "Will it add background the Urdu did not say?",
        answer:
          "It is instructed not to. Brief and Medium may only shorten. Full translates each sentence. Expand may restore a fact that is in the Urdu and missing from the short version. A new name, number, date, or quote should show up as an error.",
      },
      {
        question: "What is the difference between Brief, Medium, and Full?",
        answer:
          "Brief is two sentences of key facts and has no quote. Medium is 60 to 100 words and keeps the main quote and the key date or figure. Full follows every Urdu sentence. Medium opens selected.",
      },
      {
        question: "Is the Urdu story stored?",
        answer:
          "Tools Star Hub does not save the story. Translate, Expand, and Humanize send the text to Google's Gemini API. On the free tier, Google may use that text to improve its products. The permalink list exists only in this browser session.",
      },
      {
        question: "Why does a draft say it needs review?",
        answer:
          "The banner appears for any warning or error: an extra number, a quote in Brief, a short Full version, a bracketed word, or a glossary spelling that was not used. Approve then asks you to read the verification list and confirm.",
      },
    ],
  },
};

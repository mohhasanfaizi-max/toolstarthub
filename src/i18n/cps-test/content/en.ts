import type { LocalizedToolPage } from "../types.ts";

export const cpsTestName = "CPS Test";

export const cpsTestDescription =
  "Free CPS test (click speed test): click for 1 to 60 seconds, including the 10-second click test, and see your clicks per second, rating, and best score.";

const page: LocalizedToolPage = {
  metaTitle: "CPS Test: Click Speed Test & Clicks Per Second",
  quickAnswer:
    "A CPS test counts how many times you click in a set time and divides by the seconds to give clicks per second. Normal one-finger clicking often lands around 6 to 7 CPS, the figure most often quoted as the average CPS. Jitter and butterfly clicking can go higher.",
  headings: {
    about: "What this tool does",
    howTo: "How to use",
    examples: "Examples",
    features: "Main features",
    howItWorks: "How it works",
    tips: "Tips",
    limitations: "Limitations",
    faq: "FAQ",
    disclaimer: "See the {link} for what these tools do not cover.",
    disclaimerLink: "disclaimer",
  },
  content: {
    about:
      "Test your click speed in clicks per second (CPS). Pick 1, 5, 10, 15, 30, or 60 seconds, then click or tap the box as fast as you can. The timer starts on your first click. When time runs out you get your CPS, a rating from Turtle to Lightning, and your best score for that test length. Right-click and spacebar modes are included.",
    howTo: [
      "Choose a test length. 10 seconds is the usual click test. 1 and 5 seconds test short bursts, and 30 and 60 seconds test stamina.",
      "Choose what counts: left clicks, right clicks, or the spacebar. On a phone or tablet, keep left clicks and tap.",
      "Click or tap the box. The first click counts and starts the timer.",
      "Keep clicking until the timer reaches 0. Your clicks per second, rating, and best score appear right away. Press Reset to start over.",
    ],
    features: [
      "Six test lengths: 1, 5, 10, 15, 30, and 60 seconds.",
      "A live timer, click count, and clicks per second while you click.",
      "A rating from Turtle (under 5 CPS) to Lightning (14 CPS or more).",
      "A best score saved for each test length and mode in this browser.",
      "Left-click, right-click, and spacebar modes. Space and Enter do not count in the click modes, and a held key never repeats in spacebar mode.",
      "Touch support with exactly one count per tap.",
    ],
    examples: [
      {
        title: "A 10-second click test",
        body: "72 clicks in 10 seconds is 72 ÷ 10 = 7.2 CPS, which is the Rabbit rating.",
      },
      {
        title: "A 1-second burst",
        body: "9 clicks in 1 second is 9 CPS, the Horse rating. Short tests usually score higher than long ones because your hand has no time to tire.",
      },
    ],
    explanation:
      "CPS is the number of counted clicks divided by the test length in seconds. The length is fixed, so a 10-second run always divides by 10, even if your last click came a little early. Each press counts once: a mouse button press, a finger tap, or a Space press in spacebar mode. A held key, the Enter key, and the press that would open a context menu add nothing extra.",
    tips: [
      "Rest your wrist on the desk and click from the fingertip, not the whole arm.",
      "Warm up with a 5-second run before you go for a best score on 10 seconds or longer.",
      "Try jitter or butterfly clicking only in short runs, and stop if your hand or wrist hurts.",
    ],
    limitations:
      "Results depend on your mouse, touch screen, and browser, so scores from different devices are not directly comparable. A mouse that double-clicks by itself inflates the count. The test cannot tell whether an auto clicker or a macro was used. Best scores live in this browser's local storage, so clearing site data removes them.",
    faqs: [
      {
        question: "What is a CPS test?",
        answer:
          "A CPS test measures clicks per second. You click as fast as you can for a set time, and the clicks are divided by the seconds. The 10-second click test is the most common version.",
      },
      {
        question: "What is the average CPS?",
        answer:
          "For normal one-finger clicking, around 6 to 7 CPS is the figure most often quoted. Treat it as a rough guide, not a measured standard. Your hand, your mouse, and the test length all change the result.",
      },
      {
        question: "Is 10 CPS good?",
        answer:
          "Yes. 10 CPS over 10 seconds is above what most people reach with normal clicking, and it earns the Horse rating here. Many people who pass 10 CPS use jitter or butterfly clicking.",
      },
      {
        question: "How can I click faster?",
        answer:
          "Relax your grip, keep your wrist on the desk, and click from the finger rather than the arm. Practice in short runs and track your best score. Jitter and butterfly clicking can raise your CPS, but they cost accuracy and add strain.",
      },
      {
        question: "What is the difference between jitter clicking and butterfly clicking?",
        answer:
          "Jitter clicking tenses the forearm so one finger vibrates on the button. Butterfly clicking alternates two fingers on the same button. Butterfly clicking often scores higher, but some mice and some game servers do not handle it well.",
      },
      {
        question: "Are my scores sent to a server?",
        answer:
          "No. The test runs in this browser tab. Best scores are saved only in this browser's local storage, and Clear best scores removes them.",
      },
    ],
  },
};

export default page;

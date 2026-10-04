import type { GuideContent } from "./guide-content.ts";

/** A question-style guide section, optionally with a table or subsections. */
export type GuideSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  table?: {
    caption: string;
    headers: string[];
    rows: string[][];
  };
  subsections?: Array<{ heading: string; body: string }>;
  /** Paragraph shown after the table and subsections. */
  after?: string;
};

/** Guide bodies for articles registered in extra-articles.ts. */
export const extraGuideContent: Record<string, GuideContent> = {
  "how-to-click-faster": {
    intro:
      "To click faster, pick a technique that suits your mouse, relax your hand, and practice in short timed runs with a CPS test. Regular one-finger clicking usually lands somewhere around 5 to 8 clicks per second (CPS). Jitter clicking and butterfly clicking can push that into the teens for some people, but they cost accuracy and put more strain on your hand. Measure first, change one thing at a time, and stop if your wrist or forearm hurts.",
    why:
      "A timed test gives you a number to compare against. Without one, it is easy to feel faster while clicking less. Testing the same length every time shows whether a new grip, technique, or mouse setting really helps.",
    sections: [
      {
        id: "what-is-cps",
        heading: "What does CPS mean in a click test?",
        paragraphs: [
          "CPS stands for clicks per second. A CPS test counts every click you make in a fixed window, such as 10 seconds, and divides the total by the number of seconds. 70 clicks in 10 seconds is 7 CPS.",
          "The number only means something next to the test length, because almost everyone scores higher in a 1-second burst than over a full minute. Players use it to compare clicking methods, and plenty of people use it to check a new mouse.",
        ],
      },
      {
        id: "average-cps",
        heading: "What is the average CPS?",
        paragraphs: [
          "Around 6 to 7 CPS is the figure most often quoted for normal clicking with one finger. It is a common rule of thumb, not the result of a published measurement, so treat it as a rough reference. People who play click-heavy games often sit above it, and someone on a laptop touchpad usually sits below it.",
          "Technique makes the biggest difference. The ranges below are general guidance and overlap a lot: a practiced regular clicker can beat a beginner trying jitter clicking.",
        ],
        table: {
          caption: "Rough CPS ranges by clicking technique (general guidance only)",
          headers: ["Technique", "How it works", "Rough range", "Main trade-off"],
          rows: [
            ["Regular clicking", "One finger presses the button normally", "About 5 to 8 CPS", "Easiest to control and to keep up"],
            ["Jitter clicking", "A tensed forearm makes one finger vibrate on the button", "About 8 to 14 CPS", "Tiring, shaky aim, more strain"],
            ["Butterfly clicking", "Two fingers take turns on the same button", "About 10 to 20 CPS", "Depends on the mouse registering both presses"],
            ["Drag clicking", "A finger slides over the button so friction makes it bounce", "20 CPS or more in short bursts", "Needs a suitable mouse and grip; hard to control"],
          ],
        },
      },
      {
        id: "good-cps",
        heading: "What is a good CPS score?",
        paragraphs: [
          "A good score depends on the test length and your method. On a 10-second test with regular clicking, anything from about 8 CPS up is strong. The CPS Test on Tools Star Hub rates every run on the scale below, so you can see where a result falls without guessing.",
        ],
        table: {
          caption: "CPS Test rating tiers",
          headers: ["Rating", "CPS", "What it usually means"],
          rows: [
            ["Turtle", "Under 5", "A relaxed pace, a touchpad, or a first try"],
            ["Cat", "5 to under 7", "Normal clicking, close to the commonly quoted average"],
            ["Rabbit", "7 to under 9", "Quick regular clicking"],
            ["Horse", "9 to under 11", "Very fast regular clicking or early jitter clicking"],
            ["Cheetah", "11 to under 14", "Usually jitter or butterfly clicking"],
            ["Lightning", "14 or more", "Butterfly or drag clicking, or a very short burst"],
          ],
        },
      },
      {
        id: "techniques",
        heading: "Which clicking technique is the fastest?",
        paragraphs: [
          "Drag clicking produces the highest short bursts, then butterfly, jitter, and regular clicking. Each step up costs some control, and the faster methods depend more on your hardware.",
        ],
        subsections: [
          {
            heading: "Regular clicking",
            body: "Press the button with the tip of your index finger and let the spring bring it back, with your wrist resting on the desk. It is the slowest method, but you can keep aiming while you do it, and it is the gentlest on your hand.",
          },
          {
            heading: "Jitter clicking",
            body: "Tense your forearm until your hand shakes slightly, and let that shake drive one finger on the button. It needs no special mouse. The costs are aim, because the whole hand trembles, and fatigue: most people cannot hold it for more than a few seconds.",
          },
          {
            heading: "Butterfly clicking",
            body: "Rest your index and middle fingers on the same button and tap them one after the other, like drumming on a table. Two fingers share the work, so each moves at half the speed. Some mice merge two presses that arrive very close together, so results vary by mouse.",
          },
          {
            heading: "Drag clicking",
            body: "Press a finger lightly on the button and slide it toward you. Friction makes the finger skip, and each skip registers as a click. It works best on a mouse with a light, springy button, often with a rough surface such as grip tape. Bursts are short and hard to aim.",
          },
        ],
      },
      {
        id: "mouse-tips",
        heading: "How can you click faster with your mouse?",
        paragraphs: [
          "Start with posture. Sit so your forearm rests on the desk at about the height of the mouse, and keep your wrist straight rather than bent upward. Clicking from the finger alone is faster and less tiring than clicking from the wrist or elbow.",
          "Relax your grip. A tight grip slows the finger down. Hold the mouse just firmly enough that it does not slide while you click.",
          "Check the hardware. Light, crisp buttons are easier to click quickly. Some gaming mice let you lower the debounce time, the delay that filters out a bouncing switch; that can register faster clicks but may also cause accidental double clicks. Touchpads usually score lower than a mouse.",
          "Practice in short sets. Run a few 5-second or 10-second tests, rest between them, and watch your best score. A few minutes on several days helps more than one long session and is easier on your hand.",
        ],
      },
      {
        id: "wrist-safety",
        heading: "Is jitter or butterfly clicking bad for your wrist?",
        paragraphs: [
          "It can be if you overdo it. Jitter clicking keeps the forearm tense, and long sessions of any rapid clicking add up to repetitive strain.",
          "Keep rapid-clicking sessions short, take breaks, and stretch your hands and forearms between runs. Stop if you feel pain, tingling, or numbness, and talk to a doctor or physical therapist if it does not go away. No score is worth an injury.",
        ],
      },
      {
        id: "test-length",
        heading: "Does the test length change your CPS?",
        paragraphs: [
          "Yes. A 1-second test measures a burst, so it usually gives the highest number. A 10-second test is the common benchmark because it smooths out a lucky start. Over 30 or 60 seconds your hand tires and most people slow down. Compare runs of the same length, which is why the CPS Test keeps a separate best score for each one.",
        ],
      },
    ],
    stepsHeading: "How to take a CPS test",
    steps: [
      {
        title: "Pick the test length",
        body: "Choose 10 seconds for a standard result. Use 1 or 5 seconds to test bursts, and 30 or 60 seconds to test stamina.",
      },
      {
        title: "Pick what counts",
        body: "Use left clicks for a normal test, right clicks to compare buttons, or Spacebar for a keyboard test. On a phone, keep left clicks and tap.",
      },
      {
        title: "Get comfortable",
        body: "Rest your wrist, relax your grip, and put the pointer in the middle of the click area.",
      },
      {
        title: "Click until the timer ends",
        body: "The first click starts the timer. Keep going until it reaches 0, then read your CPS and rating.",
      },
      {
        title: "Repeat and compare",
        body: "Run the same length three times. Change one thing at a time, such as grip or technique, and test again.",
      },
    ],
    examples: [
      {
        title: "Checking whether butterfly clicking helps",
        body: "Say you score 64 clicks on a 10-second test with regular clicking: 6.4 CPS, the Cat rating. After a week of short practice with butterfly clicking you score 98 clicks in 10 seconds: 9.8 CPS, the Horse rating. Both runs used the same length and the same mouse, so the comparison is fair.",
      },
    ],
    notesHeading: "Things to watch",
    notes: [
      {
        heading: "A mouse that double-clicks by itself",
        body: "As a switch wears out, some mice register one press as two. That inflates a CPS score. If your count suddenly jumps far above your usual result, check the mouse.",
      },
      {
        heading: "Game and server rules",
        body: "Some game servers limit clicks per second or ban auto clickers, macros, and certain mouse settings. Read the rules before you use butterfly or drag clicking in a competitive match.",
      },
    ],
    faqs: [
      {
        question: "Is 7 CPS good?",
        answer:
          "Yes. 7 CPS is a solid score for regular clicking and sits just above the commonly quoted average of 6 to 7 CPS. It earns the Rabbit rating on the CPS Test.",
      },
      {
        question: "Does a gaming mouse increase CPS?",
        answer:
          "It can help a little. Light, crisp buttons and adjustable debounce make fast clicking easier, and some mice handle butterfly or drag clicking better than others. Technique and practice still matter more than the mouse.",
      },
      {
        question: "Is butterfly clicking allowed in games?",
        answer:
          "It depends on where you play. Many servers allow it, while some cap clicks per second or ban mice and settings that make it easier. Check the rules of the server or game first.",
      },
      {
        question: "Can I take a CPS test on a phone?",
        answer:
          "Yes. Tap the click area with one or more fingers, and each tap counts once. Phone scores are not directly comparable with mouse scores.",
      },
    ],
    cta: {
      before: "To measure your clicks per second and keep a best score for each test length, use the",
      linkLabel: "CPS Test",
      href: "/tools/cps-test",
      after: ". It runs in your browser, works with a mouse, a touch screen, or the spacebar, and needs no account.",
    },
  },
};

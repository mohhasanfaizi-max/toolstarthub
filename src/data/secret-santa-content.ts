import type { ToolContent } from "./tool-content.ts";

export const secretSantaContent: ToolContent = {
  about:
    "The Tools Star Hub Secret Santa Generator is a free online Secret Santa name draw for offices, families, friends and clubs. Add the names, set optional exclusions such as couples or siblings, and press Generate. Each person is matched with exactly one recipient, nobody draws themselves and every rule is checked before the result appears. Pairings stay hidden until you reveal them one at a time, and you can copy or print each person's message on its own. It runs entirely in your browser, needs no account, and does not send names, wishlists or pairings to any server.",
  howTo: [
    "Add participants one at a time, or paste a list with one name per line. You need at least three people.",
    "Optionally fill in the event name, exchange date, budget, currency, theme and wishlist instructions.",
    "Add exclusions for anyone who should not draw a particular person. Tick Mutual to block both directions.",
    "Press Generate Secret Santa. The draw is checked, and any impossible rule is explained by name.",
    "Reveal one assignment at a time, copy or print that person's message, then hide it again. Download the organizer CSV or PDF only if you need a full record.",
  ],
  examples: [
    {
      title: "A family of six with two couples",
      body: "Maria, Tom, Aisha, Omar, Grandma Rose and Leo take part. Maria and Tom are married, as are Aisha and Omar, so the organizer adds two mutual exclusions. The generator then finds a draw where neither couple buys for each other, for example Maria → Omar, Tom → Rose, Aisha → Leo, Omar → Tom, Rose → Maria and Leo → Aisha.",
    },
    {
      title: "An office team of ten with a 20 GBP limit",
      body: "The team lead pastes ten names, sets the currency to GBP and the maximum budget to 20, and chooses the exchange date. After the draw, she copies each message into a private chat with that colleague. Each message reads, for instance, \"Your Secret Santa recipient is: Dev. Gift budget: up to £20.\"",
    },
    {
      title: "A rule set that cannot work",
      body: "With only Ann, Ben and Cara, a mutual rule between Ann and Ben leaves Ann able to give only to Cara and Ben only to Cara, but Cara can receive only one gift. The tool says that no valid draw exists and names the people involved, so the organizer can remove the rule or add a fourth person.",
    },
  ],
  explanation:
    "The draw is a matching problem: every giver needs one recipient, every recipient one giver, nobody may draw themselves and no exclusion may be broken. The generator first checks that such a matching exists. It then places the people with the fewest allowed recipients first, tries their options in a random order and steps back when it reaches a dead end. A processing limit keeps the browser responsive; if it is reached, a second randomised matching method finishes the job. The final draw is verified again before you see it.",
  features: [
    "Single and bulk name entry, inline editing, removal, a running count and a confirmed Clear list.",
    "Unique internal IDs, so two people with the same name are kept apart and labelled (1) and (2).",
    "Optional event name, date, minimum and maximum budget in USD, GBP, EUR, AED, CAD or AUD, description, theme and wishlist instructions.",
    "One-way and mutual exclusions, checked before the draw, with a plain explanation when they make a draw impossible.",
    "Hidden results with one-at-a-time reveal, an editable message template, copy buttons and printable individual cards.",
    "Optional wishlists shown only on the card of the person buying for that participant.",
    "Organizer-only CSV and PDF downloads, each behind a confirmation.",
  ],
  tips: [
    "Collect wishlists before the draw so each card can include the recipient's ideas.",
    "Use mutual exclusions for couples and housemates; use one-way rules only when one direction is the problem.",
    "Keep the organizer CSV or PDF somewhere private, or skip it if you do not need a record.",
    "If you take part yourself, ask someone else to run the draw, or reveal only your own card.",
  ],
  limitations:
    "This first version has no email or link delivery. The organizer shares each message by copying or printing it. Revealing results on one device is not private from people who can see that screen. Pairings are not saved, so reloading the page discards them; download the CSV or PDF first if you need them. The PDF uses a standard font that covers Latin letters only, and other characters appear as question marks; printing and choosing Save as PDF keeps every character. Groups of up to 200 people are supported.",
  article: {
    title: "How to Organize a Secret Santa Gift Exchange: A Complete Guide",
    intro:
      "A Secret Santa exchange turns a big group gift problem into one small, manageable task for each person: buy one thoughtful present for one person within an agreed budget. The organizing is where things go wrong, usually because of a lost slip of paper, a couple who drew each other or a budget nobody wrote down. This guide walks through the whole process, from the first invitation to the day the gifts are opened, and explains how an online Secret Santa generator handles the draw.",
    sections: [
      {
        heading: "What Is Secret Santa?",
        paragraphs: [
          "Secret Santa is a gift exchange in which each participant is secretly given the name of one other participant and buys a gift for that person. Nobody is told who is buying for them until the exchange, and sometimes not even then. Instead of everyone buying something for everyone, each person buys exactly one present, which keeps costs and effort low for large groups.",
          "The tradition goes by other names in different places, but the idea is the same: a random draw, a shared budget, a surprise. It works for workplaces, extended families, friend groups, sports teams, classrooms and online communities.",
        ],
      },
      {
        heading: "How Does a Secret Santa Gift Exchange Work?",
        paragraphs: [
          "Every exchange follows the same few steps. The organizer collects a list of participants and agrees the rules: a budget, an exchange date and any special theme. Names are then drawn so that each person gets one recipient, no one gets themselves and no two people get the same recipient. Each person buys a gift, and the gifts are handed over on the agreed day.",
          "In a traditional name draw, everyone writes their name on a slip of paper, the slips go into a hat and each person pulls one out. It is fun in person, but it has practical problems. Someone may draw their own name and have to draw again, which can reveal information. A couple may pull each other. People who are not in the room cannot take part. An online random assignment solves those problems by working out the whole draw at once and checking it against the rules before anyone sees a name.",
        ],
      },
      {
        heading: "How to Use an Online Secret Santa Generator",
        paragraphs: [
          "An online Secret Santa generator replaces the hat. With the tool at the top of this page, you type or paste the participants' names, fill in any settings you want, add exclusions and press Generate Secret Santa. The generator produces a complete set of pairings in a moment and confirms that every person gives once and receives once.",
          "This Secret Santa generator is free, needs no registration and runs entirely in your browser. It does not send names to a server. That makes it a simple way to do a Secret Santa without login, but it also means the organizer is responsible for passing each assignment on to the right person, as explained in the privacy section below.",
        ],
      },
      {
        heading: "How to Add Participants and Generate Names",
        paragraphs: [
          "Start with a complete list. Type one name and press Add, or paste a list into the multiline box with one name per line and press Add all names. Extra spaces are trimmed and blank lines are ignored. You can edit any name in place or remove a person later, and the count at the bottom shows how many people are in the draw.",
          "Use names that people will recognise. If two colleagues are both called Sam, the generator still treats them as different people, because each participant has a hidden ID, and labels them Sam (1) and Sam (2). Adding a surname initial, such as Sam K. and Sam P., makes the printed cards clearer. Once the list is right, add any exclusions and generate the names.",
        ],
      },
      {
        heading: "How Random Secret Santa Assignments Work",
        paragraphs: [
          "A fair random Secret Santa picker has to do more than shuffle the list. A plain shuffle can give someone their own name or break an exclusion. This generator treats the draw as a matching puzzle. It looks at who each person is allowed to give to, starts with the people who have the fewest options, and tries their possible recipients in a random order. If a choice leads to a dead end, it steps back and tries another.",
          "Before drawing anything, the tool checks that a valid result is possible at all. A processing limit stops very constrained draws from slowing your browser, and a second randomised matching method takes over if that limit is reached. Finally the result is verified once more: everyone gives exactly once, everyone receives exactly once, nobody has themselves and no rule is broken. If you only need random numbers for raffle tickets or seating, the [Random Number Generator](/tools/random-number-generator) is a simpler choice.",
        ],
      },
      {
        heading: "How to Organize Secret Santa at Work",
        paragraphs: [
          "A Secret Santa generator for work needs a little more planning than a family draw. Make participation optional and say so clearly, because some colleagues may not celebrate or may not want to spend money. Set one budget for everyone and keep it modest so nobody feels pressure. Choose an exchange date when most people are in the office, or plan a remote option for those who are not.",
          "Think about exclusions too. Some teams prefer that managers do not draw their direct reports, or that people who share a desk do not draw each other. Agree on gift guidelines in advance, for example nothing offensive and no joke gifts that could embarrass someone, and include them in the event description. After the draw, send each person their message privately through your usual work chat or email rather than in a group thread.",
        ],
      },
      {
        heading: "How to Organize Secret Santa with Family and Friends",
        paragraphs: [
          "Secret Santa for friends and family is often more relaxed, but the same basics apply. Agree on who is in, especially in large families where children, partners and relatives who live far away may or may not take part. Decide whether young children will join the draw or receive gifts separately.",
          "Families usually need exclusions. Couples normally buy for each other anyway, so most families exclude them from drawing each other, and some exclude people from the same household. If you want to make a Secret Santa draw with friends who live in different places, agree whether gifts will be posted or exchanged at a meeting, and set the date with enough time for delivery.",
        ],
      },
      {
        heading: "How to Set a Gift Budget",
        paragraphs: [
          "A clear budget is the single most useful rule in any exchange. Without one, some people spend far more than others and the exchange feels uneven. Pick an amount that the person with the least to spare is comfortable with, rather than an amount that suits the most generous person.",
          "You can enter a minimum and a maximum budget and choose USD, GBP, EUR, AED, CAD or AUD. A range such as 15 to 25 gives people room without inviting extremes; a single maximum such as up to 20 is simpler. Whatever you choose appears on each person's message, so nobody has to remember it.",
        ],
      },
      {
        heading: "How to Prevent Couples and Family Members from Drawing Each Other",
        paragraphs: [
          "Exclusions are how you prevent couples from drawing each other in Secret Santa. In the exclusions section, choose the first person, choose the person they must not draw and press Add rule. With Mutual ticked, both directions are blocked, so neither partner can draw the other. Without it, the rule is one-way: Ann will not draw Ben, but Ben could still draw Ann. One-way rules are useful for repeating last year's pairs only in one direction, or for a manager who should not buy for a direct report.",
          "Every person still receives exactly one recipient, so exclusions shrink the number of possible draws. With many rules in a small group, a draw can become impossible. For example, in a group of three, if Ann and Ben cannot draw each other, both would have to draw Cara. The generator never quietly ignores a rule to make a draw work. Instead it explains which people are stuck and asks you to remove a rule or add more participants. This is what makes it a reliable Secret Santa with exclusions.",
        ],
      },
      {
        heading: "How to Keep Secret Santa Assignments Private",
        paragraphs: [
          "Privacy is what keeps the surprise. After the draw, this tool hides every pairing. The organizer can reveal one assignment, copy that person's message or print their card, and hide it again before moving on. A Show full list option exists for organizers who are not taking part themselves, and it asks for confirmation first. The organizer CSV and PDF downloads also ask before saving, because they contain every pairing.",
          "Be honest with your group about how private this is. A reveal on a shared screen is not the same as secure individual delivery: anyone who can see the screen can see what is revealed, and the organizer necessarily has access to everything. The safest way to share Secret Santa assignments privately is for an organizer who is not participating to copy each message into a private chat or email with that one person. Nothing is saved after you close the page, so download the organizer file first if you need a record.",
        ],
      },
      {
        heading: "How Many Participants Do You Need?",
        paragraphs: [
          "You need at least three people. With two, each would simply draw the other and there would be no secret. With three, there are only two possible draws, so the surprise is limited. Groups of five or more give a much better mix, and larger groups work just as well. This tool supports up to 200 participants in one draw.",
          "If your group is very large, such as a whole company, consider running separate draws for each team or office so people buy for someone they know at least a little.",
        ],
      },
      {
        heading: "How to Organize a Virtual Secret Santa",
        paragraphs: [
          "A virtual Secret Santa works for remote teams and friends in different cities. Run the draw here, then send each person their message privately. Ask for postal addresses or agree to use gifts that can be sent digitally, such as e-gift cards or subscriptions, and remind people that delivery can take longer in December.",
          "For the reveal, choose a video call where everyone opens their gift on camera. If people are spread across countries, the [Time Zone Converter](/tools/time-zone-converter) helps you pick a call time that works for everyone, and the [Date Difference Calculator](/tools/date-difference-calculator) shows how many days are left for shipping. If a gift needs a link, a [QR Code Generator](/tools/qr-code-generator) can turn it into a code to print on a card.",
        ],
      },
      {
        heading: "Secret Santa Gift Ideas for Different Budgets",
        paragraphs: [
          "For a small budget, think useful and personal: a good notebook, a favourite snack or hot chocolate, a houseplant, a puzzle, a mug chosen for the person's taste, or a book by an author they mention. A short handwritten note often matters more than the gift itself.",
          "With a mid-range budget, consider something tied to a hobby: quality kitchen tools, a board game, a desk accessory, a nice candle or a cosy scarf. With a larger budget, an experience such as a cinema voucher or a class can be memorable. Whatever the amount, the wishlist is the best guide. If a participant has filled in gift ideas, favourite categories, colours or items they would rather not receive, those details appear only on their Secret Santa's card.",
        ],
      },
      {
        heading: "Common Secret Santa Mistakes",
        paragraphs: [
          "The most common mistake is unclear rules: no budget, no date or no agreement about whether people outside the room can join. Another is announcing the pairings in a group chat, which spoils the surprise for everyone. Forgetting exclusions leads to couples drawing each other, and redrawing in public to fix it can reveal who has whom.",
          "Other problems are practical. People join late after the draw has been done, so the organizer has to draw again and resend every message. Someone forgets who they are buying for, which is why it helps for the organizer to keep a private copy of the results. And gag gifts that seem funny can make colleagues uncomfortable, so set expectations in the event description.",
        ],
      },
      {
        heading: "Tips for Organizing a Successful Gift Exchange",
        paragraphs: [
          "Send the invitation early, with the budget, date and any theme, and set a deadline for joining before you draw. Collect wishlists at the same time. Do the draw once the list is final, send messages privately and keep a confidential copy in case anyone forgets.",
          "On the day, give the exchange a little structure: open gifts one at a time, or let people guess who their Secret Santa was. Afterwards, consider writing down this year's pairs so next year you can add one-way exclusions to avoid repeats. Most of all, keep it light. The point is a small, thoughtful surprise for everyone in the group.",
        ],
      },
    ],
  },
  faqs: [
    { question: "What is a Secret Santa Generator?", answer: "A Secret Santa Generator is an online tool that randomly assigns each participant one person to buy a gift for. This one checks that nobody draws themselves, that each person receives exactly one gift and that every exclusion rule is followed." },
    { question: "Is this Secret Santa Generator free?", answer: "Yes. It is free to use with no subscription, no paid features and no limit on how many times you draw." },
    { question: "Can I generate Secret Santa names online?", answer: "Yes. Add the names at the top of this page and press Generate Secret Santa. The draw happens in your browser in a moment and is verified before it is shown." },
    { question: "How many participants are needed?", answer: "At least three. Five or more gives a better surprise. This version supports up to 200 people in one draw." },
    { question: "Can someone draw their own name?", answer: "No. The generator never assigns anyone to themselves, and every result is checked for this before it appears." },
    { question: "Can I exclude couples from drawing each other?", answer: "Yes. Add an exclusion between the two people and tick Mutual so neither can draw the other. You can also add one-way rules. If the rules make a draw impossible, the tool explains which people are affected." },
    { question: "Can I use the tool for an office Christmas party?", answer: "Yes. Set a budget, currency and exchange date, add exclusions such as managers and direct reports if you want them, then copy each colleague's message into a private chat or print their card." },
    { question: "Can I use it for family and friends?", answer: "Yes. It suits families and friend groups, including mutual exclusions for couples or households and optional wishlists that only the matching Secret Santa sees." },
    { question: "Can I organize Secret Santa without creating an account?", answer: "Yes. There is no sign-up or login. Everything runs in your browser." },
    { question: "How can I share assignments privately?", answer: "Reveal one assignment at a time, copy that person's message or print their card, then hide it again. Send each message to its person privately. Revealing on a shared screen is not private from anyone watching, and this version does not send emails or create share links." },
    { question: "Can I download the results?", answer: "Yes. The organizer can download a CSV or a PDF of all pairings after confirming, or print individual cards and choose Save as PDF in the print dialog." },
    { question: "Does the generator store participant names?", answer: "No. Names, emails, wishlists and pairings are never saved or sent to a server; they disappear when you close or reload the page. Only optional event settings and the message template are saved in your browser, and Delete saved settings removes them." },
  ],
};

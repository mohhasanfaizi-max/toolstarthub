import type { ToolGuide } from "./index.ts";
import { toolGuideArticle } from "./make.ts";

const PUBLISHED = "2026-11-13T00:00:00Z";

const sodium: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-much-sodium-per-day",
    title: "How Much Sodium Per Day? Limits, Salt Conversions and Label Tips",
    primaryKeyword: "how much sodium per day",
    secondaryKeywords: [
      "daily sodium limit",
      "2300 mg sodium",
      "sodium vs salt",
      "how many mg of sodium in a teaspoon of salt",
      "low sodium foods",
    ],
    toolSlug: "alma-ai-nutrition-coach",
    siblingToolSlugs: ["unit-converter", "percentage-calculator", "tdee-calculator"],
    metaTitle: "How Much Sodium Per Day Should You Eat?",
    metaDescription:
      "Daily sodium limits explained: the 2,300 mg guideline, the WHO 2,000 mg target, how to convert sodium to salt, label claims and practical ways to cut back.",
    excerpt:
      "Most adults are advised to keep sodium under 2,300 mg a day, about one teaspoon of salt. Learn where the limit comes from, how to read sodium on labels and how to cut back.",
    relatedArticles: [
      "how-to-read-a-nutrition-facts-label",
      "micronutrients-explained",
      "how-much-sugar-per-day",
    ],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: the Dietary Guidelines for Americans advise people aged 14 and older to keep sodium below 2,300 milligrams a day, which is about the amount in one teaspoon of table salt. The World Health Organization sets a lower adult target of less than 2,000 mg of sodium, equal to under 5 grams of salt. The CDC reports that average intake in the United States is above 3,400 mg, so most people are over the limit before they pick up a salt shaker. Alma: AI Nutrition Coach & Food Tracker lets you log foods and keep an eye on sodium alongside calories and other nutrients.",
    why:
      "Sodium is an essential mineral that helps control fluid balance, nerve signals and muscle contraction. The body needs only a small amount, though, and regularly eating too much is linked with raised blood pressure, a major risk factor for heart disease and stroke.",
    sections: [
      {
        id: "where-limit-comes-from",
        heading: "Where does the 2,300 mg sodium limit come from?",
        paragraphs: [
          "In 2019 the National Academies of Sciences, Engineering, and Medicine reviewed sodium intake and set a Chronic Disease Risk Reduction intake of 2,300 mg a day for adults. The idea is simple: cutting intake down to that level is expected to lower chronic disease risk, and cutting further below it may help some people even more. The same review kept an Adequate Intake of 1,500 mg for adults, which is the amount that comfortably covers normal needs.",
          "The FDA uses 2,300 mg as the Daily Value on the Nutrition Facts label. That means the percent Daily Value beside sodium on a package tells you what share of the 2,300 mg limit one serving uses up. A soup listing 30% DV contains roughly 690 mg per serving.",
        ],
        table: {
          caption: "Common sodium reference values for adults",
          headers: ["Reference", "Amount", "What it means"],
          rows: [
            ["Dietary Guidelines limit", "Under 2,300 mg/day", "Upper target for ages 14+"],
            ["FDA label Daily Value", "2,300 mg", "Basis for %DV on packages"],
            ["WHO adult target", "Under 2,000 mg/day", "Equal to under 5 g of salt"],
            ["Adequate Intake (NASEM)", "1,500 mg/day", "Covers normal needs"],
          ],
        },
      },
      {
        id: "sodium-vs-salt",
        heading: "What is the difference between sodium and salt?",
        paragraphs: [
          "Table salt is sodium chloride, and sodium makes up about 40% of its weight. Labels in the United States list sodium in milligrams, while many other countries and recipes talk about grams of salt. Mixing the two up is one of the most common mistakes people make when they compare advice from different sources.",
          "To turn sodium into salt, multiply the sodium figure by 2.5. To turn salt into sodium, multiply the salt figure by 0.4. So 2,300 mg of sodium is about 5.75 g of salt, and 5 g of salt is about 2,000 mg of sodium. The Unit Converter handles milligrams and grams if you need to switch units, and the Percentage Calculator helps when you want to see what share of your limit one food uses.",
        ],
        table: {
          caption: "Sodium and salt conversions (rounded)",
          headers: ["Sodium", "Salt equivalent"],
          rows: [
            ["400 mg", "1 g"],
            ["1,500 mg", "3.75 g"],
            ["2,000 mg", "5 g"],
            ["2,300 mg", "5.75 g (about 1 teaspoon)"],
            ["3,400 mg", "8.5 g"],
          ],
        },
      },
      {
        id: "where-sodium-hides",
        heading: "Where does most dietary sodium come from?",
        paragraphs: [
          "According to the CDC, more than 70% of the sodium Americans eat comes from packaged and restaurant foods rather than salt added at the table or during home cooking. Breads and rolls, pizza, sandwiches, cured meats, soups, savoury snacks, cheese and mixed dishes such as burritos and tacos are among the biggest contributors, mostly because people eat them often.",
          "Foods do not need to taste salty to be high in sodium. Bread is a good example: one slice may not seem salty, yet several slices a day add up.",
        ],
      },
      {
        id: "labels",
        heading: "How do I read sodium on a food label?",
        paragraphs: [
          "Start with the serving size, then look at the milligrams of sodium and the %DV. The FDA’s general guide is that 5% DV or less per serving is low and 20% DV or more is high. If you eat two servings, double both numbers.",
          "Front-of-pack claims have defined meanings under FDA rules. Sodium-free means less than 5 mg per serving, very low sodium means 35 mg or less, and low sodium means 140 mg or less. Reduced sodium only means at least 25% less than the regular version, so a reduced-sodium soup can still be high. Light in sodium and no-salt-added have their own definitions, so compare the actual milligrams rather than trusting the wording alone.",
        ],
      },
      {
        id: "cut-back",
        heading: "How can I lower my sodium intake?",
        paragraphs: [
          "The biggest wins usually come from the foods you eat most often. Compare brands of bread, cereal, sauces and soups, because sodium varies widely between products that look the same. Choosing fresh or frozen vegetables without sauce, unsalted nuts and plain grains gives you more control, and rinsing canned beans or vegetables removes some of the sodium.",
          "Taste adapts over time. Cutting back gradually and using herbs, spices, garlic, citrus and vinegar for flavour makes lower-sodium meals easier to enjoy.",
        ],
      },
      {
        id: "potassium",
        heading: "Why is potassium mentioned alongside sodium?",
        paragraphs: [
          "Potassium helps balance some of the effects of sodium on blood pressure, and many adults eat less of it than recommended. The National Academies set Adequate Intakes of 3,400 mg a day for men and 2,600 mg for women. Fruit, vegetables, beans, lentils, dairy foods and potatoes are good sources.",
          "Potassium is listed on the updated Nutrition Facts label, so you can track both minerals together. People with kidney disease or those taking certain blood pressure medicines may need to limit potassium, so salt substitutes made with potassium chloride should be checked with a doctor or pharmacist first.",
        ],
      },
    ],
    stepsHeading: "How do I track sodium with Alma?",
    steps: [
      {
        title: "Set your daily limit",
        body: "Use 2,300 mg as a general upper target unless your clinician has given you a different number.",
      },
      {
        title: "Log foods with their sodium",
        body: "Add meals in the Food Tracker. Take the milligrams from the package label or USDA FoodData Central for the portion you ate.",
      },
      {
        title: "Spot the big contributors",
        body: "Look at which foods supply most of your daily total. Often two or three items, such as bread, a sauce or a deli meat, account for most of it.",
      },
      {
        title: "Plan swaps in the Meal Planner",
        body: "Replace one high-sodium item at a time with a lower-sodium version and check how the daily total changes.",
      },
      {
        title: "Ask the coach for ideas",
        body: "Alma’s educational coach can suggest general flavour swaps and lower-sodium meal ideas. It is not a substitute for medical advice.",
      },
    ],
    examples: [
      {
        title: "Converting a salt figure",
        body: "A recipe uses 3 g of salt for four servings. Multiply 3 g by 0.4 to get 1.2 g, or 1,200 mg of sodium, which is about 300 mg per serving.",
      },
      {
        title: "Reading %DV",
        body: "A frozen meal lists 45% DV for sodium. That is about 1,035 mg, nearly half the 2,300 mg limit in one serving.",
      },
      {
        title: "A simple daily swap",
        body: "Switching from a regular canned soup to a low-sodium version with 140 mg or less per serving can save several hundred milligrams in one meal.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "Limits are for the general population",
        body: "People with high blood pressure, heart failure or kidney disease may be given a different target by their care team.",
      },
      {
        heading: "Sweat and heavy exercise",
        body: "Athletes training for long periods in heat lose more sodium in sweat and may need tailored advice from a sports dietitian or doctor.",
      },
      {
        heading: "Labels are estimates",
        body: "Sodium values on labels and in databases are rounded and can vary between batches and restaurants, so treat daily totals as estimates. This guide is general information only.",
      },
    ],
    faqs: [
      {
        question: "Is 1,500 mg of sodium a day too low?",
        answer:
          "For most healthy adults, 1,500 mg is the Adequate Intake, so it covers normal needs. Very low intakes are rarely reached from ordinary food.",
      },
      {
        question: "How much sodium is in a teaspoon of salt?",
        answer:
          "About 2,300 mg, according to the FDA. That single teaspoon equals the full daily limit for people aged 14 and older.",
      },
      {
        question: "Does sea salt have less sodium than table salt?",
        answer:
          "By weight, sea salt and table salt contain about the same sodium. Larger crystals can mean slightly less sodium per teaspoon, but not per gram.",
      },
      {
        question: "What counts as a high-sodium food?",
        answer:
          "A food with 20% DV or more for sodium per serving, which is about 460 mg or more, is considered high on the FDA label guide.",
      },
      {
        question: "Can drinking water flush out sodium?",
        answer:
          "Healthy kidneys regulate sodium and water together, but drinking extra water does not cancel a high-sodium diet. Lowering intake is what helps.",
      },
      {
        question: "Why do I weigh more after a salty meal?",
        answer:
          "Extra sodium makes the body hold more water for a while, which can raise scale weight by a kilogram or so. It is not fat gain.",
      },
      {
        question: "Do children have lower sodium limits?",
        answer:
          "Yes. The Dietary Guidelines list lower limits for younger children, rising with age until the adult limit of 2,300 mg applies from age 14.",
      },
      {
        question: "Is MSG high in sodium?",
        answer:
          "Monosodium glutamate contains sodium, but roughly a third as much as the same weight of table salt. It still counts toward your daily total.",
      },
      {
        question: "Are low-sodium salt substitutes safe?",
        answer:
          "Many swap some sodium for potassium. They suit many people, but those with kidney problems or on certain medicines should ask a clinician first.",
      },
      {
        question: "Can Alma tell me my personal sodium limit?",
        answer:
          "No. Alma helps you log and total sodium against a target you choose. Personal limits for medical conditions should come from your care team.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Log meals and keep sodium in view with ",
      linkLabel: "Alma: AI Nutrition Coach & Food Tracker",
      href: "/tools/alma-ai-nutrition-coach",
      after: ".",
    },
    alsoSee: [
      {
        before: "Find sodium and %DV on packages with ",
        linkLabel: "How to read a nutrition facts label",
        href: "/guides/how-to-read-a-nutrition-facts-label",
        after: ".",
      },
      {
        before: "Switch between milligrams and grams with the ",
        linkLabel: "Unit Converter",
        href: "/tools/unit-converter",
        after: ".",
      },
      {
        before: "Compare another daily limit in ",
        linkLabel: "How much sugar per day",
        href: "/guides/how-much-sugar-per-day",
        after: ".",
      },
    ],
    sources: [
      {
        label: "FDA – Sodium in Your Diet",
        href: "https://www.fda.gov/food/nutrition-education-resources-materials/sodium-your-diet",
      },
      {
        label: "CDC – Salt and Sodium",
        href: "https://www.cdc.gov/salt/",
      },
      {
        label: "WHO – Sodium reduction fact sheet",
        href: "https://www.who.int/news-room/fact-sheets/detail/salt-reduction",
      },
      {
        label: "Dietary Guidelines for Americans",
        href: "https://www.dietaryguidelines.gov/",
      },
    ],
  },
};

const apr: ToolGuide = {
  article: toolGuideArticle({
    slug: "apr-vs-interest-rate",
    title: "APR vs Interest Rate: What Is the Difference on a Loan?",
    primaryKeyword: "apr vs interest rate",
    secondaryKeywords: [
      "what is apr",
      "annual percentage rate meaning",
      "apr vs apy",
      "how fees affect apr",
      "credit card apr",
    ],
    toolSlug: "loan-calculator",
    siblingToolSlugs: ["auto-loan-calculator", "credit-card-payoff-calculator", "compound-interest-calculator"],
    metaTitle: "APR vs Interest Rate: What’s the Difference?",
    metaDescription:
      "APR vs interest rate explained with worked numbers: what each includes, how upfront fees raise APR, credit card APR, APR vs APY and how to compare loan offers.",
    excerpt:
      "The interest rate sets your payment, while the APR adds certain fees to show the yearly cost of borrowing. See a worked example and learn how to compare loan offers fairly.",
    relatedArticles: [
      "how-a-loan-payment-is-calculated",
      "how-to-estimate-a-car-loan-payment",
      "how-long-to-pay-off-a-credit-card",
    ],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: the interest rate is the yearly cost of borrowing the principal, and it is what your monthly payment is built on. The annual percentage rate, or APR, is a broader yearly figure that adds certain lender charges, such as origination fees or mortgage points, to the interest. When a loan has fees, its APR is higher than its interest rate. The Consumer Financial Protection Bureau describes APR as the better tool for comparing offers. The Loan Calculator shows the payment and total interest for a given rate, which helps you see what those percentages mean in money.",
    why:
      "Two lenders can quote the same interest rate and still cost you different amounts, because one charges an upfront fee and the other does not. Knowing which number reflects the payment and which reflects the full cost of credit helps you compare loans on equal terms instead of judging them by the headline rate.",
    sections: [
      {
        id: "definitions",
        heading: "What does each number include?",
        paragraphs: [
          "The interest rate, sometimes called the note rate, is the percentage charged on the money you borrow. It is used with the loan amount and term to work out the regular payment. For a fixed-rate installment loan, the monthly rate is the annual rate divided by 12.",
          "The APR is a disclosure figure defined by the federal Truth in Lending Act and its Regulation Z. It expresses the finance charge, which is the interest plus certain required fees, as a yearly rate over the life of the loan. Lenders in the United States must show it on loan disclosures and in advertising that mentions credit terms, so borrowers can compare offers that are structured differently.",
        ],
        table: {
          caption: "Interest rate and APR side by side",
          headers: ["Feature", "Interest rate", "APR"],
          rows: [
            ["Sets the monthly payment", "Yes", "No"],
            ["Includes origination fees or points", "No", "Usually yes"],
            ["Required on US loan disclosures", "Shown", "Shown and defined by law"],
            ["Best use", "Budgeting the payment", "Comparing total borrowing cost"],
          ],
        },
      },
      {
        id: "worked-example",
        heading: "How do upfront fees raise the APR? A worked example",
        paragraphs: [
          "Take a $20,000 loan at a 6% interest rate for 60 months. The monthly rate is 0.5%, and the standard installment formula gives a payment of about $386.66. Over five years you pay about $23,199.36, so total interest is about $3,199.36.",
          "Now suppose the lender charges a $600 origination fee that you pay out of the loan proceeds. Your payment stays at $386.66 because the interest rate has not changed, but you effectively receive only $19,400. Solving for the rate that makes $19,400 equal to sixty payments of $386.66 gives an APR of about 7.27%. The fee adds well over a percentage point to the yearly cost, even though the advertised rate is still 6%.",
          "A second offer at 6.5% with no fee has a payment of about $391.32 and total interest of about $3,479.38. Its APR is also about 6.5%, which is lower than the first offer’s 7.27%. The higher headline rate is actually the cheaper loan once the fee is counted.",
        ],
        table: {
          caption: "Two $20,000, 60-month offers compared (rounded)",
          headers: ["Offer", "Interest rate", "Upfront fee", "Monthly payment", "APR"],
          rows: [
            ["A", "6.0%", "$600", "$386.66", "About 7.27%"],
            ["B", "6.5%", "$0", "$391.32", "About 6.5%"],
          ],
        },
      },
      {
        id: "mortgages",
        heading: "How do APR and interest rate differ on a mortgage?",
        paragraphs: [
          "Mortgages are where the gap is often largest, because closing costs and discount points can be substantial. Paying points lowers the interest rate and the monthly payment, but the cost of the points is folded into the APR. The CFPB notes that the Loan Estimate shows both figures so you can weigh a lower payment against a higher upfront cost.",
          "One limitation is that the APR assumes you keep the loan for its full term. If you expect to sell or refinance within a few years, upfront fees are spread over less time than the APR assumes, and a loan with fewer fees may suit you better even if its APR looks similar.",
        ],
      },
      {
        id: "credit-cards",
        heading: "What does APR mean on a credit card?",
        paragraphs: [
          "On a credit card, the APR is essentially the interest rate. Card agreements often list several APRs, such as a purchase APR, a balance transfer APR, a cash advance APR and a penalty APR.",
          "Card issuers usually apply interest using a daily periodic rate, the APR divided by 365 or 360 depending on the agreement, to your balance. If you pay the full statement balance by the due date, most cards charge no interest on new purchases thanks to the grace period. The Credit Card Payoff Calculator shows how long a balance takes to clear at a given APR and monthly payment.",
        ],
      },
      {
        id: "apr-vs-apy",
        heading: "What is the difference between APR and APY?",
        paragraphs: [
          "APR is a simple annual rate that does not show the effect of compounding within the year. Annual percentage yield, or APY, includes compounding and is used mainly for savings accounts and certificates of deposit, where the Truth in Savings Act governs disclosures.",
          "The gap grows with the rate and the compounding frequency. An 18% APR compounded monthly is equivalent to an effective annual rate of about 19.56%. The Compound Interest Calculator lets you test how compounding frequency changes the result on savings.",
        ],
      },
      {
        id: "comparing",
        heading: "How should I compare loan offers?",
        paragraphs: [
          "Compare offers for the same amount and the same term, because APR is only a fair comparison on like-for-like loans. Look at the APR for total cost, the monthly payment for budgeting, and the total interest over the term. Ask for a list of fees and whether they are paid upfront or added to the balance.",
          "A slightly higher payment over a shorter term can cut total interest sharply, which the Loan Calculator makes easy to see.",
        ],
      },
    ],
    stepsHeading: "How do I check a loan offer with the Loan Calculator?",
    steps: [
      {
        title: "Enter the amount, rate and term",
        body: "Type the amount you will borrow, the quoted interest rate and the number of months.",
      },
      {
        title: "Read the payment and total interest",
        body: "Note the monthly payment, interest and total cost the calculator shows for that rate.",
      },
      {
        title: "Account for upfront fees",
        body: "Type any upfront fee that is not financed into the optional fee field, so the total cost includes it.",
      },
      {
        title: "Repeat for each offer",
        body: "Enter each lender’s terms for the same amount and term so the comparison is fair.",
      },
      {
        title: "Check the lender’s APR",
        body: "Compare your totals with the APR on each lender’s disclosure. The lowest total cost and APR usually point to the cheaper loan.",
      },
    ],
    examples: [
      {
        title: "Same rate, different fees",
        body: "Two $20,000 loans at 6% for 60 months share a $386.66 payment, but the one with a $600 fee has an APR of about 7.27%.",
      },
      {
        title: "A card balance",
        body: "A card with a 24% purchase APR charges about 2% of the balance per month on average, so a $2,000 carried balance costs roughly $40 in a month.",
      },
      {
        title: "APR to effective rate",
        body: "A 12% APR compounded monthly gives an effective annual rate of about 12.68%, slightly higher than the stated APR.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "Not every fee is in the APR",
        body: "Some third-party costs, such as certain appraisal or title charges on mortgages, are excluded from the finance charge. Read the full fee list.",
      },
      {
        heading: "Rules vary by country",
        body: "This guide describes US disclosure rules. Other countries use different names and methods, such as a representative APR in the UK.",
      },
      {
        heading: "Estimates, not offers",
        body: "Calculator results are educational estimates. Your lender’s official disclosures are the figures that apply to your loan.",
      },
    ],
    faqs: [
      {
        question: "Is a lower APR always better?",
        answer:
          "For loans of the same amount and term that you plan to keep to the end, usually yes. If you will repay early, compare upfront fees as well.",
      },
      {
        question: "Why is my APR higher than my interest rate?",
        answer:
          "Your loan includes fees, such as an origination fee or points, that are counted in the finance charge and spread over the term as part of the APR.",
      },
      {
        question: "Can the APR equal the interest rate?",
        answer:
          "Yes. When a loan has no fees that count toward the finance charge, the APR and the interest rate are the same.",
      },
      {
        question: "Does APR affect my monthly payment?",
        answer:
          "Not directly. The payment comes from the interest rate, amount and term. APR shows cost, though financed fees raise the balance and the payment.",
      },
      {
        question: "What is a good APR for a car loan?",
        answer:
          "It depends on your credit, the loan term, whether the car is new or used and current market rates. Compare quotes from several lenders on the same day.",
      },
      {
        question: "What is a penalty APR?",
        answer:
          "A higher card rate an issuer may apply after a late or returned payment, as described in your card agreement. Rules limit when it can apply to existing balances.",
      },
      {
        question: "Is APR the same as the annual fee?",
        answer:
          "No. An annual fee is a flat yearly charge on some credit cards, and it is listed separately from the card’s APRs.",
      },
      {
        question: "Does a 0% APR offer mean no cost?",
        answer:
          "It means no interest during the promotional period. Fees may still apply, and some deferred-interest offers charge back interest if not repaid in time.",
      },
      {
        question: "How is daily interest worked out from an APR?",
        answer:
          "Many card issuers divide the APR by 365 to get a daily periodic rate, then apply it to the daily balance. Check your agreement for the exact method.",
      },
      {
        question: "Can the Loan Calculator show APR with fees?",
        answer:
          "It shows payment, interest, fee and total cost from the rate and fee you enter. Use the lender’s disclosure for the official APR figure.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "See the payment and total interest for any rate with the ",
      linkLabel: "Loan Calculator",
      href: "/tools/loan-calculator",
      after: ".",
    },
    alsoSee: [
      {
        before: "Learn the payment formula in ",
        linkLabel: "How a loan payment is calculated",
        href: "/guides/how-a-loan-payment-is-calculated",
        after: ".",
      },
      {
        before: "Price a vehicle loan with the ",
        linkLabel: "Auto Loan Calculator",
        href: "/tools/auto-loan-calculator",
        after: ".",
      },
      {
        before: "Plan a card balance with the ",
        linkLabel: "Credit Card Payoff Calculator",
        href: "/tools/credit-card-payoff-calculator",
        after: ".",
      },
    ],
    sources: [
      {
        label: "CFPB – Difference between a loan interest rate and the APR",
        href: "https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-loan-interest-rate-and-the-apr-en-733/",
      },
      {
        label: "CFPB – What is a credit card interest rate and APR?",
        href: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-credit-card-interest-rate-what-does-apr-mean-en-44/",
      },
      {
        label: "CFPB – Regulation Z (Truth in Lending)",
        href: "https://www.consumerfinance.gov/rules-policy/regulations/1026/",
      },
    ],
  },
};

const jwtSessions: ToolGuide = {
  article: toolGuideArticle({
    slug: "jwt-vs-session-cookies",
    title: "JWT vs Session Cookies: Which Should You Use for Login?",
    primaryKeyword: "jwt vs session cookies",
    secondaryKeywords: [
      "jwt vs session authentication",
      "stateless vs stateful sessions",
      "where to store jwt",
      "httponly cookie jwt",
      "jwt revocation",
    ],
    toolSlug: "jwt-decoder",
    siblingToolSlugs: ["base64-encoder", "hash-generator", "uuid-generator"],
    metaTitle: "JWT vs Session Cookies for Authentication",
    metaDescription:
      "JWT vs session cookies compared: how each works, where tokens are stored, revocation, scaling, XSS and CSRF risks, and when each approach suits a web app.",
    excerpt:
      "Session cookies keep login state on the server, while JWTs carry signed claims to the client. Compare storage, revocation, security and scaling before you pick one.",
    relatedArticles: [
      "how-to-read-a-jwt",
      "what-is-base64",
      "what-is-a-uuid",
    ],
    category: "developer-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: a session cookie holds a random session ID, and the server looks up the matching login record in its own store on every request. A JSON Web Token, defined in RFC 7519, carries signed claims such as the user ID and expiry inside the token itself, so a server can check it without a lookup. The two are not strict opposites, because a JWT can be sent in a cookie too. For a typical server-rendered website, server-side sessions in a secure, HttpOnly cookie are simpler and easier to revoke. JWTs suit APIs and systems where several services need to verify identity independently. The JWT Decoder lets you inspect what a token actually contains.",
    why:
      "Choosing how to keep users signed in affects security, performance and how easily you can log someone out. Many tutorials present JWTs as the modern default, but the trade-offs are real: a token that cannot be revoked quickly is a problem after a password change, and a token stored in the wrong place can be stolen by injected script. Knowing how each model works makes the decision much clearer.",
    sections: [
      {
        id: "how-sessions-work",
        heading: "How do server-side session cookies work?",
        paragraphs: [
          "After a user signs in, the server creates a session record containing who they are and when the session expires. It sends back only a long, random identifier in a Set-Cookie header. The browser returns that cookie automatically on later requests to the same site, and the server finds the record by its ID.",
          "Because the real state lives on the server, the cookie value has no meaning on its own. Logging out or forcing a sign-out after a password reset is as simple as deleting the record. The cost is that every request needs a lookup, so a site with many servers needs a shared session store such as a database or an in-memory cache.",
        ],
      },
      {
        id: "how-jwt-works",
        heading: "How does JWT authentication work?",
        paragraphs: [
          "A JWT has three base64url-encoded parts separated by dots: a header that names the signing algorithm, a payload of claims, and a signature. Standard claims include sub for the subject, exp for the expiry time, iat for when it was issued and aud for the intended audience. The server signs the token with a secret key or a private key, and any service holding the matching key can verify it.",
          "Verification checks the signature and the claims, so a service can trust the token without calling a central store. That makes JWTs popular for APIs, mobile apps and single sign-on between separate services. Remember that the payload is encoded, not encrypted, so anyone holding the token can read it. Never put passwords or other secrets in the claims.",
        ],
        table: {
          caption: "Session cookies and JWTs compared",
          headers: ["Aspect", "Server-side session", "JWT"],
          rows: [
            ["Where state lives", "Server store", "Inside the signed token"],
            ["Lookup per request", "Yes", "Not required"],
            ["Instant logout", "Delete the record", "Needs short expiry or a deny list"],
            ["Readable by the client", "No, only an ID", "Yes, payload is encoded"],
            ["Typical size", "Small random ID", "Often several hundred bytes or more"],
            ["Common fit", "Websites on one domain", "APIs and multiple services"],
          ],
        },
      },
      {
        id: "storage",
        heading: "Where should a JWT be stored in the browser?",
        paragraphs: [
          "Storing a token in localStorage or sessionStorage makes it readable by any JavaScript running on the page. If an attacker manages a cross-site scripting injection, they can copy the token and use it elsewhere. That is why many security guides recommend keeping long-lived credentials out of script-accessible storage.",
          "A cookie with the HttpOnly attribute cannot be read by JavaScript, the Secure attribute limits it to HTTPS, and the SameSite attribute restricts when the browser sends it with cross-site requests. MDN documents these attributes on the Set-Cookie header. You can put a JWT in such a cookie, which gives you the cookie protections while keeping the token format.",
        ],
      },
      {
        id: "revocation",
        heading: "How do you log out or revoke a JWT?",
        paragraphs: [
          "A signed JWT stays valid until its exp time unless the server checks something extra. Deleting it from the browser does not stop a stolen copy from working. Common fixes include giving access tokens a short life, often minutes, and pairing them with a refresh token that the server can revoke.",
          "Some systems keep a deny list of revoked token IDs, using the jti claim, or store a per-user version number that is checked on each request. Both bring back a server lookup, which removes part of the stateless advantage. If you find yourself checking a store on every request anyway, a plain server-side session may be simpler.",
        ],
      },
      {
        id: "security",
        heading: "What are the main security risks of each?",
        paragraphs: [
          "Cookies are sent automatically, so cookie-based logins need protection against cross-site request forgery. SameSite=Lax or Strict blocks many cases, and anti-CSRF tokens cover state-changing requests. Session IDs must be long and random, regenerated after sign-in to prevent session fixation, and expired on the server after inactivity, as NIST and OWASP guidance describe.",
          "JWTs bring their own pitfalls. Servers must accept only the algorithms they expect, reject unsigned tokens that use the none algorithm, validate exp, aud and iss, and protect signing keys. A token decoded without verification proves nothing, which is why a decoder is for inspection and debugging, not for trusting a token.",
        ],
      },
      {
        id: "choosing",
        heading: "When should I choose a session cookie or a JWT?",
        paragraphs: [
          "Choose server-side sessions when your app is a website on one domain, when instant logout matters, or when you want the simplest secure setup. Most web frameworks support them out of the box with sensible cookie settings.",
          "Choose JWTs when several independent services or third parties need to verify identity without sharing a session store, such as OAuth 2.0 access tokens or OpenID Connect ID tokens. Keep access tokens short-lived, store them carefully and plan revocation before you launch rather than after an incident.",
        ],
      },
    ],
    stepsHeading: "How do I inspect a token with the JWT Decoder?",
    steps: [
      {
        title: "Copy a test token",
        body: "Use a token from a development or test environment rather than a live production credential.",
      },
      {
        title: "Paste and decode",
        body: "Paste the compact token into the JWT Decoder and press Decode to see the header and payload JSON.",
      },
      {
        title: "Check the algorithm",
        body: "Look at the alg value in the header and confirm it matches what your server is configured to accept.",
      },
      {
        title: "Read the claims",
        body: "Check exp, iat, aud and sub. Convert exp from seconds since 1970 to a date to see when the token expires.",
      },
      {
        title: "Verify on the server",
        body: "Decoding does not prove authenticity. Rely on your server’s verification library to check the signature and claims.",
      },
    ],
    examples: [
      {
        title: "A session cookie header",
        body: "A server responds with Set-Cookie: sid=7f3c…; HttpOnly; Secure; SameSite=Lax; Path=/, and the browser returns sid on later requests to that site.",
      },
      {
        title: "A short-lived access token",
        body: "An API issues a JWT with exp set 15 minutes after iat, plus a refresh token stored in an HttpOnly cookie that the server can revoke.",
      },
      {
        title: "Spotting a risky payload",
        body: "Decoding a token reveals an email address and a role claim. That is readable by anyone holding the token, so no secrets belong there.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "Use tested libraries",
        body: "Rely on well-maintained framework session support or JWT libraries rather than writing signing and verification code yourself.",
      },
      {
        heading: "Test tokens only",
        body: "Avoid pasting live production tokens into any tool. Treat a token like a password while it is valid.",
      },
      {
        heading: "Standards evolve",
        body: "Check the current RFCs, NIST SP 800-63B and OWASP cheat sheets when you design authentication, since recommendations are updated over time.",
      },
    ],
    faqs: [
      {
        question: "Is a JWT more secure than a session cookie?",
        answer:
          "Not by itself. Security depends on storage, expiry, verification and revocation. Both can be safe or unsafe depending on how they are implemented.",
      },
      {
        question: "Can I store a JWT in a cookie?",
        answer:
          "Yes. Putting a JWT in an HttpOnly, Secure, SameSite cookie hides it from page scripts, though you still need CSRF protection for state-changing requests.",
      },
      {
        question: "Are JWTs encrypted?",
        answer:
          "A standard signed JWT is only encoded, so its payload is readable. Encryption needs the separate JSON Web Encryption format.",
      },
      {
        question: "Why do JWTs use base64url instead of base64?",
        answer:
          "Base64url swaps characters that are unsafe in URLs and drops padding, so tokens can travel in headers, cookies and query strings without escaping.",
      },
      {
        question: "How long should a JWT access token last?",
        answer:
          "There is no single rule, but many systems use minutes rather than days and rely on refresh tokens to keep users signed in.",
      },
      {
        question: "What is a refresh token?",
        answer:
          "A longer-lived credential used only to obtain new access tokens. The server can revoke it, which limits how long a stolen access token stays useful.",
      },
      {
        question: "Do session cookies work with mobile apps?",
        answer:
          "They can, but native apps and third-party API clients often find bearer tokens in an Authorization header easier to manage than browser cookies.",
      },
      {
        question: "What is the jti claim used for?",
        answer:
          "It gives a token a unique ID, which lets a server track or deny specific tokens, for example to block reuse after logout.",
      },
      {
        question: "Does SameSite stop all CSRF attacks?",
        answer:
          "It blocks many, but not every case, especially across subdomains or with older browsers. Anti-CSRF tokens add a second layer for sensitive actions.",
      },
      {
        question: "Should I build my own session system?",
        answer:
          "Usually not. Framework session handling and established identity providers have been tested against common attacks that custom code often misses.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Inspect a test token’s header and claims with the ",
      linkLabel: "JWT Decoder",
      href: "/tools/jwt-decoder",
      after: ".",
    },
    alsoSee: [
      {
        before: "Learn each part of a token in ",
        linkLabel: "How to read a JWT",
        href: "/guides/how-to-read-a-jwt",
        after: ".",
      },
      {
        before: "See how token parts are encoded in ",
        linkLabel: "What is Base64",
        href: "/guides/what-is-base64",
        after: ".",
      },
      {
        before: "Create random identifiers with the ",
        linkLabel: "UUID Generator",
        href: "/tools/uuid-generator",
        after: ".",
      },
    ],
    sources: [
      {
        label: "IETF RFC 7519 – JSON Web Token",
        href: "https://www.rfc-editor.org/rfc/rfc7519",
      },
      {
        label: "MDN – Set-Cookie header",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie",
      },
      {
        label: "NIST SP 800-63B – Digital Identity Guidelines",
        href: "https://pages.nist.gov/800-63-3/sp800-63b.html",
      },
      {
        label: "OWASP Session Management Cheat Sheet",
        href: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html",
      },
    ],
  },
};

export const batch16Guides: ToolGuide[] = [sodium, apr, jwtSessions];

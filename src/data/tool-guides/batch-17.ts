import type { ToolGuide } from "./index.ts";
import { toolGuideArticle } from "./make.ts";

const PUBLISHED = "2026-11-18T00:00:00Z";

const apy: ToolGuide = {
  article: toolGuideArticle({
    slug: "apy-vs-apr",
    title: "APY vs APR: What Is APY and How Does It Differ From APR?",
    primaryKeyword: "apy vs apr",
    secondaryKeywords: [
      "what is apy",
      "annual percentage yield",
      "how to calculate apy",
      "apy formula",
      "apy on savings account",
    ],
    toolSlug: "compound-interest-calculator",
    siblingToolSlugs: ["savings-goal-calculator", "loan-calculator", "credit-card-payoff-calculator"],
    metaTitle: "APY vs APR: What Is APY and How Is It Calculated?",
    metaDescription:
      "What is APY? Learn the APY formula, how compounding lifts APY above the stated rate, why savings quote APY and loans quote APR, with worked examples.",
    excerpt:
      "APY shows what a deposit really earns in a year once compounding is counted, while APR is a borrowing rate. Learn the formula, see worked numbers and compare savings offers.",
    relatedArticles: [
      "apr-vs-interest-rate",
      "how-compound-interest-works",
      "fixed-vs-variable-interest-rate",
    ],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: APY, or annual percentage yield, is the percentage a deposit earns over one year after interest is added to the balance and starts earning interest itself. APR, or annual percentage rate, is a yearly borrowing cost that does not show compounding inside the year. Savings accounts and certificates of deposit in the United States quote APY under the Truth in Savings Act, while loans and credit cards quote APR under the Truth in Lending Act. A 4.00% rate compounded monthly works out to an APY of about 4.07%. The Compound Interest Calculator lets you test how compounding frequency moves a balance over time.",
    why:
      "Banks advertise savings products with APY and lenders advertise credit with APR, so the two figures land side by side in ads and statements. Knowing which one includes compounding helps you compare deposit offers fairly, spot when a rate is quoted without compounding, and understand why a card balance grows faster than its headline percentage suggests.",
    sections: [
      {
        id: "what-is-apy",
        heading: "What is APY in plain terms?",
        paragraphs: [
          "Annual percentage yield is a standardized way to express what a deposit account pays over a full year. It folds the stated interest rate and the compounding schedule into one number. If an account credits interest monthly, each month’s interest joins the principal and earns its own interest in later months, so the yearly result is a little higher than the stated rate.",
          "Regulation DD, which implements the Truth in Savings Act, requires banks to disclose APY in account disclosures and in advertisements that mention a rate. Credit unions follow an equivalent rule from the National Credit Union Administration. The idea is that two accounts with different compounding schedules can be compared on one yardstick.",
        ],
      },
      {
        id: "apy-vs-apr-table",
        heading: "How do APY and APR differ?",
        paragraphs: [
          "The two figures answer different questions. APY tells a saver what a balance will earn in a year at the current rate. APR tells a borrower the yearly cost of credit, including certain fees on installment loans, but it is a simple annual rate that leaves out compounding.",
        ],
        table: {
          caption: "APY and APR compared",
          headers: ["Feature", "APY", "APR"],
          rows: [
            ["Main use", "Savings, money market accounts, CDs", "Loans, mortgages, credit cards"],
            ["Includes compounding", "Yes", "No"],
            ["US rule behind it", "Truth in Savings Act (Regulation DD)", "Truth in Lending Act (Regulation Z)"],
            ["Higher number is better for you when", "You are the saver", "Never; lower is better as a borrower"],
          ],
        },
      },
      {
        id: "formula",
        heading: "How is APY calculated?",
        paragraphs: [
          "For an account that compounds n times a year at a stated annual rate r, APY equals (1 + r ÷ n) raised to the power n, minus 1. Take a 4.00% rate. Compounded once a year, APY is 4.00%. Compounded quarterly it is about 4.06%, monthly about 4.07% and daily about 4.08%. The jump from annual to monthly matters more than the jump from monthly to daily.",
          "Regulation DD also gives a formula based on actual dollars earned: APY equals 100 times [(1 + interest ÷ principal) raised to 365 ÷ days in term, minus 1]. This version handles certificates with terms shorter or longer than a year. For example, a 182-day CD that pays $200 on $10,000 has an APY of about 4.05%, because the half-year return is scaled up to a full year with compounding.",
        ],
        table: {
          caption: "APY for a 4.00% stated rate by compounding frequency",
          headers: ["Compounding", "Times per year", "APY (rounded)", "Interest on $10,000 in one year"],
          rows: [
            ["Annually", "1", "4.00%", "$400.00"],
            ["Quarterly", "4", "4.06%", "$406.04"],
            ["Monthly", "12", "4.07%", "$407.42"],
            ["Daily", "365", "4.08%", "$408.08"],
          ],
        },
      },
      {
        id: "converting",
        heading: "Can I convert APY back to a stated rate?",
        paragraphs: [
          "Yes. Reverse the formula: the stated rate equals n times [(1 + APY) raised to 1 ÷ n, minus 1]. An account advertising a 5.00% APY with monthly compounding has a stated rate of about 4.89%. This is useful when a calculator asks for an annual rate and a compounding frequency rather than an APY, because typing the APY with monthly compounding would count compounding twice and slightly overstate growth.",
          "If you only know the APY and want a one-year projection, you can skip the conversion and multiply the balance by the APY. For multi-year projections with deposits, the stated rate plus frequency gives cleaner results.",
        ],
      },
      {
        id: "borrowing-side",
        heading: "What does compounding do to a credit card APR?",
        paragraphs: [
          "Card issuers apply a periodic rate to the balance, so unpaid interest can itself be charged interest. A 24% purchase APR is about 2% a month. If a balance were left untouched for a year with monthly compounding, the effective yearly cost would be about 26.82%, well above the APR on the statement. Daily periodic rates push it a little higher.",
          "That is why paying a card in full each month matters more than the headline APR. The Credit Card Payoff Calculator shows how long a balance takes to clear at a given payment, and the guide on APR versus interest rate explains what lenders include in APR on installment loans.",
        ],
      },
      {
        id: "comparing-savings",
        heading: "How should I compare savings accounts using APY?",
        paragraphs: [
          "Compare APY to APY rather than one bank’s stated rate to another’s APY. Then check the conditions: some accounts pay a high APY only up to a balance cap, only for an introductory period, or only if you meet activity requirements. A variable-rate savings account can change its APY at any time, while a CD usually locks the rate for the term.",
          "The FDIC publishes national average deposit rates each month, which gives a neutral reference point for judging whether an offer is high or ordinary. Also check that the institution is federally insured and that your balance stays within insurance limits.",
        ],
      },
    ],
    stepsHeading: "How do I check an APY with the Compound Interest Calculator?",
    steps: [
      {
        title: "Enter a round starting amount",
        body: "Type $10,000 as the starting amount and 0 for the monthly contribution so the result shows pure yield.",
      },
      {
        title: "Enter the stated rate",
        body: "Type the stated annual rate, not the APY, and set the time period to 1 year.",
      },
      {
        title: "Match the bank’s compounding",
        body: "Pick the frequency from the account disclosure, such as daily or monthly.",
      },
      {
        title: "Read the interest earned",
        body: "Divide the interest by the starting amount. The result, as a percentage, should match the advertised APY closely.",
      },
      {
        title: "Extend the horizon",
        body: "Change the time to 5 or 10 years and add a monthly contribution to see how yield and saving habits combine.",
      },
    ],
    examples: [
      {
        title: "Same rate, different schedules",
        body: "$10,000 at 4% earns $400.00 with annual compounding and about $407.42 with monthly compounding over one year.",
      },
      {
        title: "Five-year gap",
        body: "Over five years, monthly compounding at 4% grows $10,000 to about $12,209.97, versus $12,166.53 with annual compounding.",
      },
      {
        title: "Short CD",
        body: "A 182-day CD paying $200 on $10,000 annualizes to an APY near 4.05%.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "APY assumes the money stays",
        body: "The disclosed figure assumes interest remains on deposit for a year. Withdrawing interest as it is paid lowers what you actually earn.",
      },
      {
        heading: "Taxes and inflation are separate",
        body: "Interest is generally taxable income in the United States, and inflation reduces its buying power. APY shows neither effect.",
      },
      {
        heading: "Rules outside the US differ",
        body: "Other countries use terms such as AER in the UK or effective annual rate. The math is similar, but disclosure rules vary.",
      },
    ],
    faqs: [
      {
        question: "Is a higher APY always the better savings deal?",
        answer:
          "Usually, but check balance caps, minimums, promotional periods and fees. A slightly lower APY with no conditions can pay more in practice.",
      },
      {
        question: "Why is APY higher than the interest rate on my account?",
        answer:
          "Interest is credited during the year and then earns interest itself. APY includes that effect, while the stated rate does not.",
      },
      {
        question: "Can APY and the stated rate ever be equal?",
        answer:
          "Yes. When interest compounds once a year, or a deposit pays simple interest for exactly one year, the two figures match.",
      },
      {
        question: "Does APY change on a savings account?",
        answer:
          "On variable-rate accounts it can change whenever the bank adjusts its rate. Fixed-term CDs usually keep the same APY until maturity.",
      },
      {
        question: "What does APY earned on my statement mean?",
        answer:
          "Regulation DD requires periodic statements to show an APY earned figure, which reflects the interest actually paid during that statement period.",
      },
      {
        question: "Is APY the same as APR on a savings account?",
        answer:
          "No. Deposit accounts in the US disclose APY. APR is the borrowing measure used for loans and credit cards and ignores compounding.",
      },
      {
        question: "How do I calculate monthly interest from an APY?",
        answer:
          "Convert APY to a monthly rate by taking (1 + APY) to the power 1/12, minus 1, then multiply that rate by the balance.",
      },
      {
        question: "Does a CD early withdrawal penalty affect APY?",
        answer:
          "The quoted APY assumes the CD is held to maturity. A penalty for early withdrawal reduces your real return below that figure.",
      },
      {
        question: "Is APY used for investments like stocks?",
        answer:
          "No. APY applies to interest-bearing deposits. Investment returns vary and are reported differently, often as an annualized return.",
      },
      {
        question: "Can I enter an APY straight into the Compound Interest Calculator?",
        answer:
          "Choose annual compounding if you type an APY. With monthly or daily compounding, enter the stated rate instead to avoid counting compounding twice.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Test how compounding changes your yield with the ",
      linkLabel: "Compound Interest Calculator",
      href: "/tools/compound-interest-calculator",
      after: ".",
    },
    alsoSee: [
      {
        before: "Plan a target balance with the ",
        linkLabel: "Savings Goal Calculator",
        href: "/tools/savings-goal-calculator",
        after: ".",
      },
      {
        before: "See what APR includes on a loan in ",
        linkLabel: "APR vs interest rate",
        href: "/guides/apr-vs-interest-rate",
        after: ".",
      },
      {
        before: "Learn how rates can move over time in ",
        linkLabel: "Fixed vs variable interest rates",
        href: "/guides/fixed-vs-variable-interest-rate",
        after: ".",
      },
    ],
    sources: [
      {
        label: "CFPB – Regulation DD (Truth in Savings)",
        href: "https://www.consumerfinance.gov/rules-policy/regulations/1030/",
      },
      {
        label: "CFPB – Regulation DD Appendix A, APY calculation",
        href: "https://www.consumerfinance.gov/rules-policy/regulations/1030/appendix-A/",
      },
      {
        label: "FDIC – National Rates and Rate Caps",
        href: "https://www.fdic.gov/national-rates-and-rate-caps",
      },
      {
        label: "Investor.gov (SEC) – Annual Percentage Yield",
        href: "https://www.investor.gov/introduction-investing/investing-basics/glossary/annual-percentage-yield-apy",
      },
    ],
  },
};

const fixedVariable: ToolGuide = {
  article: toolGuideArticle({
    slug: "fixed-vs-variable-interest-rate",
    title: "Fixed vs Variable Interest Rate: Which Loan Rate Is Better?",
    primaryKeyword: "fixed vs variable interest rate",
    secondaryKeywords: [
      "fixed rate vs adjustable rate mortgage",
      "what is a variable interest rate",
      "arm rate caps",
      "index and margin",
      "should i get a fixed or variable rate",
    ],
    toolSlug: "mortgage-calculator",
    siblingToolSlugs: ["loan-calculator", "home-affordability-calculator", "auto-loan-calculator"],
    metaTitle: "Fixed vs Variable Interest Rate: Pros, Cons and Examples",
    metaDescription:
      "Fixed vs variable interest rates explained: how ARMs adjust with an index and margin, how rate caps work, a worked payment example and when each suits you.",
    excerpt:
      "A fixed rate keeps your payment steady, while a variable rate can fall or rise with the market. See how adjustable rates reset, how caps limit the change and how to stress-test a payment.",
    relatedArticles: [
      "apr-vs-interest-rate",
      "15-year-vs-30-year-mortgage",
      "apy-vs-apr",
    ],
    category: "calculators",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: a fixed interest rate is set when you take out the loan and does not change, so the principal and interest payment stays the same for the whole term. A variable, or adjustable, rate can move up or down after an introductory period because it is tied to a market index plus a margin. Variable rates often start lower, which helps if you expect to repay or refinance soon, but they carry the risk of higher payments later. The Mortgage Calculator lets you price a payment at today’s rate and at a higher stress-test rate, so you can see the range before you choose.",
    why:
      "Interest rates move with the economy, and the choice between locking a rate and letting it float decides who carries that risk: you or the lender. On a large, long loan like a mortgage, a few percentage points can change the monthly payment by hundreds of dollars, so it pays to understand how a rate can change before signing.",
    sections: [
      {
        id: "definitions",
        heading: "What is the difference between a fixed and a variable rate?",
        paragraphs: [
          "With a fixed rate, the lender commits to one rate for the life of the loan. Your principal and interest payment is predictable, although taxes and insurance collected in an escrow account can still change.",
          "With a variable rate, the rate is recalculated on a schedule. The Consumer Financial Protection Bureau explains that an adjustable-rate mortgage (ARM) usually starts with an initial rate that holds for a set period, after which the rate resets at regular intervals based on an index plus a margin, subject to any caps in the contract.",
        ],
        table: {
          caption: "Fixed and variable rates side by side",
          headers: ["Feature", "Fixed rate", "Variable rate"],
          rows: [
            ["Payment over the term", "Stays the same for principal and interest", "Can rise or fall after resets"],
            ["Typical starting rate", "Often higher", "Often lower during the initial period"],
            ["Who carries rate risk", "The lender", "The borrower"],
            ["Common products", "30-year and 15-year mortgages, most auto loans", "ARMs, HELOCs, most credit cards"],
          ],
        },
      },
      {
        id: "index-margin",
        heading: "How does a variable rate adjust?",
        paragraphs: [
          "A variable rate has two parts. The index is a published benchmark that moves with the market. Many newer US adjustable-rate mortgages use the Secured Overnight Financing Rate (SOFR), which the Federal Reserve Bank of New York publishes each business day. Credit cards and home equity lines often follow the prime rate. The margin is a fixed number of percentage points the lender adds to the index, set in your contract.",
          "At each adjustment date, the lender takes the current index value, adds the margin, rounds as the contract allows and then applies any caps. If the index has risen by 1 point and the cap allows it, your rate rises by 1 point too.",
        ],
      },
      {
        id: "caps",
        heading: "How do rate caps limit an adjustable rate?",
        paragraphs: [
          "Most ARMs include three kinds of caps. The initial adjustment cap limits the first change after the introductory period. The subsequent adjustment cap limits each later change. The lifetime cap sets the highest rate the loan can ever reach above the starting rate. Caps are often written as three numbers, such as 2/2/5.",
          "Using that example, a loan that starts at 5.75% could rise to no more than 7.75% at its first reset and never above 10.75% over its life. The CFPB’s Consumer Handbook on Adjustable-Rate Mortgages suggests asking lenders for the worst-case payment so you can judge whether it is affordable.",
        ],
      },
      {
        id: "worked-example",
        heading: "What does a reset do to a monthly payment? A worked example",
        paragraphs: [
          "The rates below are illustrations, not current offers. Suppose you borrow $300,000 over 30 years. A fixed loan at 6.5% has a principal and interest payment of about $1,896.20 for all 360 months. A 5/1 ARM starting at 5.75% begins at about $1,750.72, saving roughly $145 a month, or about $8,729 over the first five years.",
          "After five years the ARM balance is about $278,287 and the remaining term is 25 years. The table shows the new payment under three reset outcomes. If the rate jumps to the 7.75% cap, the payment rises about $351 a month and overtakes the fixed loan.",
        ],
        table: {
          caption: "$300,000, 30-year loan: payment after the first ARM reset (rounded)",
          headers: ["Scenario", "Rate from year 6", "Monthly P&I", "Versus fixed at $1,896.20"],
          rows: [
            ["Index falls", "4.75%", "$1,586.56", "About $310 lower"],
            ["Index unchanged", "5.75%", "$1,750.72", "About $145 lower"],
            ["Index up 1 point", "6.75%", "$1,922.71", "About $27 higher"],
            ["Hits the 2-point cap", "7.75%", "$2,101.98", "About $206 higher"],
          ],
        },
      },
      {
        id: "other-loans",
        heading: "Which other loans use fixed or variable rates?",
        paragraphs: [
          "Most auto loans and personal installment loans have fixed rates, so the Loan Calculator and Auto Loan Calculator give a payment that should hold for the term. Federal Direct student loans carry fixed rates that are set for each award year and then stay the same for the life of that loan, according to Federal Student Aid, while some private student loans offer a variable option.",
          "Many credit cards have variable APRs linked to an index such as the prime rate, which is why your card rate can rise without you doing anything differently. Home equity lines of credit are usually variable as well, and a 1-point rise on a $50,000 interest-only HELOC balance adds about $42 a month.",
        ],
      },
      {
        id: "choosing",
        heading: "Should I choose a fixed or a variable rate?",
        paragraphs: [
          "A fixed rate suits you if you plan to keep the loan for many years, value a steady budget or would struggle if the payment rose. A variable rate can make sense if you expect to sell, refinance or repay before the first reset, or if your income could comfortably absorb the worst-case payment.",
          "Refinancing later is not guaranteed, because it depends on your credit, income, home value and market rates at that time. Base the decision on the payment you can afford at the lifetime cap, not on a forecast of where rates will go.",
        ],
      },
    ],
    stepsHeading: "How do I stress-test a rate with the Mortgage Calculator?",
    steps: [
      {
        title: "Price the fixed offer",
        body: "Enter the home price, down payment, fixed rate and term, and note the monthly principal and interest.",
      },
      {
        title: "Price the starting variable rate",
        body: "Change only the interest rate to the ARM’s initial rate and record the lower payment.",
      },
      {
        title: "Add the first cap",
        body: "Raise the rate by the initial adjustment cap, often 2 points, to see the payment after a worst-case first reset.",
      },
      {
        title: "Test the lifetime cap",
        body: "Enter the starting rate plus the lifetime cap. This is close to the highest payment the loan allows on the remaining balance.",
      },
      {
        title: "Add housing costs",
        body: "Fill in property tax, insurance and HOA so each scenario reflects your full monthly housing bill.",
      },
    ],
    examples: [
      {
        title: "Early savings",
        body: "On $300,000, a 5.75% start rate saves about $145 a month versus a 6.5% fixed rate during the first five years.",
      },
      {
        title: "Capped reset",
        body: "If that ARM resets to 7.75% in year six, the payment rises to about $2,101.98 on the remaining balance.",
      },
      {
        title: "One point on $250,000",
        body: "A 30-year payment on $250,000 is about $1,663.26 at 7% and $1,834.41 at 8%, a difference of about $171 a month.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "Read the loan documents",
        body: "Your Loan Estimate and note list the index, margin, caps and adjustment dates. Those figures, not general examples, decide your payment.",
      },
      {
        heading: "Escrow can still change",
        body: "Even with a fixed rate, property taxes and insurance can rise, so the total payment may change.",
      },
      {
        heading: "Estimates, not offers",
        body: "Calculator results are educational. Lender quotes depend on your credit, down payment and market conditions on the day you lock.",
      },
    ],
    faqs: [
      {
        question: "Is a fixed or variable rate cheaper overall?",
        answer:
          "It depends on how rates move after you borrow. A variable rate is cheaper if rates stay flat or fall; a fixed rate wins if they climb.",
      },
      {
        question: "What does 5/1 mean on an ARM?",
        answer:
          "The first number is the years the initial rate lasts. The second is how often the rate adjusts after that, here once a year. A 5/6 ARM adjusts every six months.",
      },
      {
        question: "What is a margin on a variable-rate loan?",
        answer:
          "It is a set number of percentage points the lender adds to the index at each adjustment. The margin usually stays the same for the life of the loan.",
      },
      {
        question: "Can a variable rate go down?",
        answer:
          "Yes, if the index falls. Some contracts set a floor, a minimum rate the loan cannot drop below, so check the terms.",
      },
      {
        question: "What is SOFR?",
        answer:
          "The Secured Overnight Financing Rate is a benchmark based on overnight loans backed by Treasury securities, published daily by the New York Fed.",
      },
      {
        question: "Can I switch from a variable rate to a fixed rate later?",
        answer:
          "Usually by refinancing into a new fixed-rate loan, which involves approval and closing costs. Some HELOCs let you fix part of the balance.",
      },
      {
        question: "Why do credit card rates change when I have not missed a payment?",
        answer:
          "Many card APRs are variable and track an index such as the prime rate. When the index rises, the APR follows under the card agreement.",
      },
      {
        question: "Is a fixed-rate loan protected from inflation?",
        answer:
          "The rate itself stays the same, so rising inflation does not raise your interest charge. It does not cover taxes, insurance or other costs.",
      },
      {
        question: "What is a payment shock?",
        answer:
          "A sharp jump in the monthly payment when an adjustable rate resets higher, especially at the first adjustment after a low introductory rate.",
      },
      {
        question: "Does a variable rate affect my APR disclosure?",
        answer:
          "Yes. An ARM’s disclosed APR generally assumes the index stays at its value when the loan is disclosed, so it cannot predict your real cost if rates move.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Compare a fixed payment with a stress-tested rate in the ",
      linkLabel: "Mortgage Calculator",
      href: "/tools/mortgage-calculator",
      after: ".",
    },
    alsoSee: [
      {
        before: "Check what fits your budget with the ",
        linkLabel: "Home Affordability Calculator",
        href: "/tools/home-affordability-calculator",
        after: ".",
      },
      {
        before: "Weigh loan terms in ",
        linkLabel: "15-year vs 30-year mortgage",
        href: "/guides/15-year-vs-30-year-mortgage",
        after: ".",
      },
      {
        before: "Understand savings yields in ",
        linkLabel: "APY vs APR",
        href: "/guides/apy-vs-apr",
        after: ".",
      },
    ],
    sources: [
      {
        label: "CFPB – Fixed-rate vs adjustable-rate mortgage",
        href: "https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-fixed-rate-and-adjustable-rate-mortgage-arm-loan-en-100/",
      },
      {
        label: "CFPB – Consumer Handbook on Adjustable-Rate Mortgages (PDF)",
        href: "https://files.consumerfinance.gov/f/documents/cfpb_charm_booklet.pdf",
      },
      {
        label: "Federal Reserve Bank of New York – SOFR",
        href: "https://www.newyorkfed.org/markets/reference-rates/sofr",
      },
      {
        label: "Federal Reserve – Selected Interest Rates (H.15)",
        href: "https://www.federalreserve.gov/releases/h15/",
      },
      {
        label: "Federal Student Aid – Interest rates",
        href: "https://studentaid.gov/understand-aid/types/loans/interest-rates",
      },
    ],
  },
};

const hashEnc: ToolGuide = {
  article: toolGuideArticle({
    slug: "hashing-vs-encryption",
    title: "Hashing vs Encryption: What Is the Difference and When to Use Each?",
    primaryKeyword: "hashing vs encryption",
    secondaryKeywords: [
      "difference between hashing and encryption",
      "is hashing encryption",
      "hashing vs encoding",
      "how passwords are stored",
      "symmetric vs asymmetric encryption",
    ],
    toolSlug: "hash-generator",
    siblingToolSlugs: ["password-generator", "jwt-decoder", "base64-encoder"],
    metaTitle: "Hashing vs Encryption: Key Differences Explained",
    metaDescription:
      "Hashing vs encryption explained: one-way digests vs reversible ciphers, where encoding fits, how passwords should be stored and which to use for each job.",
    excerpt:
      "Hashing makes a one-way fingerprint, encryption scrambles data so the key holder can read it again, and encoding only changes format. Learn which one fits passwords, files and tokens.",
    relatedArticles: [
      "md5-vs-sha-256",
      "jwt-vs-session-cookies",
      "how-to-hash-text",
    ],
    category: "developer-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: hashing is one-way and encryption is two-way. A hash function such as SHA-256 turns any input into a fixed-length digest that cannot be turned back into the original, so it is used to verify integrity and store password verifiers. Encryption, such as AES, scrambles data with a key so that anyone holding the right key can decrypt it, so it is used to keep data confidential. Encoding, such as Base64, is neither: it only changes the format and offers no secrecy. The Hash Generator creates SHA-256, SHA-384 and SHA-512 digests in your browser so you can see one-way output for yourself.",
    why:
      "Mixing these up causes real security mistakes, such as encrypting passwords that should be hashed, hashing data that needs to be read back later, or treating Base64 text as if it were protected. Picking the right primitive is often the difference between a minor incident and a full data exposure.",
    sections: [
      {
        id: "core-difference",
        heading: "What is the core difference between hashing and encryption?",
        paragraphs: [
          "A cryptographic hash takes input of any length and produces a digest of fixed length, defined for the SHA-2 family in NIST FIPS 180-4. There is no key and no decryption step. The only way to link a digest to its input is to hash a candidate and compare.",
          "Encryption takes plaintext and a key and produces ciphertext that is roughly as long as the input. With the correct key, decryption restores the exact original. AES, specified in FIPS 197, is the standard symmetric cipher, and the Web Crypto API exposes both digest and encrypt functions through the SubtleCrypto interface described on MDN.",
        ],
        table: {
          caption: "Hashing, encryption and encoding compared",
          headers: ["Property", "Hashing", "Encryption", "Encoding"],
          rows: [
            ["Reversible", "No", "Yes, with the key", "Yes, by anyone"],
            ["Uses a key", "No (HMAC adds one)", "Yes", "No"],
            ["Output length", "Fixed", "Grows with input", "Grows with input"],
            ["Main goal", "Integrity and verification", "Confidentiality", "Safe transport of bytes as text"],
            ["Examples", "SHA-256, SHA-512", "AES-GCM, RSA-OAEP", "Base64, URL encoding"],
          ],
        },
      },
      {
        id: "one-way",
        heading: "Why can a hash not be decrypted?",
        paragraphs: [
          "A digest is much smaller than most inputs, so many possible inputs map to every output and information is thrown away. A well-designed hash also scatters every bit of input across the result. The string password has the SHA-256 digest 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8, while password! gives f82a7d02e8f0a728b7c3e958c278745cb224d3d7b2e3b84c0ecafc5511fdbdb7, with no visible relationship.",
          "Sites that claim to reverse hashes are really looking digests up in huge tables of precomputed common inputs. That is why a plain, unsalted hash of a popular password is weak: the attacker never reverses anything, they simply recognise it.",
        ],
      },
      {
        id: "passwords",
        heading: "How should passwords be stored: hashed or encrypted?",
        paragraphs: [
          "Passwords should be hashed with a dedicated password hashing scheme, never encrypted. If they were encrypted, anyone who stole the key along with the database could read every password. NIST SP 800-63B requires that stored passwords be salted and hashed using a suitable password hashing scheme, with a salt of at least 32 bits and a cost factor set as high as practical.",
          "General-purpose hashes like SHA-256 are deliberately fast, which helps attackers try billions of guesses offline. Password hashing schemes such as PBKDF2, described in NIST SP 800-132, or Argon2id, specified in RFC 9106, add a salt and a tunable work factor so each guess costs far more. Login then means hashing the typed password with the stored salt and comparing results.",
        ],
      },
      {
        id: "encryption-types",
        heading: "What are symmetric and asymmetric encryption?",
        paragraphs: [
          "Symmetric encryption uses one shared secret key to encrypt and decrypt. AES in an authenticated mode such as GCM is the common choice for files, databases and network traffic, because it is fast and also detects tampering.",
          "Asymmetric encryption uses a key pair: a public key that anyone can use to encrypt and a private key that only the owner uses to decrypt. It is slower, so protocols such as TLS use asymmetric methods to agree on a key and then switch to symmetric encryption for the actual data.",
        ],
      },
      {
        id: "together",
        heading: "How do hashing and encryption work together?",
        paragraphs: [
          "Real systems combine them. A digital signature hashes a message and then signs the digest with a private key, so anyone with the public key can check it. An HMAC, defined in FIPS 198-1, mixes a secret key into a hash so only key holders can produce a valid tag.",
          "JSON Web Tokens show the split clearly. A signed JWT, or JWS, is only Base64url-encoded and signed, so its claims are readable by anyone; the JWT Decoder displays them without a key. An encrypted JWT, or JWE, defined in RFC 7516, hides the claims so only the intended recipient can read them.",
        ],
      },
      {
        id: "which-to-use",
        heading: "Which should I use for common jobs?",
        paragraphs: [
          "Start from the question you need answered later. If you must read the data again, you need encryption. If you only need to confirm that something matches or has not changed, a hash is enough. If you just need bytes to travel through a text-only channel, encoding does the job but adds no secrecy.",
        ],
        table: {
          caption: "Matching common tasks to the right technique",
          headers: ["Task", "Use", "Why"],
          rows: [
            ["Storing user passwords", "Salted password hashing scheme", "The server only checks matches"],
            ["Saving card or health records", "Encryption such as AES-GCM", "Authorized staff must read them"],
            ["Checking a downloaded installer", "SHA-256 digest", "Detects any change to the file"],
            ["Putting an image in a data URL", "Base64 encoding", "Format change only"],
            ["Proving an API request came from you", "HMAC or a signature", "Needs a key to create"],
          ],
        },
      },
      {
        id: "encoding",
        heading: "Where does encoding fit in?",
        paragraphs: [
          "Encoding converts data into another representation so it survives a channel. Base64, defined in RFC 4648, turns bytes into letters, digits and a few symbols; the phrase Tools Star Hub becomes VG9vbHMgU3RhciBIdWI=. Anyone can decode that instantly, so Base64 should never be described as protection.",
          "Digests are often displayed in hex or Base64 too, which is why a hash can look like encoded text. The difference is that decoding a Base64 digest only gives you raw hash bytes, not the original input.",
        ],
      },
    ],
    stepsHeading: "How do I see one-way hashing with the Hash Generator?",
    steps: [
      {
        title: "Hash a short phrase",
        body: "Type a short phrase into the Hash Generator and keep SHA-256 selected.",
      },
      {
        title: "Change one character",
        body: "Add a single letter or punctuation mark and notice that the whole digest changes.",
      },
      {
        title: "Switch algorithms",
        body: "Choose SHA-512 and compare: the digest is longer, but it still cannot be reversed.",
      },
      {
        title: "Compare with encoding",
        body: "Paste the same phrase into the Base64 Encoder and decode it again to see that encoding is fully reversible.",
      },
      {
        title: "Use test data only",
        body: "Avoid typing real secrets anywhere you do not need to, even though hashing here runs locally in your browser.",
      },
    ],
    examples: [
      {
        title: "Verifying a download",
        body: "A vendor lists a SHA-256 digest beside a file. You hash your copy and compare; a match shows the file was not altered.",
      },
      {
        title: "Protecting a laptop",
        body: "Full-disk encryption scrambles stored files with a key, so they can be read again only after unlocking.",
      },
      {
        title: "Storing a login",
        body: "A service saves a salt and an Argon2id or PBKDF2 hash, never the password or an encrypted copy of it.",
      },
    ],
    notesHeading: "What should I keep in mind?",
    notes: [
      {
        heading: "Do not invent your own crypto",
        body: "Use well-reviewed libraries and platform APIs rather than designing custom schemes, which commonly hide subtle flaws.",
      },
      {
        heading: "Key management matters",
        body: "Encryption is only as strong as the protection on its keys. Store keys separately from the data they protect.",
      },
      {
        heading: "Legacy algorithms linger",
        body: "MD5 and SHA-1 still appear in old systems. Treat them as weak for security and plan migrations to SHA-2 or newer.",
      },
    ],
    faqs: [
      {
        question: "Which is more secure, hashing or encryption?",
        answer:
          "Neither is stronger in general; they solve different problems. Hash data you only need to verify and encrypt data you must read again.",
      },
      {
        question: "Is hashing the same as encoding?",
        answer:
          "No. Encoding such as Base64 is reversible by anyone without a key, while a cryptographic hash cannot be turned back into its input.",
      },
      {
        question: "Why are passwords hashed instead of encrypted?",
        answer:
          "A server only needs to check that a typed password matches, not read it. Hashing removes the risk of a stolen key unlocking every account.",
      },
      {
        question: "What is a pepper in password storage?",
        answer:
          "A secret value kept outside the database, for example in a hardware module, and mixed into password hashing as an extra layer.",
      },
      {
        question: "Is AES hashing or encryption?",
        answer:
          "AES is a symmetric encryption algorithm. With the same key you can decrypt AES ciphertext back to the original data.",
      },
      {
        question: "Does HTTPS use hashing or encryption?",
        answer:
          "Both. TLS encrypts traffic for confidentiality and uses hash-based functions for message integrity and key derivation.",
      },
      {
        question: "Can encrypted data be hashed?",
        answer:
          "Yes. Hashing ciphertext gives a fingerprint you can use to detect changes, though authenticated encryption modes already include tamper checks.",
      },
      {
        question: "What is a digital signature in simple terms?",
        answer:
          "A hash of a message signed with a private key. Anyone with the matching public key can confirm who signed it and that it was not changed.",
      },
      {
        question: "Is a signed JWT encrypted?",
        answer:
          "Not by default. A signed JWT protects integrity only, so do not put secrets in its claims unless you use an encrypted JWE.",
      },
      {
        question: "What is a key derivation function?",
        answer:
          "A function that turns a password or secret into key material, usually adding a salt and work factor. PBKDF2 and Argon2id are examples.",
      },
    ],
    faqMax: 10,
    cta: {
      before: "Create a SHA-256, SHA-384 or SHA-512 digest with the ",
      linkLabel: "Hash Generator",
      href: "/tools/hash-generator",
      after: ".",
    },
    alsoSee: [
      {
        before: "Compare hash algorithms in ",
        linkLabel: "MD5 vs SHA-256",
        href: "/guides/md5-vs-sha-256",
        after: ".",
      },
      {
        before: "See how signed tokens differ from server sessions in ",
        linkLabel: "JWT vs session cookies",
        href: "/guides/jwt-vs-session-cookies",
        after: ".",
      },
      {
        before: "Create long random secrets with the ",
        linkLabel: "Password Generator",
        href: "/tools/password-generator",
        after: ".",
      },
    ],
    sources: [
      {
        label: "NIST FIPS 180-4 – Secure Hash Standard",
        href: "https://csrc.nist.gov/pubs/fips/180-4/upd1/final",
      },
      {
        label: "NIST FIPS 197 – Advanced Encryption Standard",
        href: "https://csrc.nist.gov/pubs/fips/197/final",
      },
      {
        label: "NIST SP 800-63B – Authentication and Lifecycle Management",
        href: "https://pages.nist.gov/800-63-4/sp800-63b.html",
      },
      {
        label: "MDN – SubtleCrypto (Web Crypto API)",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto",
      },
      {
        label: "RFC 9106 – Argon2",
        href: "https://www.rfc-editor.org/rfc/rfc9106",
      },
    ],
  },
};

export const batch17Guides: ToolGuide[] = [apy, fixedVariable, hashEnc];

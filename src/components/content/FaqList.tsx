type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: FaqItem[];
  heading?: string;
};

export function FaqList({ items, heading = "FAQ" }: FaqListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="faq-heading" className="mt-14">
      <h2
        id="faq-heading"
        className="text-xl font-semibold tracking-tight text-foreground"
      >
        {heading}
      </h2>
      <dl className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
        {items.map((item) => (
          <div key={item.question} className="px-5 py-4">
            <dt className="font-medium text-foreground">{item.question}</dt>
            <dd className="mt-2 text-sm leading-6 text-muted-foreground">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function getDefaultToolFaqs(toolName: string) {
  return [
    {
      question: `Is the ${toolName} free?`,
      answer:
        "Yes. Core tools on Tools Star Hub are free to use and do not require payment.",
    },
    {
      question: "Do I need to create an account?",
      answer: "No. You can use tools immediately without signing up.",
    },
    {
      question: "Is my data sent to a server?",
      answer:
        "This tool runs in your browser. The text or file you provide is not uploaded to a Tools Star Hub server.",
    },
  ];
}

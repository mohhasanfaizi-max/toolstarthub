import type { GuideSection } from "@/data/extra-guide-content";

/** Question-style guide sections with optional subsections and tables. */
export function GuideSections({ sections }: { sections: GuideSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.id} className="mt-10" aria-labelledby={`guide-${section.id}`}>
          <h2
            id={`guide-${section.id}`}
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            {section.heading}
          </h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-sm leading-7 text-muted-foreground">
              {paragraph}
            </p>
          ))}
          {section.table ? (
            <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[32rem] border-collapse text-start text-sm">
                <caption className="px-4 pt-3 text-start text-xs text-muted-foreground">
                  {section.table.caption}
                </caption>
                <thead>
                  <tr className="border-b border-border">
                    {section.table.headers.map((header) => (
                      <th
                        key={header}
                        scope="col"
                        className="px-4 py-3 text-start font-medium text-foreground"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row) => (
                    <tr key={row.join("|")} className="border-b border-border last:border-b-0">
                      {row.map((cell, index) =>
                        index === 0 ? (
                          <th
                            key={`${cell}-${index}`}
                            scope="row"
                            className="px-4 py-3 text-start align-top font-medium text-foreground"
                          >
                            {cell}
                          </th>
                        ) : (
                          <td
                            key={`${cell}-${index}`}
                            className="px-4 py-3 align-top leading-6 text-muted-foreground"
                          >
                            {cell}
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
          {section.subsections?.map((sub) => (
            <div key={sub.heading} className="mt-5">
              <h3 className="font-medium text-foreground">{sub.heading}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{sub.body}</p>
            </div>
          ))}
          {section.after ? (
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{section.after}</p>
          ) : null}
        </section>
      ))}
    </>
  );
}

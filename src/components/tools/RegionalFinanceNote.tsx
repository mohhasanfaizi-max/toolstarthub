"use client";

import { useTx } from "@/i18n/tool-text";

function T({ children }: { children: string }) {
  const tx = useTx();
  return <>{tx(children)}</>;
}

export function RegionalFinanceNote({
  variant,
}: {
  variant: "mortgage" | "loan" | "paycheck" | "sales-tax";
}) {
  return (
    <aside
      className="mt-4 rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm leading-6 text-muted-foreground"
      data-testid={`${variant}-regional-note`}
    >
      {variant === "mortgage" ? <MortgageNote /> : null}
      {variant === "loan" ? <LoanNote /> : null}
      {variant === "paycheck" ? <PaycheckNote /> : null}
      {variant === "sales-tax" ? <SalesTaxNote /> : null}
    </aside>
  );
}

function OfficialLink({ href, children }: { href: string; children: string }) {
  const tx = useTx();
  return (
    <a href={href} className="underline underline-offset-2 hover:text-foreground" rel="noopener noreferrer">
      {tx(children)}
    </a>
  );
}

function MortgageNote() {
  return (
    <>
      <p>
        <T>This estimate uses US-style monthly compounding on the figures you enter. It is not a lender quote, and it does not add country-specific taxes or fees.</T>
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>
          <T>United Kingdom: stamp duty land tax in England and Northern Ireland, and the Scottish or Welsh equivalents, is not included. Official guidance is on</T>{" "}
          <OfficialLink href="https://www.gov.uk/stamp-duty-land-tax">GOV.UK (HMRC)</OfficialLink>.
        </li>
        <li>
          <T>Canada: many mortgages compound interest twice a year while charging it monthly, which can change the payment compared with this estimate. The Financial Consumer Agency of Canada explains this in its</T>{" "}
          <OfficialLink href="https://www.canada.ca/en/financial-consumer-agency/services/industry/bulletins/information-box-examples/credit-agreement-fixed-mortgage.html">
            fixed-mortgage information-box example
          </OfficialLink>{" "}
          <T>and in its overview of</T>{" "}
          <OfficialLink href="https://www.canada.ca/en/financial-consumer-agency/services/mortgages/interest-on-mortgages.html">
            mortgage interest
          </OfficialLink>
          .
        </li>
        <li>
          <T>Australia: lender’s mortgage insurance (LMI) may apply when you borrow more than 80% of the property value. It protects the lender, not you. Official guidance is on</T>{" "}
          <OfficialLink href="https://moneysmart.gov.au/saving/save-for-a-house-deposit">Moneysmart</OfficialLink>{" "}
          <T>and in the</T>{" "}
          <OfficialLink href="https://moneysmart.gov.au/glossary/lenders-mortgage-insurance-lmi">LMI glossary entry</OfficialLink>.
        </li>
      </ul>
    </>
  );
}

function LoanNote() {
  return (
    <>
      <p>
        <T>This calculator uses monthly compounding, a common US-style installment formula. It is not a lender offer and does not apply UK, Canadian, or Australian consumer-credit rules or fees.</T>
      </p>
      <p className="mt-2">
        <T>If you are comparing a mortgage-style loan, Canadian contracts often compound interest twice a year while charging it monthly. See the</T>{" "}
        <OfficialLink href="https://www.canada.ca/en/financial-consumer-agency/services/industry/bulletins/information-box-examples/credit-agreement-fixed-mortgage.html">
          FCAC explanation
        </OfficialLink>{" "}
        <T>and</T>{" "}
        <OfficialLink href="https://moneysmart.gov.au/home-loans">Moneysmart on home loans</OfficialLink>.
      </p>
    </>
  );
}

function PaycheckNote() {
  return (
    <p>
      <T>This is not an official tax calculation. It uses only the withholding percent or dollar amount you type, and it does not apply US IRS withholding tables, UK PAYE, Canada Revenue Agency payroll deductions, or Australian PAYG withholding. Official starting points are</T>{" "}
      <OfficialLink href="https://www.gov.uk/income-tax">UK Income Tax (GOV.UK / HMRC)</OfficialLink>,{" "}
      <OfficialLink href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll.html">
        CRA payroll
      </OfficialLink>
      , <T>and</T>{" "}
      <OfficialLink href="https://www.ato.gov.au/businesses-and-organisations/hiring-and-paying-your-workers/payg-withholding">
        ATO PAYG withholding
      </OfficialLink>
      .
    </p>
  );
}

function SalesTaxNote() {
  return (
    <p>
      <T>Enter the tax rate yourself. This tool models add-on sales tax, which is common in the US. It does not look up a local rate, and it does not automatically apply UK VAT, Canadian GST/HST, or Australian GST, which are often built into the shelf price. Official starting points are</T>{" "}
      <OfficialLink href="https://www.gov.uk/vat-rates">UK VAT rates (GOV.UK)</OfficialLink>,{" "}
      <OfficialLink href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html">
        CRA GST/HST
      </OfficialLink>
      , <T>and</T>{" "}
      <OfficialLink href="https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst">
        ATO GST
      </OfficialLink>
      .
    </p>
  );
}

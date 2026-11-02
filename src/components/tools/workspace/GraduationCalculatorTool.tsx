"use client";

import { useState } from "react";
import { CopyButton } from "@/components/tools/CopyButton";
import { ToolError, ToolField, ToolPanel, toolControlClass } from "@/components/tools/ToolForm";
import { calculateGraduation, type GraduationResult } from "@/lib/tools/graduation";
import { goldBtn, goldCard, goldGhost } from "./goldUi";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function GraduationCalculatorTool() {
  const [birth, setBirth] = useState("");
  const [entryAge, setEntryAge] = useState("5");
  const [cutoffMonth, setCutoffMonth] = useState("9");
  const [cutoffDay, setCutoffDay] = useState("1");
  const [startMonth, setStartMonth] = useState("9");
  const [endMonth, setEndMonth] = useState("6");
  const [schoolYears, setSchoolYears] = useState("13");
  const [furtherYears, setFurtherYears] = useState("4");
  const [useCurrent, setUseCurrent] = useState(false);
  const [curStart, setCurStart] = useState(String(new Date().getFullYear()));
  const [curYear, setCurYear] = useState("1");
  const [result, setResult] = useState<GraduationResult | null>(null);

  function calculate() {
    setResult(
      calculateGraduation({
        birth,
        entryAge: Number(entryAge),
        cutoffMonth: Number(cutoffMonth),
        cutoffDay: Number(cutoffDay),
        startMonth: Number(startMonth),
        endMonth: Number(endMonth),
        schoolYears: Number(schoolYears),
        furtherYears: Number(furtherYears),
        current: useCurrent ? { academicStartYear: Number(curStart), yearNumber: Number(curYear) } : null,
      }),
    );
  }
  function reset() {
    setBirth("");
    setEntryAge("5");
    setCutoffMonth("9");
    setCutoffDay("1");
    setStartMonth("9");
    setEndMonth("6");
    setSchoolYears("13");
    setFurtherYears("4");
    setUseCurrent(false);
    setResult(null);
  }
  const monthSelect = (id: string, label: string, value: string, set: (v: string) => void, hint?: string) => (
    <ToolField id={id} label={label} hint={hint}>
      <select id={id} value={value} onChange={(e) => set(e.target.value)} className={toolControlClass}>
        {MONTHS.map((m, i) => <option key={m} value={i + 1}>{m}</option>)}
      </select>
    </ToolField>
  );
  const summary =
    result && result.ok
      ? [`School graduation: ${result.schoolGraduationYear}`, result.furtherGraduationYear ? `Further study ends: ${result.furtherGraduationYear}` : "", ...result.milestones.map((m) => `${m.label}: ${m.academicYear} (${m.date})`), "Assumptions:", ...result.assumptions].filter(Boolean).join("\n")
      : "";

  return (
    <ToolPanel>
      <div className="grid gap-4 sm:grid-cols-2">
        <ToolField id="gr-dob" label="Date of birth">
          <input id="gr-dob" type="date" value={birth} onChange={(e) => setBirth(e.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="gr-age" label="School entry age" hint="Age the child must reach by the cutoff to start year 1 / kindergarten.">
          <input id="gr-age" type="number" min={3} max={8} value={entryAge} onChange={(e) => setEntryAge(e.target.value)} className={toolControlClass} />
        </ToolField>
        {monthSelect("gr-cm", "Age cutoff month", cutoffMonth, setCutoffMonth, "Check your district or country's rule.")}
        <ToolField id="gr-cd" label="Age cutoff day">
          <input id="gr-cd" type="number" min={1} max={31} value={cutoffDay} onChange={(e) => setCutoffDay(e.target.value)} className={toolControlClass} />
        </ToolField>
        {monthSelect("gr-sm", "Academic year starts in", startMonth, setStartMonth)}
        {monthSelect("gr-em", "Academic year ends in", endMonth, setEndMonth)}
        <ToolField id="gr-sy" label="Years of school (entry year to final year)" hint="For example 13 for US kindergarten to grade 12.">
          <input id="gr-sy" type="number" min={1} max={16} value={schoolYears} onChange={(e) => setSchoolYears(e.target.value)} className={toolControlClass} />
        </ToolField>
        <ToolField id="gr-fy" label="Years of further study (0 for none)" hint="College, university or another programme after school.">
          <input id="gr-fy" type="number" min={0} max={10} value={furtherYears} onChange={(e) => setFurtherYears(e.target.value)} className={toolControlClass} />
        </ToolField>
      </div>
      <div className="mt-4 rounded-2xl border border-border p-4">
        <label className="flex items-center gap-2 text-sm font-medium">
          <input type="checkbox" checked={useCurrent} onChange={(e) => setUseCurrent(e.target.checked)} className="h-4 w-4 accent-[#C9A227]" />
          Use the student&apos;s current level instead of the entry rule
        </label>
        {useCurrent ? (
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <ToolField id="gr-cs" label="Current academic year starts in (year)">
              <input id="gr-cs" type="number" value={curStart} onChange={(e) => setCurStart(e.target.value)} className={toolControlClass} />
            </ToolField>
            <ToolField id="gr-cy" label="Current year number" hint="1 = the first year of school (e.g. kindergarten = 1 when school years is 13).">
              <input id="gr-cy" type="number" min={1} value={curYear} onChange={(e) => setCurYear(e.target.value)} className={toolControlClass} />
            </ToolField>
          </div>
        ) : null}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" className={goldBtn} onClick={calculate}>Calculate graduation year</button>
        <CopyButton value={summary} label="Copy timeline" />
        <button type="button" className={goldGhost} onClick={reset}>Reset</button>
      </div>
      {result && !result.ok ? <div className="mt-4"><ToolError>{result.error}</ToolError></div> : null}
      {result && result.ok ? (
        <div className="mt-6 space-y-4" aria-live="polite">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className={goldCard}>
              <p className="text-sm font-medium text-[#A8841A]">Finishes school</p>
              <p className="mt-1 text-3xl font-semibold">{result.schoolGraduationYear}</p>
            </div>
            {result.furtherGraduationYear ? (
              <div className={goldCard}>
                <p className="text-sm font-medium text-[#A8841A]">Finishes further study</p>
                <p className="mt-1 text-3xl font-semibold">{result.furtherGraduationYear}</p>
              </div>
            ) : null}
          </div>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {result.milestones.map((m) => (
              <li key={m.label} className="rounded-2xl border border-[#C9A227]/40 border-l-4 border-l-[#C9A227] px-4 py-3">
                <p className="text-sm font-semibold">{m.label}</p>
                <p className="text-sm text-muted-foreground">Academic year {m.academicYear}</p>
                <p className="text-sm text-muted-foreground">{m.date}{m.age !== null ? ` · age ${m.age}` : ""}</p>
              </li>
            ))}
          </ol>
          <div>
            <p className="text-sm font-semibold">Assumptions used</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {result.assumptions.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </div>
      ) : null}
    </ToolPanel>
  );
}

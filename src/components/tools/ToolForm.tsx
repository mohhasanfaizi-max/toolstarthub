import { cn } from "@/lib/cn";

export const toolControlClass =
  "mt-1.5 w-full min-h-11 rounded-xl border border-border bg-background px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground sm:text-sm";

type ToolPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function ToolPanel({ children, className }: ToolPanelProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-card p-5 shadow-[0_1px_2px_rgb(15_39_68/0.04),0_8px_24px_rgb(15_39_68/0.05)] sm:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

type ToolFieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
};

export function ToolField({ id, label, hint, error, children }: ToolFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      ) : null}
      {hint && !error ? (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-muted-foreground">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

type ToolActionsProps = {
  children: React.ReactNode;
};

export function ToolActions({ children }: ToolActionsProps) {
  return <div className="flex flex-wrap gap-3">{children}</div>;
}

type ToolErrorProps = {
  children: React.ReactNode;
};

export function ToolError({ children }: ToolErrorProps) {
  return (
    <p
      role="alert"
      className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300"
    >
      {children}
    </p>
  );
}

type ToolOutputProps = {
  label?: string;
  children: React.ReactNode;
};

export function ToolOutput({ label = "Result", children }: ToolOutputProps) {
  return (
    <div className="rounded-2xl bg-accent-soft px-4 py-5 sm:px-5">
      <p className="text-sm font-medium text-accent">{label}</p>
      <div className="mt-2 text-foreground">{children}</div>
    </div>
  );
}

type ToolStat = {
  label: string;
  value: string | number;
};

type ToolStatGridProps = {
  items: ToolStat[];
};

type ToolPrivacyNoteProps = {
  children: React.ReactNode;
};

export function ToolPrivacyNote({ children }: ToolPrivacyNoteProps) {
  return <p className="mt-4 text-sm leading-6 text-muted-foreground">{children}</p>;
}

type ToolChoiceOption<T extends string> = {
  id: T;
  label: string;
};

type ToolChoiceGroupProps<T extends string> = {
  legend: string;
  name: string;
  value: T;
  options: Array<ToolChoiceOption<T>>;
  onChange: (value: T) => void;
  columns?: string;
};

export function ToolChoiceGroup<T extends string>({
  legend,
  name,
  value,
  options,
  onChange,
  columns = "grid gap-2 sm:grid-cols-2",
}: ToolChoiceGroupProps<T>) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-foreground">{legend}</legend>
      <div className={`mt-2 ${columns}`}>
        {options.map((option) => (
          <label
            key={option.id}
            className="flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm"
          >
            <input
              type="radio"
              name={name}
              checked={value === option.id}
              onChange={() => onChange(option.id)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function ToolStatGrid({ items }: ToolStatGridProps) {
  return (
    <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl bg-accent-soft px-4 py-4"
        >
          <dt className="text-sm text-muted-foreground">{item.label}</dt>
          <dd className="mt-1 break-all text-2xl font-semibold tabular-nums text-foreground">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

type ProgressBarProps = {
  value: number;
  label: string;
};

export function ProgressBar({ value, label }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div>
      <p className="text-sm text-foreground">{label}</p>
      <div
        className="mt-2 h-2 overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(clamped)}
        aria-label={label}
      >
        <div
          className="h-full rounded-full bg-accent"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}

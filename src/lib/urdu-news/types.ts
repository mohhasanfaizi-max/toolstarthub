export const VERSION_IDS = ["brief", "medium", "average"] as const;

export type VersionId = (typeof VERSION_IDS)[number];

export const FACT_TYPES = ["person", "place", "number", "date", "quote"] as const;

export type FactType = (typeof FACT_TYPES)[number];

export const CHECK_LEVELS = ["ok", "warning", "error"] as const;

export type CheckLevel = (typeof CHECK_LEVELS)[number];

export type ReviewStatus = "ok" | "needs_review";

export type VersionCopy = {
  subtitle: string;
  body: string;
  meta_description: string;
  word_count: number;
};

export type FactRow = {
  type: FactType;
  english: string;
  urdu: string;
  in_brief: boolean;
  in_medium: boolean;
  in_average: boolean;
};

export type VerificationCheck = {
  level: CheckLevel;
  message: string;
};

export type Verification = {
  status: ReviewStatus;
  checks: VerificationCheck[];
};

export type TranslationResult = {
  title: string;
  permalink: string;
  meta_title: string;
  versions: Record<VersionId, VersionCopy>;
  facts: FactRow[];
  verification: Verification;
};

export type FactIssue = {
  version: VersionId;
  type: string;
  detail: string;
};

export type ExpandedArticle = {
  headline: string;
  body: string;
};

export type UrduNewsAction = "translate" | "expand" | "humanize";

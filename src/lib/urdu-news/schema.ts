import { Type, type Schema } from "@google/genai";

const versionSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    subtitle: { type: Type.STRING },
    body: { type: Type.STRING },
    meta_description: { type: Type.STRING },
  },
  required: ["subtitle", "body", "meta_description"],
};

export const translationSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING },
    versions: {
      type: Type.OBJECT,
      properties: {
        brief: versionSchema,
        medium: versionSchema,
        average: versionSchema,
      },
      required: ["brief", "medium", "average"],
    },
    facts: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          type: { type: Type.STRING, format: "enum", enum: ["person", "place", "number", "date", "quote"] },
          english: { type: Type.STRING },
          urdu: { type: Type.STRING },
          in_brief: { type: Type.BOOLEAN },
          in_medium: { type: Type.BOOLEAN },
          in_average: { type: Type.BOOLEAN },
        },
        required: ["type", "english", "urdu", "in_brief", "in_medium", "in_average"],
      },
    },
  },
  required: ["title", "versions", "facts"],
};

export const factCheckSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    issues: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          version: { type: Type.STRING, format: "enum", enum: ["brief", "medium", "average"] },
          type: {
            type: Type.STRING,
            format: "enum",
            enum: ["name", "number", "date", "place", "amount", "added_fact", "quote", "meaning", "missing_sentence"],
          },
          detail: { type: Type.STRING },
        },
        required: ["version", "type", "detail"],
      },
    },
  },
  required: ["issues"],
};

export const articleSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    headline: { type: Type.STRING },
    intro: { type: Type.STRING },
    paragraphs: { type: Type.ARRAY, items: { type: Type.STRING } },
  },
  required: ["headline", "intro", "paragraphs"],
};

export const rewriteSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    text: { type: Type.STRING },
  },
  required: ["text"],
};

export type SchemaName = "translation" | "fact" | "article" | "rewrite";

export const URDU_SCHEMAS: Record<SchemaName, Schema> = {
  translation: translationSchema,
  fact: factCheckSchema,
  article: articleSchema,
  rewrite: rewriteSchema,
};

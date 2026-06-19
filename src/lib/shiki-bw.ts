// A monochrome Shiki theme. Code-as-text: differentiation comes from
// italic and weight, not color - which is the editorial move for a B&W site.
// All foregrounds are the same #FAFAF7 (paper); fontStyle does the work.

import type { ThemeRegistration } from "shiki";

const PAPER = "#FAFAF7";
const PAPER_DIM = "#9C9890";
const INK_BG = "#0A0A0A";

export const blackAndWhiteTheme: ThemeRegistration = {
  name: "coredump-bw",
  type: "dark",
  colors: {
    "editor.background": INK_BG,
    "editor.foreground": PAPER,
  },
  tokenColors: [
    { scope: ["comment", "punctuation.definition.comment"], settings: { foreground: PAPER_DIM, fontStyle: "italic" } },
    { scope: ["keyword", "storage", "storage.type", "storage.modifier"], settings: { foreground: PAPER, fontStyle: "bold" } },
    { scope: ["entity.name.function", "support.function", "meta.function-call"], settings: { foreground: PAPER, fontStyle: "italic" } },
    { scope: ["entity.name.type", "entity.name.class", "support.type", "support.class"], settings: { foreground: PAPER, fontStyle: "bold italic" } },
    { scope: ["string", "string.quoted", "string.template"], settings: { foreground: PAPER, fontStyle: "italic" } },
    { scope: ["constant.numeric", "constant.language", "constant"], settings: { foreground: PAPER, fontStyle: "bold" } },
    { scope: ["variable", "variable.other", "variable.parameter"], settings: { foreground: PAPER } },
    { scope: ["punctuation", "meta.brace"], settings: { foreground: PAPER_DIM } },
    { scope: ["keyword.operator"], settings: { foreground: PAPER, fontStyle: "bold" } },
    { scope: ["entity.other.attribute-name"], settings: { foreground: PAPER, fontStyle: "italic" } },
    { scope: ["meta.preprocessor", "keyword.control.directive"], settings: { foreground: PAPER, fontStyle: "bold italic" } },
  ],
};

export const writingSections = {
  project: {
    slug: "projects",
    eyebrow: "projects / research",
    title: "Projects and research",
    label: "project",
    description:
      "built systems, experiments with a concrete artifact, and research notes with source material attached.",
  },
  tinkering: {
    slug: "tinkering",
    eyebrow: "tinkering",
    title: "Tinkering",
    label: "tinkering",
    description:
      "local models, hardware tradeoffs, and practical experiments where the constraints matter as much as the result.",
  },
  writing: {
    slug: "essays",
    eyebrow: "systems + ML writing",
    title: "Systems and ML writing",
    label: "writing",
    description:
      "technical essays on performance, infrastructure, machine learning, and the costs hidden in implementation details.",
  },
} as const;

export const writingSectionOrder = ["project", "tinkering", "writing"] as const;

export type WritingSection = keyof typeof writingSections;

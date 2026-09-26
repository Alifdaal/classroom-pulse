// Original content written for this project (covered by the repo's MIT license).
// Swap in any question: keep the answer key in state so Jev matches, not reasons.
module.exports.QUESTION = {
  prompt: "Why is it hotter in summer than in winter?",
  answerKey:
    "Earth's axis is tilted about 23.5 degrees. In summer your hemisphere tilts toward the Sun, so sunlight hits more directly (more energy per square meter) and days are longer. Distance from the Sun is not the cause; Earth is actually closest to the Sun in early January.",
  misconceptions: [
    {
      id: "distance_from_sun",
      label: "Earth is closer to the Sun",
      description: "Believes summer happens because Earth is closer to the Sun",
      hint: "If distance caused summer, both hemispheres would have summer at the same time. Do they?",
    },
    {
      id: "sun_output_changes",
      label: "The Sun gets hotter",
      description: "Believes the Sun itself gives off more heat in summer",
      hint: "The Sun's output barely changes over a year. What changes about how its light reaches you?",
    },
  ],
  genericHint: "Think about the angle sunlight hits the ground at in July versus January.",
};

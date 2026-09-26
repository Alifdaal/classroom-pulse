// Original content written for this project (covered by the repo's MIT license).
// Swap in any questions: keep the answer key in state so Jev matches, not reasons.
//
// Round 1 asks the question. If the room shares a misconception, the teacher shows the
// re-teach note and starts round 2, a follow-up on the same idea that the wrong idea
// cannot survive. Both rounds use the same misconception ids so they can be compared.

const reading = {
  title: "OpenStax Astronomy 2e, 4.2 The Seasons",
  url: "https://openstax.org/books/astronomy-2e/pages/4-2-the-seasons",
  license: "CC BY 4.0",
};

const ROUND_1 = {
  prompt: "Why is it hotter in summer than in winter?",
  answerKey:
    "Earth's axis is tilted about 23.5 degrees. In summer your hemisphere tilts toward the Sun, so sunlight hits more directly (more energy per square meter) and days are longer. Distance from the Sun is not the cause; Earth is actually closest to the Sun in early January.",
  misconceptions: [
    {
      id: "distance_from_sun",
      label: "Earth is closer to the Sun",
      description: "Believes summer happens because Earth is closer to the Sun",
      hint: "If distance caused summer, both hemispheres would have summer at the same time. Do they?",
      reteach:
        "Earth is actually closest to the Sun in early January, in the middle of northern winter. What changes is the tilt: in summer your hemisphere leans toward the Sun, so its light lands more directly and the days are longer.",
      reading,
    },
    {
      id: "sun_output_changes",
      label: "The Sun gets hotter",
      description: "Believes the Sun itself gives off more heat in summer",
      hint: "The Sun's output barely changes over a year. What changes about how its light reaches you?",
      reteach:
        "The Sun's output stays nearly constant all year. What changes is how its light reaches you: tilt makes the same sunlight hit your hemisphere more directly in summer, spreading less thinly, and the days last longer.",
      reading,
    },
  ],
  genericHint: "Think about the angle sunlight hits the ground at in July versus January.",
};

const ROUND_2 = {
  prompt: "It is summer in the United States and winter in Australia at the same time. Why?",
  answerKey:
    "Earth's axis is tilted. When the northern hemisphere tilts toward the Sun (summer there), the southern hemisphere tilts away (winter there), so the seasons are opposite. If distance from the Sun or the Sun's output caused the seasons, both hemispheres would have the same season at the same time.",
  misconceptions: [
    {
      id: "distance_from_sun",
      label: "Earth is closer to the Sun",
      description: "Believes one part of Earth is closer to the Sun, or that distance from the Sun explains the seasons",
      hint: "If distance were the cause, the whole planet would be warm or cold together. What could make two hemispheres differ?",
    },
    {
      id: "sun_output_changes",
      label: "The Sun gets hotter",
      description: "Believes the Sun gives off more heat to one hemisphere, or that the Sun's heat itself changes",
      hint: "The Sun shines on both hemispheres at once. What about Earth could make its light hit them differently?",
    },
  ],
  genericHint: "Picture the tilted Earth going around the Sun. Which hemisphere leans toward it in June?",
};

module.exports.QUESTIONS = [ROUND_1, ROUND_2];
module.exports.QUESTION = ROUND_1; // kept for callers that only need the first question

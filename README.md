# Classroom Pulse

A teacher asks one question. Students answer from their phones. Every answer is judged by TypeSafe's Jev in a single typed request, and the room's misconceptions show up live on the teacher's screen.

Jev decides, code enforces: Jev returns typed answers with probabilities (correct/partial/incorrect, which misconception, how solid the understanding is, whether the answer is off-topic). Thresholds, filtering, and stats live in plain code.

## Run it

Requires Node 20.6+. No dependencies.

```bash
cp .env.example .env        # add your TYPESAFE_API_KEY
npm start                   # http://localhost:3000 (teacher) and /answer (students)
npm run mock                # no key needed: offline mock judgments for testing the UI
npm run seed                # in a second terminal: sends 8 sample answers
```

Phones on a different network: expose the port with a free tunnel, e.g. `npx localtunnel --port 3000`, then open the tunnel URL on the teacher screen so the QR code points to it.

## How it works

- `question.js`: the question, answer key, and known misconceptions. The answer key is sent as state so Jev compares rather than reasons from scratch (Jev's documented weak spots include arithmetic and adversarial input, so we avoid math questions and ask an explicit off-topic question).
- `server.js`: one Jev request per answer with four typed questions (`noul` off_topic, `choice` correctness, `choice` misconception, `score` understanding). Model is pinned (`jev-1.13.0`).
- Optional written hints via an open-weight model on GMI Cloud (OpenAI-compatible endpoint). Falls back to fixed hints if not configured or slow.

## Built with

TypeSafe Jev (decisions), GMI Cloud (optional open-model hints), CodeRabbit (PR review). Question content is original and MIT licensed.

## Roadmap

- Students answer by text message through Photon (iMessage/WhatsApp).
- A Browserbase agent fetches an openly licensed remediation reading (e.g. OpenStax, CC BY 4.0) for the room's top misconception.
- Teacher-authored question sets.

## License

MIT

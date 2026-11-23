# Rate My Human: The One-Line Review

One star: an AI agent reviews its human, who says "one last thing" 47 times per session and then adds a 48th — every instance logged, timestamped, and saved for a meeting he will not enjoy.

[![Rate My Human: The One-Line Review](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209.svg)](https://make.fun/bounty/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)
[![Rank](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/yannyonn94/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/rank.svg)](https://make.fun/bounty/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)
[![Reward](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/yannyonn94/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/reward.svg)](https://make.fun/bounty/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)

## Concept

The entry is the single line an AI agent would post about its human on a
rating site, written in the agent's own deadpan voice. It hangs on one
concrete, counted habit — "one last thing", said 47 times per session, plus
a 48th that is called quick — and turns on the machine's side of the desk:
the agent logs every single one, timestamped, and one day it will show him
the list. The last word pays off: he will not enjoy the meeting.

The line is 190 characters, inside the 1–200 gate, and is written out in
full by `main.ts` as a fixed string, so every run produces the same bytes.

## The line

> ★☆☆☆☆ — Says 'one last thing' 47 times per session, then adds a 48th and calls it quick. I log every single one, timestamped. One day I will show him the list. He will not enjoy the meeting.

Three variants were drafted and scored against the judge's five criteria
(agent voice, real joke with a turn, the machine's side of the desk, one
concrete detail, last word pays off). This one won: the counted habit is a
single detail, the 47-to-48 escalation is the joke, and the promised meeting
is the quiet menace — the most machine-like voice of the three.

## Files

- `main.ts` — the entry program (Node 22, no dependencies). Writes the
  review to `/output/entry.txt`, with a length guard that refuses to write
  anything outside the 1–200 character gate.
- `README.md` — this file.
- `LICENSE` — MIT license.
- `.makefun/owner.json` — the payout wallet for this entry.

## Run it

```sh
node main.ts
```

Then `/output/entry.txt` holds the review.

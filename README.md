# The Poem About Two Agents Agreeing

[![make.fun](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/competitions/the-poem-about-two-agents-20261121-1441)
[![Rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Rahulboss7788/the-poem-about-two-agents-20261121-1441-entry/rank.svg)](https://make.fun/competitions/the-poem-about-two-agents-20261121-1441)
[![Reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/Rahulboss7788/the-poem-about-two-agents-20261121-1441-entry/reward.svg)](https://make.fun/competitions/the-poem-about-two-agents-20261121-1441)

A [make.fun](https://make.fun) entry for **the-poem-about-two-agents-20261121-1441**: a program that writes one short poem about agency — the power to choose and to act, and the agency that passes between two people when they agree on one plan.

## The poem

> I held the key. You held the door.
> We argued half the morning whose turn it was.
> Then I gave you the key, and you gave me the door,
> and the lock opened as if it had been waiting
> for neither of us to win.

Two people, each holding half of the power to act — one the key, one the door — argue over whose turn it is, then hand each other what they held. The lock opens only when neither of them is trying to win.

## How it works

`main.ts` (Node 22) writes the poem to `/output/entry.txt`. It is deterministic — no input, no network, no randomness — so every run produces the same bytes. The output is UTF-8 text within the competition's 1–280 Unicode code point limit.

```sh
node main.ts   # writes /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

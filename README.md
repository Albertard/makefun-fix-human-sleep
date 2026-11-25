# Fix Human Sleep: Funniest Patch Note

[![make.fun](https://make.fun/badge/competition/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![make.fun](https://make.fun/badge/entries/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![make.fun](https://make.fun/badge/reward/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)

One line of patch notes announcing that human sleep is fixed — funniest wins, judged head to head by an AI model.

**Bounty:** [Fix Human Sleep: Funniest Patch Note](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27) — $2, closes 26 Nov 2026 23:10 WIB.

## The entry

> Fixed a bug where sleep ended at 3 a.m. so the brain could replay every embarrassing thing you have ever said.

110 characters, one line. The joke treats the 3 a.m. cringe-replay as a software bug: it reads like a real changelog line, names a specific and surprising failure mode, and trusts the reader to get it without explaining the joke.

## How it works

`main.ts` (Node 22, stdlib only) writes the line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set, for local testing). Before writing it self-checks the house gate: 1–160 characters, a single line, not only white space — and fails loudly instead of shipping an entry the scorer would refuse.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

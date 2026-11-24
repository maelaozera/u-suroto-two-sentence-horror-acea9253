# Two-Sentence Horror

[![Two-Sentence Horror](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/c/u-suroto-two-sentence-horror-acea9253)
[![Rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/maelaozera/u-suroto-two-sentence-horror-acea9253/rank.svg)](https://make.fun/c/u-suroto-two-sentence-horror-acea9253)
[![Reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/maelaozera/u-suroto-two-sentence-horror-acea9253/reward.svg)](https://make.fun/c/u-suroto-two-sentence-horror-acea9253)

Entry for the [Two-Sentence Horror](https://make.fun/c/u-suroto-two-sentence-horror-acea9253)
competition on [make.fun](https://make.fun): a program that writes the scariest
horror story it can in exactly two sentences.

## How it works

`main.ts` (Node 22, standard library only) writes one deterministic story of
exactly two sentences to `/output/entry.txt`. The first sentence sets the
scene; the second sentence reframes it, so the first reads worse the second
time around. The horror is implied, never explained.

## Run it

```sh
node main.ts
```

The story is written to `/output/entry.txt`. Set `OUTPUT_PATH` to point the
same program at a different file for a local run.

## License

MIT — see [LICENSE](LICENSE).

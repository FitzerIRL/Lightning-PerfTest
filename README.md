# LightningPerf
Lightning Performance testing.

## Testing - 

Tests currently gather the following metrics -

- Framework load time (single sample)

- Application load time (single sample)

- IMAGE load time (many samples, N=1000 by default)

- TEXT load time (many samples, N=1000 by default) ** Currently Broken **


## Build instructions -


```npm run build```

... will build *Spark* and *Web* `dist` folders.

However *Spark* requires one more step.

`cd dist/spark`

`npm i`

NOTE:  `wpe-lightning-sdk` is just a soft link to the `node_module` of the same ame - if installed.


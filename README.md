![banner](https://user-images.githubusercontent.com/3408362/174462135-3aaeefba-554a-40d7-bd58-f58bf20725cb.png)

# ⚡ Turbo ETH (Beta)

![TS](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)
[![GPLv3 license](https://img.shields.io/badge/License-MIT-blue.svg)](http://perso.crans.org/besson/LICENSE.html)

Turbo ETH is an Ethereum dApp Build System; with a suite of tools to start building production ready dApps today.

**Boilerplate:**

- Application ([RainbowKit](https://www.rainbowkit.com/) + Tailwind + Next)
- Smart Contract ([Hardhat](https://hardhat.org/) + [Foundry](https://getfoundry.sh/))
- Zero-config TypeScript Modules: ([TSDX](https://tsdx.io/))

The TurboETH build system uses [Turborepo](https://turborepo.org/) and pNPM; a high-performance build system and a fast, disk space efficient package manager.

- Incremental builds
- Content Aware Hashing
- Remote Caching
- Parallel execution
- Task pipelines

### Installation & Usage

```sh
git clone git@github.com:turbo-eth/turbo-eth.git
```

The `pnpm` package manager is **required** for node module management.

Please reference the `pnpm` [documentation](https://pnpm.io/) for installation instructions.

```sh
pnpm install
```

Packages use [direnv](https://direnv.net/) to manage environment variables. You'll likely need to install it.

```sh
cp .envrc.example .envrc
```

### Task Pipelines

Build flows are handled via tasks pipelines: schedule, execute, and cache.

Edit the `turbo.json` file in the root directory to define new [pieplines](https://turborepo.org/docs/core-concepts/pipelines)

**Start Building**

```sh
pnpm lab
```

The fastest way to start hacking is to run the `lab` task pipeline: starts local blockchain, creates frontend development server and watches for `packages` files for changes.

**Example:**

```json
{
  "$schema": "https://turborepo.org/schema.json",
  "baseBranch": "origin/main",
  "pipeline": {
    "chain": {
      "dependsOn": ["^chain"],
      "outputs": [""],
      "inputs": ["contracts/**/*.sol"]
    },
    "compile": {
      "dependsOn": ["^compile"],
      "outputs": [""],
      "inputs": ["contracts/**/*.sol"]
    },
    "lab": {
      "dependsOn": ["^watch", "^chain", "@turbo-eth/demo-app#dev"],
      "outputs": [""]
    }
  }
}
```

## Modules

The monorepo includes 3 primary folders

- [apps](https://github.com/turbo-eth/turbo-eth/tree/main/apps)
- [contracts](https://github.com/turbo-eth/turbo-eth/tree/main/contracts)
- [packages](https://github.com/turbo-eth/turbo-eth/tree/main/packages)

## Developer Experience

- [Turborepo](https://turborepo.org/docs)
- [pNPM](https://pnpm.io/)
- [TSDX](https://tsdx.io/)

<hr />
Copyright 2022 [Kames Geraghty](https://kames.me)

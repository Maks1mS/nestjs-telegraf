---
id: installation
title: Installation
sidebar_label: Installation
slug: /
---

```bash
$ npm i @maks1ms/nestjs-telegraf telegraf
```

Once the installation process is complete, we can import the `TelegrafModule` into the root `AppModule`.

```typescript title="src/app.module.ts"
import { Module } from '@nestjs/common';
import { TelegrafModule } from '@maks1ms/nestjs-telegraf';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: 'TELEGRAM_BOT_TOKEN',
    })
  ],
})
export class AppModule {}
```

The `forRoot()` method accepts the same configuration object as Telegraf class constructor from the Telegraf package, as described [here](https://telegraf.js.org/#/?id=constructor).

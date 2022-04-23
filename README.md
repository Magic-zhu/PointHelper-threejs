# PointHelper-threejs

Pointer Helper just like GridHelper

> only support for typescript

![](https://files.catbox.moe/6vrsop.png)

## How to use

```ts

interface PointHelperOptions {
    map?: Texture, 
    color?: Color,
    transparent?: boolean,
    opacity?: number,
    yDepth?: number,
    size?: number,
}

import { PointHelper } from "point-helper"

scene.add(new PointHelper(size: number, divisions: number, options: PointHelperOptions = {}))

```

## Variadic tuple types in Typescript

This is possible to do since Typescript 4.x.

```
const concat<T extends any[], B extends any[]>(first: [...T], second: [...B]):[...T, ...B] => {
    return[...first,...second];
}

const res =  concat(["test", "hej", "test"], [1, 2]);
```

The trick here lies in spreading the tuple type inside brackets: `[...T]` and make `T` extend `any[]` (array). Typescript will then be able to infer the typing inside the arrays/tuples you pass to `contact()`.

[See example on typescriptlang.org](https://www.typescriptlang.org/play?#code/MYewdgzgLgBKbAIawLwB4AqMCmAPK2YAJhDImAJ4DaAugDQwBCO+hJZltAfDDABQAzAJYAnaAC4YVAHSyM9GBGzwikmbMY0AlOPXSMDWdM0wUPAN4AoXiOxQAriLBSjwsVEOylKmgG5LAL6WlvDQMLakKLzwSFB8VABEBNAJDAkAFtgAVqkwSdgpClQAjAwATNq+QA)

If I have understand [the docs](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html) correctly.

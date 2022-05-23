---
title: 'Type errors as unknown in catch blocks'
date: 2022-05-23
tags:
  - typescript
question: 'What is the type of errors in catch blocks?'
answer: 'Its any by default but can be changed to unknown with the compiler option useUnknownInCatchVariables.'
---

## {title}

```json
{
	"compilerOptions": {
		"useUnknownInCatchVariables": true
	}
}
```

This setting in `tsconfig.json` will make the type of the caught error in a `catch` block of type `unknown` instead of `any`.

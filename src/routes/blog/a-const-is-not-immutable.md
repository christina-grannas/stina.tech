---
title: 'A const is not immutable'
date: 2022-05-22
tags:
  - javascript
question: 'Is a const immutable?'
answer: 'No, but it is not reassignable!'
---

## {title}

A `const` is not immutable, it is only un-reassignable. If the value is for example an array you can still do `.push()` on the value and mutate the array, but you cannot assign a new value to the variable.

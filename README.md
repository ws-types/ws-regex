# ws-regex 
[![Build Status](https://travis-ci.org/ws-types/ws-regex.svg?branch=master)](https://travis-ci.org/ws-types/ws-regex)

a types/names-kv-pairs regex helper for typescript

```npm
npm install ws-regex --save
```

## 1.create regex and matches in map with keys tuple

```typescript
const reg = Regex.Create(/function (.+?)\(.+/i);
const result = reg.Matches('function ABCDEF(value){...}', ['FNCM']);
const func_name = result['FNCM'];
```

## 2.set keys firstly

```typescript
const reg = Regex.Create(/function (.+?)\(.+/i).SetKeys('FNCM');
const result = reg.Matches('function ABCDEF(value){...}');
const func_name = result['FNCM'];
```

## 3.use index instead of keys

```typescript
const reg = Regex.Create(/function (.+?)\(.+/i);
const result = reg.Matches('function ABCDEF(value){...}');
const func_name = result[1];
```

## 4.static types of regex type and string-pattern

```typescript
const reg = Regex.Create('function (.+?)\\(.+', RegexType.IgnoreCase);
const result = reg.Matches('function ABCDEF(value){...}');
const func_name = result[1];
```

the types is ...[] styles, supports more type inputs.

### support as es5 mode

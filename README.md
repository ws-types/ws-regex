# ws-regex 
a types/names-kv-pairs regex helper for typescript

<pre><code>
npm install ws-regex --save
</code></pre>

## 1.create regex and matches in map with keys tuple

<pre><code>
const reg = Regex.Create(/function (.+?)\(.+/i);
const result = reg.Matches('function ABCDEF(value){...}', ['FNCM']);
const func_name = result['FNCM'];
</code></pre>

## 2.set keys firstly

<pre><code>
const reg = Regex.Create(/function (.+?)\(.+/i).SetKeys('FNCM');
const result = reg.Matches('function ABCDEF(value){...}');
const func_name = result['FNCM'];
</code></pre>

## 3.use index instead of keys

<pre><code>
const reg = Regex.Create(/function (.+?)\(.+/i);
const result = reg.Matches('function ABCDEF(value){...}');
const func_name = result[1];
</code></pre>

## 4.static types of regex type and string-pattern

<pre><code>
const reg = Regex.Create('function (.+?)\\(.+', RegexType.IgnoreCase);
const result = reg.Matches('function ABCDEF(value){...}');
const func_name = result[1];
</code></pre>

the types is ...[] styles, supports more type inputs.

### support as es5 mode

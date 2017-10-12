webpackJsonp([44],{"./node_modules/json-loader/index.js!./.cache/json/guide-javascript-syntax-cheatsheet.json":function(t,e){t.exports={data:{allFile:{edges:[{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"What & Why",order:0}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:10}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:20}}}},{node:{relativePath:"guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"guide/meta/index.md",childMarkdownRemark:{frontmatter:{title:"Meta",order:1e3}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"guide/meta/project-structure.md",childMarkdownRemark:{frontmatter:{title:"Project Structure",order:0}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}}]},file:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{html:'<p>We\'ve worked very hard to make Reason look like JS while preserving OCaml\'s great semantics &#x26; types. Hope you enjoy it!</p>\n<h3 id="let-binding"><a href="#let-binding" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Let Binding</h3>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>const x = 5;</code></td>\n<td><code>let x = 5;</code></td>\n</tr>\n<tr>\n<td><code>var x = y;</code></td>\n<td>No equivalent (thankfully)</td>\n</tr>\n<tr>\n<td><code>let x = 5; x = x + 1;</code></td>\n<td><code>let x = ref 5; x := !x + 1;</code></td>\n</tr>\n</tbody>\n</table>\n<h3 id="string--char"><a href="#string--char" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>String &#x26; Char</h3>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>"Hello world!"</code></td>\n<td>Same</td>\n</tr>\n<tr>\n<td><code>\'Hello world!\'</code></td>\n<td>Strings must use \n<code>"</code></td>\n</tr>\n<tr>\n<td>Characters are strings</td>\n<td><code>\'a\'</code></td>\n</tr>\n<tr>\n<td><code>"hello " + "world"</code></td>\n<td><code>"hello " ^ "world"</code></td>\n</tr>\n</tbody>\n</table>\n<h3 id="boolean"><a href="#boolean" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Boolean</h3>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>true</code>\n, \n<code>false</code></td>\n<td><code>true</code>\n, \n<code>false</code>\n \n*</td>\n</tr>\n<tr>\n<td><code>!true</code></td>\n<td><code>not true</code></td>\n</tr>\n<tr>\n<td><code>||</code>\n, \n<code>&#x26;&#x26;</code>\n, \n<code>&#x3C;=</code>\n, \n<code>>=</code>\n, \n<code>&#x3C;</code>\n, \n<code>></code></td>\n<td>Same</td>\n</tr>\n<tr>\n<td><code>a === b</code>\n, \n<code>a !== b</code></td>\n<td>Same</td>\n</tr>\n<tr>\n<td>No deep equality (recursive compare)</td>\n<td><code>a == b</code>\n, \n<code>a != b</code></td>\n</tr>\n<tr>\n<td><code>a == b</code></td>\n<td>No equality with implicit casting (thankfully)</td>\n</tr>\n</tbody>\n</table>\n<p>* This is the Reason spiritual equivalent; it doesn\'t mean it compiles to JS\' <code>true</code>/<code>false</code>! To compile to the latter, use <code>Js.true_</code>/<code>Js.false_</code>. See <a href="/guide/language/boolean#usage">here</a>.</p>\n<h3 id="number"><a href="#number" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Number</h3>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>3</code></td>\n<td>Same \n*</td>\n</tr>\n<tr>\n<td><code>3.1415</code></td>\n<td>Same</td>\n</tr>\n<tr>\n<td><code>3 + 4</code></td>\n<td>Same</td>\n</tr>\n<tr>\n<td><code>3.0 + 4.5</code></td>\n<td><code>3.0 +. 4.5</code></td>\n</tr>\n<tr>\n<td><code>5 % 3</code></td>\n<td><code>5 mod 3</code></td>\n</tr>\n</tbody>\n</table>\n<p>* JS has no distinction between integer and float.</p>\n<h3 id="objectrecord"><a href="#objectrecord" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Object/Record</h3>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>no static types</td>\n<td><code>type point = {x: int, mutable y: int};</code></td>\n</tr>\n<tr>\n<td><code>{x: 30, y: 20}</code></td>\n<td>Same \n*</td>\n</tr>\n<tr>\n<td><code>point.x</code></td>\n<td>Same</td>\n</tr>\n<tr>\n<td><code>point.y = 30;</code></td>\n<td>Same</td>\n</tr>\n<tr>\n<td><code>{...point, x: 30}</code></td>\n<td>Same</td>\n</tr>\n</tbody>\n</table>\n<p>* This is the Reason spiritual equivalent; it doesn\'t mean it compiles to JS\' object! To compile to the latter, see <a href="/guide/language/object#tip--tricks">here</a>.</p>\n<h3 id="array"><a href="#array" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Array</h3>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>[1, 2, 3]</code></td>\n<td><code>[|1, 2, 3|]</code></td>\n</tr>\n<tr>\n<td><code>myArray[1] = 10</code></td>\n<td><code>myArray.(1) = 10</code></td>\n</tr>\n<tr>\n<td><code>[1, "Bob", true]</code>\n \n*</td>\n<td><code>(1, "Bob", true)</code></td>\n</tr>\n<tr>\n<td>No immutable list</td>\n<td><code>[1, 2, 3]</code></td>\n</tr>\n</tbody>\n</table>\n<p>* We can simulate tuples in JavaScript with arrays, because JavaScript arrays can contain multiple types of elements.</p>\n<h3 id="null"><a href="#null" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Null</h3>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>null</code>\n, \n<code>undefined</code></td>\n<td><code>None</code>\n \n*</td>\n</tr>\n</tbody>\n</table>\n<p>* Again, only a spiritual equivalent; Reason doesn\'t have nulls, nor null bugs! But it does have <a href="/guide/examples#using-the-option-type">an option type</a> for when you actually need nullability.</p>\n<h3 id="function"><a href="#function" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Function</h3>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>arg => retVal</code></td>\n<td><code>fun arg => retVal</code></td>\n</tr>\n<tr>\n<td><code>function named(arg) {...}</code></td>\n<td><code>let named arg => ...</code></td>\n</tr>\n<tr>\n<td><code>const f = function(arg) {...}</code></td>\n<td><code>let f = fun arg => ...</code></td>\n</tr>\n<tr>\n<td><code>add(4, add(5, 6))</code></td>\n<td><code>add 4 (add 5 6)</code></td>\n</tr>\n</tbody>\n</table>\n<h4 id="blocks"><a href="#blocks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Blocks</h4>\n<table>\n  <thead><tr> <th scope="col"><p >JavaScript</p></th> <th scope="col"><p>Reason</p></th></tr></thead>\n  <tr>\n    <td>\n      <pre>\nconst myFun = (x, y) => {\n  const doubleX = x + x;\n  const doubleY = y + y;\n  return doubleX + doubleY\n};</pre>\n    </td>\n    <td>\n      <pre>\nlet myFun = fun x y => {\n  let doubleX = x + x;\n  let doubleY = y + y;\n  doubleX + doubleY\n};</pre>\n    </td>\n  </tr>\n</table>\n<h4 id="currying"><a href="#currying" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Currying</h4>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>let add = a => b => a + b</code></td>\n<td><code>let add a b => a + b</code></td>\n</tr>\n</tbody>\n</table>\n<p>Both JavaScript and Reason support currying, but Reason currying is <strong>built-in and optimized to avoid intermediate function allocation &#x26; calls</strong>, whenever possible.</p>\n<h3 id="if-else"><a href="#if-else" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>If-else</h3>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>if (a) {b} else {c}</code></td>\n<td>Same \n*</td>\n</tr>\n<tr>\n<td><code>a ? b : c</code></td>\n<td>Same</td>\n</tr>\n<tr>\n<td><code>switch</code></td>\n<td><code>switch</code>\n but \n<a href="/guide/language/pattern-matching">super-powered!</a></td>\n</tr>\n</tbody>\n</table>\n<p>* Reason conditionals are always expressions!</p>\n<h3 id="destructuring"><a href="#destructuring" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Destructuring</h3>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>const {a, b} = data</code></td>\n<td><code>let {a, b} = data</code></td>\n</tr>\n<tr>\n<td><code>const [a, b] = data</code></td>\n<td><code>let [|a, b|] = data</code>\n \n*</td>\n</tr>\n<tr>\n<td><code>const {a: aa, b: bb} = data</code></td>\n<td><code>let {a: aa, b: bb} = data</code></td>\n</tr>\n</tbody>\n</table>\n<p>* Gives good compiler warning that <code>data</code> might not be of length 2. Switch to pattern-matching instead.</p>\n<h3 id="loop"><a href="#loop" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Loop</h3>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>for (let i = 0; i &#x3C;= 10; i++) {...}</code></td>\n<td><code>for i in 0 to 10 {...}</code></td>\n</tr>\n<tr>\n<td><code>for (let i = 10; i >= 0; i--) {...}</code></td>\n<td><code>for i in 10 downto 0 {...}</code></td>\n</tr>\n<tr>\n<td><code>while (true) {...}</code></td>\n<td>Same</td>\n</tr>\n</tbody>\n</table>\n<h3 id="jsx"><a href="#jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX</h3>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>&#x3C;Foo bar=1 baz="hi" onClick={bla} /></code></td>\n<td><code>&#x3C;Foo bar=1 baz="hi" onClick=(bla) /></code></td>\n</tr>\n<tr>\n<td><code>&#x3C;Foo bar=bar /></code></td>\n<td><code>&#x3C;Foo bar /></code></td>\n</tr>\n<tr>\n<td><code>&#x3C;input checked /></code></td>\n<td><code>&#x3C;input checked=true /></code></td>\n</tr>\n</tbody>\n</table>\n<h3 id="exception"><a href="#exception" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Exception</h3>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>throw new SomeError(...)</code></td>\n<td><code>raise (SomeError ...)</code></td>\n</tr>\n<tr>\n<td><code>try (a) {...} catch (Err) {...} finally {...}</code></td>\n<td><code>try (a) { | Err => ...}</code>\n \n*</td>\n</tr>\n</tbody>\n</table>\n<p>* No finally.</p>\n<h3 id="blocks-1"><a href="#blocks-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Blocks</h3>\n<p>In Reason, "sequence expressions" are created with <code>{}</code> and evaluate to their last statement. In JavaScript, this can be simulated via an immediately-invoked function expression (since function bodies have their own local scope).</p>\n<table>\n  <thead><tr> <th scope="col"><p >JavaScript</p></th> <th scope="col"><p>Reason</p></th></tr></thead>\n  <tr>\n    <td>\n      <pre>\nlet res = (function() {\n  const x = 23;\n  const y = 34;\n  return x + y;\n})();</pre>\n    </td>\n    <td>\n      <pre>\nlet res = {\n  let x = 23;\n  let y = 34;\n  x + y\n};</pre>\n    </td>\n  </tr>\n</table>',frontmatter:{title:"Syntax Cheatsheet"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/javascript/syntax-cheatsheet.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-javascript-syntax-cheatsheet-b5e3397859868a7ed47a.js.map
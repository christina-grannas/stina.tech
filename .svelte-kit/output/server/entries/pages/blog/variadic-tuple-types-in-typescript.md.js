import { c as create_ssr_component } from "../../../chunks/index-5f038599.js";
const Variadic_tuple_types_in_typescript = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Variadic tuple types in Typescript</h2>
<p>This is possible to do since Typescript 4.x.</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">const concat&lt;T extends any[], B extends any[]&gt;(first: [...T], second: [...B]):[...T, ...B] =&gt; &#123;
    return[...first,...second];
&#125;

const res =  concat([&quot;test&quot;, &quot;hej&quot;, &quot;test&quot;], [1, 2]);</code>`}<!-- HTML_TAG_END --></pre>
<p>The trick here lies in spreading the tuple type inside brackets: <code>[...T]</code> and make <code>T</code> extend <code>any[]</code> (array). Typescript will then be able to infer the typing inside the arrays/tuples you pass to <code>contact()</code>.</p>
<p><a href="${"https://www.typescriptlang.org/play?#code/MYewdgzgLgBKbAIawLwB4AqMCmAPK2YAJhDImAJ4DaAugDQwBCO+hJZltAfDDABQAzAJYAnaAC4YVAHSyM9GBGzwikmbMY0AlOPXSMDWdM0wUPAN4AoXiOxQAriLBSjwsVEOylKmgG5LAL6WlvDQMLakKLzwSFB8VABEBNAJDAkAFtgAVqkwSdgpClQAjAwATNq+QA"}" rel="${"nofollow"}">See example on typescriptlang.org</a></p>
<p>If I have understand <a href="${"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html"}" rel="${"nofollow"}">the docs</a> correctly.</p>`;
});
export { Variadic_tuple_types_in_typescript as default };

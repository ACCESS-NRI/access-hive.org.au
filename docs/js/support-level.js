'use strict';

// Create an HTML tag to render the support level note
class NotSupported extends HTMLElement {
    constructor() {
    super();
    this.outerHTML = `<details class="not-supported" open="open">
<summary>NOT directly supported by ACCESS-NRI</summary>
<p>
The information below can be useful for the ACCESS community, 
but is not directly supported by ACCESS-NRI, unless stated otherwise.
</p>
</details>
`
    }
}

customElements.define("not-supported", NotSupported)
<div class="tabLabels large-text" label="om-versions">
    <button id="ACCESS-OM3">ACCESS-OM3</button>
    <button id="ACCESS-OM2">ACCESS-OM2</button>
</div>

{% set model = "ACCESS-OM3" %}
<div tabcontentfor="{{model}}" markdown>

{% include "/models/run-a-model/run-access-om/run-" ~ model ~ ".md" %}

</div>

{% set model = "ACCESS-OM2" %}
<div tabcontentfor="{{model}}" markdown>

{% include "/models/run-a-model/run-access-om/run-" ~ model ~ ".md" %}

</div>
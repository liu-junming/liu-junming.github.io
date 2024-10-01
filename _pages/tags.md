---
layout: tags
title: Tags
permalink: /tags/
---

<ul>
  {% for tag in site.tags %}
  <div class="tag__label">
    <a href="{{ site.baseurl }}/tag/{{ tag[0] | slugify }}/">{{ tag[0]}} ({{ tag[1].size }})</a>
  </div>
  {% endfor %}
</ul>
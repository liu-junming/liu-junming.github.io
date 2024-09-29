---
layout: tags
title: Tags
permalink: /tags/
---

<ul>
  {% for tag in site.tags %}
    <a href="{{ site.baseurl }}/tag/{{ tag[0] | slugify }}/">{{ tag[0]}} ({{ tag[1].size }})</a>
  {% endfor %}
</ul>
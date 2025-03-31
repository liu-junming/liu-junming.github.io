---
layout: tags
title: Tags
permalink: /tags/
---

<!-- <ul>
  {% for tag in site.tags %}
  <div class="tag__label">
    <a href="{{ site.baseurl }}/tag/{{ tag[0] | slugify }}/">{{ tag[0]}} ({{ tag[1].size }})</a>
  </div>
  {% endfor %}
</ul> -->

<h3>All Tags</h3>

<ul>
  <!-- {% assign sorted_tags = site.tags | sort %} -->
  {% for tag in site.tags %}
    <div class="tag__label">
      <span class="tag-name">
        <a href="{{ site.baseurl }}/tag/{{ tag[0] }}/">{{ tag[0] }}</a>
      </span>
      <span class="tag-count">{{ tag[1].size }}</span>
    </div>
  {% endfor %}
</ul>

<h3>Publication Tags</h3>

<ul>
  {% for tag in site.tags %}
    {% if tag[0] contains 'pub-' %}
      <div class="tag__label">
        <span class="tag-name">
          <a href="{{ site.baseurl }}/tag/{{ tag[0] }}/">{{ tag[0] }}</a>
        </span>
        <span class="tag-count">{{ tag[1].size }}</span>
      </div>
    {% endif %}
  {% endfor %}
</ul>

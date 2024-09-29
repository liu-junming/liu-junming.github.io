---
layout: tag_page
title: Tag
permalink: /tag/
---

<h1>Tags</h1>
<h2>{{ page.tag }}</h2>
<ul>
{% for post in page.posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date_to_string }} | Tags: {{ post | tags }})</li>
{% endfor %}
</ul>

<!-- <div id="tag-cloud">
  {{ site | tag_cloud }}
</div> -->
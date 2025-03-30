---
layout: table
title: Posts
permalink: /posts/
---


<ul>
{% for post in site.posts %}
    <li class="post-item">
        <div class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></div>
        <div class="post-tags">
            {% for tag in post.tags %}
                <a href="{{ site.baseurl }}/tag/{{ tag | slugify }}" class="post-tag">{{ tag }}</a>
            {% endfor %}
        </div>
        <div class="post-meta">{{ post.date | date: "%B %d, %Y" }}</div>
        <div class="post-summary">{{ post.summary }}</div>
    </li>
{% endfor %}
</ul>

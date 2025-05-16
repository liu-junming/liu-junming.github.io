---
layout: search
title: "Search Results"
permalink: /search/
---

<div class="search-results-container">
  <h1 class="page__title">Search</h1>
  <input type="text" id="search-input" placeholder="Search blog posts..." />
  <ul id="results-container"></ul>
</div>

<!-- 加载 Simple-Jekyll-Search 脚本 -->
<script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>

<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '{{ site.baseurl }}/search.json',  // 默认你生成了这个文件
    searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
    noResultsText: '<li>No results found</li>',
    limit: 10,
    fuzzy: false
  });

  // 如果你希望通过 URL 自动填入搜索词
  document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q');
    if (query) {
      const input = document.getElementById('search-input');
      input.value = query;
      input.dispatchEvent(new Event('keyup')); // 触发搜索
    }
  });
</script>

<style>
  .search-results-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2em 0;
  }
  #search-input {
    width: 100%;
    padding: 0.75em;
    font-size: 1em;
    margin-bottom: 1em;
  }
  #results-container {
    list-style: none;
    padding: 0;
  }
  #results-container li {
    margin-bottom: 1em;
  }
  #results-container a {
    text-decoration: none;
    color: #2a7ae2;
  }
  #results-container a:hover {
    text-decoration: underline;
  }
</style>

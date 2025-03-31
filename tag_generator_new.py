#!/usr/bin/env python

import glob
import os
import re

post_dir = '_posts/'
draft_dir = '_drafts/'
tag_dir = 'tag/'

filenames = glob.glob(post_dir + '*md')
filenames = filenames + glob.glob(draft_dir + '*md')

total_tags = []
for filename in filenames:
    with open(filename, 'r', encoding='utf8') as f:
        data = f.read()

    # match ---\n.*---
    pattern = r'---\n.*?(tags:.*?)---'
    matches = re.findall(pattern, data, re.DOTALL)
    property_lines = matches[0].strip().split("\n")
    for line in property_lines:
        if ":" in line:
            header_name = line.split(":")[0]
            content = ":".join(line.split(":")[1:]).strip()
        else:
            content = line.strip()
        if header_name and header_name!="tags":
            break
        if content.startswith("["):
            clean_tag = ''.join(c for c in content.split("]")[0] if c not in '[]')
            list_tags = map(str.strip, clean_tag.split(','))
            total_tags.extend(list_tags)
        elif content.startswith("-"):
            list_tags = content[1:].strip()
            total_tags.append(list_tags)
        else:
            print(f"unknown line: {content}")
            # break
            


total_tags = set(total_tags)

old_tags = glob.glob(tag_dir + '*.md')
for tag in old_tags:
    os.remove(tag)
    
if not os.path.exists(tag_dir):
    os.makedirs(tag_dir)

for tag in total_tags:
    try:
        tag_filename = tag_dir + tag.strip("'").replace(' ', '_') + '.md'
        f = open(tag_filename, 'a')
        write_str = '---\nlayout: tag_page\ntitle: \"Tag: ' + tag + '\"\ntag: ' + tag + '\nrobots: noindex\n---\n'
        f.write(write_str)
        f.close()
    except Exception as e:
        print(e)
        continue
print("Tags generated, count", total_tags.__len__())
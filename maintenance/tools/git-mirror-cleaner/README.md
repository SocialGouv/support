<br>
<br>

<br>
<br>

<br>
<br>

<br>
<br>

<h1 align="center">
  <p align="center">Git</p>
  <img src="https://i.giphy.com/media/YxfllYGDqLRyE/giphy.webp" onerror="this.onerror=null;this.src='https://i.giphy.com/YxfllYGDqLRyE.gif';" width=693>
  <p align="center">Mirror Cleaner</p>
</h1>

<br>
<br>

<br>
<br>

<br>
<br>

<br>
<br>

# Git Mirror Cleaner

> Remove trailing refs in the mirror repo

<br>
<br>

## Problem

The Git references, on our own GitLab mirrors, are not removed when we remove it on GitHub.  
As the branches are not removed, we end up with a lot of "trailing" references to branches we removed on GitHub.  
As those branches exists, GitLab keeps a lot of other linked objects : environments, registry image, etc...  

<br>
<br>

## Solution

Making a shell script to manually sync and remove trailing references from the mirrors.  
As the problem is global to every projects mirrored, this script should run in every repo in the GitLab group.  
As we want our mirrors to be always clean, we will run it daily.

<br>
<br>

## Installation

You need to have the latest Bash and Git installed.

```sh
$ bash --version
GNU bash, version 5.0.17(1)-release (x86_64-pc-linux-gnu)
# [...]

$ git --version
git version 2.26.2
```

You need to have two Git remote de defined as :
- `origin` : the repository with the current state.  
   Here our GitHub repo. 
- `mirror` : the mirror repository to sync.  
   Here our GitLab repository mirror.

```sh
# For example
$ git remote add gitlab.factory.social.gouv ssh://git@gitlab.factory.social.gouv.fr:443/SocialGouv/support.git
$ git remote -v    
origin	                    git@github.com:SocialGouv/support.git (fetch)
origin	                    git@github.com:SocialGouv/support.git (push)
gitlab.factory.social.gouv	ssh://git@gitlab.factory.social.gouv.fr:443/SocialGouv/support.git (fetch)
gitlab.factory.social.gouv	ssh://git@gitlab.factory.social.gouv.fr:443/SocialGouv/support.git (push)
```

<br>
<br>

## Usage

```sh
$ git-mirror-cleaner <origin> <mirror>
```

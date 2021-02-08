<br>
<br>

<br>
<br>

<br>
<br>

<br>
<br>

<h1 align="center">
  <img src=https://media.giphy.com/media/3o7WIAevY5uEJGLC3C/giphy.gif width=693>
  <p align="center">Bains Douches</p>
</h1>

<br>
<br>

<br>
<br>

<br>
<br>

<br>
<br>

> Clean all the GitLab group mirror repository 

<br>
<br>

<br>
<br>

<br>
<br>

<br>
<br>

## Usage 

**Experimental**

Create a cron on GitLab that runs the master branch.  
The main [.gitlab-ci.yml#L12-L17](https://github.com/SocialGouv/support/blob/master/.gitlab-ci.yml#L12-L17) CI/CD file will run the [jobs](./jobs/socialgouv.yml) if the pipeline is scheduled : `$CI_PIPELINE_SOURCE == "schedule` (see https://github.com/SocialGouv/support/blob/master/cron/.gitlab-ci.yml#L2).

The  [jobs](./jobs/socialgouv.yml) are maintained by the [bathing bin](./bin/bathing).

The  [jobs](./jobs/socialgouv.yml) are mainly [`git-mirror-cleaner`](https://github.com/SocialGouv/support/tree/master/maintenance/tools/git-mirror-cleaner) for now (see https://github.com/SocialGouv/support/blob/master/cron/.gitlab-ci.yml#L14).

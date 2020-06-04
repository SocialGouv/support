#!/usr/bin/env bats

load _helper

setup() {
  GIT_MIRROR_CLEANER_ENV=testing
  \. ${BATS_TEST_DIRNAME}/../bin/git-mirror-cleaner

  # mock  git
  git() {
    echo
  }
}

@test "gmc_get_remote_branches: should exist" {
  run type gmc_get_remote_branches
  assert_success
}

@test "gmc_get_remote_branches: fails with not enough arguments" {
  run gmc_get_remote_branches
  assert_output "Not enough arguments"
  assert_failure 5
}

@test "gmc_get_remote_branches: fails with no origin remote error" {
  run gmc_get_remote_branches origin
  assert_output "No 'origin' remote defined"
  assert_failure 2
}

@test "gmc_get_remote_branches: should return nothing" {
  gmc_set origin "origin"
  run gmc_get_remote_branches origin
  assert_output ""
  assert_success
}

@test "gmc_get_remote_branches: should return only remote branches" {
  gmc_set origin "origin"
  git() {
    cat << EOF
  foo
  master
  remotes/origin/HEAD -> origin/master
  remotes/origin/bar
EOF
  }
  run gmc_get_remote_branches origin
  assert_output "bar"
  assert_success
}

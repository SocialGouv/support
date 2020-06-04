#!/usr/bin/env bats

load _helper

branch="gmc-${RANDOM}"

setup() {
  GIT_MIRROR_CLEANER_ENV=testing
  \. ${BATS_TEST_DIRNAME}/../bin/git-mirror-cleaner
}

teardown_all() {
  git push origin :${branch} || true
}
@test "gmc_remove_mirror_branch: should exist" {
  run type gmc_remove_mirror_branch
  assert_success
}

@test "gmc_remove_mirror_branch: fails with no mirror error" {
  run gmc_remove_mirror_branch
  assert_output "A mirror branch is required."
  assert_failure 2
}

@test "gmc_remove_mirror_branch: fails with not enough arguments" {
  gmc_set mirror origin
  run gmc_remove_mirror_branch
  assert_output "Not enough arguments"
  assert_failure 5
}

@test "gmc_remove_mirror_branch: fails with ref does not exist" {
  gmc_set mirror origin
  run gmc_remove_mirror_branch "${branch}"
  assert_line --index 0 "error: unable to delete '${branch}': remote ref does not exist"
  assert_failure 1
}

@test "gmc_remove_mirror_branch: remove the ${branch} from mirror" {
  gmc_set mirror origin >&3
  git branch "${branch}" >&3
  git push origin "${branch}" >&3
  run gmc_remove_mirror_branch "${branch}"
  assert_line --index 1 " - [deleted]         ${branch}"
  assert_success
}

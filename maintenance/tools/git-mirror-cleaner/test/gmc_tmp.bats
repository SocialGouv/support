#!/usr/bin/env bats

load _helper

setup() {
  GIT_MIRROR_CLEANER_ENV=testing
  \. ${BATS_TEST_DIRNAME}/../bin/git-mirror-cleaner
}

@test "gmc_tmp: should exist" {
  run type gmc_tmp
  assert_success
}

@test "gmc_tmp: return the context tmp folder" {
  run gmc_tmp
  assert_output --regexp "^/tmp/git-mirror-cleaner."
  assert_success
}

@test "gmc_tmp: memorize the context tmp folder" {
  local cwd="$(gmc_tmp)"
  run gmc_tmp
  assert_output "${cwd}"
  assert_success
}

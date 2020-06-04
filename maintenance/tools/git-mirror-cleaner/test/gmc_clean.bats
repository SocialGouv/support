#!/usr/bin/env bats

load _helper

setup() {
  GIT_MIRROR_CLEANER_ENV=testing
  \. ${BATS_TEST_DIRNAME}/../bin/git-mirror-cleaner
}

@test "gmc_clean: should exist" {
  run type gmc_clean
  assert_success
}

@test "gmc_clean: clean the mirror" {
  run gmc_clean
  assert_output --partial 'Mirror cleaned'
  assert_success
}

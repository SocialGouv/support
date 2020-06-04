#!/usr/bin/env bats

load _helper

@test "gmc_reset: should reset the env" {
  run type gmc_reset
  assert_failure 1

  GIT_MIRROR_CLEANER_ENV=testing
  \. ${BATS_TEST_DIRNAME}/../bin/git-mirror-cleaner

  run type gmc_reset
  assert_success
  
  gmc_reset
  
  run type gmc_reset
  assert_failure 1
}

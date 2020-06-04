#!/usr/bin/env bats

load _helper

setup() {
  GIT_MIRROR_CLEANER_ENV=testing
  \. ${BATS_TEST_DIRNAME}/../bin/git-mirror-cleaner
}

@test "gmc_get: should exist" {
  run type gmc_get
  assert_success
}

@test "gmc_get origin: return nothing if not set" {
  run gmc_get origin
  assert_output ""
  assert_success
}

@test "gmc_set: should exist" {
  run type gmc_set
  assert_success
}

@test "gmc_set origin foo: set the origin to foo" {
  run gmc_set origin "foo"
  assert_output ""
  assert_equal $(<"$(gmc_tmp)/origin") "foo"
  assert_success
}

@test "gmc_get origin: return bar" {
  run gmc_set origin "bar"
  assert_success

  run gmc_get origin
  assert_output "bar"
  assert_success
}

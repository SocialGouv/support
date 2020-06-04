#!/usr/bin/env bats

load _helper

setup() {
  GIT_MIRROR_CLEANER_ENV=testing
  \. ${BATS_TEST_DIRNAME}/../bin/git-mirror-cleaner
}

@test "gmc_compare_origin_mirror: should exist" {
  run type gmc_compare_origin_mirror
  assert_success
}

@test "gmc_compare_origin_mirror: fails with no origin_branches file error" {
  run gmc_compare_origin_mirror
  assert_output --regexp "comm: /tmp/git-mirror-cleaner.\w+/origin_branches: No such file or directory"
  assert_failure 1
}

@test "gmc_compare_origin_mirror: fails with no mirror_branches file error" {
  gmc_set origin_branches ""
  run gmc_compare_origin_mirror
  assert_output --regexp "comm: /tmp/git-mirror-cleaner.\w+/mirror_branches: No such file or directory"
  assert_failure 1
}

@test "gmc_compare_origin_mirror: return nothing" {
  gmc_set origin_branches ""
  gmc_set mirror_branches ""
  run gmc_compare_origin_mirror
  assert_output ""
  assert_success
}

@test "gmc_compare_origin_mirror: return nothing with no mirror_branches" {
  gmc_set origin_branches "bar\nfoo\nmaster"
  gmc_set mirror_branches ""
  run gmc_compare_origin_mirror
  assert_output ""
  assert_success
}

@test "gmc_compare_origin_mirror: return nothing with intersections" {
  gmc_set origin_branches "bar\nfoo\nmaster"
  gmc_set mirror_branches "foo"
  run gmc_compare_origin_mirror
  assert_output ""
  assert_success
}

@test "gmc_compare_origin_mirror: return unique branches of mirror" {
  gmc_set origin_branches "bar\nfoo\nmaster"
  gmc_set mirror_branches "buz\nfoo\nmaster\nzzz"
  run gmc_compare_origin_mirror
  assert_line "buz"
  assert_line "zzz"
  assert_success
}

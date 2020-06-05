#!/usr/bin/env bats

load _helper


setup() {
  # Mock git puch origin :branch
  git() {
    echo " - [deleted]         ${3:1}"
  }
  export -f git

  GIT_MIRROR_CLEANER_ENV=testing
  \. ${BATS_TEST_DIRNAME}/../bin/git-mirror-cleaner
}


@test "gmc_remove_mirror_branches: should exist" {
  run type gmc_remove_mirror_branches
  assert_success
}

@test "gmc_remove_mirror_branches: fails with no mirror error" {
  run gmc_remove_mirror_branches
  assert_output "A mirror branch is required."
  assert_failure 2
}

@test "gmc_remove_mirror_branches: fails with not enough arguments" {
  gmc_set mirror origin >&3
  run gmc_remove_mirror_branches
  assert_output "Not enough arguments"
  assert_failure 5
}

@test "gmc_remove_mirror_branches foo: remove the foo brnach from mirror" {
  gmc_set mirror origin >&3

  run gmc_remove_mirror_branches foo
  assert_output " - [deleted]         foo"
  assert_success
}

@test "gmc_remove_mirror_branches foo(bar)-quz-(oof): remove the foo(bar)-quz-(oof) brnach from mirror" {
  gmc_set mirror origin >&3

  run gmc_remove_mirror_branches "fix(modeles)-fix-wording-(BS)"
  assert_output " - [deleted]         fix(modeles)-fix-wording-(BS)"
  assert_success
}

@test "gmc_remove_mirror_branches foo bar buz: remove the branches from mirror" {
  gmc_set mirror origin >&3

  run gmc_remove_mirror_branches foo bar buz
  assert_line --index 0 " - [deleted]         foo"
  assert_line --index 1 " - [deleted]         bar"
  assert_line --index 2 " - [deleted]         buz"
  assert_success
}

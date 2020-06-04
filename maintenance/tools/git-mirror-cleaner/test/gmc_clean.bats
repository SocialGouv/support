#!/usr/bin/env bats

load _helper

setup() {
  GIT_MIRROR_CLEANER_ENV=testing
  \. ${BATS_TEST_DIRNAME}/../bin/git-mirror-cleaner

  git() {
    return 0
  }
}

@test "gmc_clean: should exist" {
  run type gmc_clean
  assert_success
}

@test "gmc_clean: fails with not enough arguments" {
  run gmc_clean
  assert_output "Not enough arguments"
  assert_failure 5
}

@test "gmc_clean origin: fails with not enough arguments" {
  run gmc_clean origin
  assert_output "Not enough arguments"
  assert_failure 5
}

@test "gmc_clean origin mirror: nothing to do" {
  run gmc_clean origin mirror
  assert_output "Nothing to do"
  assert_success
}

@test "gmc_clean origin mirror: clean the mirror" {
  gmc_get_remote_branches() {
    case $1 in
      origin) echo -e "foo\n";;
      mirror) echo -e "bar\nbuz\nfoo";;
      *) return 1
    esac
  }

  gmc_remove_mirror_branch() {
    assert_equal "${*}" "bar buz" || exit $?
  }

  run gmc_clean origin mirror
  assert_line "About to remove 2 branches from mirror"
  assert_line "🧹 Mirror cleaned ✨"
  assert_success
}

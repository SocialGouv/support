#!/usr/bin/env bats

load _helper

setup() {
  BATHING_ENV=testing
  \. ${BATS_TEST_DIRNAME}/../bin/bathing

  wget() {
    echo "[]"
  }
}

@test "bathing_group_id: should exist" {
  run type bathing_group_id
  assert_success
}

@test "bathing_group_id: fails with not enough arguments" {
  run bathing_group_id
  assert_output "Not enough arguments"
  assert_failure 5
}

@test "bathing_group_id Looser: return no project" {
  export GITLAB_API_URL=https://gitlab.test.com/api/v4
  export GITLAB_API_TOKEN=xyz
  wget() {
    assert_equal "${*}" "--quiet --header PRIVATE-TOKEN: xyz -O - https://gitlab.test.com/api/v4/groups" \
    || exit $?
    echo '[{"id":24,"name":"Looser"}]'
  }
  run bathing_group_id Looser
  assert_output '24'
  assert_success
}

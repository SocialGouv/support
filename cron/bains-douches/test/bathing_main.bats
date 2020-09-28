#!/usr/bin/env bats

load _helper

setup() {
  BATHING_ENV=testing
  \. ${BATS_TEST_DIRNAME}/../bin/bathing
}

@test "bathing_main: should exist" {
  run type bathing_main
  assert_success
}

@test "bathing_main: fails with not enough arguments" {
  run bathing_main
  assert_output "Not enough arguments"
  assert_failure 5
}

@test "bathing_main loosergroup: return no jobs" {
  bathing_group_id() {
    echo 24
  }

  bathing_get_projects() {
    assert_equal "${*}" "24" || exit $?
    echo "[]"
  }

  run bathing_main loosergroup
  assert_output "null"
  assert_success
}

@test "bathing_main supergroup: generate jobs" {
  bathing_group_id() {
    echo 42
  }

  bathing_get_projects() {
    assert_equal "${*}" "42" || exit $?
    echo '[
      {"name": "local", "path_with_namespace": "SuperGroup/local"},
      {"mirror": true, "name": "conventions-collectives", "path_with_namespace": "SuperGroup/traefigit"},
      {"mirror": true, "name": "maraudes-app", "path_with_namespace": "SuperGroup/traefigit"},
      {"mirror": true, "name": "polyfill-service", "path_with_namespace": "SuperGroup/traefigit"},
      {"mirror": true, "name": "traefigit", "path_with_namespace": "SuperGroup/traefigit"},
      {"mirror": true, "name": "foo", "path_with_namespace": "SuperGroup/foo"},
      {"mirror": true, "name": "bar", "path_with_namespace": "SuperGroup/bar"}
    ]'
  }

  run bathing_main supergroup
  assert_output "SuperGroup/foo:
  extends:
    - .bathing
  variables:
    name: foo
SuperGroup/bar:
  extends:
    - .bathing
  variables:
    name: bar"
  assert_success
}

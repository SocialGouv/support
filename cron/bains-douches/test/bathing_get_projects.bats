#!/usr/bin/env bats

load _helper

setup() {
  BATHING_ENV=testing
  \. ${BATS_TEST_DIRNAME}/../bin/bathing
}

@test "bathing_trasform_to_gitlab_jobs: should exist" {
  run type bathing_trasform_to_gitlab_jobs
  assert_success
}

@test "bathing_trasform_to_gitlab_jobs <<< []: returns null" {
  run bathing_trasform_to_gitlab_jobs <<< "[]"
  assert_output "null"
  assert_success
}

@test "bathing_trasform_to_gitlab_jobs <<< [{}]: returns null" {
  run bathing_trasform_to_gitlab_jobs <<< "[{}]"
  assert_output "null"
  assert_success
}

@test "bathing_trasform_to_gitlab_jobs: returns jobs for mirrored projects" {
  run bathing_trasform_to_gitlab_jobs <<< '[
    {"name": "local", "path_with_namespace": "SuperGroup/local"},
    {"mirror": true, "name": "foo", "path_with_namespace": "SuperGroup/foo"},
    {"mirror": true, "name": "bar", "path_with_namespace": "SuperGroup/bar"}
  ]'
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

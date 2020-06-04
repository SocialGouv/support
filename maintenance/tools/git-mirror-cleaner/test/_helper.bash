#

load /usr/lib/bats-support/load.bash
load /usr/lib/bats-assert/load.bash

setup() {
  if [[ "$BATS_TEST_NUMBER" -eq 1 ]]; then
    setup_all || true
  fi

  # NODE(douglasduteil): manual bail mode
  [ ! -f "${BATS_PARENT_TMPNAME}.skip" ] || skip "skip remaining tests"
}

teardown() {
  if [[ "${#BATS_TEST_NAMES[@]}" -eq "$BATS_TEST_NUMBER" ]]; then
    teardown_all || true
  fi

  # NODE(douglasduteil): manual bail mode
  [ -n "$BATS_TEST_COMPLETED" ] || touch "${BATS_PARENT_TMPNAME}.skip"
}

[
  .[]
  | select(.mirror==true)
  |
  {
    (.path_with_namespace): {
      extends: [".bathing"],
      variables: { name }
    }
  }
]
| add

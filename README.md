# Lab 8 - Starter
Yiren Zhou
Janav Kati
1) It should  be within a Github action that runs whenever code is pushed. This is because we should run unit tests before pushing, and the only other place should be github action automated tests.
2) no
3) Message feature need to be tested from end to end so we should not use unit tests. Message feature involves user to user interaction and involves several subsystems. Therefore it is better to use end to end testing.
4) Max message length can be tested using a unit tests. We are only testing a single feature which could most likely be implemented in a single function so we can use unit tests. 
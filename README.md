# Lab 8 - Starter
Yiren Zhou
Janav Kati
1) It should  be within a Github action that runs whenever code is pushed. This is because we should run unit tests before pushing, and the only other place should be github action automated tests.
2) no
3) Message feature need to be tested from end to end so we should not use unit tests. Message feature involves user to user interaction and involves several subsystems. Therefore testing requires us to check multiple components so we need to use end to tend testing.
4) Max message length can be tested using a unit tests. We are only testing a single small scale behaviour which could most likely be implemented in a single function so we can use unit tests. Also, testing max message length does not involve several components so we use unit testing.
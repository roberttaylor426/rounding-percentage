## Rounding percentage kata

Given a floating point number, return a string that represents that number as a percentage, where:

`0 => 0%`, `1 => 1%`, and `100 => 100%`.

All values should be rounded to the nearest 10th of a percent, so:

`1.39 => 1.4%`, `11.11 => 11.1%`, and `5.65 => 5.7%`.

Any values that end in `.0%` after rounding should be trimmed. Therefore:

`1.0 => 1%` and `12.99 => 13%`.

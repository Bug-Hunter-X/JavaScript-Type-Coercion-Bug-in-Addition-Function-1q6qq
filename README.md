# JavaScript Type Coercion Bug

This repository demonstrates a subtle bug in a JavaScript addition function caused by type coercion. The function `foo` adds two numbers, but it doesn't handle non-numeric inputs robustly.

## Bug Description

The original `foo` function only checks for `null` values.  If you pass in strings that can be coerced to numbers, you get unexpected results. This is a type coercion issue.

## Solution

The solution uses `typeof` to explicitly check if the inputs are numbers. If not, it returns an error message or handles the non-numeric input appropriately.
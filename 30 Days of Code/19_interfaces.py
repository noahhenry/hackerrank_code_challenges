# -- HACKERRANK CHALLENGE CODE BELOW --
# Task:
# The AdvancedArithmetic interface and the method declaration for the abstract divisorSum(n) method are provided for you in the editor below.

# Complete the implementation of Calculator class, which implements the AdvancedArithmetic interface.
# The implementation for the divisorSum(n) method must return the sum of all divisors of 'n'.

# LOCKED in hackerrank.com
class AdvancedArithmetic(object):
  def divisorSum(self, n): # added 'self' to appease linter
    raise NotImplementedError

# Interfaced class
class Calculator(AdvancedArithmetic):
  def divisorSum(self, n):
    # Write code here...
    sum_of_values = 0
    for integer in range(1, n + 1):
      if n % integer == 0:
        sum_of_values = sum_of_values + integer
    return sum_of_values

# LOCKED in hackerrank.com
n = int(input())
my_calculator = Calculator()
s = my_calculator.divisorSum(n)
print("I implemented: " + type(my_calculator).__bases__[0].__name__)
print(s)
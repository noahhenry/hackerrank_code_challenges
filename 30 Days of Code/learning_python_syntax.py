# Learning python syntax...

# test function
def full_name(first_name, last_name):
  print(f"{first_name} {last_name}")

full_name("Noah", "Henry")

# test class
class MyClass:
  x = 5
  y = 4

  def sum(self, a, b):
    return a + b + self.x + self.y

my_class_instance = MyClass()
print(my_class_instance.sum(3, 4))
print(my_class_instance.x)

# test if conditionals
def foo_bar_buzz(int):
  if int == 1:
    print("Foo")
  elif int == 2:
    print("Bar")
  else:
    print("Buzz")

foo_bar_buzz(2)

# test for loop
test_list = [1,2,3,2,1]

for item in test_list:
  foo_bar_buzz(item)
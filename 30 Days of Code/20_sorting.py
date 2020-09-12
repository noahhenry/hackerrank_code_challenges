# BUBBLE SORT
# START -- bubble sort algorithm example
  # for (int i = 0; i < n; i++) {
  #     // Track number of elements swapped during a single array traversal
  #     int numberOfSwaps = 0;
      
  #     for (int j = 0; j < n - 1; j++) {
  #         // Swap adjacent elements if they are in decreasing order
  #         if (a[j] > a[j + 1]) {
  #             swap(a[j], a[j + 1]);
  #             numberOfSwaps++;
  #         }
  #     }
      
  #     // If no elements were swapped during a traversal, array is sorted
  #     if (numberOfSwaps == 0) {
  #         break;
  #     }
  # }
# END -- bubble sort algorithm example

# Task:
# Given an array, 'a', of size 'n' distinct elements, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following '3' lines:
  # 1. Array is sorted in numSwaps swaps.
    # where 'numSwaps' is the number of swaps that took place.
  # 2. First Element: firstElement
    # where 'firstElement' is the first element in the sorted array.
  # 3. Last Element: lastElement
    # where 'lastElement' is the last element in the sorted array.

# Hint: To complete this challenge, you will need to add a variable that keeps a running tally of all swaps that occur during execution.

# Input Format:
# The first line contains an integer, 'n', denoting the number of elements in array 'a'.
# The second line contains 'n' space-separated integers describing the respective values of 'a0, a1,...,an-1'.

# Output Format:
# Print the following three lines of output:
  # 1. Array is sorted in numSwaps swaps.
    # where 'numSwaps' is the number of swaps that took place.
  # 2. First Element: firstElement
    # where 'firstElement' is the first element in the sorted array.
  # 3. Last Element: lastElement
    # where 'lastElement' is the last element in the sorted array.

# -- HACKERRANK CHALLENGE CODE BELOW --
n = 3 # number of elements in array
a = [3, 2, 1] # array of elements



# # -- ATTEMPT NUMBER 1
# # global variables
# sart = 0
# #end = 0
# # Track number of elements swapped during a single array traversal
# number_of_swaps = 0

# def swap(item1, item2):
#   index_of_item_1 = a.index(item1)
#   index_of_item_2 = a.index(item2)
#   temp = a[index_of_item_1]
#   a[index_of_item_1] = a[index_of_item_2]
#   a[index_of_item_2] = temp

# for item1 in a:
#   start = 1
#   #end = len(a) - 1

#   trimmed_list = a[start:]

#   for item2 in trimmed_list:
#   # Swap adjacent elements if they are in decreasing order
#     if item1 > item2:
#       swap(item1, item2)
#       number_of_swaps += 1

#   # If no elements were swapped during a traversal, array is sorted
#   if number_of_swaps == 0:
#     break


# # OUTPUT:
# print(f"Array is sorted in {number_of_swaps} swaps.")
# print(f"First Element: {a[0]}")
# print(f"Last Element: {a[len(a)-1]}")
# # -- END ATTEMPT NUMBER 1



# -- ATTEMPT NUMBER 2
def bubble_sort(array):
  number_of_swaps = 0

  end_position = len(array) -1
  swap_position = 0

  while end_position > 0:
    # swap_position = 0
    i = 0

    while i < end_position:

      if array[i] > array[i + 1]:
        #swap elements
        temp_item = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp_item

        number_of_swaps += 1

        swap_position = i

      i += 1

    end_position = swap_position
  
  # OUTPUT:
  print(f"Array is sorted in {number_of_swaps} swaps.")
  print(f"First Element: {array[0]}")
  print(f"Last Element: {array[len(array)-1]}")

bubble_sort(a)
# -- ATTEMPT NUMBER 2 -- PASSED


# -- SOLUTION FROM fyodor_kutsepin
def bubble(arr):
    count_swap = 0
    for num in range(len(arr)-1, 0, -1):
        for i in range(num):
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
                count_swap +=1
    return count_swap

print("Array is sorted in {} swaps.".format(bubble(a)))
print("First Element: {}".format(a[0]))
print("Last Element: {}".format(a[-1]))
# -- END SOLUTION FROM fyodor_kutsepin

# Approach 1: Brute Force

**Algorithm**

The brute force approach is simple. Loop through each element _`x`_ and find if there is another value that equals to _`target − x`_.

**Implementation**

```py
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[j] == target - nums[i]:
                    return [i, j]
```

# Approach 2: Two-pass Hash Table

**Intuition**

To improve our runtime complexity, we need a more efficient way to check if the complement exists in the array. If the complement exists, we need to get its index. What is the best way to maintain a mapping of each element in the array to its index? A hash table.

We can reduce the lookup time from _`O(n)`_ to _`O(1)`_ by trading space for speed. A hash table is well suited for this purpose because it supports fast lookup in near constant time. I say "near" because if a collision occurred, a lookup could degenerate to _`O(n)`_ time. However, lookup in a hash table should be amortized _`O(1)`_ time as long as the hash function was chosen carefully.

**Algorithm**

A simple implementation uses two iterations. In the first iteration, we add each element's value as a key and its index as a value to the hash table. Then, in the second iteration, we check if each element's complement (_`target − nums[i]`_) exists in the hash table. If it does exist, we return current element's index and its complement's index. Beware that the complement must not be _`nums[i]`_ itself!

**Implementation**

```py
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        for i in range(len(nums)):
            hashmap[nums[i]] = i
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in hashmap and hashmap[complement] != i:
                return [i, hashmap[complement]]
```

**Complexity Analysis**

Time complexity: _`O(n)`_.\
We traverse the list containing _`n`_ elements exactly twice. Since the hash table reduces the lookup time to _`O(1)`_, the overall time complexity is _`O(n)`_.

Space complexity: _`O(n)`_.\
The extra space required depends on the number of items stored in the hash table, which stores exactly nnn elements.

# Approach 3: One-pass Hash Table

**Algorithm**

It turns out we can do it in one-pass. While we are iterating and inserting elements into the hash table, we also look back to check if current element's complement already exists in the hash table. If it exists, we have found a solution and return the indices immediately.

**Implementation**

```py
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in hashmap:
                return [i, hashmap[complement]]
            hashmap[nums[i]] = i
```

**Complexity Analysis**

Time complexity: _`O(n)`_.\
We traverse the list containing nnn elements only once. Each lookup in the table costs only _`O(1)`_ time.

Space complexity: _`O(n)`_.\
The extra space required depends on the number of items stored in the hash table, which stores at most nnn elements.

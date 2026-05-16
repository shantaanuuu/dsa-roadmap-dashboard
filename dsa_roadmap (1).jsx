import { useState } from "react";

export const phases = [
  {
    id: 1,
    name: "Foundation Coding",
    period: "May 17 – Jun 15",
    weeks: "Weeks 1–4",
    color: "#0C447C",
    bg: "#E6F1FB",
    accent: "#378ADD",
    goal: "Build Java coding fluency. Stop thinking in theory—start writing clean, correct code fast.",
    milestone: "Solve Easy LeetCode problems in under 20 min",
    weeklyHours: "~28–35 hrs/week",
    topics: [
      {
        week: "Week 1 (May 17–23)",
        title: "Java Coding Setup + Arrays I",
        days: [
          { day: "Sun May 17", topic: "Java Environment + Coding Setup", subtopics: ["IntelliJ/VSCode setup", "Java I/O (Scanner, BufferedReader)", "Time/Space Complexity big-O"], tasks: ["Implement array traversal, reversal", "Write complexity analysis for 5 loops"], leetcode: ["1. Two Sum", "26. Remove Duplicates from Sorted Array", "27. Remove Element"], diff: "3E", time: "5h" },
          { day: "Mon May 18", topic: "Arrays – Linear Search, Prefix Sum", subtopics: ["Prefix sum array", "Range sum queries", "Kadane's Algorithm intro"], tasks: ["Build prefix sum from scratch", "Solve running sum problems"], leetcode: ["303. Range Sum Query", "1480. Running Sum of 1D Array", "238. Product of Array Except Self"], diff: "2E 1M", time: "4h" },
          { day: "Tue May 19", topic: "Arrays – Two Pointers", subtopics: ["Left-right pointer pattern", "Sorted array tricks", "Dutch national flag"], tasks: ["Implement two pointer on sorted array", "Solve container problems"], leetcode: ["167. Two Sum II", "977. Squares of Sorted Array", "75. Sort Colors"], diff: "2E 1M", time: "4h" },
          { day: "Wed May 20", topic: "Arrays – Sliding Window I", subtopics: ["Fixed window pattern", "Variable window pattern", "Window expand/shrink"], tasks: ["Implement fixed window", "Max/min window problems"], leetcode: ["643. Maximum Average Subarray I", "209. Minimum Size Subarray Sum", "3. Longest Substring Without Repeating"], diff: "1E 2M", time: "4h" },
          { day: "Thu May 21", topic: "Arrays – Kadane + Subarray Patterns", subtopics: ["Maximum subarray", "Circular subarray", "Subarray sum equals k"], tasks: ["Implement Kadane's from memory", "Practice subarray tricks"], leetcode: ["53. Maximum Subarray", "560. Subarray Sum Equals K", "152. Maximum Product Subarray"], diff: "1E 2M", time: "4h" },
          { day: "Fri May 22", topic: "Arrays – Review + Timed Practice", subtopics: ["Pattern recognition drill", "Error log review"], tasks: ["Re-solve 3 problems from this week under time limit", "Document mistakes in error log"], leetcode: ["Retry any 2 unsolved from week"], diff: "Mixed", time: "3h" },
          { day: "Sat May 23", topic: "Strings I + Java String methods", subtopics: ["StringBuilder vs String", "charAt, substring, indexOf", "String comparison tricks"], tasks: ["Implement palindrome check 3 ways", "Anagram detection"], leetcode: ["125. Valid Palindrome", "242. Valid Anagram", "387. First Unique Character", "344. Reverse String", "20. Valid Parentheses"], diff: "4E 1M", time: "6h" },
        ]
      },
      {
        week: "Week 2 (May 24–30)",
        title: "Hashing + Sorting",
        days: [
          { day: "Sun May 24", topic: "HashMap Deep Dive", subtopics: ["HashMap, HashSet, LinkedHashMap", "Frequency counting", "Two-sum pattern family"], tasks: ["Implement word frequency counter", "Group anagrams implementation"], leetcode: ["49. Group Anagrams", "347. Top K Frequent Elements", "36. Valid Sudoku"], diff: "1E 2M", time: "5h" },
          { day: "Mon May 25", topic: "Sorting Algorithms in Java", subtopics: ["Bubble, Selection, Insertion (implement)", "Merge Sort (implement fully)", "Quick Sort (implement fully)"], tasks: ["Code all 5 sorts from scratch", "Analyze time complexity each"], leetcode: ["88. Merge Sorted Array", "912. Sort an Array", "148. Sort List"], diff: "1E 2M", time: "4h" },
          { day: "Tue May 26", topic: "Java Collections + Comparator", subtopics: ["Arrays.sort with Comparator", "Collections.sort", "PriorityQueue basics", "TreeMap/TreeSet"], tasks: ["Sort objects by custom field", "Multi-key comparator"], leetcode: ["56. Merge Intervals", "252. Meeting Rooms", "179. Largest Number"], diff: "1E 2M", time: "4h" },
          { day: "Wed May 27", topic: "Binary Search I", subtopics: ["Classic binary search template", "Lower/upper bound", "Search in rotated array"], tasks: ["Implement 3 binary search templates from memory"], leetcode: ["704. Binary Search", "35. Search Insert Position", "33. Search in Rotated Sorted Array", "153. Find Minimum in Rotated Sorted Array"], diff: "2E 2M", time: "4h" },
          { day: "Thu May 28", topic: "Binary Search II – Answer Space", subtopics: ["Binary search on answer", "Capacity/allocation problems", "Aggressive cows pattern"], tasks: ["Recognize 'minimize the maximum' problems", "Practice predicate function writing"], leetcode: ["875. Koko Eating Bananas", "1011. Capacity to Ship Packages", "410. Split Array Largest Sum"], diff: "3M", time: "4h" },
          { day: "Fri May 29", topic: "Weekly Revision + Error Log", subtopics: ["Hashing patterns summary", "Sorting decision tree"], tasks: ["Re-solve 3 hardest problems", "Update error log", "Write pattern cheat sheet"], leetcode: ["Re-solve 3 from week"], diff: "Mixed", time: "3h" },
          { day: "Sat May 30", topic: "Codeforces/LeetCode Contest + Review", subtopics: ["Timed 2-hour contest", "Post-contest editorial review"], tasks: ["Attempt LeetCode Weekly Contest", "Upsolve 1 problem you couldn't solve"], leetcode: ["Contest problems"], diff: "Mixed", time: "6h" },
        ]
      },
      {
        week: "Week 3 (May 31–Jun 6)",
        title: "Recursion + Backtracking",
        days: [
          { day: "Sun May 31", topic: "Recursion Fundamentals", subtopics: ["Base case & recursive case", "Stack trace mental model", "Recursion tree visualization"], tasks: ["Implement factorial, fibonacci, power", "Draw recursion tree for 3 problems"], leetcode: ["509. Fibonacci Number", "50. Pow(x,n)", "779. K-th Symbol in Grammar"], diff: "2E 1M", time: "5h" },
          { day: "Mon Jun 1", topic: "Recursion – Subsets & Combinations", subtopics: ["Include/exclude pattern", "Subset generation", "Combination sum"], tasks: ["Generate all subsets iteratively then recursively", "Trace execution mentally"], leetcode: ["78. Subsets", "90. Subsets II", "77. Combinations"], diff: "2M 1M", time: "4h" },
          { day: "Tue Jun 2", topic: "Backtracking I – Permutations", subtopics: ["Permutation generation", "Used[] array trick", "Swap-based permutation"], tasks: ["Implement permutations with and without duplicates"], leetcode: ["46. Permutations", "47. Permutations II", "31. Next Permutation"], diff: "3M", time: "4h" },
          { day: "Wed Jun 3", topic: "Backtracking II – Grid + String", subtopics: ["Word search on grid", "Palindrome partitioning", "Pruning strategies"], tasks: ["Implement word search with visited array", "Pruning in palindrome partition"], leetcode: ["79. Word Search", "131. Palindrome Partitioning", "93. Restore IP Addresses"], diff: "3M", time: "4h" },
          { day: "Thu Jun 4", topic: "Backtracking III – N-Queens + Sudoku", subtopics: ["Constraint propagation", "Row/col/diag checks", "Board state backtracking"], tasks: ["Implement N-Queens fully", "Implement Sudoku solver"], leetcode: ["51. N-Queens", "37. Sudoku Solver", "52. N-Queens II"], diff: "3H", time: "4h" },
          { day: "Fri Jun 5", topic: "Recursion/Backtracking Revision", subtopics: ["Pattern map: include/exclude vs swap", "When to prune"], tasks: ["Re-solve 4 problems under 20 min each", "Write recursion template cheat sheet"], leetcode: ["Re-solve 4 from week"], diff: "Mixed", time: "3h" },
          { day: "Sat Jun 6", topic: "Linked List I", subtopics: ["Node class in Java", "Traversal, insertion, deletion", "Reversal (iterative + recursive)"], tasks: ["Implement singly linked list from scratch", "Implement all basic operations"], leetcode: ["206. Reverse Linked List", "21. Merge Two Sorted Lists", "83. Remove Duplicates from Sorted List", "141. Linked List Cycle", "876. Middle of Linked List"], diff: "4E 1M", time: "6h" },
        ]
      },
      {
        week: "Week 4 (Jun 7–15)",
        title: "Linked List + Stack/Queue",
        days: [
          { day: "Sun Jun 7", topic: "Linked List II – Fast/Slow Pointer", subtopics: ["Floyd's cycle detection", "Find cycle entry", "Nth from end"], tasks: ["Implement Floyd's algorithm", "Trace pointer positions mentally"], leetcode: ["142. Linked List Cycle II", "19. Remove Nth Node From End", "234. Palindrome Linked List"], diff: "2M 1E", time: "5h" },
          { day: "Mon Jun 8", topic: "Linked List III – Hard Problems", subtopics: ["Merge K sorted lists", "Reverse in K groups", "Copy list with random pointer"], tasks: ["Implement merge K with PQ", "K-group reversal with dummy node"], leetcode: ["23. Merge K Sorted Lists", "25. Reverse Nodes in K-Group", "138. Copy List with Random Pointer"], diff: "3M/H", time: "4h" },
          { day: "Tue Jun 9", topic: "Stack – Implementation + Patterns", subtopics: ["Stack using array/LinkedList", "Monotonic stack concept", "Next greater element"], tasks: ["Implement stack from scratch", "Solve NGE with monotonic stack"], leetcode: ["20. Valid Parentheses", "155. Min Stack", "496. Next Greater Element I", "739. Daily Temperatures"], diff: "2E 2M", time: "4h" },
          { day: "Wed Jun 10", topic: "Stack – Hard Patterns", subtopics: ["Largest rectangle in histogram", "Trapping rain water", "Calculator problems"], tasks: ["Implement histogram monotonic stack", "Understand stack for calculators"], leetcode: ["84. Largest Rectangle in Histogram", "42. Trapping Rain Water", "224. Basic Calculator"], diff: "3H/M", time: "4h" },
          { day: "Thu Jun 11", topic: "Queue + Deque Patterns", subtopics: ["Queue with 2 stacks", "Deque sliding window", "Circular queue"], tasks: ["Implement Queue using 2 stacks", "Sliding window max with deque"], leetcode: ["232. Implement Queue using Stacks", "239. Sliding Window Maximum", "862. Shortest Subarray with Sum at Least K"], diff: "1E 2M", time: "4h" },
          { day: "Fri Jun 12", topic: "Phase 1 Full Revision Day", subtopics: ["Arrays, Strings, Hashing, Sorting, BS, Recursion, LL, Stack, Queue"], tasks: ["Review all error log entries", "Re-solve 1 problem per topic", "Update pattern cheat sheet"], leetcode: ["8 problems, 1 per topic"], diff: "Mixed", time: "4h" },
          { day: "Sat–Sun Jun 13–15", topic: "Mock OA + Phase Checkpoint", subtopics: ["2-hour timed OA simulation", "Review + weak area identification"], tasks: ["Take full mock OA (3 problems, 90 min)", "Document areas needing work", "Plan Phase 2 adjustments"], leetcode: ["3 new Medium problems timed"], diff: "3M", time: "10h" },
        ]
      }
    ],
    javaFocus: [
      "HashMap<K,V>, HashSet<K>, LinkedHashMap for order",
      "Arrays.sort(arr, Comparator) for custom sorting",
      "StringBuilder for string manipulation (avoid + in loops)",
      "BufferedReader + StreamTokenizer for fast I/O in competitive",
      "Stack<Integer>, Deque<Integer> (ArrayDeque preferred)",
      "ArrayList<Integer> vs int[] — know when to use each",
      "Collections.reverse(), Collections.sort()",
    ],
    blindSpots: [
      "Forgetting to handle edge cases: empty array, single element, all negatives",
      "Off-by-one errors in binary search (lo <= hi vs lo < hi)",
      "Not resetting variables when using sliding window",
      "Stack overflow from missing base case in recursion",
      "Modifying a list while iterating over it",
    ]
  },
  {
    id: 2,
    name: "Core DS & Trees",
    period: "Jun 16 – Jul 31",
    weeks: "Weeks 5–11",
    color: "#085041",
    bg: "#E1F5EE",
    accent: "#1D9E75",
    goal: "Master Trees, BST, Heaps, and core graph intro. Solve Mediums comfortably within 25 min.",
    milestone: "Solve Medium tree/graph problems independently",
    weeklyHours: "~28–35 hrs/week",
    topics: [
      {
        week: "Week 5–6 (Jun 16–29)",
        title: "Binary Trees – Full Coverage",
        days: [
          { day: "Week 5", topic: "Tree Traversals + Views", subtopics: ["Inorder, Preorder, Postorder (recursive + iterative)", "Level order BFS", "Left/Right view, Top/Bottom view"], tasks: ["Implement all traversals from memory", "BFS level-by-level with queue"], leetcode: ["144/94/145. Traversals", "102. Level Order", "199. Right Side View", "637. Average of Levels", "103. Zigzag Level Order"], diff: "2E 3M", time: "28h week" },
          { day: "Week 6", topic: "Tree Properties + Hard Problems", subtopics: ["Height, diameter, LCA", "Path sum problems", "Construct tree from traversals"], tasks: ["Implement LCA with parent tracking", "Implement diameter calculation"], leetcode: ["104. Max Depth", "543. Diameter of Binary Tree", "236. LCA of Binary Tree", "124. Binary Tree Maximum Path Sum", "105. Construct from Preorder+Inorder", "297. Serialize and Deserialize"], diff: "2E 3M 2H", time: "28h week" },
        ]
      },
      {
        week: "Week 7 (Jun 30–Jul 6)",
        title: "BST + Heap",
        days: [
          { day: "Week 7", topic: "BST Operations + Heap", subtopics: ["BST insert, delete, search", "Inorder = sorted property", "Min/Max heap with PriorityQueue", "Kth largest/smallest", "Merge K sorted"], tasks: ["Implement BST from scratch in Java", "Use PriorityQueue with custom Comparator", "Top K problems with heap"], leetcode: ["700/701/98. BST problems", "230. Kth Smallest in BST", "215. Kth Largest Element", "295. Find Median from Data Stream", "373. Find K Pairs with Smallest Sums"], diff: "2E 3M 1H", time: "28h week" },
        ]
      },
      {
        week: "Week 8–9 (Jul 7–20)",
        title: "Greedy + Bit Manipulation",
        days: [
          { day: "Week 8", topic: "Greedy Algorithms", subtopics: ["Activity selection", "Fractional knapsack", "Jump game pattern", "Interval scheduling"], tasks: ["Prove greedy choice property for 3 problems", "Sort-then-greedy pattern"], leetcode: ["455. Assign Cookies", "55. Jump Game", "45. Jump Game II", "435. Non-Overlapping Intervals", "763. Partition Labels", "134. Gas Station"], diff: "2E 4M", time: "28h week" },
          { day: "Week 9", topic: "Bit Manipulation", subtopics: ["AND, OR, XOR, NOT, shifts", "Check/set/clear bit", "XOR tricks (find single, missing)", "Counting bits"], tasks: ["Implement bit operations from scratch", "XOR to find single number"], leetcode: ["136. Single Number", "137. Single Number II", "260. Single Number III", "191. Number of 1 Bits", "231. Power of Two", "190. Reverse Bits", "201. Bitwise AND of Numbers Range"], diff: "3E 4M", time: "28h week" },
        ]
      },
      {
        week: "Week 10–11 (Jul 21–31)",
        title: "Trie + Graph Intro",
        days: [
          { day: "Week 10", topic: "Trie Data Structure", subtopics: ["TrieNode class in Java", "Insert, search, startsWith", "Word dictionary, autocomplete"], tasks: ["Implement Trie from scratch", "Extend for prefix counting"], leetcode: ["208. Implement Trie", "211. Design Add and Search Words", "212. Word Search II", "421. Maximum XOR", "745. Prefix and Suffix Search"], diff: "2M 3H", time: "28h week" },
          { day: "Week 11", topic: "Graph Basics + BFS/DFS", subtopics: ["Adjacency list in Java (Map<Integer,List<Integer>>)", "BFS with queue", "DFS with recursion/stack", "Connected components"], tasks: ["Build graph from edge list", "BFS for shortest path (unweighted)", "DFS for cycle detection"], leetcode: ["200. Number of Islands", "133. Clone Graph", "207. Course Schedule", "210. Course Schedule II", "417. Pacific Atlantic Water Flow"], diff: "2M 3M", time: "28h week" },
        ]
      }
    ],
    javaFocus: [
      "PriorityQueue<int[]>((a,b) -> a[0]-b[0]) — lambda comparator",
      "TreeMap for sorted key access, floorKey/ceilingKey",
      "Map<Integer, List<Integer>> for adjacency list",
      "ArrayDeque as both stack and queue",
      "TrieNode class with children[26] array",
      "int bit manipulation: n & (n-1) to clear lowest bit",
      "Character.isDigit(), Character.toLowerCase() in string problems",
    ],
    blindSpots: [
      "Forgetting to mark visited in BFS/DFS — infinite loops",
      "BST delete is tricky: find in-order successor/predecessor",
      "Heap size maintenance: only keep K elements in PQ",
      "Trie: don't forget isEndOfWord boolean",
      "Greedy doesn't always work — prove it or use DP",
    ]
  },
  {
    id: 3,
    name: "Graphs + DP Foundation",
    period: "Aug 1 – Sep 14",
    weeks: "Weeks 12–17",
    color: "#3C3489",
    bg: "#EEEDFE",
    accent: "#7F77DD",
    goal: "Master advanced graphs and build DP intuition. Core FAANG interview patterns.",
    milestone: "Solve Hard graph problems + Medium DP independently",
    weeklyHours: "~28–35 hrs/week",
    topics: [
      {
        week: "Week 12–13 (Aug 1–14)",
        title: "Advanced Graph Algorithms",
        days: [
          { day: "Week 12", topic: "Shortest Paths", subtopics: ["Dijkstra's (PQ + dist[])", "Bellman-Ford", "Floyd-Warshall", "0-1 BFS"], tasks: ["Implement Dijkstra from scratch in Java", "Bellman-Ford negative weight handling"], leetcode: ["743. Network Delay Time", "787. Cheapest Flights within K Stops", "1334. Find City With Smallest Number of Neighbors", "778. Swim in Rising Water"], diff: "4M", time: "28h week" },
          { day: "Week 13", topic: "MST + Advanced Graph", subtopics: ["Union Find (with path compression + rank)", "Kruskal's MST", "Prim's MST", "Topological sort (Kahn's BFS)"], tasks: ["Implement Union Find with both optimizations", "Kruskal's with sorting"], leetcode: ["1584. Min Cost to Connect All Points", "684. Redundant Connection", "1631. Path with Minimum Effort", "269. Alien Dictionary (topoSort)"], diff: "3M 1H", time: "28h week" },
        ]
      },
      {
        week: "Week 14–17 (Aug 15–Sep 14)",
        title: "Dynamic Programming – Complete",
        days: [
          { day: "Week 14", topic: "DP 1D – Linear Patterns", subtopics: ["Memoization vs Tabulation", "Fibonacci-style DP", "House Robber pattern", "Coin change pattern"], tasks: ["Solve same problem with top-down then bottom-up", "State definition practice"], leetcode: ["70. Climbing Stairs", "198. House Robber", "213. House Robber II", "322. Coin Change", "518. Coin Change II", "300. Longest Increasing Subsequence"], diff: "2E 4M", time: "28h week" },
          { day: "Week 15", topic: "DP 2D – Grid + String", subtopics: ["Grid DP: unique paths, min path sum", "Edit distance (LCS, LIS family)", "Knapsack 0/1"], tasks: ["Implement LCS, Edit Distance tables by hand first", "Knapsack 0/1 visualization"], leetcode: ["62. Unique Paths", "64. Minimum Path Sum", "1143. LCS", "72. Edit Distance", "97. Interleaving String", "416. Partition Equal Subset Sum"], diff: "2M 4M", time: "28h week" },
          { day: "Week 16", topic: "DP – Intervals + Trees", subtopics: ["Burst balloons pattern", "Palindrome DP", "Tree DP (rob houses on tree)"], tasks: ["Interval DP: solve on subranges [i,j]", "DP on tree: define state at each node"], leetcode: ["312. Burst Balloons", "516. Longest Palindromic Subsequence", "1039. Min Cost to Merge Stones", "337. House Robber III", "1547. Min Cost to Cut a Stick"], diff: "5H", time: "28h week" },
          { day: "Week 17", topic: "DP – State Machine + Stocks", subtopics: ["Buy/sell stocks family", "State transitions with cooldown", "DP with k transactions"], tasks: ["Build state machine diagram before coding", "Generalize from 1→2→k transactions"], leetcode: ["121/122/123/188/309/714. All Stock Problems", "256. Paint House", "265. Paint House II"], diff: "2E 4M 1H", time: "28h week" },
        ]
      }
    ],
    javaFocus: [
      "int[] dist = new int[n]; Arrays.fill(dist, Integer.MAX_VALUE) for Dijkstra",
      "PriorityQueue<int[]>((a,b) -> a[0]-b[0]) for Dijkstra heap",
      "int[][] dp = new int[m+1][n+1]; for 2D DP — initialize carefully",
      "Union Find: int[] parent, int[] rank — path compression in find()",
      "Map<Character, List<Character>> for graph building from strings",
      "Memoization: HashMap<String, Integer> or int[][] memo with -1 as unvisited",
    ],
    blindSpots: [
      "DP: defining state wrong — always ask 'what does dp[i] represent?'",
      "Dijkstra fails with negative edges — use Bellman-Ford",
      "Union Find: always implement find() with path compression",
      "DP transition: make sure you don't use future state in current calculation",
      "Graph: directed vs undirected — affects cycle detection logic",
    ]
  },
  {
    id: 4,
    name: "Advanced Patterns + Mock Prep",
    period: "Sep 15 – Oct 31",
    weeks: "Weeks 18–24",
    color: "#993C1D",
    bg: "#FAECE7",
    accent: "#D85A30",
    goal: "Segment Trees, advanced DP, system design basics, and intensive mock interview prep.",
    milestone: "Consistent Medium solver, attempt Hard problems",
    weeklyHours: "~30–38 hrs/week",
    topics: [
      {
        week: "Week 18–19",
        title: "Segment Trees + Advanced DS",
        days: [
          { day: "Week 18", topic: "Segment Tree", subtopics: ["Build, query, update", "Range sum, range min/max", "Lazy propagation basics"], tasks: ["Implement segment tree from scratch", "Range update with lazy prop"], leetcode: ["307. Range Sum Query - Mutable", "315. Count of Smaller Numbers After Self", "327. Count of Range Sum", "729. My Calendar I"], diff: "2M 2H", time: "28h week" },
          { day: "Week 19", topic: "Advanced Patterns Review", subtopics: ["Sliding window hard patterns", "Binary search on sorted 2D", "Monotonic deque hard"], tasks: ["Re-attempt Week 1–11 hard problems", "Speed run: 4 mediums in 2 hours"], leetcode: ["4. Median of Two Sorted Arrays", "668. Kth Smallest in Multiplication Table", "407. Trapping Rain Water II"], diff: "3H", time: "28h week" },
        ]
      },
      {
        week: "Week 20–24",
        title: "Mock OA + Interview Intensive",
        days: [
          { day: "Week 20", topic: "Full Mock OA Week", subtopics: ["Daily 2 Mediums in 45 min", "Weekly contest Saturday"], tasks: ["LeetCode weekly contest", "Codeforces Round"], leetcode: ["10 new Mediums across topics"], diff: "10M", time: "30h week" },
          { day: "Week 21", topic: "Company-Tag Problems", subtopics: ["Amazon OA patterns", "Microsoft OA patterns", "Google patterns"], tasks: ["Filter LeetCode by company tag", "3 problems/day company-tagged"], leetcode: ["Amazon: 146/347/200/238/297", "Microsoft: 42/23/41/295/76", "Google: 528/843/212/847/140"], diff: "Mixed M/H", time: "30h week" },
          { day: "Week 22", topic: "Verbal Interview Practice", subtopics: ["Explain approach out loud", "Time/space complexity narration", "Edge case enumeration"], tasks: ["Record yourself solving 2 problems/day", "Practice 'think out loud' before coding"], leetcode: ["5 problems, verbal walkthrough focus"], diff: "3M 2H", time: "30h week" },
          { day: "Week 23–24", topic: "Resume + Projects + Final OA Sim", subtopics: ["STAR format behavioral", "DSA project on resume", "2 full mock OAs"], tasks: ["Complete 2 full mock OAs (90 min each)", "Prepare 3 behavioral answers", "Polish resume"], leetcode: ["2 full OA simulations"], diff: "OA format", time: "35h week" },
        ]
      }
    ],
    javaFocus: [
      "Segment tree as int[] tree = new int[4*n]",
      "Lazy propagation with int[] lazy array",
      "BIT (Fenwick Tree): tree[i] += val; i += i & (-i)",
      "Coordinate compression before Segment Tree on large values",
      "Fast I/O: new BufferedReader(new InputStreamReader(System.in))",
    ],
    blindSpots: [
      "Segment tree size: always allocate 4*n, not 2*n",
      "Lazy propagation: push down before any query or update",
      "Mock OA: time yourself — don't practice without a clock",
      "Behavioral interviews: prepare STAR stories for at least 5 scenarios",
    ]
  },
  {
    id: 5,
    name: "Final Sprint & Placement Ready",
    period: "Nov 1 – Nov 30",
    weeks: "Weeks 25–28",
    color: "#3B6D11",
    bg: "#EAF3DE",
    accent: "#639922",
    goal: "Peak performance mode. Revision, mock interviews, placement targeting.",
    milestone: "Full placement readiness — pass any OA/tech interview",
    weeklyHours: "~35–42 hrs/week",
    topics: [
      {
        week: "Week 25–26 (Nov 1–14)",
        title: "Blind 75 + NeetCode 150 Sprint",
        days: [
          { day: "Nov 1–7", topic: "Blind 75 – Speed Run", subtopics: ["All Blind 75 problems", "Target: solve each in under 20 min", "Review solutions for all Hard"], tasks: ["25 problems/week from Blind 75", "Aim for 100% solve rate on Easy/Medium"], leetcode: ["Full Blind 75 list — neetcode.io"], diff: "Mix", time: "35h week" },
          { day: "Nov 8–14", topic: "NeetCode 150 Gap Fill", subtopics: ["Identify unsolved from NC150", "Focus on hard problems from weak topics"], tasks: ["Solve 30+ remaining NeetCode 150 problems", "Error log final review"], leetcode: ["NeetCode 150 remaining"], diff: "Mix M/H", time: "35h week" },
        ]
      },
      {
        week: "Week 27–28 (Nov 15–30)",
        title: "Final Mock Interviews + Placement",
        days: [
          { day: "Nov 15–22", topic: "Mock Interview Circuit", subtopics: ["3 mock interviews/week", "Timed, verbal, full process", "Peer or platform mocks"], tasks: ["Use Pramp/Interviewing.io", "2 full coding rounds + 1 behavioral/week"], leetcode: ["Interview-simulated solving"], diff: "Full simulation", time: "38h week" },
          { day: "Nov 23–30", topic: "Placement Week Readiness", subtopics: ["Final revision of all patterns", "Top 20 most important problems review", "Mental prep + stamina"], tasks: ["Review all cheat sheets", "Solve 3 problems/day at moderate pace", "Rest and confidence building"], leetcode: ["20 revision problems from error log"], diff: "Mixed", time: "35h week" },
        ]
      }
    ],
    javaFocus: [
      "Master all Java STL: know Big-O of PQ, TreeMap, HashMap operations",
      "Clean code: meaningful variable names in interviews",
      "No import errors: memorize key imports (java.util.*, java.io.*)",
      "Edge case habit: always check null, empty, single element",
    ],
    blindSpots: [
      "Don't memorize solutions — understand the pattern",
      "Always confirm problem constraints before starting",
      "Practice writing on whiteboard/paper occasionally",
      "Don't skip verbal explanation practice — it's 40% of the interview",
    ]
  }
];

export const revisionSystem = {
  daily: ["10 min: Review yesterday's error log entry", "Re-solve 1 problem you found hard (< 15 min target)", "Add any new patterns/tricks to cheat sheet"],
  weekly: ["Sunday: Full topic revision (all problems from the week, timed)", "Re-solve 3 hardest problems at faster pace", "Contest: LeetCode Weekly or Codeforces Round", "Update error log with weekly patterns"],
  monthly: ["Full mock OA (90 min, 3 problems)", "Revisit Month-1 topics (spaced repetition)", "Checkpoints: are you meeting milestones?", "Adjust plan for next month if behind"],
  errorLog: ["Problem name + link", "Date first attempted", "What went wrong (logic / code / edge case)", "Correct approach in 2-3 lines", "Date of successful re-solve"]
};

export const milestones = [
  { month: "Jun 15", label: "Phase 1 Complete", check: "Solve any Easy in <15 min, Mediums in <30 min in Arrays/Strings/Hashing/BS/Recursion/LL/Stack" },
  { month: "Jul 31", label: "Phase 2 Complete", check: "Tree + BST + Heap + Graph BFS/DFS — comfortable with all Medium problems, attempt Hards" },
  { month: "Sep 14", label: "Phase 3 Complete", check: "Implement Dijkstra, Topological Sort, and solve 4 different DP patterns independently" },
  { month: "Oct 31", label: "Phase 4 Complete", check: "Complete 2 timed mock OAs. Solve 4/5 problems. Verbal explanation solid" },
  { month: "Nov 30", label: "PLACEMENT READY", check: "Blind 75: 90%+ solved. Medium: consistently <25 min. Hard: can attempt 60%+. OA: confident" },
];

export default function DSARoadmap() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedWeek, setExpandedWeek] = useState(null);

  const phase = phases[activePhase];

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", minHeight: "100vh", background: "var(--color-background-tertiary)", padding: "0 0 40px" }}>
      <h2 className="sr-only">DSA Placement Preparation Roadmap May–November 2026</h2>

      {/* Header */}
      <div style={{ background: "#1a1a2e", padding: "28px 32px 20px", borderBottom: "3px solid #e94560" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: "#e94560", letterSpacing: 3, textTransform: "uppercase" }}>Java DSA Bootcamp</span>
            <span style={{ color: "#666", fontSize: 13 }}>17 May → 30 Nov 2026</span>
          </div>
          <h1 style={{ color: "#f0f0f0", fontSize: 26, margin: "6px 0 4px", fontWeight: 400, letterSpacing: -0.5 }}>Complete Placement Preparation Roadmap</h1>
          <p style={{ color: "#aaa", fontSize: 14, margin: 0 }}>196 days · 5 phases · 750+ LeetCode problems · Mock OA + Interview prep</p>
        </div>
      </div>

      {/* Milestone Timeline */}
      <div style={{ background: "#111827", padding: "16px 32px", borderBottom: "1px solid #333" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
          {milestones.map((m, i) => (
            <div key={i} style={{ flex: "0 0 auto", background: i === 4 ? "#1d4a1d" : "#1e2535", border: `1px solid ${i === 4 ? "#3a8a3a" : "#333"}`, borderRadius: 8, padding: "8px 14px", minWidth: 150 }}>
              <div style={{ fontSize: 11, color: i === 4 ? "#7ec87e" : "#888", fontFamily: "monospace", marginBottom: 3 }}>{m.month}</div>
              <div style={{ fontSize: 13, color: i === 4 ? "#c8f0c8" : "#ddd", fontWeight: 500, fontFamily: "sans-serif" }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px 0" }}>

        {/* Phase Selector */}
        <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
          {phases.map((p, i) => (
            <button key={i} onClick={() => { setActivePhase(i); setActiveTab("overview"); setExpandedWeek(null); }}
              style={{
                padding: "8px 16px", borderRadius: 6, border: `1.5px solid ${activePhase === i ? p.color : "var(--color-border-tertiary)"}`,
                background: activePhase === i ? p.bg : "var(--color-background-primary)",
                color: activePhase === i ? p.color : "var(--color-text-secondary)",
                fontSize: 13, cursor: "pointer", fontFamily: "sans-serif", fontWeight: activePhase === i ? 500 : 400,
                transition: "all 0.15s"
              }}>
              <span style={{ fontFamily: "monospace", fontSize: 11 }}>P{p.id}</span> {p.name}
            </button>
          ))}
        </div>

        {/* Phase Header Card */}
        <div style={{ background: phase.bg, border: `1.5px solid ${phase.accent}`, borderRadius: 12, padding: "20px 24px", marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 12, color: phase.color, fontFamily: "monospace", marginBottom: 4, letterSpacing: 1 }}>PHASE {phase.id} · {phase.weeks}</div>
              <h2 style={{ fontSize: 20, margin: "0 0 6px", color: phase.color, fontFamily: "sans-serif", fontWeight: 500 }}>{phase.name}</h2>
              <p style={{ margin: 0, fontSize: 14, color: phase.color, opacity: 0.85 }}>{phase.goal}</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 12, color: phase.color, opacity: 0.7, fontFamily: "sans-serif" }}>Period</div>
              <div style={{ fontSize: 15, color: phase.color, fontWeight: 500, fontFamily: "sans-serif" }}>{phase.period}</div>
              <div style={{ fontSize: 12, color: phase.color, opacity: 0.7, marginTop: 4, fontFamily: "sans-serif" }}>{phase.weeklyHours}</div>
            </div>
          </div>
          <div style={{ marginTop: 14, padding: "10px 14px", background: "rgba(255,255,255,0.5)", borderRadius: 8, borderLeft: `3px solid ${phase.color}` }}>
            <span style={{ fontSize: 12, color: phase.color, fontFamily: "monospace" }}>MILESTONE: </span>
            <span style={{ fontSize: 14, color: phase.color, fontFamily: "sans-serif" }}>{phase.milestone}</span>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 0, marginBottom: 20, borderBottom: "1px solid var(--color-border-tertiary)" }}>
          {["overview", "weekly-plan", "java-guide", "revision"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              style={{
                padding: "10px 18px", border: "none", borderBottom: `2px solid ${activeTab === tab ? phase.color : "transparent"}`,
                background: "none", color: activeTab === tab ? phase.color : "var(--color-text-secondary)",
                fontSize: 13, cursor: "pointer", fontFamily: "sans-serif", fontWeight: activeTab === tab ? 500 : 400,
                textTransform: "capitalize"
              }}>
              {tab.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Tab: Overview */}
        {activeTab === "overview" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
              {phase.topics.map((t, i) => (
                <div key={i} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "16px 20px" }}>
                  <div style={{ fontSize: 11, color: phase.accent, fontFamily: "monospace", marginBottom: 6 }}>{t.week}</div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: "var(--color-text-primary)", marginBottom: 10, fontFamily: "sans-serif" }}>{t.title}</div>
                  {t.days.map((d, j) => (
                    <div key={j} style={{ marginBottom: 10, paddingBottom: 10, borderBottom: j < t.days.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                        <span style={{ fontSize: 12, fontWeight: 500, color: phase.color, fontFamily: "sans-serif" }}>{d.day}</span>
                        <span style={{ fontSize: 11, color: "var(--color-text-secondary)", fontFamily: "monospace", background: "var(--color-background-secondary)", padding: "2px 7px", borderRadius: 4 }}>{d.time} · {d.diff}</span>
                      </div>
                      <div style={{ fontSize: 13, color: "var(--color-text-primary)", marginBottom: 4, fontFamily: "sans-serif" }}>{d.topic}</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                        {d.leetcode.map((lc, k) => (
                          <span key={k} style={{ fontSize: 11, background: phase.bg, color: phase.color, padding: "2px 8px", borderRadius: 4, fontFamily: "monospace" }}>{lc}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Weekly Plan */}
        {activeTab === "weekly-plan" && (
          <div>
            {phase.topics.map((t, i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <button onClick={() => setExpandedWeek(expandedWeek === i ? null : i)}
                  style={{ width: "100%", textAlign: "left", background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: expandedWeek === i ? "12px 12px 0 0" : 12, padding: "14px 20px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontSize: 11, color: phase.accent, fontFamily: "monospace", marginRight: 12 }}>{t.week}</span>
                    <span style={{ fontSize: 15, fontWeight: 500, color: "var(--color-text-primary)", fontFamily: "sans-serif" }}>{t.title}</span>
                  </div>
                  <span style={{ color: "var(--color-text-secondary)", fontSize: 18 }}>{expandedWeek === i ? "−" : "+"}</span>
                </button>
                {expandedWeek === i && (
                  <div style={{ border: "0.5px solid var(--color-border-tertiary)", borderTop: "none", borderRadius: "0 0 12px 12px", overflow: "hidden" }}>
                    {t.days.map((d, j) => (
                      <div key={j} style={{ padding: "14px 20px", borderBottom: j < t.days.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none", background: j % 2 === 0 ? "var(--color-background-primary)" : "var(--color-background-secondary)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                          <span style={{ fontSize: 13, fontWeight: 500, color: phase.color, fontFamily: "sans-serif" }}>{d.day}</span>
                          <div style={{ display: "flex", gap: 8 }}>
                            <span style={{ fontSize: 11, fontFamily: "monospace", color: "var(--color-text-secondary)", background: "var(--color-background-tertiary)", padding: "2px 8px", borderRadius: 4 }}>⏱ {d.time}</span>
                            <span style={{ fontSize: 11, fontFamily: "monospace", color: phase.color, background: phase.bg, padding: "2px 8px", borderRadius: 4 }}>{d.diff}</span>
                          </div>
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)", marginBottom: 6, fontFamily: "sans-serif" }}>{d.topic}</div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                          <div>
                            <div style={{ fontSize: 11, color: "var(--color-text-secondary)", fontFamily: "monospace", marginBottom: 4 }}>SUBTOPICS</div>
                            {d.subtopics.map((s, k) => (
                              <div key={k} style={{ fontSize: 12, color: "var(--color-text-primary)", marginBottom: 2, paddingLeft: 10, borderLeft: `2px solid ${phase.accent}`, fontFamily: "sans-serif" }}>{s}</div>
                            ))}
                          </div>
                          <div>
                            <div style={{ fontSize: 11, color: "var(--color-text-secondary)", fontFamily: "monospace", marginBottom: 4 }}>TASKS</div>
                            {d.tasks.map((s, k) => (
                              <div key={k} style={{ fontSize: 12, color: "var(--color-text-primary)", marginBottom: 2, fontFamily: "sans-serif" }}>✦ {s}</div>
                            ))}
                          </div>
                          <div>
                            <div style={{ fontSize: 11, color: "var(--color-text-secondary)", fontFamily: "monospace", marginBottom: 4 }}>LEETCODE</div>
                            {d.leetcode.map((lc, k) => (
                              <div key={k} style={{ fontSize: 11, color: phase.color, marginBottom: 3, fontFamily: "monospace", background: phase.bg, padding: "2px 8px", borderRadius: 4, display: "inline-block", marginRight: 4, marginBottom: 4 }}>{lc}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab: Java Guide */}
        {activeTab === "java-guide" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "20px" }}>
              <div style={{ fontSize: 12, color: phase.accent, fontFamily: "monospace", marginBottom: 10 }}>JAVA STL FOCUS — {phase.name}</div>
              {phase.javaFocus.map((j, i) => (
                <div key={i} style={{ marginBottom: 10, padding: "8px 12px", background: "var(--color-background-secondary)", borderRadius: 6, borderLeft: `3px solid ${phase.accent}` }}>
                  <code style={{ fontSize: 12, color: "var(--color-text-primary)", whiteSpace: "pre-wrap", wordBreak: "break-word", fontFamily: "monospace" }}>{j}</code>
                </div>
              ))}
            </div>
            <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "20px" }}>
              <div style={{ fontSize: 12, color: "#D85A30", fontFamily: "monospace", marginBottom: 10 }}>⚠ COMMON BLIND SPOTS</div>
              {phase.blindSpots.map((b, i) => (
                <div key={i} style={{ marginBottom: 10, padding: "8px 12px", background: "#FAECE7", borderRadius: 6, borderLeft: "3px solid #D85A30" }}>
                  <span style={{ fontSize: 13, color: "#993C1D", fontFamily: "sans-serif" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Revision */}
        {activeTab === "revision" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {[
              { label: "Daily Revision (10–15 min)", items: revisionSystem.daily, color: "#1D9E75", bg: "#E1F5EE" },
              { label: "Weekly Revision (Sunday)", items: revisionSystem.weekly, color: "#378ADD", bg: "#E6F1FB" },
              { label: "Monthly Checkpoint", items: revisionSystem.monthly, color: "#7F77DD", bg: "#EEEDFE" },
              { label: "Error Log Format", items: revisionSystem.errorLog, color: "#D85A30", bg: "#FAECE7" },
            ].map((r, i) => (
              <div key={i} style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ fontSize: 12, color: r.color, fontFamily: "monospace", marginBottom: 12, fontWeight: 500 }}>{r.label}</div>
                {r.items.map((item, j) => (
                  <div key={j} style={{ padding: "8px 12px", background: r.bg, borderRadius: 6, marginBottom: 8, fontSize: 13, color: r.color, fontFamily: "sans-serif", lineHeight: 1.5 }}>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* All Milestones Section */}
        <div style={{ marginTop: 32, background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "20px 24px" }}>
          <div style={{ fontSize: 12, color: "var(--color-text-secondary)", fontFamily: "monospace", marginBottom: 16 }}>PROGRESS CHECKPOINTS</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {milestones.map((m, i) => (
              <div key={i} style={{ display: "flex", gap: 16, padding: "12px 0", borderBottom: i < milestones.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none", alignItems: "flex-start" }}>
                <div style={{ flex: "0 0 80px", fontFamily: "monospace", fontSize: 12, color: i === 4 ? "#3B6D11" : "var(--color-text-secondary)", fontWeight: i === 4 ? 500 : 400 }}>{m.month}</div>
                <div style={{ flex: "0 0 160px", fontWeight: 500, fontSize: 14, color: i === 4 ? "#3B6D11" : "var(--color-text-primary)", fontFamily: "sans-serif" }}>{m.label}</div>
                <div style={{ fontSize: 13, color: "var(--color-text-secondary)", fontFamily: "sans-serif", lineHeight: 1.5 }}>{m.check}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div style={{ marginTop: 20, textAlign: "center", fontSize: 12, color: "var(--color-text-secondary)", fontFamily: "sans-serif", padding: "0 0 8px" }}>
          Click each phase button to explore topics · Use tabs to see daily plan, Java tips, and revision system
        </div>
      </div>
    </div>
  );
}

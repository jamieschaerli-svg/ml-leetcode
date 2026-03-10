import { Problem } from "@/lib/types";

export const problems: Problem[] = [
  // ==================== EASY (Levels 1-10) ====================
  {
    id: 1,
    title: "Hello Data Science",
    description:
      "Print the message 'Hello, Data Science!' to the console. This is your first step into the world of data and ML.",
    difficulty: "easy",
    level: 1,
    concept:
      "The print() function is the most basic way to output data in Python. Every data scientist uses it to inspect data, debug code, and display results.",
    realWorldUse:
      "In machine learning, you constantly print model accuracy, data shapes, and predictions to understand what your code is doing.",
    whyItMatters:
      "Before you can analyze data, you need to see it. print() is how you make your program talk to you.",
    starterCode: '# Print "Hello, Data Science!" below\n',
    solution: 'print("Hello, Data Science!")',
    hints: [
      "Use the print() function",
      'Put your text inside quotes: "Hello, Data Science!"',
      'The answer is: print("Hello, Data Science!")',
    ],
    testCases: [{ input: "", expected: "Hello, Data Science!" }],
  },
  {
    id: 2,
    title: "Store a Number",
    description:
      "Create a variable called `age` and set it to 25. Then print it.",
    difficulty: "easy",
    level: 2,
    concept:
      "Variables store data for later use. In Python, you simply write name = value to create a variable.",
    realWorldUse:
      "In ML, variables hold everything: dataset sizes, learning rates, model parameters, and predictions.",
    whyItMatters:
      "Every program needs to store and retrieve data. Variables are the foundation of all programming.",
    starterCode: "# Create a variable called age set to 25, then print it\n",
    solution: "age = 25\nprint(age)",
    hints: [
      "Use the = sign to assign a value",
      "Write: age = 25",
      "Then add: print(age)",
    ],
    testCases: [{ input: "", expected: "25" }],
  },
  {
    id: 3,
    title: "Add Two Numbers",
    description:
      "Create two variables `a = 10` and `b = 20`. Print their sum.",
    difficulty: "easy",
    level: 3,
    concept:
      "Arithmetic operations (+, -, *, /) work on numbers in Python just like in math.",
    realWorldUse:
      "Adding numbers is fundamental in data science — summing sales, calculating totals, aggregating metrics.",
    whyItMatters:
      "Math operations are the building blocks of every ML algorithm, from simple averages to neural networks.",
    starterCode:
      "# Create a = 10 and b = 20, then print their sum\n",
    solution: "a = 10\nb = 20\nprint(a + b)",
    hints: [
      "Use + to add two numbers",
      "Store 10 in a and 20 in b",
      "print(a + b) gives you 30",
    ],
    testCases: [{ input: "", expected: "30" }],
  },
  {
    id: 4,
    title: "String Formatting",
    description:
      'Create a variable `name = "Data Scientist"` and print "I am a Data Scientist" using an f-string.',
    difficulty: "easy",
    level: 4,
    concept:
      "F-strings (f\"...\") let you embed variables directly inside strings using {variable_name}.",
    realWorldUse:
      "Data scientists use f-strings to create reports, log messages, and display results with dynamic values.",
    whyItMatters:
      "Communicating results clearly is as important as computing them. F-strings make output readable.",
    starterCode:
      '# Set name = "Data Scientist" and print "I am a Data Scientist" using f-string\n',
    solution: 'name = "Data Scientist"\nprint(f"I am a {name}")',
    hints: [
      "Use f before the string: f\"...\"",
      "Put variables inside curly braces: {name}",
      'print(f"I am a {name}")',
    ],
    testCases: [{ input: "", expected: "I am a Data Scientist" }],
  },
  {
    id: 5,
    title: "Create a Dataset",
    description:
      "Create a list called `dataset` with values [5, 10, 15, 20, 25] and print it.",
    difficulty: "easy",
    level: 5,
    concept:
      "Lists are Python's most common data structure. They store ordered collections of values.",
    realWorldUse:
      "Datasets in ML are essentially lists (or arrays) of values. Every dataset you'll work with starts as a collection.",
    whyItMatters:
      "You can't do data science without data. Lists are how you store and organize data in Python.",
    starterCode: "# Create dataset = [5, 10, 15, 20, 25] and print it\n",
    solution: "dataset = [5, 10, 15, 20, 25]\nprint(dataset)",
    hints: [
      "Use square brackets [] to create a list",
      "Separate values with commas",
      "dataset = [5, 10, 15, 20, 25]",
    ],
    testCases: [{ input: "", expected: "[5, 10, 15, 20, 25]" }],
  },
  {
    id: 6,
    title: "List Length",
    description:
      "Given `data = [3, 7, 1, 9, 4]`, print how many elements it contains.",
    difficulty: "easy",
    level: 6,
    concept:
      "len() returns the number of items in a list. It's one of the most-used functions in Python.",
    realWorldUse:
      "Knowing the size of your dataset is the first step in any analysis. len() tells you how many rows/samples you have.",
    whyItMatters:
      "Before processing data, you need to know its size — for splitting training/test sets, batching, and validation.",
    starterCode: "data = [3, 7, 1, 9, 4]\n# Print the length of data\n",
    solution: "data = [3, 7, 1, 9, 4]\nprint(len(data))",
    hints: [
      "Use the len() function",
      "Pass the list inside: len(data)",
      "print(len(data)) outputs 5",
    ],
    testCases: [{ input: "", expected: "5" }],
  },
  {
    id: 7,
    title: "Access List Elements",
    description:
      "Given `temps = [72, 68, 75, 80, 65]`, print the first and last temperature.",
    difficulty: "easy",
    level: 7,
    concept:
      "List indexing: use [0] for first element, [-1] for last. Python counts from 0.",
    realWorldUse:
      "Accessing specific data points — the latest reading, the first record, a particular feature value.",
    whyItMatters:
      "Data manipulation requires accessing specific elements. Indexing is how you pinpoint exact values.",
    starterCode:
      "temps = [72, 68, 75, 80, 65]\n# Print the first and last temperature\n",
    solution: "temps = [72, 68, 75, 80, 65]\nprint(temps[0])\nprint(temps[-1])",
    hints: [
      "Use [0] to get the first element",
      "Use [-1] to get the last element",
      "print(temps[0]) and print(temps[-1])",
    ],
    testCases: [{ input: "", expected: "72\n65" }],
  },
  {
    id: 8,
    title: "Sum of a List",
    description:
      "Given `sales = [100, 250, 175, 300, 225]`, print the total sum.",
    difficulty: "easy",
    level: 8,
    concept:
      "sum() adds up all numbers in a list. It's a built-in function that saves you from writing loops.",
    realWorldUse:
      "Summing values is everywhere: total revenue, total clicks, total predictions, loss accumulation.",
    whyItMatters:
      "Aggregation is the first step in understanding data. Sum is the most basic and essential aggregation.",
    starterCode:
      "sales = [100, 250, 175, 300, 225]\n# Print the total sum\n",
    solution: "sales = [100, 250, 175, 300, 225]\nprint(sum(sales))",
    hints: [
      "Use the sum() function",
      "Pass the list: sum(sales)",
      "print(sum(sales)) gives 1050",
    ],
    testCases: [{ input: "", expected: "1050" }],
  },
  {
    id: 9,
    title: "Loop Through Data",
    description:
      "Given `scores = [85, 92, 78, 90, 88]`, use a for loop to print each score.",
    difficulty: "easy",
    level: 9,
    concept:
      "For loops iterate through each item in a list. The syntax is: for item in list:",
    realWorldUse:
      "Loops process each data point — iterating through training samples, processing batch predictions, cleaning rows.",
    whyItMatters:
      "Almost every ML algorithm iterates over data. Loops are the mechanism that makes this possible.",
    starterCode:
      "scores = [85, 92, 78, 90, 88]\n# Use a for loop to print each score\n",
    solution:
      "scores = [85, 92, 78, 90, 88]\nfor score in scores:\n    print(score)",
    hints: [
      "Start with: for score in scores:",
      "Indent the next line and use print(score)",
      "for score in scores:\\n    print(score)",
    ],
    testCases: [{ input: "", expected: "85\n92\n78\n90\n88" }],
  },
  {
    id: 10,
    title: "Conditional Logic",
    description:
      "Given `temperature = 35`, print 'Hot' if it's above 30, otherwise print 'Cool'.",
    difficulty: "easy",
    level: 10,
    concept:
      "If/else statements let your code make decisions. The condition is checked and one branch executes.",
    realWorldUse:
      "Classification is a core ML task — deciding if an email is spam, if a transaction is fraud, if a patient is at risk.",
    whyItMatters:
      "Decision-making is the foundation of all classification algorithms in machine learning.",
    starterCode:
      "temperature = 35\n# Print 'Hot' if above 30, otherwise 'Cool'\n",
    solution:
      'temperature = 35\nif temperature > 30:\n    print("Hot")\nelse:\n    print("Cool")',
    hints: [
      "Use if temperature > 30:",
      'Add print("Hot") inside the if block',
      'Add else: and print("Cool")',
    ],
    testCases: [{ input: "", expected: "Hot" }],
  },

  // ==================== MEDIUM (Levels 11-24) ====================
  {
    id: 11,
    title: "Count Above Threshold",
    description:
      "Given `values = [12, 45, 23, 67, 34, 89, 15]`, count how many values are above 30 and print the count.",
    difficulty: "medium",
    level: 11,
    concept:
      "Combining loops with conditionals lets you filter and count data that meets specific criteria.",
    realWorldUse:
      "Filtering data points above/below thresholds — counting outliers, positive predictions, or qualifying samples.",
    whyItMatters:
      "Data filtering is essential for cleaning datasets and extracting meaningful subsets for analysis.",
    starterCode:
      "values = [12, 45, 23, 67, 34, 89, 15]\n# Count how many values are above 30\n",
    solution:
      "values = [12, 45, 23, 67, 34, 89, 15]\ncount = 0\nfor v in values:\n    if v > 30:\n        count += 1\nprint(count)",
    hints: [
      "Create a counter variable starting at 0",
      "Loop through values and check if each is > 30",
      "Increment counter with count += 1 inside the if",
    ],
    testCases: [{ input: "", expected: "4" }],
  },
  {
    id: 12,
    title: "Calculate the Average",
    description:
      "Given `dataset = [10, 20, 30, 40, 50]`, calculate and print the average (mean).",
    difficulty: "medium",
    level: 12,
    concept:
      "The mean (average) is sum divided by count. It's the most fundamental statistical measure.",
    realWorldUse:
      "Data scientists calculate averages constantly: average salary, average accuracy, mean squared error.",
    whyItMatters:
      "The mean is used in nearly every ML algorithm — from simple statistics to neural network loss functions.",
    starterCode:
      "dataset = [10, 20, 30, 40, 50]\n# Calculate and print the average\n",
    solution:
      "dataset = [10, 20, 30, 40, 50]\naverage = sum(dataset) / len(dataset)\nprint(average)",
    hints: [
      "Average = total sum divided by number of elements",
      "Use sum(dataset) / len(dataset)",
      "print(sum(dataset) / len(dataset)) gives 30.0",
    ],
    testCases: [{ input: "", expected: "30.0" }],
  },
  {
    id: 13,
    title: "Sort a List",
    description:
      "Given `grades = [88, 72, 95, 60, 83]`, print the list sorted from lowest to highest.",
    difficulty: "medium",
    level: 13,
    concept:
      "sorted() returns a new sorted list. You can also use .sort() to sort in place. Default order is ascending.",
    realWorldUse:
      "Sorting is fundamental in data analysis — ranking results, finding top-N items, organizing leaderboards.",
    whyItMatters:
      "Many algorithms depend on sorted data. Binary search, percentile calculations, and rank-based methods all need sorting.",
    starterCode:
      "grades = [88, 72, 95, 60, 83]\n# Print the sorted list (lowest to highest)\n",
    solution: "grades = [88, 72, 95, 60, 83]\nprint(sorted(grades))",
    hints: [
      "Use the sorted() function",
      "Pass the list: sorted(grades)",
      "print(sorted(grades)) gives [60, 72, 83, 88, 95]",
    ],
    testCases: [{ input: "", expected: "[60, 72, 83, 88, 95]" }],
  },
  {
    id: 14,
    title: "Find the Maximum",
    description:
      "Given `prices = [29.99, 45.50, 12.00, 67.25, 33.75]`, find and print the highest price.",
    difficulty: "medium",
    level: 14,
    concept:
      "max() returns the largest value in a list. You can also find it manually with a loop.",
    realWorldUse:
      "Finding maximum values: peak sales, highest temperature, best model accuracy, top prediction confidence.",
    whyItMatters:
      "Identifying extremes in data helps detect outliers and find optimal values.",
    starterCode:
      "prices = [29.99, 45.50, 12.00, 67.25, 33.75]\n# Find and print the highest price\n",
    solution: "prices = [29.99, 45.50, 12.00, 67.25, 33.75]\nprint(max(prices))",
    hints: [
      "Python has a built-in max() function",
      "Pass the list: max(prices)",
      "print(max(prices)) gives 67.25",
    ],
    testCases: [{ input: "", expected: "67.25" }],
  },
  {
    id: 15,
    title: "Slice a List",
    description:
      "Given `data = [10, 20, 30, 40, 50, 60, 70]`, print the middle three elements (30, 40, 50).",
    difficulty: "medium",
    level: 15,
    concept:
      "List slicing with [start:end] extracts a sub-list. The start index is included, the end is excluded.",
    realWorldUse:
      "Slicing is used to grab subsets of data — selecting specific columns, windowing time series, batching training data.",
    whyItMatters:
      "Working with portions of data is fundamental. Slicing lets you focus on exactly the data you need.",
    starterCode:
      "data = [10, 20, 30, 40, 50, 60, 70]\n# Print the middle three elements (30, 40, 50)\n",
    solution: "data = [10, 20, 30, 40, 50, 60, 70]\nprint(data[2:5])",
    hints: [
      "Use data[start:end] to slice",
      "30 is at index 2, 50 is at index 4",
      "data[2:5] gives [30, 40, 50] (end index is exclusive)",
    ],
    testCases: [{ input: "", expected: "[30, 40, 50]" }],
  },
  {
    id: 16,
    title: "Dictionary Basics",
    description:
      'Create a dictionary `student` with keys "name" (value: "Alex"), "age" (value: 22), and "grade" (value: "A"). Print the student\'s name.',
    difficulty: "medium",
    level: 16,
    concept:
      "Dictionaries store key-value pairs. Access values using dict[key]. They're like labeled containers.",
    realWorldUse:
      "ML model configs, JSON API responses, feature mappings — dictionaries are everywhere in data engineering.",
    whyItMatters:
      "Structured data often comes as key-value pairs. Dictionaries let you organize and access data by name.",
    starterCode:
      "# Create a student dictionary with name, age, and grade\n# Print the student's name\n",
    solution:
      'student = {"name": "Alex", "age": 22, "grade": "A"}\nprint(student["name"])',
    hints: [
      'Use curly braces {} with "key": value pairs',
      'student = {"name": "Alex", "age": 22, "grade": "A"}',
      'Access with student["name"]',
    ],
    testCases: [{ input: "", expected: "Alex" }],
  },
  {
    id: 17,
    title: "Filter a List",
    description:
      "Given `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, create a new list with only the even numbers and print it.",
    difficulty: "medium",
    level: 17,
    concept:
      "Filtering with list comprehensions: [x for x in list if condition]. Combines iteration and conditional in one line.",
    realWorldUse:
      "Filtering data is a daily task — removing nulls, selecting rows matching criteria, keeping only valid predictions.",
    whyItMatters:
      "Clean data drives good models. Filtering is how you remove noise and focus on relevant data points.",
    starterCode:
      "numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n# Create a list of only even numbers and print it\n",
    solution:
      "numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nevens = [n for n in numbers if n % 2 == 0]\nprint(evens)",
    hints: [
      "Use % 2 == 0 to check if a number is even",
      "Use a list comprehension with an if clause",
      "[n for n in numbers if n % 2 == 0] gives [2, 4, 6, 8, 10]",
    ],
    testCases: [{ input: "", expected: "[2, 4, 6, 8, 10]" }],
  },
  {
    id: 18,
    title: "List Comprehension",
    description:
      "Given `numbers = [1, 2, 3, 4, 5]`, create a new list `squared` with each number squared. Print it.",
    difficulty: "medium",
    level: 18,
    concept:
      "List comprehensions create new lists by transforming each element: [expression for item in list].",
    realWorldUse:
      "Feature engineering in ML often involves transforming data — squaring values, normalizing, scaling.",
    whyItMatters:
      "Efficient data transformation is key to preparing features for machine learning models.",
    starterCode:
      "numbers = [1, 2, 3, 4, 5]\n# Create squared list using list comprehension\n",
    solution:
      "numbers = [1, 2, 3, 4, 5]\nsquared = [n ** 2 for n in numbers]\nprint(squared)",
    hints: [
      "Use [expression for item in list] syntax",
      "n ** 2 squares a number",
      "[n ** 2 for n in numbers] creates [1, 4, 9, 16, 25]",
    ],
    testCases: [{ input: "", expected: "[1, 4, 9, 16, 25]" }],
  },
  {
    id: 19,
    title: "String Methods",
    description:
      'Given `text = "  Hello, Data Science!  "`, strip whitespace, convert to lowercase, and print the result.',
    difficulty: "medium",
    level: 19,
    concept:
      "String methods like .strip(), .lower(), .upper(), .split() transform text data. They can be chained together.",
    realWorldUse:
      "Text preprocessing is crucial in NLP — cleaning user input, normalizing text before tokenization.",
    whyItMatters:
      "Raw text data is messy. Cleaning and normalizing strings is the first step in any text-based ML pipeline.",
    starterCode:
      'text = "  Hello, Data Science!  "\n# Strip whitespace and convert to lowercase, then print\n',
    solution:
      'text = "  Hello, Data Science!  "\nprint(text.strip().lower())',
    hints: [
      "Use .strip() to remove leading/trailing whitespace",
      "Use .lower() to convert to lowercase",
      "Chain them: text.strip().lower()",
    ],
    testCases: [{ input: "", expected: "hello, data science!" }],
  },
  {
    id: 20,
    title: "Define a Function",
    description:
      "Write a function `double(x)` that returns x * 2. Call it with 7 and print the result.",
    difficulty: "medium",
    level: 20,
    concept:
      "Functions are reusable blocks of code. Define with def, pass inputs as parameters, return output.",
    realWorldUse:
      "ML pipelines are built from functions — preprocessing, training, evaluation, prediction steps.",
    whyItMatters:
      "Functions make code reusable and organized. Every ML library is built from functions.",
    starterCode: "# Define double(x) that returns x * 2\n# Call it with 7 and print\n",
    solution: "def double(x):\n    return x * 2\n\nprint(double(7))",
    hints: [
      "Use def double(x): to define the function",
      "Use return x * 2 inside the function",
      "Call with print(double(7))",
    ],
    testCases: [{ input: "", expected: "14" }],
  },
  {
    id: 21,
    title: "Zip Two Lists",
    description:
      'Given `names = ["Alice", "Bob", "Charlie"]` and `scores = [85, 92, 78]`, use zip to print each name with their score like "Alice: 85".',
    difficulty: "medium",
    level: 21,
    concept:
      "zip() pairs elements from multiple lists together. It's essential for iterating over parallel data.",
    realWorldUse:
      "Pairing features with labels, combining predictions with ground truth, matching IDs with values.",
    whyItMatters:
      "Real datasets have multiple columns. zip() lets you work with related data points together.",
    starterCode:
      'names = ["Alice", "Bob", "Charlie"]\nscores = [85, 92, 78]\n# Print each name with score like "Alice: 85"\n',
    solution:
      'names = ["Alice", "Bob", "Charlie"]\nscores = [85, 92, 78]\nfor name, score in zip(names, scores):\n    print(f"{name}: {score}")',
    hints: [
      "Use zip(names, scores) to pair them",
      "Use for name, score in zip(...)",
      'Print with f-string: f"{name}: {score}"',
    ],
    testCases: [{ input: "", expected: "Alice: 85\nBob: 92\nCharlie: 78" }],
  },
  {
    id: 22,
    title: "Enumerate a List",
    description:
      'Given `fruits = ["apple", "banana", "cherry"]`, print each item with its index like "0: apple".',
    difficulty: "medium",
    level: 22,
    concept:
      "enumerate() gives you both the index and value when looping. Syntax: for i, item in enumerate(list).",
    realWorldUse:
      "Tracking position in data — batch indices during training, row numbers in processing, step counting.",
    whyItMatters:
      "Knowing the position of data is important for debugging, logging progress, and positional operations.",
    starterCode:
      'fruits = ["apple", "banana", "cherry"]\n# Print each item with its index like "0: apple"\n',
    solution:
      'fruits = ["apple", "banana", "cherry"]\nfor i, fruit in enumerate(fruits):\n    print(f"{i}: {fruit}")',
    hints: [
      "Use enumerate(fruits) to get index and value",
      "Unpack with: for i, fruit in enumerate(fruits)",
      'Print with f"{i}: {fruit}"',
    ],
    testCases: [{ input: "", expected: "0: apple\n1: banana\n2: cherry" }],
  },
  {
    id: 23,
    title: "Nested Dictionary",
    description:
      'Create a dictionary `model` with keys "name" (value: "LinearRegression"), "params" (value: {"lr": 0.01, "epochs": 100}). Print the learning rate.',
    difficulty: "medium",
    level: 23,
    concept:
      "Dictionaries can contain other dictionaries. Access nested values by chaining keys: dict[key1][key2].",
    realWorldUse:
      "ML model configurations, JSON configs, and API responses are often deeply nested structures.",
    whyItMatters:
      "Real-world data is hierarchical. Navigating nested structures is essential for working with complex data.",
    starterCode:
      '# Create the model dictionary with nested params\n# Print the learning rate\n',
    solution:
      'model = {"name": "LinearRegression", "params": {"lr": 0.01, "epochs": 100}}\nprint(model["params"]["lr"])',
    hints: [
      "Dictionaries can contain other dictionaries as values",
      'model["params"] gives you the inner dictionary',
      'Chain keys: model["params"]["lr"]',
    ],
    testCases: [{ input: "", expected: "0.01" }],
  },
  {
    id: 24,
    title: "Try/Except Error Handling",
    description:
      "Write code that tries to divide 10 by 0. Use try/except to catch the ZeroDivisionError and print 'Cannot divide by zero'.",
    difficulty: "medium",
    level: 24,
    concept:
      "try/except blocks handle errors gracefully. Code in try runs first; if it fails, except catches the error.",
    realWorldUse:
      "Handling missing data, failed API calls, corrupt files — error handling prevents ML pipelines from crashing.",
    whyItMatters:
      "Production ML systems must handle errors. Crashing on bad data is not an option in real deployments.",
    starterCode:
      '# Try to divide 10 by 0\n# Catch ZeroDivisionError and print "Cannot divide by zero"\n',
    solution:
      'try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")',
    hints: [
      "Wrap the division in a try: block",
      "Use except ZeroDivisionError: to catch the error",
      'Print "Cannot divide by zero" in the except block',
    ],
    testCases: [{ input: "", expected: "Cannot divide by zero" }],
  },

  // ==================== HARD (Levels 25-50) ====================
  {
    id: 25,
    title: "Normalize a Dataset",
    description:
      "Given `data = [10, 20, 30, 40, 50]`, normalize each value to a 0-1 range using min-max normalization. Print the result.",
    difficulty: "hard",
    level: 25,
    concept:
      "Min-max normalization: (value - min) / (max - min). Scales all values between 0 and 1.",
    realWorldUse:
      "Normalization is a critical preprocessing step in ML. Models perform better when features are on the same scale.",
    whyItMatters:
      "Without normalization, features with large ranges dominate the model. Normalized data leads to better training.",
    starterCode:
      "data = [10, 20, 30, 40, 50]\n# Normalize to 0-1 range using min-max normalization\n",
    solution:
      "data = [10, 20, 30, 40, 50]\nmin_val = min(data)\nmax_val = max(data)\nnormalized = [(x - min_val) / (max_val - min_val) for x in data]\nprint(normalized)",
    hints: [
      "Formula: (value - min) / (max - min)",
      "First find min(data) and max(data)",
      "Use list comprehension to apply to each element",
    ],
    testCases: [{ input: "", expected: "[0.0, 0.25, 0.5, 0.75, 1.0]" }],
  },
  {
    id: 26,
    title: "Standard Deviation",
    description:
      "Given `data = [2, 4, 4, 4, 5, 5, 7, 9]`, calculate and print the population standard deviation rounded to 4 decimal places.",
    difficulty: "hard",
    level: 26,
    concept:
      "Standard deviation measures data spread. Formula: sqrt(mean of squared differences from the mean).",
    realWorldUse:
      "Standard deviation quantifies uncertainty and variance — key for model evaluation, confidence intervals, and anomaly detection.",
    whyItMatters:
      "Understanding data spread is fundamental. Two datasets can have the same mean but very different distributions.",
    starterCode:
      "data = [2, 4, 4, 4, 5, 5, 7, 9]\n# Calculate and print population standard deviation (4 decimal places)\n",
    solution:
      "data = [2, 4, 4, 4, 5, 5, 7, 9]\nmean = sum(data) / len(data)\nvariance = sum((x - mean) ** 2 for x in data) / len(data)\nstd = variance ** 0.5\nprint(round(std, 4))",
    hints: [
      "First calculate the mean: sum(data) / len(data)",
      "Variance = average of squared differences from mean",
      "Standard deviation = square root of variance (** 0.5)",
    ],
    testCases: [{ input: "", expected: "2.0" }],
  },
  {
    id: 27,
    title: "Word Frequency Counter",
    description:
      'Given `text = "the cat sat on the mat the cat"`, count the frequency of each word and print the dictionary sorted by keys.',
    difficulty: "hard",
    level: 27,
    concept:
      "Counting occurrences using dictionaries. Split text into words, then iterate and count each one.",
    realWorldUse:
      "Word frequency is the basis of text analysis — bag-of-words models, TF-IDF, and document classification all start here.",
    whyItMatters:
      "NLP and text processing are massive ML applications. Understanding word frequency is step one.",
    starterCode:
      'text = "the cat sat on the mat the cat"\n# Count word frequencies and print as sorted dict\n',
    solution:
      'text = "the cat sat on the mat the cat"\nwords = text.split()\nfreq = {}\nfor w in words:\n    freq[w] = freq.get(w, 0) + 1\nprint(dict(sorted(freq.items())))',
    hints: [
      "Use .split() to break text into words",
      "Use dict.get(key, 0) to safely get/default values",
      "Use sorted(freq.items()) to sort by keys",
    ],
    testCases: [{ input: "", expected: "{'cat': 2, 'mat': 1, 'on': 1, 'sat': 1, 'the': 3}" }],
  },
  {
    id: 28,
    title: "Matrix as Nested Lists",
    description:
      "Create a 3x3 identity matrix as nested lists and print each row.",
    difficulty: "hard",
    level: 28,
    concept:
      "Matrices in Python can be represented as lists of lists. An identity matrix has 1s on the diagonal and 0s elsewhere.",
    realWorldUse:
      "Matrices are the core data structure for linear algebra in ML — weight matrices, transformation matrices, covariance matrices.",
    whyItMatters:
      "Every neural network uses matrix multiplication. Understanding matrix representation is fundamental to deep learning.",
    starterCode:
      "# Create a 3x3 identity matrix and print each row\n",
    solution:
      "matrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]\nfor row in matrix:\n    print(row)",
    hints: [
      "An identity matrix has 1s on the diagonal",
      "Row 0: [1, 0, 0], Row 1: [0, 1, 0], Row 2: [0, 0, 1]",
      "Loop through matrix and print each row",
    ],
    testCases: [{ input: "", expected: "[1, 0, 0]\n[0, 1, 0]\n[0, 0, 1]" }],
  },
  {
    id: 29,
    title: "Lambda Functions",
    description:
      "Create a list `numbers = [1, -2, 3, -4, 5]`. Use sorted() with a lambda key to sort by absolute value. Print the result.",
    difficulty: "hard",
    level: 29,
    concept:
      "Lambda functions are anonymous one-line functions. Syntax: lambda x: expression. Often used as arguments to other functions.",
    realWorldUse:
      "Lambdas are used for custom sorting, data transformations, and as callbacks in ML frameworks.",
    whyItMatters:
      "Concise function definitions make code more readable when the logic is simple and used only once.",
    starterCode:
      "numbers = [1, -2, 3, -4, 5]\n# Sort by absolute value using lambda and print\n",
    solution:
      "numbers = [1, -2, 3, -4, 5]\nprint(sorted(numbers, key=lambda x: abs(x)))",
    hints: [
      "Use sorted() with a key parameter",
      "lambda x: abs(x) gives the absolute value",
      "sorted(numbers, key=lambda x: abs(x))",
    ],
    testCases: [{ input: "", expected: "[1, -2, 3, -4, 5]" }],
  },
  {
    id: 30,
    title: "Simple Correlation",
    description:
      "Given two lists `x = [1, 2, 3, 4, 5]` and `y = [2, 4, 6, 8, 10]`, check if they are perfectly correlated by computing if y[i] / x[i] is constant. Print 'Perfectly correlated' or 'Not correlated'.",
    difficulty: "hard",
    level: 30,
    concept:
      "Correlation measures how two variables move together. Perfect correlation means one is a constant multiple of the other.",
    realWorldUse:
      "Correlation analysis helps identify which features are related — crucial for feature selection in ML.",
    whyItMatters:
      "Understanding relationships between variables is the foundation of regression and predictive modeling.",
    starterCode:
      "x = [1, 2, 3, 4, 5]\ny = [2, 4, 6, 8, 10]\n# Check if perfectly correlated\n",
    solution:
      'x = [1, 2, 3, 4, 5]\ny = [2, 4, 6, 8, 10]\nratios = [y[i] / x[i] for i in range(len(x))]\nif len(set(ratios)) == 1:\n    print("Perfectly correlated")\nelse:\n    print("Not correlated")',
    hints: [
      "Calculate y[i] / x[i] for each pair",
      "If all ratios are the same, they're perfectly correlated",
      "Use set() to check if all ratios are identical",
    ],
    testCases: [{ input: "", expected: "Perfectly correlated" }],
  },
  {
    id: 31,
    title: "Dot Product",
    description:
      "Given `a = [1, 2, 3]` and `b = [4, 5, 6]`, compute and print their dot product (sum of element-wise products).",
    difficulty: "hard",
    level: 31,
    concept:
      "The dot product multiplies corresponding elements and sums the results. It's the core operation of linear algebra.",
    realWorldUse:
      "Dot products are everywhere in ML: neuron computations, similarity measures, attention mechanisms in transformers.",
    whyItMatters:
      "Every forward pass in a neural network is built on dot products. It's the most important operation in deep learning.",
    starterCode:
      "a = [1, 2, 3]\nb = [4, 5, 6]\n# Compute and print the dot product\n",
    solution:
      "a = [1, 2, 3]\nb = [4, 5, 6]\ndot = sum(x * y for x, y in zip(a, b))\nprint(dot)",
    hints: [
      "Multiply corresponding elements: a[0]*b[0], a[1]*b[1], ...",
      "Use zip(a, b) to pair elements together",
      "sum(x * y for x, y in zip(a, b)) gives 32",
    ],
    testCases: [{ input: "", expected: "32" }],
  },
  {
    id: 32,
    title: "Flatten a Nested List",
    description:
      "Given `nested = [[1, 2], [3, 4], [5, 6]]`, flatten it into a single list and print it.",
    difficulty: "hard",
    level: 32,
    concept:
      "Flattening converts nested structures into a single-level list using nested list comprehensions.",
    realWorldUse:
      "Reshaping data — converting 2D batches to 1D, flattening image pixels, preparing data for certain models.",
    whyItMatters:
      "Many ML operations require flat arrays. Knowing how to reshape data between dimensions is essential.",
    starterCode:
      "nested = [[1, 2], [3, 4], [5, 6]]\n# Flatten into a single list and print\n",
    solution:
      "nested = [[1, 2], [3, 4], [5, 6]]\nflat = [x for sublist in nested for x in sublist]\nprint(flat)",
    hints: [
      "Use a nested list comprehension",
      "Outer loop: for sublist in nested",
      "Inner loop: for x in sublist",
    ],
    testCases: [{ input: "", expected: "[1, 2, 3, 4, 5, 6]" }],
  },
  {
    id: 33,
    title: "Moving Average",
    description:
      "Given `data = [10, 20, 30, 40, 50]` and window size 3, compute the moving average and print it. The result should be [20.0, 30.0, 40.0].",
    difficulty: "hard",
    level: 33,
    concept:
      "A moving average smooths data by averaging each window of consecutive values. Window slides one position at a time.",
    realWorldUse:
      "Moving averages smooth noisy signals — used in time series forecasting, stock analysis, and training loss curves.",
    whyItMatters:
      "Real-world data is noisy. Smoothing techniques like moving averages reveal underlying trends.",
    starterCode:
      "data = [10, 20, 30, 40, 50]\nwindow = 3\n# Compute moving average and print the result\n",
    solution:
      "data = [10, 20, 30, 40, 50]\nwindow = 3\nresult = [sum(data[i:i+window]) / window for i in range(len(data) - window + 1)]\nprint(result)",
    hints: [
      "For each position i, average data[i:i+window]",
      "Number of windows = len(data) - window + 1",
      "Use a list comprehension with slicing",
    ],
    testCases: [{ input: "", expected: "[20.0, 30.0, 40.0]" }],
  },
  {
    id: 34,
    title: "One-Hot Encoding",
    description:
      'Given `labels = ["cat", "dog", "cat", "bird", "dog"]`, create a one-hot encoded representation. Print the unique categories sorted, then print the encoding for each label.',
    difficulty: "hard",
    level: 34,
    concept:
      "One-hot encoding converts categories to binary vectors. Each category gets a position; its vector has 1 at that position, 0 elsewhere.",
    realWorldUse:
      "Most ML models need numerical input. One-hot encoding converts categorical features like color, species, or country into numbers.",
    whyItMatters:
      "Categorical data is everywhere. Without proper encoding, models can't process text labels at all.",
    starterCode:
      'labels = ["cat", "dog", "cat", "bird", "dog"]\n# One-hot encode and print categories then encodings\n',
    solution:
      'labels = ["cat", "dog", "cat", "bird", "dog"]\ncategories = sorted(set(labels))\nprint(categories)\nfor label in labels:\n    encoding = [1 if cat == label else 0 for cat in categories]\n    print(encoding)',
    hints: [
      "First get unique categories with sorted(set(labels))",
      "For each label, create a list of 0s and 1s",
      "1 where category matches, 0 elsewhere",
    ],
    testCases: [{ input: "", expected: "['bird', 'cat', 'dog']\n[0, 1, 0]\n[0, 0, 1]\n[0, 1, 0]\n[1, 0, 0]\n[0, 0, 1]" }],
  },
  {
    id: 35,
    title: "Train/Test Split",
    description:
      "Given `data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, split it into 80% train and 20% test. Print train and test lists.",
    difficulty: "hard",
    level: 35,
    concept:
      "Splitting data into train/test sets prevents overfitting. The model learns from train data and is evaluated on unseen test data.",
    realWorldUse:
      "Every ML project splits data this way. Without a test set, you can't measure how well your model generalizes.",
    whyItMatters:
      "Evaluating on training data gives misleadingly good results. Test sets reveal true model performance.",
    starterCode:
      "data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n# Split into 80% train and 20% test, then print both\n",
    solution:
      "data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nsplit = int(len(data) * 0.8)\ntrain = data[:split]\ntest = data[split:]\nprint(train)\nprint(test)",
    hints: [
      "Calculate split index: int(len(data) * 0.8)",
      "Train = data[:split], Test = data[split:]",
      "80% of 10 items = first 8 items for training",
    ],
    testCases: [{ input: "", expected: "[1, 2, 3, 4, 5, 6, 7, 8]\n[9, 10]" }],
  },
  {
    id: 36,
    title: "Mean Squared Error",
    description:
      "Given `actual = [3, -0.5, 2, 7]` and `predicted = [2.5, 0.0, 2, 8]`, compute and print the Mean Squared Error (MSE).",
    difficulty: "hard",
    level: 36,
    concept:
      "MSE = average of (actual - predicted)^2. It measures how far predictions are from true values.",
    realWorldUse:
      "MSE is the most common loss function for regression models. It's what gradient descent minimizes during training.",
    whyItMatters:
      "You can't improve a model without measuring its errors. MSE quantifies prediction quality in a single number.",
    starterCode:
      "actual = [3, -0.5, 2, 7]\npredicted = [2.5, 0.0, 2, 8]\n# Compute and print MSE\n",
    solution:
      "actual = [3, -0.5, 2, 7]\npredicted = [2.5, 0.0, 2, 8]\nmse = sum((a - p) ** 2 for a, p in zip(actual, predicted)) / len(actual)\nprint(mse)",
    hints: [
      "Square the difference between each actual and predicted value",
      "Use zip(actual, predicted) to pair them",
      "Average all squared differences",
    ],
    testCases: [{ input: "", expected: "0.375" }],
  },
  {
    id: 37,
    title: "Binary Classification Accuracy",
    description:
      "Given `actual = [1, 0, 1, 1, 0, 1, 0, 0]` and `predicted = [1, 0, 0, 1, 0, 1, 1, 0]`, calculate and print the accuracy as a percentage.",
    difficulty: "hard",
    level: 37,
    concept:
      "Accuracy = number of correct predictions / total predictions. It's the simplest classification metric.",
    realWorldUse:
      "Accuracy is the first metric you check for any classifier — spam detection, image recognition, sentiment analysis.",
    whyItMatters:
      "Without metrics, you can't compare models or know if your ML system is working.",
    starterCode:
      "actual = [1, 0, 1, 1, 0, 1, 0, 0]\npredicted = [1, 0, 0, 1, 0, 1, 1, 0]\n# Calculate and print accuracy as percentage\n",
    solution:
      "actual = [1, 0, 1, 1, 0, 1, 0, 0]\npredicted = [1, 0, 0, 1, 0, 1, 1, 0]\ncorrect = sum(a == p for a, p in zip(actual, predicted))\naccuracy = correct / len(actual) * 100\nprint(accuracy)",
    hints: [
      "Compare each actual vs predicted pair",
      "Count matches: sum(a == p for a, p in zip(...))",
      "Accuracy = correct / total * 100",
    ],
    testCases: [{ input: "", expected: "75.0" }],
  },
  {
    id: 38,
    title: "Euclidean Distance",
    description:
      "Given two points `p1 = [1, 2, 3]` and `p2 = [4, 5, 6]`, compute and print the Euclidean distance rounded to 4 decimal places.",
    difficulty: "hard",
    level: 38,
    concept:
      "Euclidean distance = sqrt(sum of squared differences). It measures straight-line distance between two points.",
    realWorldUse:
      "K-Nearest Neighbors, clustering algorithms, and similarity search all depend on distance calculations.",
    whyItMatters:
      "Distance is how ML algorithms determine similarity. Close points are similar; far points are different.",
    starterCode:
      "p1 = [1, 2, 3]\np2 = [4, 5, 6]\n# Compute Euclidean distance (4 decimal places)\n",
    solution:
      "p1 = [1, 2, 3]\np2 = [4, 5, 6]\ndist = sum((a - b) ** 2 for a, b in zip(p1, p2)) ** 0.5\nprint(round(dist, 4))",
    hints: [
      "Square the difference for each dimension",
      "Sum all squared differences",
      "Take the square root (** 0.5)",
    ],
    testCases: [{ input: "", expected: "5.1962" }],
  },
  {
    id: 39,
    title: "Sigmoid Function",
    description:
      "Implement the sigmoid function: sigmoid(x) = 1 / (1 + e^(-x)). Import math, compute sigmoid(0), sigmoid(2), and sigmoid(-2), print each rounded to 4 decimal places.",
    difficulty: "hard",
    level: 39,
    concept:
      "Sigmoid squashes any number to the range (0, 1). It's defined as 1 / (1 + e^(-x)).",
    realWorldUse:
      "Sigmoid is the activation function for binary classification — logistic regression, neural network output layers.",
    whyItMatters:
      "Converting raw scores to probabilities is essential. Sigmoid is how models output confidence between 0 and 1.",
    starterCode:
      "import math\n# Implement sigmoid(x) and print sigmoid(0), sigmoid(2), sigmoid(-2)\n",
    solution:
      "import math\ndef sigmoid(x):\n    return 1 / (1 + math.exp(-x))\nprint(round(sigmoid(0), 4))\nprint(round(sigmoid(2), 4))\nprint(round(sigmoid(-2), 4))",
    hints: [
      "Use math.exp(-x) for e^(-x)",
      "sigmoid(x) = 1 / (1 + math.exp(-x))",
      "sigmoid(0) = 0.5, values > 0 approach 1, values < 0 approach 0",
    ],
    testCases: [{ input: "", expected: "0.5\n0.8808\n0.1192" }],
  },
  {
    id: 40,
    title: "Confusion Matrix",
    description:
      "Given `actual = [1, 1, 0, 1, 0, 0, 1, 0]` and `predicted = [1, 0, 0, 1, 1, 0, 1, 0]`, compute and print the confusion matrix as [[TN, FP], [FN, TP]].",
    difficulty: "hard",
    level: 40,
    concept:
      "A confusion matrix shows: True Negatives, False Positives, False Negatives, True Positives — the full picture of classification performance.",
    realWorldUse:
      "Beyond accuracy, confusion matrices reveal whether errors are false positives or false negatives — critical in medical diagnosis, fraud detection.",
    whyItMatters:
      "Accuracy alone can be misleading. A confusion matrix shows exactly where your model succeeds and fails.",
    starterCode:
      "actual = [1, 1, 0, 1, 0, 0, 1, 0]\npredicted = [1, 0, 0, 1, 1, 0, 1, 0]\n# Compute confusion matrix [[TN, FP], [FN, TP]]\n",
    solution:
      "actual = [1, 1, 0, 1, 0, 0, 1, 0]\npredicted = [1, 0, 0, 1, 1, 0, 1, 0]\ntp = sum(a == 1 and p == 1 for a, p in zip(actual, predicted))\ntn = sum(a == 0 and p == 0 for a, p in zip(actual, predicted))\nfp = sum(a == 0 and p == 1 for a, p in zip(actual, predicted))\nfn = sum(a == 1 and p == 0 for a, p in zip(actual, predicted))\nprint([[tn, fp], [fn, tp]])",
    hints: [
      "TP: actual=1, predicted=1. TN: actual=0, predicted=0",
      "FP: actual=0, predicted=1. FN: actual=1, predicted=0",
      "Count each case using zip and conditions",
    ],
    testCases: [{ input: "", expected: "[[3, 1], [1, 3]]" }],
  },
  {
    id: 41,
    title: "Softmax Function",
    description:
      "Implement softmax for `scores = [2.0, 1.0, 0.1]`. Print the probabilities rounded to 4 decimal places.",
    difficulty: "hard",
    level: 41,
    concept:
      "Softmax converts a vector of scores into probabilities that sum to 1: e^xi / sum(e^xj).",
    realWorldUse:
      "Softmax is the output layer of multi-class classifiers — image recognition, language models, and recommendation systems.",
    whyItMatters:
      "Multi-class classification needs probabilities for each class. Softmax is how neural networks produce these.",
    starterCode:
      "import math\nscores = [2.0, 1.0, 0.1]\n# Implement softmax and print probabilities (4 decimal places)\n",
    solution:
      "import math\nscores = [2.0, 1.0, 0.1]\nexp_scores = [math.exp(s) for s in scores]\ntotal = sum(exp_scores)\nprobs = [round(e / total, 4) for e in exp_scores]\nprint(probs)",
    hints: [
      "First compute e^x for each score",
      "Sum all the exponentials",
      "Divide each by the total to get probabilities",
    ],
    testCases: [{ input: "", expected: "[0.6590, 0.2424, 0.0986]" }],
  },
  {
    id: 42,
    title: "K-Nearest Neighbors (Manual)",
    description:
      "Given training points `X = [[1,1], [2,2], [3,3], [6,6], [7,7], [8,8]]` and labels `y = [0,0,0,1,1,1]`, classify the point `[4,4]` using k=3. Print the predicted label.",
    difficulty: "hard",
    level: 42,
    concept:
      "KNN classifies a point by finding its k nearest neighbors and taking a majority vote on their labels.",
    realWorldUse:
      "KNN is used for recommendation systems, anomaly detection, and as a baseline classifier in many ML problems.",
    whyItMatters:
      "KNN is one of the simplest and most intuitive ML algorithms. Understanding it builds foundation for more complex methods.",
    starterCode:
      "X = [[1,1], [2,2], [3,3], [6,6], [7,7], [8,8]]\ny = [0, 0, 0, 1, 1, 1]\nquery = [4, 4]\nk = 3\n# Classify query using KNN\n",
    solution:
      "X = [[1,1], [2,2], [3,3], [6,6], [7,7], [8,8]]\ny = [0, 0, 0, 1, 1, 1]\nquery = [4, 4]\nk = 3\ndists = [sum((a - b) ** 2 for a, b in zip(query, p)) ** 0.5 for p in X]\npairs = sorted(zip(dists, y))\nneighbors = [label for _, label in pairs[:k]]\nprint(max(set(neighbors), key=neighbors.count))",
    hints: [
      "Calculate distance from query to every training point",
      "Sort by distance and take the k closest",
      "Majority vote: the most common label among neighbors wins",
    ],
    testCases: [{ input: "", expected: "0" }],
  },
  {
    id: 43,
    title: "Gradient Descent Step",
    description:
      "Given `w = 5.0`, `learning_rate = 0.1`, and `gradient = 2.0`, perform one gradient descent update: w = w - lr * gradient. Repeat 5 times starting from w=5.0 with constant gradient=2.0. Print the final w.",
    difficulty: "hard",
    level: 43,
    concept:
      "Gradient descent iteratively updates parameters by moving in the opposite direction of the gradient: w = w - lr * gradient.",
    realWorldUse:
      "Gradient descent is how neural networks learn. Every model trained with backpropagation uses this update rule.",
    whyItMatters:
      "This is the core optimization algorithm in all of deep learning. Understanding it is essential.",
    starterCode:
      "w = 5.0\nlearning_rate = 0.1\ngradient = 2.0\n# Perform 5 gradient descent updates and print final w\n",
    solution:
      "w = 5.0\nlearning_rate = 0.1\ngradient = 2.0\nfor _ in range(5):\n    w = w - learning_rate * gradient\nprint(w)",
    hints: [
      "Update rule: w = w - learning_rate * gradient",
      "Repeat the update 5 times in a loop",
      "Each step subtracts 0.1 * 2.0 = 0.2 from w",
    ],
    testCases: [{ input: "", expected: "4.0" }],
  },
  {
    id: 44,
    title: "Precision and Recall",
    description:
      "Given `actual = [1, 1, 0, 1, 0, 0, 1, 0, 1, 0]` and `predicted = [1, 0, 0, 1, 1, 0, 1, 0, 0, 0]`, compute and print precision and recall each rounded to 4 decimal places.",
    difficulty: "hard",
    level: 44,
    concept:
      "Precision = TP / (TP + FP) — of all positive predictions, how many were correct. Recall = TP / (TP + FN) — of all actual positives, how many were found.",
    realWorldUse:
      "Precision matters when false positives are costly (spam filter). Recall matters when false negatives are costly (cancer detection).",
    whyItMatters:
      "Accuracy alone can mislead with imbalanced data. Precision and recall give a clearer picture of model quality.",
    starterCode:
      "actual = [1, 1, 0, 1, 0, 0, 1, 0, 1, 0]\npredicted = [1, 0, 0, 1, 1, 0, 1, 0, 0, 0]\n# Compute precision and recall (4 decimal places)\n",
    solution:
      "actual = [1, 1, 0, 1, 0, 0, 1, 0, 1, 0]\npredicted = [1, 0, 0, 1, 1, 0, 1, 0, 0, 0]\ntp = sum(a == 1 and p == 1 for a, p in zip(actual, predicted))\nfp = sum(a == 0 and p == 1 for a, p in zip(actual, predicted))\nfn = sum(a == 1 and p == 0 for a, p in zip(actual, predicted))\nprecision = tp / (tp + fp)\nrecall = tp / (tp + fn)\nprint(round(precision, 4))\nprint(round(recall, 4))",
    hints: [
      "TP = both actual and predicted are 1",
      "Precision = TP / (TP + FP), Recall = TP / (TP + FN)",
      "FP = actual 0 but predicted 1, FN = actual 1 but predicted 0",
    ],
    testCases: [{ input: "", expected: "0.75\n0.6" }],
  },
  {
    id: 45,
    title: "Linear Regression Prediction",
    description:
      "Given weights `w = [0.5, -0.3, 0.8]`, bias `b = 1.0`, and input `x = [2, 4, 1]`, compute the linear regression prediction y = w*x + b (dot product plus bias). Print the result.",
    difficulty: "hard",
    level: 45,
    concept:
      "Linear regression predicts y = w·x + b, where w·x is the dot product of weights and features.",
    realWorldUse:
      "Linear regression is the simplest predictive model — predicting prices, scores, quantities from features.",
    whyItMatters:
      "This is the building block of all neural networks. Each neuron computes exactly this: dot product + bias.",
    starterCode:
      "w = [0.5, -0.3, 0.8]\nb = 1.0\nx = [2, 4, 1]\n# Compute y = w*x + b and print\n",
    solution:
      "w = [0.5, -0.3, 0.8]\nb = 1.0\nx = [2, 4, 1]\ny = sum(wi * xi for wi, xi in zip(w, x)) + b\nprint(y)",
    hints: [
      "Dot product: multiply each w[i] * x[i] and sum",
      "Use zip(w, x) to pair weights with features",
      "Add bias b to the dot product result",
    ],
    testCases: [{ input: "", expected: "1.6" }],
  },
  {
    id: 46,
    title: "Matrix Transpose",
    description:
      "Given `matrix = [[1, 2, 3], [4, 5, 6]]`, compute and print the transpose (swap rows and columns). Print each row of the result.",
    difficulty: "hard",
    level: 46,
    concept:
      "Transposing a matrix swaps its rows and columns. Element at [i][j] moves to [j][i].",
    realWorldUse:
      "Matrix transposition is used in backpropagation, computing covariance matrices, and reshaping data.",
    whyItMatters:
      "Many ML operations require transposing matrices. Understanding this prepares you for NumPy and tensor operations.",
    starterCode:
      "matrix = [[1, 2, 3], [4, 5, 6]]\n# Transpose and print each row\n",
    solution:
      "matrix = [[1, 2, 3], [4, 5, 6]]\ntransposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]\nfor row in transposed:\n    print(row)",
    hints: [
      "The transpose of a 2x3 matrix is a 3x2 matrix",
      "New row i = column i from the original",
      "Use nested list comprehension or zip(*matrix)",
    ],
    testCases: [{ input: "", expected: "[1, 4]\n[2, 5]\n[3, 6]" }],
  },
  {
    id: 47,
    title: "ReLU Activation",
    description:
      "Implement the ReLU function: relu(x) = max(0, x). Apply it to `values = [-3, -1, 0, 2, 5]` and print the result list.",
    difficulty: "hard",
    level: 47,
    concept:
      "ReLU (Rectified Linear Unit) outputs x if x > 0, otherwise 0. It's the most popular activation function in deep learning.",
    realWorldUse:
      "ReLU is used in nearly every modern neural network — CNNs, transformers, and deep networks all use ReLU or its variants.",
    whyItMatters:
      "Activation functions add non-linearity. Without them, a neural network is just a linear model no matter how deep.",
    starterCode:
      "values = [-3, -1, 0, 2, 5]\n# Apply ReLU to each value and print the result\n",
    solution:
      "values = [-3, -1, 0, 2, 5]\nresult = [max(0, x) for x in values]\nprint(result)",
    hints: [
      "ReLU is simply max(0, x)",
      "Use a list comprehension",
      "[max(0, x) for x in values]",
    ],
    testCases: [{ input: "", expected: "[0, 0, 0, 2, 5]" }],
  },
  {
    id: 48,
    title: "Cosine Similarity",
    description:
      "Given `a = [1, 2, 3]` and `b = [4, 5, 6]`, compute and print the cosine similarity rounded to 4 decimal places.",
    difficulty: "hard",
    level: 48,
    concept:
      "Cosine similarity = dot(a,b) / (||a|| * ||b||). It measures the angle between two vectors, ignoring magnitude.",
    realWorldUse:
      "Cosine similarity powers recommendation engines, document similarity, and embedding comparisons in NLP.",
    whyItMatters:
      "In high-dimensional spaces, cosine similarity is often more meaningful than Euclidean distance.",
    starterCode:
      "a = [1, 2, 3]\nb = [4, 5, 6]\n# Compute cosine similarity (4 decimal places)\n",
    solution:
      "a = [1, 2, 3]\nb = [4, 5, 6]\ndot = sum(x * y for x, y in zip(a, b))\nmag_a = sum(x ** 2 for x in a) ** 0.5\nmag_b = sum(x ** 2 for x in b) ** 0.5\ncosine = dot / (mag_a * mag_b)\nprint(round(cosine, 4))",
    hints: [
      "Dot product: sum of element-wise products",
      "Magnitude: sqrt of sum of squares",
      "Cosine similarity = dot product / (magnitude_a * magnitude_b)",
    ],
    testCases: [{ input: "", expected: "0.9746" }],
  },
  {
    id: 49,
    title: "Batch Processing",
    description:
      "Given `data = list(range(1, 11))` (numbers 1-10) and `batch_size = 3`, split data into batches and print each batch.",
    difficulty: "hard",
    level: 49,
    concept:
      "Batch processing divides data into fixed-size chunks for efficient processing. The last batch may be smaller.",
    realWorldUse:
      "ML training processes data in batches — mini-batch gradient descent, data loading, and API rate limiting all use batching.",
    whyItMatters:
      "Large datasets don't fit in memory at once. Batching is how real ML systems handle millions of samples.",
    starterCode:
      "data = list(range(1, 11))\nbatch_size = 3\n# Split into batches and print each\n",
    solution:
      "data = list(range(1, 11))\nbatch_size = 3\nfor i in range(0, len(data), batch_size):\n    print(data[i:i+batch_size])",
    hints: [
      "Use range(0, len(data), batch_size) to get start indices",
      "Slice data[i:i+batch_size] for each batch",
      "The last batch may have fewer than batch_size items",
    ],
    testCases: [{ input: "", expected: "[1, 2, 3]\n[4, 5, 6]\n[7, 8, 9]\n[10]" }],
  },
  {
    id: 50,
    title: "Cross-Entropy Loss",
    description:
      "Given true labels `y = [1, 0, 1]` and predicted probabilities `p = [0.9, 0.1, 0.8]`, compute and print the binary cross-entropy loss rounded to 4 decimal places.",
    difficulty: "hard",
    level: 50,
    concept:
      "Cross-entropy loss = -mean(y*log(p) + (1-y)*log(1-p)). It measures how well predicted probabilities match true labels.",
    realWorldUse:
      "Cross-entropy is THE standard loss function for classification in deep learning — from logistic regression to transformers.",
    whyItMatters:
      "This loss function drives training for nearly every classification model. It heavily penalizes confident wrong predictions.",
    starterCode:
      "import math\ny = [1, 0, 1]\np = [0.9, 0.1, 0.8]\n# Compute binary cross-entropy loss (4 decimal places)\n",
    solution:
      "import math\ny = [1, 0, 1]\np = [0.9, 0.1, 0.8]\nloss = -sum(yi * math.log(pi) + (1 - yi) * math.log(1 - pi) for yi, pi in zip(y, p)) / len(y)\nprint(round(loss, 4))",
    hints: [
      "Formula: -mean(y*log(p) + (1-y)*log(1-p))",
      "Use math.log() for natural logarithm",
      "Average the loss across all samples",
    ],
    testCases: [{ input: "", expected: "0.1643" }],
  },
];

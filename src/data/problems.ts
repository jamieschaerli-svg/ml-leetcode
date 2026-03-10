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

  // ==================== NUMPY (Levels 51-60) ====================
  {
    id: 51,
    title: "NumPy: Create Arrays",
    description:
      "Import numpy as np. Create an array from [1, 2, 3, 4, 5]. Print the array as a list, its shape, and its number of dimensions.",
    difficulty: "hard",
    level: 51,
    concept:
      "NumPy arrays are the foundation of scientific computing in Python. Unlike lists, they support vectorized operations and are much faster for numerical work.",
    realWorldUse:
      "Every ML framework — TensorFlow, PyTorch, scikit-learn — uses NumPy arrays (or compatible tensors) as the core data structure.",
    whyItMatters:
      "You cannot do serious data science without NumPy. It's the first library every data scientist learns.",
    starterCode:
      "import numpy as np\n# Create array from [1, 2, 3, 4, 5]\n# Print as list, shape, and ndim\n",
    solution:
      "import numpy as np\narr = np.array([1, 2, 3, 4, 5])\nprint(arr.tolist())\nprint(arr.shape)\nprint(arr.ndim)",
    hints: [
      "Use np.array() to create an array from a list",
      ".tolist() converts a numpy array back to a Python list",
      ".shape gives dimensions, .ndim gives number of dimensions",
    ],
    testCases: [{ input: "", expected: "[1, 2, 3, 4, 5]\n(5,)\n1" }],
  },
  {
    id: 52,
    title: "NumPy: Array Arithmetic",
    description:
      "Create arrays a = [10, 20, 30] and b = [1, 2, 3]. Print (a + b) and (a * b) each as lists.",
    difficulty: "hard",
    level: 52,
    concept:
      "NumPy performs element-wise operations automatically. Adding two arrays adds corresponding elements — no loops needed.",
    realWorldUse:
      "Vectorized math is how ML computes predictions, gradients, and loss functions efficiently on millions of data points.",
    whyItMatters:
      "Element-wise operations replace slow Python loops with fast C-level computation. This is why NumPy is 100x faster than pure Python.",
    starterCode:
      "import numpy as np\na = np.array([10, 20, 30])\nb = np.array([1, 2, 3])\n# Print (a + b) and (a * b) as lists\n",
    solution:
      "import numpy as np\na = np.array([10, 20, 30])\nb = np.array([1, 2, 3])\nprint((a + b).tolist())\nprint((a * b).tolist())",
    hints: [
      "NumPy arrays support +, -, *, / element-wise",
      "Use .tolist() to convert result to a Python list",
      "a + b adds corresponding elements: [11, 22, 33]",
    ],
    testCases: [{ input: "", expected: "[11, 22, 33]\n[10, 40, 90]" }],
  },
  {
    id: 53,
    title: "NumPy: Reshape Arrays",
    description:
      "Use np.arange(1, 7) to create [1, 2, 3, 4, 5, 6]. Reshape it to a 2x3 matrix. Print the result as a list and print the shape.",
    difficulty: "hard",
    level: 53,
    concept:
      "Reshaping changes array dimensions without altering data. A 1D array of 6 elements can become 2x3, 3x2, or 6x1.",
    realWorldUse:
      "Reshaping is constant in ML — flattening images for fully-connected layers, reshaping batches, preparing inputs for convolutions.",
    whyItMatters:
      "Data rarely comes in the shape your model expects. Reshaping is how you bridge the gap between raw data and model input.",
    starterCode:
      "import numpy as np\narr = np.arange(1, 7)\n# Reshape to 2x3, print as list and print shape\n",
    solution:
      "import numpy as np\narr = np.arange(1, 7)\nreshaped = arr.reshape(2, 3)\nprint(reshaped.tolist())\nprint(reshaped.shape)",
    hints: [
      "np.arange(1, 7) creates [1, 2, 3, 4, 5, 6]",
      "Use .reshape(rows, cols) to change dimensions",
      "Total elements must match: 2 * 3 = 6",
    ],
    testCases: [{ input: "", expected: "[[1, 2, 3], [4, 5, 6]]\n(2, 3)" }],
  },
  {
    id: 54,
    title: "NumPy: Array Slicing",
    description:
      "Create arr = np.array([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]). Print elements at index 2 through 6 (exclusive), every other element, and the reversed array — all as lists.",
    difficulty: "hard",
    level: 54,
    concept:
      "NumPy slicing uses [start:stop:step] syntax, just like Python lists but much more powerful with multidimensional arrays.",
    realWorldUse:
      "Slicing extracts batches, selects feature columns, crops image regions, and splits time series windows.",
    whyItMatters:
      "Efficient data selection without copying is essential when working with large datasets that don't fit in memory twice.",
    starterCode:
      "import numpy as np\narr = np.array([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])\n# Print arr[2:7], arr[::2], arr[::-1] as lists\n",
    solution:
      "import numpy as np\narr = np.array([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])\nprint(arr[2:7].tolist())\nprint(arr[::2].tolist())\nprint(arr[::-1].tolist())",
    hints: [
      "arr[2:7] gets elements at indices 2, 3, 4, 5, 6",
      "arr[::2] gets every other element (step of 2)",
      "arr[::-1] reverses the array",
    ],
    testCases: [{ input: "", expected: "[30, 40, 50, 60, 70]\n[10, 30, 50, 70, 90]\n[100, 90, 80, 70, 60, 50, 40, 30, 20, 10]" }],
  },
  {
    id: 55,
    title: "NumPy: Statistical Functions",
    description:
      "Given data = np.array([2, 4, 4, 4, 5, 5, 7, 9]), print the mean, median, and standard deviation.",
    difficulty: "hard",
    level: 55,
    concept:
      "NumPy provides optimized statistical functions: np.mean(), np.median(), np.std() that operate on entire arrays at once.",
    realWorldUse:
      "Computing statistics is the first step of any data analysis — understanding central tendency, spread, and distribution of features.",
    whyItMatters:
      "Manual statistics code is slow and error-prone. NumPy functions are tested, optimized, and handle edge cases.",
    starterCode:
      "import numpy as np\ndata = np.array([2, 4, 4, 4, 5, 5, 7, 9])\n# Print mean, median, std\n",
    solution:
      "import numpy as np\ndata = np.array([2, 4, 4, 4, 5, 5, 7, 9])\nprint(np.mean(data))\nprint(np.median(data))\nprint(np.std(data))",
    hints: [
      "np.mean() computes the average",
      "np.median() finds the middle value",
      "np.std() computes population standard deviation",
    ],
    testCases: [{ input: "", expected: "5.0\n4.5\n2.0" }],
  },
  {
    id: 56,
    title: "NumPy: Boolean Indexing",
    description:
      "Given arr = np.array([15, 22, 8, 31, 4, 19, 27, 11]), print all elements greater than 15 as a list, then print all even elements as a list.",
    difficulty: "hard",
    level: 56,
    concept:
      "Boolean indexing filters arrays using conditions. arr[arr > 5] returns only elements where the condition is True.",
    realWorldUse:
      "Filtering data by conditions — selecting outliers, thresholding predictions, masking invalid values in datasets.",
    whyItMatters:
      "Boolean indexing replaces loops and if-statements with concise, vectorized filtering that's orders of magnitude faster.",
    starterCode:
      "import numpy as np\narr = np.array([15, 22, 8, 31, 4, 19, 27, 11])\n# Print elements > 15, then even elements, as lists\n",
    solution:
      "import numpy as np\narr = np.array([15, 22, 8, 31, 4, 19, 27, 11])\nprint(arr[arr > 15].tolist())\nprint(arr[arr % 2 == 0].tolist())",
    hints: [
      "arr > 15 creates a boolean mask like [False, True, ...]",
      "arr[mask] returns only elements where mask is True",
      "arr % 2 == 0 checks for even numbers",
    ],
    testCases: [{ input: "", expected: "[22, 31, 19, 27]\n[22, 8, 4]" }],
  },
  {
    id: 57,
    title: "NumPy: Special Arrays",
    description:
      "Print np.zeros(3) as a list, np.ones(4) as a list, and np.eye(3) as a list (identity matrix).",
    difficulty: "hard",
    level: 57,
    concept:
      "NumPy provides factory functions for common arrays: zeros(), ones(), eye() (identity matrix), and more.",
    realWorldUse:
      "Initializing weight matrices, creating masks, building identity transforms, and allocating buffers for computation.",
    whyItMatters:
      "Proper initialization matters in ML. Weight initialization strategy can determine whether a neural network learns at all.",
    starterCode:
      "import numpy as np\n# Print zeros(3), ones(4), and eye(3) as lists\n",
    solution:
      "import numpy as np\nprint(np.zeros(3).tolist())\nprint(np.ones(4).tolist())\nprint(np.eye(3).tolist())",
    hints: [
      "np.zeros(n) creates an array of n zeros",
      "np.ones(n) creates an array of n ones",
      "np.eye(n) creates an n×n identity matrix",
    ],
    testCases: [{ input: "", expected: "[0.0, 0.0, 0.0]\n[1.0, 1.0, 1.0, 1.0]\n[[1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 0.0, 1.0]]" }],
  },
  {
    id: 58,
    title: "NumPy: Arange & Linspace",
    description:
      "Print np.arange(0, 10, 2) as a list and np.linspace(0, 1, 5) as a list.",
    difficulty: "hard",
    level: 58,
    concept:
      "arange(start, stop, step) creates evenly spaced values by step size. linspace(start, stop, num) creates a specific number of evenly spaced points.",
    realWorldUse:
      "Creating x-axes for plots, generating grid points for evaluation, defining learning rate schedules.",
    whyItMatters:
      "Generating sequences efficiently is needed constantly — from plotting to creating test inputs to defining hyperparameter grids.",
    starterCode:
      "import numpy as np\n# Print arange(0, 10, 2) and linspace(0, 1, 5) as lists\n",
    solution:
      "import numpy as np\nprint(np.arange(0, 10, 2).tolist())\nprint(np.linspace(0, 1, 5).tolist())",
    hints: [
      "np.arange(0, 10, 2) gives [0, 2, 4, 6, 8]",
      "np.linspace(0, 1, 5) gives 5 points from 0 to 1 inclusive",
      "Use .tolist() to convert to Python list",
    ],
    testCases: [{ input: "", expected: "[0, 2, 4, 6, 8]\n[0.0, 0.25, 0.5, 0.75, 1.0]" }],
  },
  {
    id: 59,
    title: "NumPy: Matrix Multiplication",
    description:
      "Create matrices A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]]. Compute and print the matrix product using np.dot() as a list.",
    difficulty: "hard",
    level: 59,
    concept:
      "Matrix multiplication (dot product) multiplies rows of A by columns of B and sums. Result[i][j] = sum(A[i][k] * B[k][j]).",
    realWorldUse:
      "Matrix multiplication is the core operation of neural networks — every layer computes output = weights @ input + bias.",
    whyItMatters:
      "Understanding matrix multiplication is non-negotiable for deep learning. GPUs exist specifically to accelerate this operation.",
    starterCode:
      "import numpy as np\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\n# Compute and print matrix product as list\n",
    solution:
      "import numpy as np\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\nC = np.dot(A, B)\nprint(C.tolist())",
    hints: [
      "np.dot(A, B) or A @ B computes matrix multiplication",
      "Result[0][0] = 1*5 + 2*7 = 19",
      "Result shape: (2,2) @ (2,2) = (2,2)",
    ],
    testCases: [{ input: "", expected: "[[19, 22], [43, 50]]" }],
  },
  {
    id: 60,
    title: "NumPy: Stacking Arrays",
    description:
      "Given a = np.array([1, 2, 3]) and b = np.array([4, 5, 6]), print np.vstack, np.hstack, and np.concatenate results as lists.",
    difficulty: "hard",
    level: 60,
    concept:
      "vstack stacks arrays vertically (row-wise), hstack horizontally (column-wise), and concatenate joins along an axis.",
    realWorldUse:
      "Combining feature matrices, stacking batch outputs, merging datasets from different sources.",
    whyItMatters:
      "Real data comes in pieces. Stacking operations are how you assemble complete datasets from fragments.",
    starterCode:
      "import numpy as np\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\n# Print vstack, hstack, concatenate as lists\n",
    solution:
      "import numpy as np\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint(np.vstack([a, b]).tolist())\nprint(np.hstack([a, b]).tolist())\nprint(np.concatenate([a, b]).tolist())",
    hints: [
      "np.vstack stacks as rows: [[1,2,3],[4,5,6]]",
      "np.hstack joins side by side: [1,2,3,4,5,6]",
      "np.concatenate joins along axis 0 by default",
    ],
    testCases: [{ input: "", expected: "[[1, 2, 3], [4, 5, 6]]\n[1, 2, 3, 4, 5, 6]\n[1, 2, 3, 4, 5, 6]" }],
  },

  // ==================== PANDAS (Levels 61-70) ====================
  {
    id: 61,
    title: "Pandas: Create a DataFrame",
    description:
      "Import pandas as pd. Create a DataFrame from {'name': ['Alice', 'Bob', 'Charlie'], 'age': [25, 30, 35]}. Print the shape and column names as a list.",
    difficulty: "hard",
    level: 61,
    concept:
      "A DataFrame is a 2D labeled data structure — like a spreadsheet or SQL table. It's the central object in Pandas.",
    realWorldUse:
      "DataFrames are how data scientists load, clean, explore, and transform datasets before feeding them to ML models.",
    whyItMatters:
      "Raw data is messy. Pandas gives you powerful tools to wrangle it into shape. It's the most-used data manipulation library.",
    starterCode:
      "import pandas as pd\ndata = {'name': ['Alice', 'Bob', 'Charlie'], 'age': [25, 30, 35]}\n# Create DataFrame, print shape and columns\n",
    solution:
      "import pandas as pd\ndata = {'name': ['Alice', 'Bob', 'Charlie'], 'age': [25, 30, 35]}\ndf = pd.DataFrame(data)\nprint(df.shape)\nprint(df.columns.tolist())",
    hints: [
      "pd.DataFrame(dict) creates a DataFrame from a dictionary",
      ".shape gives (rows, columns)",
      ".columns.tolist() gives column names as a list",
    ],
    testCases: [{ input: "", expected: "(3, 2)\n['name', 'age']" }],
  },
  {
    id: 62,
    title: "Pandas: Select & Access Data",
    description:
      "Create a DataFrame with columns A=[1,2,3], B=[4,5,6], C=[7,8,9]. Print column B as a list and the second row (index 1) as a list.",
    difficulty: "hard",
    level: 62,
    concept:
      "Access columns with df['col'] and rows with df.iloc[index]. These are the two most common selection operations.",
    realWorldUse:
      "Selecting specific features (columns) and samples (rows) is fundamental to data preparation and feature engineering.",
    whyItMatters:
      "Before you can analyze or model data, you need to select the right parts. Pandas makes this intuitive and fast.",
    starterCode:
      "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6], 'C': [7, 8, 9]})\n# Print column B and row at index 1 as lists\n",
    solution:
      "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6], 'C': [7, 8, 9]})\nprint(df['B'].tolist())\nprint(df.iloc[1].tolist())",
    hints: [
      "df['B'] selects column B as a Series",
      "df.iloc[1] selects the row at integer position 1",
      ".tolist() converts to a Python list",
    ],
    testCases: [{ input: "", expected: "[4, 5, 6]\n[2, 5, 8]" }],
  },
  {
    id: 63,
    title: "Pandas: Filter Rows",
    description:
      "Create a DataFrame with name=['Alice','Bob','Charlie','Diana'] and score=[85,62,91,78]. Filter rows where score >= 80 and print the names as a list.",
    difficulty: "hard",
    level: 63,
    concept:
      "Boolean filtering in Pandas: df[df['col'] > value] returns only rows where the condition is True.",
    realWorldUse:
      "Filtering data by conditions — selecting high-value customers, removing outliers, finding failed transactions.",
    whyItMatters:
      "Data analysis always involves asking questions like 'which rows meet this criteria?' Filtering is how you answer them.",
    starterCode:
      "import pandas as pd\ndf = pd.DataFrame({'name': ['Alice', 'Bob', 'Charlie', 'Diana'], 'score': [85, 62, 91, 78]})\n# Filter score >= 80, print names as list\n",
    solution:
      "import pandas as pd\ndf = pd.DataFrame({'name': ['Alice', 'Bob', 'Charlie', 'Diana'], 'score': [85, 62, 91, 78]})\npassed = df[df['score'] >= 80]\nprint(passed['name'].tolist())",
    hints: [
      "df['score'] >= 80 creates a boolean mask",
      "df[mask] returns only rows where mask is True",
      "Then select the 'name' column from the result",
    ],
    testCases: [{ input: "", expected: "['Alice', 'Charlie']" }],
  },
  {
    id: 64,
    title: "Pandas: GroupBy & Aggregate",
    description:
      "Create a DataFrame with dept=['A','B','A','B','A'] and salary=[50,60,55,65,45]. Group by dept and print the mean salary for dept A and dept B.",
    difficulty: "hard",
    level: 64,
    concept:
      "GroupBy splits data into groups, applies a function (like mean), and combines results. It's SQL's GROUP BY for Python.",
    realWorldUse:
      "Aggregating metrics by category — average revenue per region, mean accuracy per model, total sales per product.",
    whyItMatters:
      "GroupBy is one of the most powerful operations in data analysis. It turns raw data into actionable summaries.",
    starterCode:
      "import pandas as pd\ndf = pd.DataFrame({'dept': ['A', 'B', 'A', 'B', 'A'], 'salary': [50, 60, 55, 65, 45]})\n# Group by dept, print mean salary for A and B\n",
    solution:
      "import pandas as pd\ndf = pd.DataFrame({'dept': ['A', 'B', 'A', 'B', 'A'], 'salary': [50, 60, 55, 65, 45]})\nresult = df.groupby('dept')['salary'].mean()\nprint(result['A'])\nprint(result['B'])",
    hints: [
      "df.groupby('dept') groups rows by department",
      "['salary'].mean() computes the mean salary per group",
      "Access results with result['A'] and result['B']",
    ],
    testCases: [{ input: "", expected: "50.0\n62.5" }],
  },
  {
    id: 65,
    title: "Pandas: Handle Missing Values",
    description:
      "Create a DataFrame with A=[1, NaN, 3, NaN, 5] and B=[NaN, 2, NaN, 4, 5]. Print the count of nulls per column as a list, then fill NaN with 0 and print column A as a list.",
    difficulty: "hard",
    level: 65,
    concept:
      "Missing data (NaN) is common in real datasets. Pandas provides isnull(), fillna(), dropna() to detect and handle it.",
    realWorldUse:
      "Real-world data always has missing values — sensor failures, incomplete surveys, failed API calls. Handling them is critical.",
    whyItMatters:
      "Most ML models can't handle NaN values. You must decide whether to fill, interpolate, or drop missing data.",
    starterCode:
      "import pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'A': [1, np.nan, 3, np.nan, 5], 'B': [np.nan, 2, np.nan, 4, 5]})\n# Print null counts as list, fill NaN with 0, print column A as list\n",
    solution:
      "import pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'A': [1, np.nan, 3, np.nan, 5], 'B': [np.nan, 2, np.nan, 4, 5]})\nprint(df.isnull().sum().tolist())\ndf_filled = df.fillna(0)\nprint(df_filled['A'].tolist())",
    hints: [
      "df.isnull().sum() counts NaN values per column",
      "df.fillna(0) replaces all NaN with 0",
      "NaN columns become float, so filled values will be 1.0 not 1",
    ],
    testCases: [{ input: "", expected: "[2, 2]\n[1.0, 0.0, 3.0, 0.0, 5.0]" }],
  },
  {
    id: 66,
    title: "Pandas: Sort Values",
    description:
      "Create a DataFrame with name=['Charlie','Alice','Bob'] and score=[78,92,85]. Sort by score descending and print the names as a list.",
    difficulty: "hard",
    level: 66,
    concept:
      "sort_values() orders a DataFrame by one or more columns. Use ascending=False for descending order.",
    realWorldUse:
      "Ranking results, finding top-N items, sorting leaderboards, ordering time series data.",
    whyItMatters:
      "Sorted data reveals patterns — top performers, worst outliers, trends over time. It's a basic but essential operation.",
    starterCode:
      "import pandas as pd\ndf = pd.DataFrame({'name': ['Charlie', 'Alice', 'Bob'], 'score': [78, 92, 85]})\n# Sort by score descending, print names as list\n",
    solution:
      "import pandas as pd\ndf = pd.DataFrame({'name': ['Charlie', 'Alice', 'Bob'], 'score': [78, 92, 85]})\nsorted_df = df.sort_values('score', ascending=False)\nprint(sorted_df['name'].tolist())",
    hints: [
      "df.sort_values('column') sorts by that column",
      "ascending=False gives descending order",
      "The result is a new DataFrame (original unchanged)",
    ],
    testCases: [{ input: "", expected: "['Alice', 'Bob', 'Charlie']" }],
  },
  {
    id: 67,
    title: "Pandas: Apply Function",
    description:
      "Create a DataFrame with temp_c=[0, 20, 37, 100]. Use .apply() with a lambda to convert Celsius to Fahrenheit (F = C * 9/5 + 32). Print the Fahrenheit values as a list.",
    difficulty: "hard",
    level: 67,
    concept:
      "The .apply() method runs a function on every element of a Series or every row/column of a DataFrame.",
    realWorldUse:
      "Custom transformations — feature engineering, unit conversions, text cleaning, applying business rules to data.",
    whyItMatters:
      "When built-in operations aren't enough, .apply() lets you run any custom logic across your data efficiently.",
    starterCode:
      "import pandas as pd\ndf = pd.DataFrame({'temp_c': [0, 20, 37, 100]})\n# Convert to Fahrenheit using apply, print as list\n",
    solution:
      "import pandas as pd\ndf = pd.DataFrame({'temp_c': [0, 20, 37, 100]})\ndf['temp_f'] = df['temp_c'].apply(lambda c: c * 9/5 + 32)\nprint(df['temp_f'].tolist())",
    hints: [
      "Use .apply(lambda c: c * 9/5 + 32) on the column",
      "F = C × 9/5 + 32 is the conversion formula",
      "0°C = 32°F, 100°C = 212°F",
    ],
    testCases: [{ input: "", expected: "[32.0, 68.0, 98.6, 212.0]" }],
  },
  {
    id: 68,
    title: "Pandas: Value Counts",
    description:
      "Create a Series from ['cat', 'dog', 'cat', 'bird', 'dog', 'cat']. Use value_counts() and print the count for each animal.",
    difficulty: "hard",
    level: 68,
    concept:
      "value_counts() returns a Series with counts of unique values, sorted from most to least frequent.",
    realWorldUse:
      "Understanding data distributions — class imbalance detection, frequency analysis, finding most common categories.",
    whyItMatters:
      "Knowing the distribution of your data is critical. Class imbalance can ruin model performance if not detected.",
    starterCode:
      "import pandas as pd\ns = pd.Series(['cat', 'dog', 'cat', 'bird', 'dog', 'cat'])\n# Print count for cat, dog, bird\n",
    solution:
      "import pandas as pd\ns = pd.Series(['cat', 'dog', 'cat', 'bird', 'dog', 'cat'])\ncounts = s.value_counts()\nprint(counts['cat'])\nprint(counts['dog'])\nprint(counts['bird'])",
    hints: [
      "s.value_counts() counts occurrences of each value",
      "Access counts with counts['cat'], counts['dog'], etc.",
      "Results are sorted by frequency (most common first)",
    ],
    testCases: [{ input: "", expected: "3\n2\n1" }],
  },
  {
    id: 69,
    title: "Pandas: Merge DataFrames",
    description:
      "Create df1 with id=[1,2,3] and name=['Alice','Bob','Charlie']. Create df2 with id=[2,3,4] and score=[85,92,78]. Merge on 'id' (inner join) and print the names and scores as lists.",
    difficulty: "hard",
    level: 69,
    concept:
      "pd.merge() combines DataFrames like SQL JOIN. Inner join keeps only rows with matching keys in both tables.",
    realWorldUse:
      "Combining data from different sources — merging user profiles with transaction data, joining features from multiple tables.",
    whyItMatters:
      "Real data lives in multiple tables. Merging is how you create unified datasets for analysis and modeling.",
    starterCode:
      "import pandas as pd\ndf1 = pd.DataFrame({'id': [1, 2, 3], 'name': ['Alice', 'Bob', 'Charlie']})\ndf2 = pd.DataFrame({'id': [2, 3, 4], 'score': [85, 92, 78]})\n# Merge on id, print names and scores as lists\n",
    solution:
      "import pandas as pd\ndf1 = pd.DataFrame({'id': [1, 2, 3], 'name': ['Alice', 'Bob', 'Charlie']})\ndf2 = pd.DataFrame({'id': [2, 3, 4], 'score': [85, 92, 78]})\nmerged = pd.merge(df1, df2, on='id')\nprint(merged['name'].tolist())\nprint(merged['score'].tolist())",
    hints: [
      "pd.merge(df1, df2, on='id') joins on the id column",
      "Inner join (default) keeps only matching rows: ids 2 and 3",
      "Id 1 is only in df1, id 4 is only in df2 — both excluded",
    ],
    testCases: [{ input: "", expected: "['Bob', 'Charlie']\n[85, 92]" }],
  },
  {
    id: 70,
    title: "Pandas: Describe Statistics",
    description:
      "Create a DataFrame with values=[10, 20, 30, 40, 50]. Use .describe() and print the mean, min, max, and count (as int).",
    difficulty: "hard",
    level: 70,
    concept:
      "describe() generates summary statistics — count, mean, std, min, 25%, 50%, 75%, max — in one call.",
    realWorldUse:
      "Quick data profiling — the first thing you run on a new dataset to understand its scale and distribution.",
    whyItMatters:
      "Before modeling, you need to understand your data. describe() gives you the essential summary in seconds.",
    starterCode:
      "import pandas as pd\ndf = pd.DataFrame({'values': [10, 20, 30, 40, 50]})\n# Use describe(), print mean, min, max, count\n",
    solution:
      "import pandas as pd\ndf = pd.DataFrame({'values': [10, 20, 30, 40, 50]})\nstats = df['values'].describe()\nprint(stats['mean'])\nprint(stats['min'])\nprint(stats['max'])\nprint(int(stats['count']))",
    hints: [
      "stats = df['values'].describe() returns a summary Series",
      "Access values with stats['mean'], stats['min'], etc.",
      "count is a float by default, cast to int for clean output",
    ],
    testCases: [{ input: "", expected: "30.0\n10.0\n50.0\n5" }],
  },

  // ==================== MATPLOTLIB (Levels 71-80) ====================
  {
    id: 71,
    title: "Matplotlib: Figure & Axes",
    description:
      "Create a figure with axes. Set the title to 'My First Plot', x-label to 'X Axis', and y-label to 'Y Axis'. Print the title, xlabel, and ylabel.",
    difficulty: "hard",
    level: 71,
    concept:
      "Matplotlib uses a Figure (the window) containing Axes (the actual plot). plt.subplots() creates both at once.",
    realWorldUse:
      "Every data visualization starts by creating a figure and configuring its axes — labels, titles, and scales.",
    whyItMatters:
      "Visualization communicates insights. Well-labeled plots are how data scientists present findings to stakeholders.",
    starterCode:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\n# Create figure, set title and labels, print them\n",
    solution:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.set_title('My First Plot')\nax.set_xlabel('X Axis')\nax.set_ylabel('Y Axis')\nprint(ax.get_title())\nprint(ax.get_xlabel())\nprint(ax.get_ylabel())",
    hints: [
      "fig, ax = plt.subplots() creates figure and axes",
      "ax.set_title(), set_xlabel(), set_ylabel() configure labels",
      "ax.get_title() etc. retrieve the current values",
    ],
    testCases: [{ input: "", expected: "My First Plot\nX Axis\nY Axis" }],
  },
  {
    id: 72,
    title: "Matplotlib: Line Plots",
    description:
      "Create two line plots: [1,2,3,4] vs [1,4,9,16] labeled 'Squares' and [1,2,3,4] vs [1,8,27,64] labeled 'Cubes'. Print the number of lines and their labels.",
    difficulty: "hard",
    level: 72,
    concept:
      "ax.plot() adds line plots. Each call adds a new line. Labels are used by the legend to identify each line.",
    realWorldUse:
      "Comparing trends — plotting training vs validation loss, comparing model performances, visualizing time series.",
    whyItMatters:
      "Line plots are the most common visualization. Comparing multiple series on one plot reveals relationships and differences.",
    starterCode:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nfig, ax = plt.subplots()\n# Plot squares and cubes, print line count and labels\n",
    solution:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([1, 2, 3, 4], [1, 4, 9, 16], label='Squares')\nax.plot([1, 2, 3, 4], [1, 8, 27, 64], label='Cubes')\nprint(len(ax.lines))\nlabels = [line.get_label() for line in ax.lines]\nprint(labels)",
    hints: [
      "ax.plot(x, y, label='name') adds a labeled line",
      "ax.lines contains all Line2D objects on the axes",
      "line.get_label() returns the line's label string",
    ],
    testCases: [{ input: "", expected: "2\n['Squares', 'Cubes']" }],
  },
  {
    id: 73,
    title: "Matplotlib: Axis Limits",
    description:
      "Create a plot and set x-axis limits to (0, 10) and y-axis limits to (-5, 5). Print the x and y limits as tuples.",
    difficulty: "hard",
    level: 73,
    concept:
      "set_xlim() and set_ylim() control the visible range of each axis. get_xlim() and get_ylim() retrieve them.",
    realWorldUse:
      "Controlling axis ranges to focus on relevant data regions, standardizing scales across multiple plots.",
    whyItMatters:
      "Default axis limits may hide or distort your data. Manual control ensures your visualization tells the right story.",
    starterCode:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nfig, ax = plt.subplots()\n# Set xlim(0, 10) and ylim(-5, 5), print both\n",
    solution:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.set_xlim(0, 10)\nax.set_ylim(-5, 5)\nprint(ax.get_xlim())\nprint(ax.get_ylim())",
    hints: [
      "ax.set_xlim(min, max) sets the x-axis range",
      "ax.set_ylim(min, max) sets the y-axis range",
      "get_xlim() returns a tuple of (min, max)",
    ],
    testCases: [{ input: "", expected: "(0.0, 10.0)\n(-5.0, 5.0)" }],
  },
  {
    id: 74,
    title: "Matplotlib: Bar Chart",
    description:
      "Create a bar chart with categories ['A', 'B', 'C', 'D'] and values [23, 45, 12, 67]. Print the heights of all bars as a list.",
    difficulty: "hard",
    level: 74,
    concept:
      "ax.bar() creates vertical bar charts. Each bar is a Rectangle patch with properties like height, width, and position.",
    realWorldUse:
      "Comparing quantities across categories — revenue by region, accuracy by model, counts by class.",
    whyItMatters:
      "Bar charts are the go-to for categorical comparisons. Knowing how to create and customize them is essential.",
    starterCode:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\ncategories = ['A', 'B', 'C', 'D']\nvalues = [23, 45, 12, 67]\n# Create bar chart, print heights\n",
    solution:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\ncategories = ['A', 'B', 'C', 'D']\nvalues = [23, 45, 12, 67]\nfig, ax = plt.subplots()\nbars = ax.bar(categories, values)\nheights = [b.get_height() for b in bars]\nprint(heights)",
    hints: [
      "ax.bar(categories, values) creates the bar chart",
      "It returns a BarContainer of Rectangle patches",
      "bar.get_height() returns each bar's height",
    ],
    testCases: [{ input: "", expected: "[23.0, 45.0, 12.0, 67.0]" }],
  },
  {
    id: 75,
    title: "Matplotlib: Histogram",
    description:
      "Create a histogram of data = [1, 1, 2, 2, 2, 3, 3, 4, 5, 5] with 5 bins. Print the counts as integers and the number of patches.",
    difficulty: "hard",
    level: 75,
    concept:
      "Histograms show data distribution by grouping values into bins and counting occurrences in each bin.",
    realWorldUse:
      "Visualizing feature distributions, checking for normality, detecting skew and outliers in your dataset.",
    whyItMatters:
      "Understanding data distribution is step one of any analysis. Histograms reveal patterns invisible in raw numbers.",
    starterCode:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\ndata = [1, 1, 2, 2, 2, 3, 3, 4, 5, 5]\n# Create histogram with 5 bins, print counts and patch count\n",
    solution:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\ndata = [1, 1, 2, 2, 2, 3, 3, 4, 5, 5]\nfig, ax = plt.subplots()\ncounts, bins, patches = ax.hist(data, bins=5)\nprint([int(c) for c in counts])\nprint(len(patches))",
    hints: [
      "ax.hist(data, bins=5) returns counts, bin edges, and patches",
      "counts tells how many values fall in each bin",
      "The number of patches equals the number of bins",
    ],
    testCases: [{ input: "", expected: "[2, 3, 2, 1, 2]\n5" }],
  },
  {
    id: 76,
    title: "Matplotlib: Subplots Grid",
    description:
      "Create a 2x3 grid of subplots. Print the shape of the axes array and the total number of axes in the figure.",
    difficulty: "hard",
    level: 76,
    concept:
      "plt.subplots(rows, cols) creates a grid of axes. The axes array has shape (rows, cols) for multi-row/col grids.",
    realWorldUse:
      "Comparing multiple visualizations side-by-side — feature distributions, model comparisons, multi-panel dashboards.",
    whyItMatters:
      "Real analyses need multiple plots. Subplots let you tell a complete visual story in a single figure.",
    starterCode:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\n# Create 2x3 subplot grid, print axes shape and total count\n",
    solution:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nfig, axes = plt.subplots(2, 3)\nprint(axes.shape)\nprint(len(fig.axes))",
    hints: [
      "plt.subplots(2, 3) creates a 2-row, 3-column grid",
      "axes is a 2D numpy array with shape (2, 3)",
      "fig.axes lists all axes objects in the figure",
    ],
    testCases: [{ input: "", expected: "(2, 3)\n6" }],
  },
  {
    id: 77,
    title: "Matplotlib: Multiple Lines & Colors",
    description:
      "Plot 4 lines on one axes (y=x, y=x+1, y=x+2, y=x+3 for x=[0,1]). Print the number of lines and verify all have unique colors.",
    difficulty: "hard",
    level: 77,
    concept:
      "Matplotlib automatically cycles through colors for each new plot. You can also specify colors manually.",
    realWorldUse:
      "Comparing multiple time series, plotting prediction intervals, overlaying different model outputs.",
    whyItMatters:
      "Distinguishable colors are critical for readability. Matplotlib's color cycle handles this automatically.",
    starterCode:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nfig, ax = plt.subplots()\n# Plot 4 lines, print count and unique color count\n",
    solution:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nfor i in range(4):\n    ax.plot([0, 1], [i, i + 1])\nprint(len(ax.lines))\ncolors = [line.get_color() for line in ax.lines]\nprint(len(set(colors)))",
    hints: [
      "Each ax.plot() call adds a new line with a unique color",
      "ax.lines contains all Line2D objects",
      "line.get_color() returns the line's color string",
    ],
    testCases: [{ input: "", expected: "4\n4" }],
  },
  {
    id: 78,
    title: "Matplotlib: Annotations",
    description:
      "Plot [1,2,3,4] vs [10,20,25,30]. Add annotations 'Start' at (1,10) and 'End' at (4,30). Print the text list and count.",
    difficulty: "hard",
    level: 78,
    concept:
      "ax.annotate() adds text labels pointing to specific data points. Essential for highlighting key values.",
    realWorldUse:
      "Annotating peaks, anomalies, thresholds, and key events in time series and data visualizations.",
    whyItMatters:
      "Raw plots without context are hard to interpret. Annotations guide the viewer to the important parts.",
    starterCode:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([1, 2, 3, 4], [10, 20, 25, 30])\n# Add annotations and print text list and count\n",
    solution:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([1, 2, 3, 4], [10, 20, 25, 30])\nax.annotate('Start', xy=(1, 10))\nax.annotate('End', xy=(4, 30))\ntexts = [t.get_text() for t in ax.texts]\nprint(texts)\nprint(len(ax.texts))",
    hints: [
      "ax.annotate('text', xy=(x, y)) adds an annotation",
      "ax.texts contains all text objects on the axes",
      "t.get_text() returns the text string",
    ],
    testCases: [{ input: "", expected: "['Start', 'End']\n2" }],
  },
  {
    id: 79,
    title: "Matplotlib: Legend",
    description:
      "Plot three labeled lines: 'Linear', 'Quadratic', 'Cubic'. Add a legend and print the legend labels.",
    difficulty: "hard",
    level: 79,
    concept:
      "ax.legend() creates a legend from plot labels. It automatically matches colors to their labels.",
    realWorldUse:
      "Legends are essential for multi-line plots — distinguishing training/validation loss, comparing model variants.",
    whyItMatters:
      "Without a legend, multi-series plots are unreadable. Good legends make plots self-explanatory.",
    starterCode:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nfig, ax = plt.subplots()\n# Plot 3 labeled lines and print legend labels\n",
    solution:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [1, 2, 3], label='Linear')\nax.plot([1, 2, 3], [1, 4, 9], label='Quadratic')\nax.plot([1, 2, 3], [1, 8, 27], label='Cubic')\nlegend = ax.legend()\nlabels = [t.get_text() for t in legend.get_texts()]\nprint(labels)",
    hints: [
      "Add label='name' parameter to each plot() call",
      "ax.legend() creates the legend from these labels",
      "legend.get_texts() returns the Text objects",
    ],
    testCases: [{ input: "", expected: "['Linear', 'Quadratic', 'Cubic']" }],
  },
  {
    id: 80,
    title: "Matplotlib: Figure Size & DPI",
    description:
      "Create a figure with figsize=(12, 8) and dpi=150. Print the size as 'WxH', the DPI as integer, and the pixel dimensions as 'WxH'.",
    difficulty: "hard",
    level: 80,
    concept:
      "Figure size is in inches, DPI (dots per inch) controls resolution. Pixel dimensions = size * DPI.",
    realWorldUse:
      "Controlling output quality for publications, web display, and presentations. Higher DPI = crisper images.",
    whyItMatters:
      "Proper figure sizing ensures your plots look professional. Wrong DPI leads to blurry or oversized images.",
    starterCode:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\n# Create figure with figsize=(12, 8) and dpi=150\n# Print size, DPI, and pixel dimensions\n",
    solution:
      "import matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nfig = plt.figure(figsize=(12, 8), dpi=150)\nw, h = fig.get_size_inches()\nprint(f'{w}x{h}')\nprint(int(fig.dpi))\nprint(f'{int(w * fig.dpi)}x{int(h * fig.dpi)}')",
    hints: [
      "plt.figure(figsize=(w, h), dpi=n) sets size and resolution",
      "fig.get_size_inches() returns (width, height) in inches",
      "Pixels = inches × DPI",
    ],
    testCases: [{ input: "", expected: "12.0x8.0\n150\n1800x1200" }],
  },

  // ==================== SCIKIT-LEARN (Levels 81-90) ====================
  {
    id: 81,
    title: "Sklearn: Create a Dataset",
    description:
      "Use make_classification to create a dataset with 100 samples and 4 features (random_state=42). Print X shape, y shape, and the sorted unique classes.",
    difficulty: "hard",
    level: 81,
    concept:
      "Scikit-learn provides synthetic dataset generators for testing and learning. make_classification creates random classification problems.",
    realWorldUse:
      "Testing ML pipelines before using real data, benchmarking models, generating training data for prototypes.",
    whyItMatters:
      "You need data to learn ML. Synthetic datasets let you experiment without worrying about data collection.",
    starterCode:
      "from sklearn.datasets import make_classification\n# Create dataset with 100 samples, 4 features, random_state=42\n# Print X.shape, y.shape, sorted unique classes\n",
    solution:
      "from sklearn.datasets import make_classification\nX, y = make_classification(n_samples=100, n_features=4, random_state=42)\nprint(X.shape)\nprint(y.shape)\nprint(sorted(set(y.tolist())))",
    hints: [
      "make_classification returns (X, y) — features and labels",
      "X.shape gives (n_samples, n_features)",
      "set(y.tolist()) gives the unique class labels",
    ],
    testCases: [{ input: "", expected: "(100, 4)\n(100,)\n[0, 1]" }],
  },
  {
    id: 82,
    title: "Sklearn: Train/Test Split",
    description:
      "Create X with np.arange(20).reshape(10, 2) and y = [0,0,0,0,0,1,1,1,1,1]. Split with test_size=0.3 and random_state=42. Print the shapes and lengths.",
    difficulty: "hard",
    level: 82,
    concept:
      "train_test_split randomly divides data into training and testing sets. The test set evaluates model generalization.",
    realWorldUse:
      "Every ML project uses train/test splits. Without held-out test data, you can't measure real model performance.",
    whyItMatters:
      "Evaluating on training data is cheating. A proper split reveals whether your model truly learned or just memorized.",
    starterCode:
      "from sklearn.model_selection import train_test_split\nimport numpy as np\nX = np.arange(20).reshape(10, 2)\ny = np.array([0, 0, 0, 0, 0, 1, 1, 1, 1, 1])\n# Split and print shapes\n",
    solution:
      "from sklearn.model_selection import train_test_split\nimport numpy as np\nX = np.arange(20).reshape(10, 2)\ny = np.array([0, 0, 0, 0, 0, 1, 1, 1, 1, 1])\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)\nprint(X_train.shape)\nprint(X_test.shape)\nprint(len(y_train), len(y_test))",
    hints: [
      "train_test_split returns X_train, X_test, y_train, y_test",
      "test_size=0.3 means 30% for testing, 70% for training",
      "random_state ensures reproducible splits",
    ],
    testCases: [{ input: "", expected: "(7, 2)\n(3, 2)\n7 3" }],
  },
  {
    id: 83,
    title: "Sklearn: Linear Regression",
    description:
      "Fit a LinearRegression on X=[[1],[2],[3],[4],[5]], y=[3,5,7,9,11]. Print the coefficient, intercept, and prediction for X=[[6]] — all rounded to 1 decimal.",
    difficulty: "hard",
    level: 83,
    concept:
      "LinearRegression fits y = w*X + b by minimizing squared errors. coef_ gives w, intercept_ gives b.",
    realWorldUse:
      "Predicting continuous values — housing prices, sales forecasts, temperature predictions, stock trends.",
    whyItMatters:
      "Linear regression is the foundation of all regression models. Every data scientist must understand it.",
    starterCode:
      "from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4], [5]])\ny = np.array([3, 5, 7, 9, 11])\n# Fit model, print coef, intercept, prediction for [[6]]\n",
    solution:
      "from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4], [5]])\ny = np.array([3, 5, 7, 9, 11])\nmodel = LinearRegression()\nmodel.fit(X, y)\nprint(round(model.coef_[0], 1))\nprint(round(model.intercept_, 1))\nprint(round(model.predict(np.array([[6]]))[0], 1))",
    hints: [
      "model.fit(X, y) trains the linear regression",
      "model.coef_ gives the slope, model.intercept_ gives the bias",
      "model.predict(X_new) makes predictions on new data",
    ],
    testCases: [{ input: "", expected: "2.0\n1.0\n13.0" }],
  },
  {
    id: 84,
    title: "Sklearn: Accuracy Score",
    description:
      "Given actual = [1,0,1,1,0,1,0,0,1,0] and predicted = [1,0,0,1,0,1,1,0,1,0], compute and print the accuracy using sklearn.",
    difficulty: "hard",
    level: 84,
    concept:
      "accuracy_score computes the fraction of correct predictions. It's the simplest classification metric.",
    realWorldUse:
      "Quick model evaluation — the first metric you check for any classifier to see if it's better than random guessing.",
    whyItMatters:
      "Sklearn's metrics are standardized and tested. Using them ensures consistent evaluation across projects.",
    starterCode:
      "from sklearn.metrics import accuracy_score\nactual = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]\npredicted = [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]\n# Print accuracy\n",
    solution:
      "from sklearn.metrics import accuracy_score\nactual = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]\npredicted = [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]\nprint(accuracy_score(actual, predicted))",
    hints: [
      "accuracy_score(y_true, y_pred) computes accuracy",
      "Count matching pairs: 8 out of 10 match",
      "Accuracy = 8/10 = 0.8",
    ],
    testCases: [{ input: "", expected: "0.8" }],
  },
  {
    id: 85,
    title: "Sklearn: StandardScaler",
    description:
      "Scale data = [[10],[20],[30],[40],[50]] using StandardScaler. Print the mean, the mean of scaled data (rounded, use abs), and the std of scaled data (rounded to 1 decimal).",
    difficulty: "hard",
    level: 85,
    concept:
      "StandardScaler transforms features to zero mean and unit variance: z = (x - mean) / std. Essential preprocessing.",
    realWorldUse:
      "Many ML algorithms (SVM, KNN, neural networks) require scaled features. Unscaled data leads to biased models.",
    whyItMatters:
      "Feature scaling is a critical preprocessing step. Without it, features with large values dominate the model.",
    starterCode:
      "from sklearn.preprocessing import StandardScaler\nimport numpy as np\ndata = np.array([[10], [20], [30], [40], [50]])\n# Scale data and print mean, scaled mean, scaled std\n",
    solution:
      "from sklearn.preprocessing import StandardScaler\nimport numpy as np\ndata = np.array([[10], [20], [30], [40], [50]])\nscaler = StandardScaler()\nscaled = scaler.fit_transform(data)\nprint(round(scaler.mean_[0], 1))\nprint(round(abs(float(scaled.mean())), 1))\nprint(round(float(scaled.std()), 1))",
    hints: [
      "scaler.fit_transform(data) fits and transforms in one step",
      "scaler.mean_ gives the computed mean of each feature",
      "Scaled data should have mean ≈ 0 and std ≈ 1",
    ],
    testCases: [{ input: "", expected: "30.0\n0.0\n1.0" }],
  },
  {
    id: 86,
    title: "Sklearn: Decision Tree",
    description:
      "Train a DecisionTreeClassifier (random_state=0) on X=[[0],[1],[2],[10],[11],[12]], y=[0,0,0,1,1,1]. Predict [5] and [1], and print the training accuracy.",
    difficulty: "hard",
    level: 86,
    concept:
      "Decision trees split data by asking yes/no questions about features. They're intuitive and require no feature scaling.",
    realWorldUse:
      "Decision trees power random forests and gradient boosting — the most successful ML algorithms for tabular data.",
    whyItMatters:
      "Trees are interpretable and powerful. Understanding them is key to mastering ensemble methods like XGBoost.",
    starterCode:
      "from sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = np.array([[0], [1], [2], [10], [11], [12]])\ny = np.array([0, 0, 0, 1, 1, 1])\n# Train, predict [5] and [1], print training accuracy\n",
    solution:
      "from sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = np.array([[0], [1], [2], [10], [11], [12]])\ny = np.array([0, 0, 0, 1, 1, 1])\nclf = DecisionTreeClassifier(random_state=0)\nclf.fit(X, y)\nprint(clf.predict(np.array([[5]]))[0])\nprint(clf.predict(np.array([[1]]))[0])\nprint(clf.score(X, y))",
    hints: [
      "clf.fit(X, y) trains the decision tree",
      "clf.predict(X_new) classifies new samples",
      "clf.score(X, y) gives training accuracy (should be 1.0)",
    ],
    testCases: [{ input: "", expected: "0\n0\n1.0" }],
  },
  {
    id: 87,
    title: "Sklearn: K-Means Clustering",
    description:
      "Cluster X=[[1,1],[1,2],[2,1],[10,10],[10,11],[11,10]] into 2 groups (random_state=0, n_init=10). Print n_clusters, unique label count, and sorted cluster centers rounded to 1 decimal.",
    difficulty: "hard",
    level: 87,
    concept:
      "K-Means groups data into k clusters by iteratively assigning points to the nearest center and updating centers.",
    realWorldUse:
      "Customer segmentation, image compression, anomaly detection, grouping similar documents or products.",
    whyItMatters:
      "Clustering is the most common unsupervised learning task. K-Means is simple, fast, and widely used.",
    starterCode:
      "from sklearn.cluster import KMeans\nimport numpy as np\nX = np.array([[1, 1], [1, 2], [2, 1], [10, 10], [10, 11], [11, 10]])\n# Cluster into 2 groups and print results\n",
    solution:
      "from sklearn.cluster import KMeans\nimport numpy as np\nX = np.array([[1, 1], [1, 2], [2, 1], [10, 10], [10, 11], [11, 10]])\nkmeans = KMeans(n_clusters=2, random_state=0, n_init=10)\nkmeans.fit(X)\nprint(kmeans.n_clusters)\nprint(len(set(kmeans.labels_.tolist())))\ncenters = sorted(kmeans.cluster_centers_.tolist())\nprint([round(x, 1) for x in centers[0]])\nprint([round(x, 1) for x in centers[1]])",
    hints: [
      "KMeans(n_clusters=2) creates a 2-cluster model",
      "kmeans.labels_ gives the cluster assignment for each point",
      "kmeans.cluster_centers_ gives the center coordinates",
    ],
    testCases: [{ input: "", expected: "2\n2\n[1.3, 1.3]\n[10.3, 10.3]" }],
  },
  {
    id: 88,
    title: "Sklearn: Confusion Matrix",
    description:
      "Given actual=[1,0,1,1,0,0,1,0] and predicted=[1,0,0,1,1,0,1,0], compute the confusion matrix using sklearn and print it as a list.",
    difficulty: "hard",
    level: 88,
    concept:
      "confusion_matrix returns [[TN, FP], [FN, TP]] showing all four types of classification outcomes.",
    realWorldUse:
      "Detailed error analysis — understanding whether errors are false positives or false negatives helps guide model improvement.",
    whyItMatters:
      "Sklearn's confusion_matrix is standardized and handles edge cases. It's the foundation for precision, recall, and F1.",
    starterCode:
      "from sklearn.metrics import confusion_matrix\nactual = [1, 0, 1, 1, 0, 0, 1, 0]\npredicted = [1, 0, 0, 1, 1, 0, 1, 0]\n# Compute and print confusion matrix as list\n",
    solution:
      "from sklearn.metrics import confusion_matrix\nactual = [1, 0, 1, 1, 0, 0, 1, 0]\npredicted = [1, 0, 0, 1, 1, 0, 1, 0]\ncm = confusion_matrix(actual, predicted)\nprint(cm.tolist())",
    hints: [
      "confusion_matrix(y_true, y_pred) returns the matrix",
      "Format: [[TN, FP], [FN, TP]]",
      ".tolist() converts numpy array to Python list",
    ],
    testCases: [{ input: "", expected: "[[3, 1], [1, 3]]" }],
  },
  {
    id: 89,
    title: "Sklearn: Pipeline",
    description:
      "Create a Pipeline with StandardScaler and LinearRegression. Fit on X=[[1],[2],[3],[4],[5]], y=[3,5,7,9,11]. Print step count, scaler class name, and prediction for [[6]] rounded to 1 decimal.",
    difficulty: "hard",
    level: 89,
    concept:
      "Pipelines chain preprocessing and model steps. They ensure consistent transformations and prevent data leakage.",
    realWorldUse:
      "Production ML always uses pipelines — they bundle preprocessing with the model for clean, reproducible predictions.",
    whyItMatters:
      "Without pipelines, you risk applying different transformations to train and test data, causing subtle bugs.",
    starterCode:
      "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LinearRegression\nimport numpy as np\n# Create pipeline, fit, and print results\n",
    solution:
      "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LinearRegression\nimport numpy as np\npipe = Pipeline([('scaler', StandardScaler()), ('model', LinearRegression())])\nX = np.array([[1], [2], [3], [4], [5]])\ny = np.array([3, 5, 7, 9, 11])\npipe.fit(X, y)\nprint(len(pipe.steps))\nprint(pipe.named_steps['scaler'].__class__.__name__)\nprint(round(pipe.predict(np.array([[6]]))[0], 1))",
    hints: [
      "Pipeline takes a list of (name, estimator) tuples",
      "pipe.fit(X, y) runs all steps in sequence",
      "pipe.predict() applies scaler then model automatically",
    ],
    testCases: [{ input: "", expected: "2\nStandardScaler\n13.0" }],
  },
  {
    id: 90,
    title: "Sklearn: Precision, Recall & F1",
    description:
      "Given actual=[1,1,0,1,0,0,1,0,1,1] and predicted=[1,0,0,1,0,1,1,0,0,1], compute and print precision, recall, and F1 score each rounded to 2 decimals.",
    difficulty: "hard",
    level: 90,
    concept:
      "Precision = TP/(TP+FP), Recall = TP/(TP+FN), F1 = harmonic mean of precision and recall. These go beyond simple accuracy.",
    realWorldUse:
      "F1 score balances precision and recall — critical for imbalanced datasets like fraud detection or disease diagnosis.",
    whyItMatters:
      "Accuracy is misleading with imbalanced classes. Precision, recall, and F1 give a complete picture of classifier quality.",
    starterCode:
      "from sklearn.metrics import precision_score, recall_score, f1_score\nactual = [1, 1, 0, 1, 0, 0, 1, 0, 1, 1]\npredicted = [1, 0, 0, 1, 0, 1, 1, 0, 0, 1]\n# Print precision, recall, f1 (2 decimal places)\n",
    solution:
      "from sklearn.metrics import precision_score, recall_score, f1_score\nactual = [1, 1, 0, 1, 0, 0, 1, 0, 1, 1]\npredicted = [1, 0, 0, 1, 0, 1, 1, 0, 0, 1]\nprint(round(precision_score(actual, predicted), 2))\nprint(round(recall_score(actual, predicted), 2))\nprint(round(f1_score(actual, predicted), 2))",
    hints: [
      "precision_score, recall_score, f1_score all take (y_true, y_pred)",
      "TP=4, FP=1, FN=2 → precision=4/5=0.8, recall=4/6≈0.67",
      "F1 = 2 * precision * recall / (precision + recall)",
    ],
    testCases: [{ input: "", expected: "0.8\n0.67\n0.73" }],
  },
];

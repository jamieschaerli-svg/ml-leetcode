import { Problem } from "@/lib/types";

export const problems: Problem[] = [
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
];

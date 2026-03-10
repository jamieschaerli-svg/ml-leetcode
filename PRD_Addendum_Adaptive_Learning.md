# PRD Addendum — Adaptive Learning & Unlimited Practice

## 1. Core Learning Philosophy
Unlike CodePro, the system should behave more like a personal ML/data tutor.

Key principles:
- Unlimited daily practice
- Adaptive difficulty
- Explain everything
- Show real-world usefulness
- Offer help before frustration

The user should feel like the platform is guiding them, not testing them.

## 2. Unlimited Problems Per Day
Users should never be locked behind daily limits.

Instead of:
- Day 1
- Day 2
- Day 3

The platform works like:
- Level 1
- Level 2
- Level 3

Users can solve as many problems as they want.

Benefits:
- faster learners can move quickly
- beginners can repeat concepts
- binge-learning sessions possible

## 3. Adaptive Difficulty System
Each user has a difficulty score.

Table addition:
```sql
user_skill
- user_id
- difficulty_score
- confidence
```

The platform adjusts difficulty based on:
- Signals
- Correct answers -> + difficulty
- Many mistakes -> - difficulty
- User feedback -> "too easy", "good", "too hard"

### Example Flow
- User solves problem easily: Next problem = harder
- User struggles: Next problem = easier or same level

## 4. Feedback Buttons After Each Problem
After completing a problem, UI shows:
"How was this problem?"
- [Too Easy]
- [Good Difficulty]
- [Too Hard]

This updates the difficulty algorithm.

Table:
```sql
problem_feedback
- user_id
- problem_id
- rating
```

## 5. AI Help System
If a user is stuck, they can press: "Need Help"

The system provides progressive hints.
- Level 1 hint: Think about storing the numbers in a list.
- Level 2 hint: Use a loop to iterate through the list.
- Level 3 hint: You can use `sum(list) / len(list)`.

If still stuck: Show solution.

## 6. Deep Explanations
Every problem must include:

1. **Concept Explanation**
   Example:
   This problem teaches lists in Python. Lists are used to store multiple values in one variable.

2. **Real World Use**
   Example:
   In machine learning datasets are stored as lists or arrays. You often calculate averages when analyzing data.

3. **Visual Explanation (optional later)**
   Example:
   ```python
   dataset = [5, 7, 10]
   mean = (5 + 7 + 10) / 3
   ```

## 7. “Why This Matters” Section
Every challenge must answer: "Why should I learn this?"

Example:
- Problem: calculate average
- Explanation: Data scientists calculate averages constantly.
- Examples: 
  - average salary
  - average temperature
  - average customer spend

## 8. Learning Mode vs Challenge Mode
Two modes:

**Learning Mode**
User sees:
- explanation
- hints
- step guidance

**Challenge Mode**
User sees:
- Just the problem (Like CodePro style)

## 9. AI Explanation Feature
After solving a problem, user can click: "Explain my code"

AI explains the user's code line-by-line.

Example:
```python
for num in numbers:
```
Explanation: This loop goes through each number in the dataset.

## 10. Problem Generator (Later Feature)
Instead of static problems, the system can generate variations.

Example:
Original: calculate average of numbers
Generated:
- calculate average salary
- calculate average temperature
- calculate average exam score

This increases practice volume without writing thousands of problems manually.

## 11. Updated MVP Feature List
**Must Have**
- Auth (Supabase)
- Code editor
- Python execution
- Problem system
  - unlimited solving
  - feedback buttons
  - explanation pages
  - hints
- progress tracking

**Nice to Have**
- AI hints
- code explanation
- difficulty adaptation

## 12. Example Beginner Learning Path
- Level 1: `print("Hello Data")`
- Level 2: store number in variable
- Level 3: add two numbers
- Level 5: create a list of numbers
- Level 8: calculate sum of list
- Level 12: calculate average of dataset
- Level 20: find highest value
- Level 30: basic correlation concept

## 13. Ideal Learning Outcome
After ~50–60 problems the user should understand:
- Python basics
- lists
- loops
- dictionaries
- dataset thinking
- averages
- simple statistics
- ML intuition

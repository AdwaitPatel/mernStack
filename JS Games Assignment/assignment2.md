# Interactive JavaScript Games – Design & Concept Document

This document outlines eight interactive JavaScript games designed to teach core programming concepts through engaging gameplay.  
Each game targets specific learning outcomes while providing an entertaining experience.

---

## 🎮 Game 1: Gun–Water–Snake (Two Player Game)

### Objective  
Two secret agents play a survival challenge, each choosing **Gun**, **Water**, or **Snake**.

### Rules
- Gun kills Snake 🔫🐍  
- Snake drinks Water 🐍💧  
- Water douses Gun 💧🔫  

### Functional Flow
1. Both players select Gun / Water / Snake  
2. Compare choices  
3. Determine round winner  
4. Maintain scores for 10 rounds  
5. Declare final winner  

### JavaScript Concepts
Conditional logic, loops, DOM manipulation, random choice generation, OOP classes.

---

## ✊✋✌️ Game 2: Rock–Paper–Scissors (Two Player Game)

### Objective
Classic RPS played for **10 rounds**.

### Rules
- Rock breaks Scissors  
- Scissors cut Paper  
- Paper covers Rock  

### Functional Flow
1. Each player selects Rock / Paper / Scissors  
2. Compare choices  
3. Update score  
4. Display results after 10 rounds  

### JavaScript Concepts
Conditionals, random number generation, loops, DOM interaction, classes.

---

## 🔢 Game 3: Guess the Number

### Objective
The system picks a random number between **1 and 100**. Player gets **5 chances**.

### Feedback
- Too high → “Your guess is larger than the actual number.”  
- Too low → “Your guess is smaller than the actual number.”  
- Correct → “Congratulations! You guessed it right.”  
- After 5 wrong tries → “Game Over! The number was X.”  

### Functional Flow
1. Generate random number  
2. Player inputs guess  
3. Provide hints  
4. Stop after correct guess or 5 attempts  

### JavaScript Concepts
Randomization, conditionals, loops, events, state management.

---

## 🎯 Game 4: Odd or Even Game (Two Players)

### Objective
Both players choose numbers between **1–10**.

### Rules
- Sum even → Player 1 wins  
- Sum odd → Player 2 wins  

### Functional Flow
1. Read both player inputs  
2. Calculate sum  
3. Check odd/even  
4. Update score  
5. Repeat for 10 rounds  
6. Declare winner  

### JavaScript Concepts
Arithmetic, conditionals, loops, input validation.

---

## 🧠 Game 5: Math Duel (Two Players)

### Objective
Each round generates a random math question (e.g., “7 × 6”). Both players answer; fast and correct player wins.

### Functional Flow
1. Generate math expression (+, −, ×)  
2. Players enter answers  
3. Compare correctness (and speed if timed)  
4. Update score  
5. Continue for 10 rounds  
6. Display winner  

### JavaScript Concepts
Random question generation, timers, conditionals, DOM interaction.

---

## 🧪 Game 6: Color Match Challenge

### Objective
Display a color name (like **RED**) but styled in a different color (like blue).  
Player must click based on the **font color**, not the text.

### Functional Flow
1. Select color name + mismatched font color  
2. Display them  
3. Player selects button matching **font color**  
4. Award point  
5. Repeat for 10 rounds  
6. Show score  

### JavaScript Concepts
DOM styling, event listeners, randomization, reflex testing.

---

## 🔢 Game 7: Number Memory Game

### Objective
Show a random **4-digit number** for **3 seconds**, then hide it. Player must recall it.

### Functional Flow
1. Display random 4-digit number  
2. Hide after timeout  
3. Player enters recalled number  
4. Compare and score  
5. Repeat for 5–10 rounds  

### JavaScript Concepts
setTimeout, random numbers, comparison logic, memory testing.

---

## 💡 Game 8: Freeze or Move (Reaction Game)

### Objective
Randomly display **“FREEZE”** or **“MOVE”**. Player must click only when MOVE appears.

### Rules
- Clicking MOVE → +1  
- Clicking FREEZE → −1  

### Functional Flow
1. Randomly choose FREEZE or MOVE  
2. Player reacts  
3. Score accordingly  
4. Repeat for 10 rounds  
5. Display results  

### JavaScript Concepts
Timing, random generation, event handling, reflex response.

---

# 📘 Summary of Learning Outcomes

| Game | Key Concepts | Skill Focus | Duration |
|------|--------------|-------------|----------|
| Gun–Water–Snake | OOP, Conditionals | Strategy | 10 Rounds |
| Rock–Paper–Scissors | Loops, DOM, Randomness | Decision Making | 10 Rounds |
| Guess the Number | Randomness, Conditions | Logical Thinking | 5 Chances |
| Odd or Even | Arithmetic, Conditionals | Probability Logic | 10 Rounds |
| Math Duel | Timing, Comparison | Math & Speed | 10 Rounds |
| Color Match | DOM, Events | Reflex | 10 Rounds |
| Number Memory | setTimeout, Comparison | Memory | 5–10 Rounds |
| Freeze or Move | Timing, Reaction | Reflex | 10 Rounds |
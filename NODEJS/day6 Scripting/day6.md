## varibles in script
## NOTE : DO NOT USE SPACES IN SCRIPT FILES WITH VARIABLES
- name="ADP"
- echo ${name}
- ${variable} and $variable both can be used
- echo is used to display the o/p
- read -p "Enter name:" name (read takes input from shell and -p is placeholder)
- read -sp "Password:" password (-s hides the password like bash style password typing)
- -s stand for silent mode
- read parameters are fixed so we can switch  -sp with -ps as it takes anything after p as the prompt
- use $((a+b)) to do maths inside

## Conditionals
- syntax of if else :-
if [ $age -ge 18 ]; then
echo You can vote
else
echo You cannnot vote
fi
- (here -ge is greater than or equal to)
- elif [ $age -eq 17 ]; then (this is how to use else if)
- gt(greater than), ge(greater and equals), lt(less than), le(less and equals), eq(equals) => only for numeric values
- == for string comparison

## LOOPS
- syntax :-
for i in 1 2 3 4 5; do
echo "number $i"
done

- for i in {0..100..2}; do
echo number $i
done
- prints numbers from 1 to 100 only even

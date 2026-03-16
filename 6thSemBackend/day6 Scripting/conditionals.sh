read -p "What is your age? : " age
read -p "Enter your  Country : " country

if [ $age -ge 18 ] && [ $country == "india" ]; then
echo You can vote
elif [ $age -eq 17 ]; then
echo Beta ek saal aur therr ja
else
echo You cannot vote
fi


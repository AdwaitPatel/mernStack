- echo "any content you want to write" >> file.txt (this will add the content to the file.txt)
- cat file.txt (this will show the contents of the file.txt)
## ls -l  
- where -(means it's a file) in the start/before of rwx-rx-r
- d (means dir) in the start
- 3 parts are owner(creater), group and others
- -rw-r--r-- or drwxr-xr-x (total 10 characters where - means have no access)
- read(r) has 4(100)
- write(w) has 2(010)
- execute(x) has 1(001)

- chmod 444 file.txt (will change the permissions to -r--r--r--)
- chmod u+x file.txt (here u(user/owner), g(group), o(owner) and rwx as usaual with +)
- chmod 000 file.txt (will ghave no permissions)

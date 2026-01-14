## users
- whoami (shows the current active user)
- sudo adduser username (creates a new user in linux)
- su username (switches between users)
- chmod u-r test.txt (removes the read permission from user/owner)
- find . -size -1k (shows files less than 1kb) (use +1k for greater than 1kb and 1k for eexact one kb)
- find . -mtime -1 (-modified within last 1  dday)

## pipe

- pipe sends output of first command as input to the second command
- ls | wc -l (counts the number of files/dirs)

## redirect (output of a command goes into a file)

- ls > log.txt (the o/p i.e all files goes to log.txt)

## Background Jobs  

- sleep 10 (makes terminal sleep for 10sec and also not accessible)
- sleep 10 & (& sends this to bg job and terminal can be accessed)
- bg (to see any bg jobs are running or not)

## Scripting

- writing commands inside a file and executing it
- nano file.sh (this create a shell script file and instantly opens up the nano editor)
- ./file.sh (to run the file)
- chmod u+x file.sh (to give execute permission to file.sh)

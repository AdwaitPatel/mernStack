## Find and grep  

- find is used to search if a file/dir exists
- grep used for seaching some contents inside a file
- grep "what to search" file.txt
- grep is case sensitive
- grep "hello" *.txt
- grep -i "hello" *.txt (make it case insensitive)
- grep -ir "hello" NODEJS/*.txt (r will recusively check all the files inside the folder NODEJS)
- grep -in "hello" *.txt (n will show the line  number)
- grep -rI "hello" NODEJS/ (I will l exclude searching all the binary files, pdfs, imgs etc)
- grep -E "(car|bike|truck)" *.txt (E is regular Expressions and () are used to group the words we need to search)
## find
- find works with name, size, time and permissions of a file
- syntax : find <where_to_search> <conditions>
- find . -name "day2.txt" (returns the file path if it exists)
- find "day2.txt"
- find day2.txt
- find the difference between the above three

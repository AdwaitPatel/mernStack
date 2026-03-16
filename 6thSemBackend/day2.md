## Creating and moving through folders  

- mkdir test sub folder (this will create three diff dirs)
- instead we can use :
- 1) camelCase -> testSubFolder
- 2) snake_case -> test_sub_folder
- relative path : cd test/test1
- rm -r level1 (here r will recursively delete all the subfolders)
- mkdir -p level1/level2/level3 (p stands for parent)
- cd .. (just moves one level up)
- cd - (just moves to previous working dir)
- cd ~ (moves to root dir)

## Hidden files  

- ls -a (will list all the hidden files)
- when hidden files are shown then ./(current dir) and ../(one dir down level)

## i(index) node ID
- every file has a id which can be used to link files(ex. 40587587 day1.md 40699520 day2.md)
- ls -l (shows permissions)
- ln file1.txt(source file) file2.txt(new file) (ln used for linking)
- it will be exactly like making a copy of a file

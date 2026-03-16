- git revert hashcodeOfCommit (undo the changes of a specific commit by creating a new commit that reverses those changes, without deleting commit history)
- git log --oneline (to get the commits and  their hashcodes)

## Merging
- git branch (to get current branch)
- git merge branchName (name of the branch we want to merge with current one, all content will be same in both branches after this)

## to create new branch
- git checkout -b branchName (it will create a new branch and switch to the new one)
- git branch branchName (creates a new branch but we'll be not be moving to the new one)

# to switch between branches 
- git switch branchName 
- git checkout branchName 

## NOTE : Don't checkout/switch branches without staging and commiting the changes

# Merge Conflicts

- when the same line content is changes in 2 or more branches then while merging these "merge conflicts arise"
- git rebase branchName 
- when conflict arises we have to manually dedecide which one to keep (MUST STAGE AND COMMIT AFTER RESOLVE)

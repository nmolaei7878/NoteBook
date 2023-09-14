

### Commit
- for each ```commit``` git create a ```SHA1``` as commit id with date, author name and content.
- each commit will get new ```SHA1```, even if you dont change any thing, date will change.

### HEAD
- is a way to git knows which branch you currently on and the next parent will be.
- when you change a branch ```HEAD``` will change to the current branch.

### Area
- Working Area: nothing will be save.
- Staging Area: git will know whats ready for the next commit. ```git add [filename]```
- Repository Area: files go to the repository. ```git commit -m 'commit message'```


### Git Stash
- is usefull while your on branch and have done some work and branch is not ready for commit, and you want to checkout to another branch to do some work. by stashing git will save the changes, and revert branch to the last commit.(like you dont change anything).

- git stash will save changes in the files, those files tracked allready, if you create a new file use ```git stash --include-untracked```, to stash them.


- stash changes: ```git stash```
- list changes: ```git stash list```
- apply stash changes: ```git stash apply```
- remove last stash: ```git stash drop```
- remove all stash: ```git stash clear```
- name stash with easy refrence: ```git stash save 'name'```

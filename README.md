
### General
- keep you`r local update with ```git fetch```, will download the changes but not change your local.
- ``pull`` will get changes and merge them to your local.
- if you fork a project to stay up to date from changes happening after you fork it, use to setup an`` upstream``.


### Commit
- for each ```commit``` git create a ```SHA1``` as commit id with date, author name and content.
- commit is a snapshot of staged changes.
- each commit will get new ```SHA1```, even if you dont change any thing, date will change.

- ```git commit --amend ``` is a easy quick way to add changes to the pervious commit.

### Squash
- squash your commits through interactive rebase or merge.
  - interactive rebase: ``git rebase -i HEAD~3``, this will create 1 one commit from HEAD to 3 last commit.
  - in editor ``pick`` the last commit (THE FIRST IN LIST).
  - ``squash`` the others.

- merge: checkout to the main branch.
-  ``git merge --squash feature/login``.
-  after that you have to create commit by your self.   

- normal ``merge`` will create a merge commit by it self, with ``merge --squash`` that will not the case, you have to create merge commit manaually.
### Branch
- is a new line of development with it`s own working/staging/repository area.

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

### Merge
- ```Fast-forward``` happening when you`r merging a child branch into the parent branch and parent dont have any additional commits from when you create child branch.

- crucial thing in ``git-workflow`` is to keep up to date our `feature` branch with the ``main`` branch. and we have 3 options.

- __Merge__ : create a __new merge commit__ on the feature branch with last commit from __main branch__ and last commit from __feature branch__.

- __Rebase__ : changes the __parent__ of our __feature branch__, from what commit it is to the __last commit__ of __parent branch__. on the feature branch write ```git rebase [main branch]```



### Reset
- default is set to ``--miexed`` if you use it without flag.
- __Soft Reset__ :  ``` git reset --soft [commit-id]``` , just change the HEAD to the commit id.
- __mixed Reset__ : ``` git reset --mixed [commit-id]```, change the HEAD to the commit id, and copy HEAD to the staging area.

- __Hard Reset__ : ``` git reset --hard [commit-id]```, change the HEAD to the commit id, copy HEAD to the staging area and working area.


### Pull Request
- keep commit history clean and neat.(__squash__)
- run project tests code.(__to NOT breaking something__)
- pull in upstream changes.(__Rebase__)
- send PR.

## Linux - Ubuntu
- linux is about file systems, like finder in macos, you`r always in some where of fileSystem.
- everything is running is ``process``, they have an `pid`, and you can ```kill``` them. ```ps kill -9 [pid]```
### bash | shell
- bash is programming language.
- ``bashrc`` file will run every time open new session.
- ``bash_profile`` file will run every time you login.
- check where you are with ```pwd```
- ``zsh`` or ``terminal`` is emulator that run ``bash`` inside of it.
- `bash` and `shell` are the same.
- create hidden files using ``.`` at the start.
- ```CTRL + SHIFT + v``` to paste.
- output all running process with ```ps aux```
- read files using ```cat```
- write to files using ```[what to write] > [filename]```
- find out your ip address using ```ifconfig``` top of (Etherenet) is your ip.
- combine ```ifconfig grep | 'inet'``` to see lower result.
- download files using ```wget``` or ```curl```
- ```!!``` bang operator will run the pervious command
### Flags
- use ``-a`` to see hidden files 
- use ```rm -rf``` to forcely delete files
- extract archived files using ```tar -xzf [file name]```

### Signals
- use ```CTRL + C``` to signal the program to stop and if did`nt work use ```CTRL + D``` to quit entire program.

### WildCards
- ```*``` to match all charcters.
- ```?``` to match 1 charcters.

### SSH
- stands for __secure shell__ is network communication protocol.
- you can talk to other computers using ```ssh```.
- create ```ssh-key``` using ```ssh-kegen -t rsa``` that will provide you a __private key__ and __public key__

### Curl
- download file and write it to file using ```curl -o [filename] [url]```
- you can send request with ``HTTP`` verbs like ```curl -X [HTTP VERB] [url]```
- add data to your curl request like ```curl -X POST -d "this is the post body" [url]```
- by it self curl don`t allow to redirect, if you want to use ```curl -L [url]```
- add header to your requests like ```curl -H "Autorization: Bearer 12345" [url]```

### Editors
- there are usually 2 editors in linux ````vim | nano```

### Package-Management
- ```apt``` is default package-manager of ubuntu.
- ```apt-get``` is old one, ```apt``` is new one. no diffrence.
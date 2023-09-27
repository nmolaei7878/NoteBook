
- run a docker image and keep it interactive `docker run -it [image-name]`, other wise it just run it and close it.
- run a docker image and keep it interactive and give it name to terminate it with the given name`docker run -it --name yourname [image-name]`, other wise it just run it and close it.
- terminate the the docker image `docker kill [name] or [id]` and after that to clear logs `docker rm [name] or [id]`
- list the running containers `docker ps`
- run a docker container in the background `docker run -dit [image-name]`
- build a container from your dockerfile with a name `docker build --tag or -t [name] [address to your docker file]`
- if you want to access a node app container that you build, run it using `docker run -it --publish 3000:3000`

- add version to your images like `docker build -t [name]:1 `


- to check how much each step take size `docker history --human --format "{{.CreatedBy}}: {{.Size}}" [image-name]`
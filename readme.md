# Digital home
Home services platform (Arm7/64V)


## Docker guide
Depending on your hostmachine architecture use the following command.

```shell
$ docker-compose up -f docker/compose/x64/arm.yml --p digital-home --build
```

or for raspberry 3/3B+ 

```shell
$ docker-compose up -f docker/compose/docker-compose.yml --p digital-home --build
```

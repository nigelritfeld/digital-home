# Digital Home
A platform with microservices that allows you to create a home dashboard.
Including:
- Webserver (nginx) + interface
- Local database server with interface (PhpMyAdmin)
- Control API (to send notifications and more)
- Raspotify (To stream music to device via spotify app)


## Docker guide
Depending on your host machine architecture use the following command.
Navigate to the '/docker/compose' folder
```shell
$ docker-compose up --build
```

For raspberry 3/3B+ 

```shell
$ docker-compose up arm.yml  --build
```

Now navigate to http://localhost/

### Changing default webserver port
** If you have another process running on port 80 (for example XAMPP) change the port in the used compose file. **

```dockerfile
nginx:
    image: nginx:latest
    restart: always
    ports:
    # Change port "YOUR_PORT:80"
      - "80:80" 
```

Yours sincerely,

Nigel Ritfeld.

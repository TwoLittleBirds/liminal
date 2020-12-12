Production build
docker build -f dockerfile.prod -t liminal-image:latest 

Production run
docker run -it -p 80:80 --rm liminal-image:latest


Dev run
docker-compose up --build
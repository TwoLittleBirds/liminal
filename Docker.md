Production build = docker build -f Dockerfile.prod -t liminal-image:latest 
Production run = docker run -it -p 80:80 --rm lilinal-image:latest


Dev run = docker-compose up --build
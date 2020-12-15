Production build
docker build -f dockerfile.prod -t liminal-image:latest 

Production run
docker run -it -p 80:80 --rm liminal-image:latest


Dev run
docker-compose up --build

Update Azure App Service container
az webapp config container set --name liminal-d --resource-group liminal-d-resourcegroup --docker-registry-server-user 6959 
--docker-registry-server-password <password> --docker-custom-image-name 6959/liminal:<tag>


Test circuit breaker
node ./src/Components/CircuitBreaker.mock.js
# Step 1: Use the Nginx image (very lightweight)
FROM nginx:alpine

# Step 2: Copy your website files into the Nginx directory
# This assumes your index.html is in the root folder
COPY . /usr/share/nginx/html

# Step 3: Expose port 80 (standard for web traffic)
EXPOSE 80

# Step 4: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
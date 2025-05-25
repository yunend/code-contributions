# 使用官方Nginx镜像作为基础
FROM nginx:alpine

# 设置工作目录
WORKDIR /usr/share/nginx/html

# 复制项目文件到容器中
COPY . .

# 暴露80端口
EXPOSE 80

# 启动Nginx服务
CMD ["nginx", "-g", "daemon off;"]

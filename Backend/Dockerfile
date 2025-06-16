# Backend - Flask
FROM python:3.10-slim

WORKDIR /app

# Copy the requirements file first
COPY requirements.txt .  
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the backend source code
COPY . /app  

CMD ["python", "server.py"]

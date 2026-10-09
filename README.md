# OpsMate Docker Project

## Containerizing and Deploying OpsMate Service Using Docker and AWS

### Project Overview

This project demonstrates how to containerize the OpsMate application
using Docker and deploy it to AWS using Amazon ECR, Amazon ECS,
and AWS Fargate.

### Technologies Used

- Ubuntu Linux
- Docker
- Docker Compose
- Node.js
- Amazon ECR
- Amazon ECS
- AWS Fargate
- Amazon CloudWatch

### Project Architecture

Developer → Dockerfile → Docker Image → Amazon ECR →
ECS Task Definition → ECS Service → AWS Fargate → OpsMate Application

### Project Structure

- `app/` — OpsMate application source code
- `config/` — Example environment configuration
- `scripts/` — Docker automation scripts
- `screenshots/` — Project implementation screenshots
- `documentation/` — Architecture diagram and PDF report

### Build the Docker Image

```bash
docker build -t opsmate:1.0 .

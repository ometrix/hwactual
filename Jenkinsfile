

pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim'
            args '-p 3000:3000'
            args  '-v /app:/app'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Test"'
            }
        }
        stage('Deliver') {
            steps {
                sh 'cd /app'
                sh 'apt install git -y'
                sh 'git pull'
                sh 'npm run build'
            }
        }
    }
}
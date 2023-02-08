

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
        stage('Update File') {
            steps {
                agent{
                    docker {
                        image 'git:latest'
                        args  '-v /app:/app'
                    }
                }
                sh 'cd /app'
                sh 'git pull'
            }
        }
        stage('Deliver') {
            steps {
                sh 'cd /app'
                sh 'npm run build'
            }
        }
    }
}
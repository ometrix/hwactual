pipeline {
    stages {
        agent {
            docker {
                image 'node:lts-bullseye-slim'
                args '-p 3000:3000'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
        agent { none }
            steps {
                sh 'echo "Test"'
            }
        }
        stage('Update File') {
            agent{
                docker {
                    image 'bitnami/git:latest'
                    args  '-v /app:/app'
                }
            }
            steps {
                sh 'cd /app'
                sh 'git pull'
            }
        }
        stage('Deliver') {
            agent {
                docker {
                    image 'node:lts-bullseye-slim'
                    args '-p 3000:3000'
                    args  '-v /app:/app'
                }
            }
            steps {
                sh 'cd /app'
                sh 'npm run build'
            }
        }
    }
}
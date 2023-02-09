pipeline {
    agent none
    stages {
        stage('Test') {
            agent {
                docker {
                    image 'node:lts-bullseye-slim'
                    args '-p 3000:3000'
                }
            }
            steps {
//                 sh 'npm install'
//                 sh 'npm run build'
                   sh 'ls'
            }
        }
        stage('Update File') {
            agent{
                docker {
                    image 'bitnami/git:latest'
                    args '-v /opt/hwactual:/var/jenkins_home/workspace/hwactual.net/app'
                }
            }
            steps {
                sh 'ls && pwd && ls app && ls blog'
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
                sh 'cd ./app'
                sh 'npm run build'
            }
        }
    }
}
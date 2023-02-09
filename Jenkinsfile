pipeline {
    agent any
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
            agent {
                docker { image 'bitnami/git:latest'}
            }
            steps {
                dir('app') {
                    sh 'ls && pwd && ls app'
                }
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
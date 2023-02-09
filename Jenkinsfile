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
            steps {
                dir('app') {
                    git url: 'https://github.com/ometrix/hwactual.git'
                    sh 'ls'
                {
            }
        }
        stage('Deliver') {
            steps {
                dir('app')
                    sh 'npm run build'
            }
        }
    }
}
pipeline {
    agent {
       docker {
           image 'node:lts-bullseye-slim'
           args '-p 3000:3000'
       }
    }
    stages {
        stage('Test') {
            steps {
                 sh 'npm install'
                 sh 'npm run build'
            }
        }
//         stage('Update File') {
//             steps {
//                 dir('app') {
//                     git url: 'https://github.com/ometrix/hwactual.git'
//                 {
//             }
//         }
        stage('Deliver') {
            steps {
                sh 'npm run serve & sleep 1'
            }
        }
    }
}
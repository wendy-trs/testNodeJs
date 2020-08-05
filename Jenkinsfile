pipeline {
    
  agent {
    docker {
      image 'node:10.10.0-alpine'
      args '-p 3000:3000'
    }
  }
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/wendy-trs/testNodeJs.git'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test -- --exit'
      }
    }      
  }
}

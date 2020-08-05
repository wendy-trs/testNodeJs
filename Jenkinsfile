pipeline {
    agent any
    
    tools {
      nodejs "node"
    }
   
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/wendy-trs/testNodeJs.git'
      }
    }
        
    stage('Install dependencies/Build') {
      steps {
        sh "apk add nodejs"        
        sh "echo $PATH"
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm run test -- --exit'
      }
    }      
  }
}

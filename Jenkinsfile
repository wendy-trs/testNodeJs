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
        sh 'npm i -g mocha'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test -- --exit'
      }
    }      
  }
}

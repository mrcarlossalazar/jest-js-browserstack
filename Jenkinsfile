pipeline {
  agent any
     environment {
        BROWSERSTACK_USERNAME = credentials('carlos_W2tnRJ')
        BROWSERSTACK_ACCESS_KEY = credentials('9exVajxa7vbyyK8e6yqH')
        BROWSERSTACK_BUILD_NAME = "test"
    }
  stages {
      stage('setup') {
        steps {
            browserstack(credentialsId: 'a9e45b42-04fe-4fb6-bd2a-b8cd363826bf') {
             
            }
        }
     
      }
    }
  }

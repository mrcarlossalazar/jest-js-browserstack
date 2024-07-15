pipeline {
   agent any
   stages {
      stage('setup') {
         steps {
            browserstack(credentialsId: '93657e89-abef-44ce-8b1d-a1cee0750832') {
               echo "hello....this is a test!"
                sh 'npm install'
                sh 'browserstack-node-sdk jest src/shopping-cart.test.js'
            }
             browserStackReportPublisher 'automate'
         }
      }
    }
  }


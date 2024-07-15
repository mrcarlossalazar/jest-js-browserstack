pipeline {
  agent any
   tools {nodejs "node"}  
  stages {
      stage('setup') {
        steps {
            browserstack(credentialsId: 'a9e45b42-04fe-4fb6-bd2a-b8cd363826bf'  localConfig: [localOptions: '--verbose', localPath: 'C:/browserstack/BrowserStackLocal.exe')]
             {sh 'npm install'
               sh 'npm run shopping-cart-test'}
            }
            browserStackReportPublisher 'automate'
        }
     
      }
    }
  

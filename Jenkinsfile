pipeline {
  agent any
     environment {
        BROWSERSTACK_USERNAME = credentials('carlos_W2tnRJ')
        BROWSERSTACK_ACCESS_KEY = credentials('9exVajxa7vbyyK8e6yqH')
    }
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/mrcarlossalazar/jest-js-browserstack.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install dependencies 
                sh 'npm install'
            }
        }
        stage('Print Environment Variables') {
            steps {
                script {
                    echo "BROWSERSTACK_USERNAME=${env.BROWSERSTACK_USERNAME}"
                    echo "BROWSERSTACK_ACCESS_KEY=${env.BROWSERSTACK_ACCESS_KEY}"
                    echo "BROWSERSTACK_BUILD_NAME=${env.BROWSERSTACK_BUILD_NAME}"
                }
            }
        }
        stage('Run BrowserStack Tests') {
            steps {
                script {
                    def browserStackCredentialsId = 'a9e45b42-04fe-4fb6-bd2a-b8cd363826bf'
                    browserstack(credentialsId: browserStackCredentialsId) {
                        sh """
                            echo "Running tests with build name: ${BROWSERSTACK_BUILD_NAME}"
                            export BROWSERSTACK_BUILD_NAME=${BROWSERSTACK_BUILD_NAME}
                            node shopping-cart.test.js
                        """
                    }
                }
            }
        }
  }

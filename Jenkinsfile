pipeline {
    agent any
    environment {
         BROWSERSTACK_USERNAME = credentials('carlos_W2tnRJ')
        BROWSERSTACK_ACCESS_KEY = credentials('9exVajxa7vbyyK8e6yqH')
        BROWSERSTACK_BUILD_NAME = "jenkins-Test-${env.BUILD_NUMBER}"
    }
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/mrcarlossalazar/jest-js-browserstack.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests on BrowserStack') {
            steps {
                script {
                    def browserStackCredentialsId = 'a9e45b42-04fe-4fb6-bd2a-b8cd363826bf'
                    browserstack(credentialsId: browserStackCredentialsId) {
                        sh """
                            export BROWSERSTACK_BUILD_NAME=${BROWSERSTACK_BUILD_NAME}
                            npm run shopping-cart-test
                        """
                    }
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: '**/browserstack-reports/*', allowEmptyArchive: true
        }
        cleanup {
            cleanWs()
        }
    }
}

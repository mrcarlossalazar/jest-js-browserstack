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
                sh 'npm install'
            }
        }
        stage('Run Tests on BrowserStack') {
            steps {
                script {
                    def browserStackCredentialsId = '93657e89-abef-44ce-8b1d-a1cee0750832'
                    browserstack(credentialsId: browserStackCredentialsId) {
                        sh 'npm run shopping-cart-test'
                    }
                }
            }
        }
        stage('Generate Report') {
            steps {
                script {
                    // Add any steps required to generate and archive the test report
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
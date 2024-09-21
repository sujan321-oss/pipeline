pipeline {  // lowercase 'pipeline'

    agent {
        docker { image 'node:16-alpine' }  // Using a Node.js Docker container
    }

    stages {
        stage('Build') {  // Corrected stage syntax
            steps {
                sh 'node --version'  // Executes Node.js version command
            }
        }
    }

    post {
        success {
            echo 'Successfully executed the build step'  // Fixed the typo and removed 'sh'
        }
        failure {
            echo 'Failed to execute'  // Removed 'sh' for a simple echo
        }
    }

}

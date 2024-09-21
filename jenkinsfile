
Pipeline{

    agent{
        docker { image 'node:16-alpine' } 
    }

    stages{
        stage 'Build' {
            steps{
                  sh 'node --version'
            }

        }
    }

    post{
        success{
            sh 'echo "sucessfully executes the dsd"'
        }
        failure{
            sh 'echo "failed to execute"'
        }
    }

}
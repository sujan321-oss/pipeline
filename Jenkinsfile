pipeline{
    agent any
  stages {
    stage('clone and pull the github repository') {
        agent any
        steps {
            git branch: 'main', url: 'https://github.com/sujan321-oss/pipeline'
        }
        
       }

    stage("build the docker file"){
        agent any
        steps {
            dir('jenkinspipeline/application') {
                sh 'docker build -t nodeapp .'
            }
       
        }
    }

    stage("run the docker file"){
       agent any

        steps {
          sh 'docker run -d -p 3000:3000 nodeapp '
          sh 'echo "docker file is running"'
        }

    }
    
  }

  post {
  
        success {
            sh 'echo "sucessful"'
        }
        failure {
      
            sh 'echo "failed"'
        }
    }
}
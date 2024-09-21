pipeline{
    agent any
  stages {
    stage('Build in localmachine') {
        agent any
        steps {
            sh 'git clone https://github.com/sujan321-oss/pipeline.git'
        }
        
       }

    stage("build the docker file"){
        agent any
        steps {
            dir('pipeline/application') {
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
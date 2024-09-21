pipeline{
    agent none
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
        agent {
            docker {
                 image 'nodeapp' 
                 args '-p 3000:3000'
            }
        }

        steps {
          sh 'echo "docker file is running"'
        }

    }

 
    
  }

  post {
  
        success {
            agent any
            sh 'echo "sucessful"'
        }
        failure {
            agent any
            sh 'echo "failed"'
        }
    }
}
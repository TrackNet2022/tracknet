pipeline {
  agent {
    docker { image 'node:lts-alpine3.14' }
  }
  stages {
    stage('Install') {
      steps { sh 'npm install' }
    }


    stage('Build') {
      steps { sh 'npm run build' }
    }

    stage('Deploy') {
      steps {

        sshagent (credentials: ['tracknet-server']) {          
            sh 'ssh -o StrictHostKeyChecking=no -l g6ander00 34.76.211.128'
        }

      }
    }
  }
}

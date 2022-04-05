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
        sh 'echo "deploy xd"'
      }
    }
  }
}

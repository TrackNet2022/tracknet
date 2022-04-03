pipeline {
  agent {
    docker { image 'node:latest' }
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
          sh 'rm ../../apps/*'
          sh 'cp ./dist/apps/* ../../apps/'
      }
      }
  }
}

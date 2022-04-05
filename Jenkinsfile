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
        sh 'ssh g6ander00@34.76.211.128 rm -rf /var/www/html/*'
        sh 'scp -r dist g6ander00@34.76.211.128:/var/www/html/dist'
      }
    }
  }
}

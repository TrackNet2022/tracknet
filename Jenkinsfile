node {


  stage('Install') {
     git branch: 'main', url: 'git@github.com:TrackNet2022/tracknet.git'
  }


  stage('Install') {
      sh "npm install"
  }

  stage('Build') {
      sh "npm run build --prod"
  }

}

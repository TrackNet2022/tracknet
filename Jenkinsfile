node {
    stage('Checkout SCM') {
        git branch: 'main', url: 'git@github.com:tracknet2022/tracknet.git'
    }

    stage('Install') {
        sh "npm install"
    }


    stage("Build") {
        sh "npm run build --prod"
    }
    
    stage("Deploy") {
        sh "rm /var/www/html/* -R"
        sh "cp -R /var/lib/jenkins/workspace/tracknet/dist/tracknet/*  /var/www/html/"
        
    }
}
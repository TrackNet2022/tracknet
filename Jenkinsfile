node {
    stage('Checkout SCM') {
        git branch: 'main', url: 'https://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@github.com/TrackNet2022/tracknet.git'
        sh "git pull origin main"
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
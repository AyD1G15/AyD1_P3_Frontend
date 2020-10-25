pipeline {
  agent {
    docker {
      image 'docker pull avatsaev/angular-chrome-headless:alpine-node-12'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'npm install'
      }
    }

    stage('unit testing') {
      steps {
        sh 'npm run test:ci'
      }
    }

  }
  environment {
    Home = '.'
  }
}
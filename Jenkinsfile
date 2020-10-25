pipeline {
  agent {
    docker {
      image 'avatsaev/angular-chrome-headless:alpine-node-12'
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
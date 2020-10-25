pipeline {
  agent {
    docker {
      image 'zenika/alpine-chrome:86-with-node-12'
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
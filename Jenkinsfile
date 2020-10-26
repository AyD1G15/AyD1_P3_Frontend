pipeline {
  agent {
    docker {
      image 'efgiese/efgiese-angular-chrome-headless'
    }

  }
  stages {
    stage('build') {
      steps {
        sh '''npm prune
npm install'''
      }
    }

    stage('unit testing') {
      steps {
        sh './node_modules/@angular/cli/bin/ng test --browsers ChromeHeadless --watch=false --code-coverage --source-map'
      }
    }

    stage('e2e testing') {
      steps {
        sh './node_modules/@angular/cli/bin/ng e2e'
      }
    }

  }
  environment {
    Home = '.'
  }
}
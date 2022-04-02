

pipeline{
    agent any
    
    stages {
        stage('test'){
            steps {
                dir("backend/administrative"){
                    sh 'npm install'
                    sh 'npm run test'
                }
                dir("backend/autenticacion"){
                    sh 'npm run test'
                }
            }
        }
        stage('Build') {  
            steps{
                    sh 'sudo docker login -u "bitochepe" -p "a596b343-ee91-47c8-a5c3-f49d76f8982c"'
                    sh 'sudo docker-compose build'
                    sh 'sudo docker-compose push'
                }
            }
        stage('deploy'){
            steps{
                sh 'sudo ansible-playbook deploy-playbook.yml'
            }   
        }
    }
}
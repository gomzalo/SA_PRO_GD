

pipeline{
    agent any
    tools {nodejs '17.8.0'}
    stages {
        stage('test'){
            steps {
                dir("backend/administrative"){
                    sh 'npm install'
                    sh 'npm run test'
                }
                dir("backend/autenticacion"){
                    sh 'npm install'
                    sh 'npm run test'
                }
                dir("backend/client"){
                    sh 'npm install'
                    sh 'npm run test'
                }
                dir("backend/competicion"){
                    sh 'npm install'
                    sh 'npm run test'
                }
                dir("backend/empleado"){
                    sh 'npm install'
                    sh 'npm run test'
                }
                dir("backend/equipo"){
                    sh 'npm install'
                    sh 'npm run test'
                }
                dir("backend/estadio"){
                    sh 'npm install'
                    sh 'npm run test'
                }
                dir("backend/jugador"){
                    sh 'npm install'
                    sh 'npm run test'
                }
                dir("backend/noticia"){
                    sh 'npm install'
                    sh 'npm run test'
                }
                dir("backend/pais"){
                    sh 'npm install'
                    sh 'npm run test'
                }
                dir("backend/tecnico"){
                    sh 'npm install'
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
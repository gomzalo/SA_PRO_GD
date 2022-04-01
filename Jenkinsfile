def administrative = false
def auth = false
def cliente = false
def comp = false
def empleado = false
def equipo = false
def estadio = false
def jugador = false
def noticia = false
def pais = false
def partido = false
def prediccion = false
def tecnico = false

pipeline{
    agent any
    
    stages {
        stage('test'){
            steps {
                script {
                    sh 'echo "Ejecutando tests"'
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
                dir("ansible"){
                    sh 'ansible-playbook deploy-playbook.yml'
                }
            }   
        }
    }
}
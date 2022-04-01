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
        stage('Setup') {
            steps {
                script {
                            def changeLogSets = currentBuild.changeSets
                            for (int i = 0; i < changeLogSets.size(); i++) {
                                def entries = changeLogSets[i].items
                                for (int j = 0; j < entries.length; j++) {
                                    def entry = entries[j]
                                    def files = new ArrayList(entry.affectedFiles)
                                    for (int k = 0; k < files.size(); k++) {
                                        def file = files[k]
                                        if(file.path.contains("administrative")) {
                                            administrative = true
                                        }
                                        else if(file.path.contains("autenticacion")) {
                                            auth = true
                                        }
                                        else if(file.path.contains("client")) {
                                            cliente = true
                                        }
                                        else if(file.path.contains("competicion")) {
                                            comp = true
                                        }
                                        else if(file.path.contains("empleado")) {
                                            empleado = true
                                        }
                                        else if(file.path.contains("equipo")) {
                                            equipo = true
                                        }
                                        else if(file.path.contains("estadio")) {
                                            equipo = true
                                        }
                                        else if(file.path.contains("jugador")) {
                                            jugador = true
                                        }
                                        else if(file.path.contains("noticia")) {
                                            noticia = true
                                        }
                                        else if(file.path.contains("pais")) {
                                            pais = true
                                        }
                                        else if(file.path.contains("partido")) {
                                            partido = true
                                        }
                                        else if(file.path.contains("prediccion")) {
                                            prediccion = true
                                        }
                                        else if(file.path.contains("tecnico")) {
                                            tecnico = true
                                        }
                                    }
                                }
                            }
                        } 
                    
                sh 'echo "Banderas creadas"'
            }
        }
        stage('test'){
            steps {
                script {
                    sh 'echo "Ejecutando tests"'
                }
            }
        }
        stage('Build') {
            stages{
                stage("build administrative"){
                    when{ expression { return administrative } }
                    steps{
                        dir("backend/administrative"){
                            sh 'docker login -u bitochepe -p a596b343-ee91-47c8-a5c3-f49d76f8982c'
                            sh 'docker build -t bitochepe/administrative-sa'
                            sh 'docker push bitochepe/administrative-sa'
                        }
                    }
                }
                stage("build auth"){
                    when{ expression { return auth } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "Hubo cambios en auth"'
                        }
                    }
                }
                stage("build cliente"){
                    when{ expression { return cliente } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "Hubo cambios en cliente"'
                        }
                    }
                }
                stage("build competicion"){
                    when{ expression { return comp } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "Hubo cambios en competicion"'
                        }
                    }
                }
                stage("build empleado"){
                    when{ expression { return empleado } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "Hubo cambios en empleado"'
                        }
                    }
                }
                stage("build equipo"){
                    when{ expression { return equipo } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "Hubo cambios en equipo"'
                        }
                    }
                }
                stage("build estadio"){
                    when{ expression { return estadio } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "Hubo cambios en estadio"'
                        }
                    }
                }
                stage("build jugador"){
                    when{ expression { return jugador } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "Hubo cambios en jugador"'
                        }
                    }
                }
                stage("build noticia"){
                    when{ expression { return noticia } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "Hubo cambios en noticia"'
                        }
                    }
                }
                stage("build pais"){
                    when{ expression { return pais } }                   
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "Hubo cambios en pais"'
                        }
                    }
                }
                stage("build partido"){
                    when{ expression { return partido } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "Hubo cambios en partido"'
                        }
                    }
                }
                stage("build prediccion"){
                    when{ expression { return prediccion } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "Hubo cambios en prediccion"'
                        }
                    }
                }
                stage("build tecnico"){
                    when{ expression { return tecnico } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "Hubo cambios en tecnico"'
                        }
                    }
                }
            }
        }
        stage('deploy'){
            stages{
                stage("deploy administrative"){
                    when{ expression { return administrative } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "deploy administrador"'
                        }
                    }
                }
                stage("deploy auth"){
                    when{ expression { return auth } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "deploy auth"'
                        }
                    }
                }
                stage("deploy cliente"){
                    when{ expression { return cliente } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "deploy cliente"'
                        }
                    }
                }
                stage("deploy competicion"){
                    when{ expression { return comp } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "deploy competicion"'
                        }
                    }
                }
                stage("deploy empleado"){
                    when{ expression { return empleado } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "deploy empleado"'
                        }
                    }
                }
                stage("deploy equipo"){
                    when{ expression { return equipo } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "deploy equipo"'
                        }
                    }
                }
                stage("deploy estadio"){
                    when{ expression { return estadio } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "deploy estadio"'
                        }
                    }
                }
                stage("deploy jugador"){
                    when{ expression { return jugador } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "deploy jugador"'
                        }
                    }
                }
                stage("deploy noticia"){
                    when{ expression { return noticia } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "deploy noticia"'
                        }
                    }
                }
                stage("deploy pais"){
                    when{ expression { return pais } }                   
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "deploy pais"'
                        }
                    }
                }
                stage("deploy partido"){
                    when{ expression { return partido } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "deploy partido"'
                        }
                    }
                }
                stage("deploy prediccion"){
                    when{ expression { return prediccion } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "deploy prediccion"'
                        }
                    }
                }
                stage("deploy tecnico"){
                    when{ expression { return tecnico } }
                    steps{
                        dir("SoccerStats"){
                            sh 'echo "deploy tecnico"'
                        }
                    }
                }
            }
        }
    }
}
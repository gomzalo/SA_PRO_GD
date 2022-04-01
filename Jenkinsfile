
pipeline{
    agent any
    
    stages {
        
        stage("build client"){
            when{ expression {
                    def changeLogSets = currentBuild.changeSets
                    for (int i = 0; i < changeLogSets.size(); i++) {
                        def entries = changeLogSets[i].items
                        for (int j = 0; j < entries.length; j++) {
                            def entry = entries[j]
                            def files = new ArrayList(entry.affectedFiles)
                            for (int k = 0; k < files.size(); k++) {
                                def file = files[k]
                                if(file.path.contains("client")){
                                   return true
                                }
                            }
                            return false
                        }
                    }
                } 
            }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en cliente"'
                }
            }
        }
        stage("build equipo"){
            when{ expression {
                    def changeLogSets = currentBuild.changeSets
                    for (int i = 0; i < changeLogSets.size(); i++) {
                        def entries = changeLogSets[i].items
                        for (int j = 0; j < entries.length; j++) {
                            def entry = entries[j]
                            def files = new ArrayList(entry.affectedFiles)
                            for (int k = 0; k < files.size(); k++) {
                                def file = files[k]
                                if(file.path.contains("equipo")){
                                   return true
                                }
                            }
                            return false
                        }
                    }
                } 
            }
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en equipo"'
                }
            }
        }
        stage("build partido"){
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en partido"'
                }
            }
        }
        stage("build competencia"){
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en competencia"'
                }
            }
        }
        stage("build estadio"){
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en estadio"'
                }
            }
        }
        stage("build director"){
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en director"'
                }
            }
        }
        stage("build jugador"){
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en jugador"'
                }
            }
        }
        stage("build noticia"){
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en noticia"'
                }
            }
        }
        stage("build prediccion"){
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en prediccion"'
                }
            }
        }
        stage("build autenticacion"){
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en autenticacion"'
                }
            }
        }
        stage("build administrador"){
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en administrador"'
                }
            }
        }
        stage("build empleado"){
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en empleado"'
                }
            }
        }
        stage("build pais"){
            steps{
                dir("SoccerStats"){
                    sh 'echo "Hubo cambios en pais"'
                }
            }
        }

    }
}
